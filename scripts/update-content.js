const fs = require('fs');
const path = require('path');

const prodInfo = JSON.parse(fs.readFileSync(path.join(__dirname, '../prod_info.json'), 'utf-8'));
const hardwarePath = path.join(__dirname, '../lib/data/hardware.ts');
const hardwareContent = fs.readFileSync(hardwarePath, 'utf-8');

// Extract the array from the TS file
const match = hardwareContent.match(/export const hardwareData: HardwareItem\[\] = (\[[\s\S]*\]);/);
if (!match) { console.error('Could not parse hardware.ts'); process.exit(1); }
const hardwareData = JSON.parse(match[1]);

// Build a lookup from prod_info by slug
const infoBySlug = {};
prodInfo.forEach(item => {
  infoBySlug[item.slug] = item;
});

// Build a lookup from prod_info by normalized name
const infoByName = {};
prodInfo.forEach(item => {
  infoByName[item.name.toLowerCase().trim()] = item;
});

// Normalize: replace Cyrillic lookalikes with Latin, then clean
const cyrToLatin = { 'А':'A','В':'B','С':'C','Е':'E','К':'K','М':'M','Н':'H','О':'O','Р':'P','Т':'T','Х':'X','а':'a','в':'b','с':'c','е':'e','к':'k','м':'m','н':'h','о':'o','р':'p','т':'t','х':'x' };
const normalize = (s) => {
  let out = '';
  for (const ch of s) { out += cyrToLatin[ch] || ch; }
  return out.replace(/[^a-z0-9]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').toLowerCase();
};

let matched = 0;
let unmatched = [];

// Build normalized slug lookup
const infoByNormSlug = {};
prodInfo.forEach(item => {
  infoByNormSlug[normalize(item.slug)] = item;
});
// Manual overrides for stubborn Cyrillic/spacing mismatches
const manualMap = {
  'daikin-daikin-altherma-3-r-f-hvx-e3v-e6v-e9w-erga-ev-h-': 'daikin-altherma-3-r-f-ehvx-e3v-e6v-e9w-erga-ev-h',
  'daikin-daikin-altherma-3-h-ht-f-tvh-e6v-e9w-epra14-18dv3-w1': 'daikin-altherma-3-h-ht-f-etvh-e6v-e9w-epra14-18dv3-w1',
  'daikin-daikin-altherma-3-h-mt-f-tvh12e6v-e9w-epra08-12ev3-w1': 'daikin-altherma-3-h-mt-f-etvh12e6v-e9w-epra08-12ev3-w1',
  'midea-midea-solstice-white-black-series-': 'midea-solstice-white-and-black-series',
};

hardwareData.forEach(hw => {
  let info = null;
  
  const brandPrefix = hw.brand.toLowerCase() + '-';
  const idWithoutBrand = hw.id.startsWith(brandPrefix) ? hw.id.slice(brandPrefix.length) : hw.id;
  const normId = normalize(idWithoutBrand);
  
  // Try manual override first
  if (manualMap[hw.id] && infoBySlug[manualMap[hw.id]]) {
    info = infoBySlug[manualMap[hw.id]];
  }
  // Try exact slug match
  else if (infoBySlug[idWithoutBrand]) {
    info = infoBySlug[idWithoutBrand];
  } else if (infoBySlug[hw.id]) {
    info = infoBySlug[hw.id];
  } else if (infoByNormSlug[normId]) {
    // Fuzzy match via normalized ASCII slug
    info = infoByNormSlug[normId];
  } else {
    // Try by name (normalized)
    const hwNameNorm = normalize(hw.name);
    for (const item of prodInfo) {
      if (normalize(item.name).includes(hwNameNorm) || hwNameNorm.includes(normalize(item.name))) {
        info = item;
        break;
      }
      // Also try slug similarity
      if (normId.includes(normalize(item.slug)) || normalize(item.slug).includes(normId)) {
        info = item;
        break;
      }
    }
  }

  if (info) {
    matched++;
    
    // Build rich markdown description from the prod_info data
    let md = '';
    
    if (info.type) {
      md += `**Type:** ${info.type}\n\n`;
    }
    
    if (info.description) {
      md += `${info.description}\n\n`;
    }

    if (info.features && info.features.length > 0) {
      md += `## Key Features\n\n`;
      info.features.forEach(f => {
        md += `- ${f}\n`;
      });
      md += '\n';
    }

    if (info.specs && Object.keys(info.specs).length > 0) {
      md += `## Technical Specifications\n\n`;
      md += `| Parameter | Value |\n| :--- | :--- |\n`;
      for (const [key, value] of Object.entries(info.specs)) {
        // Clean up the key: replace underscores, split camelCase, capitalize properly
        const label = key
          .replace(/_/g, ' ')
          .replace(/([a-z])([A-Z])/g, '$1 $2')
          .replace(/\b\w/g, c => c.toUpperCase())
          .trim();
        // Clean up value: trim whitespace
        const cleanVal = String(value).trim();
        md += `| ${label} | ${cleanVal} |\n`;
      }
      md += '\n';
    }
    
    if (info.modelCodes && info.modelCodes.length > 0) {
      md += `**Model Codes:** ${info.modelCodes.join(', ')}\n\n`;
    }

    if (info.sourceUrl) {
      md += `[View Official Product Page](${info.sourceUrl})\n`;
    }

    hw.description = md.trim();
  } else {
    unmatched.push(hw.id + ' (' + hw.name + ')');
  }
});

console.log(`Matched: ${matched}/${hardwareData.length}`);
if (unmatched.length > 0) {
  console.log(`Unmatched (${unmatched.length}):`);
  unmatched.forEach(u => console.log('  - ' + u));
}

// Write back
const tsContent = `export type HardwareItem = {
  id: string;
  name: string;
  category: string;
  brand: string;
  image: string;
  uiServiceTab: string;
  originalLink: string;
  description: string;
};

export const hardwareData: HardwareItem[] = ${JSON.stringify(hardwareData, null, 2)};
`;

fs.writeFileSync(hardwarePath, tsContent);
console.log('hardware.ts updated successfully!');
