const fs = require('fs');
const path = require('path');

const hardwareFilePath = path.join(__dirname, '../lib/data/hardware.ts');
const publicHardwarePath = path.join(__dirname, '../public/hardware');

// Read the hardware.ts file
let fileContent = fs.readFileSync(hardwareFilePath, 'utf8');

// Extract the JSON array part
const startIndex = fileContent.indexOf('export const hardwareData: HardwareItem[] = [') + 'export const hardwareData: HardwareItem[] = '.length;
const endIndex = fileContent.lastIndexOf('];') + 1; // Include the closing bracket

const arrayString = fileContent.substring(startIndex, endIndex);
let hardwareData;

try {
  hardwareData = eval('(' + arrayString + ')'); // using eval because the keys might not be double-quoted if it's TS, though it's JSON-like. Wait, if it is strictly JSON, JSON.parse works. Let's use eval to be safe since it's valid TS code.
} catch (e) {
  console.error("Failed to parse array", e);
  process.exit(1);
}

// Ensure brand directories exist
const brands = [...new Set(hardwareData.map(i => i.brand.toLowerCase()))];
brands.forEach(brand => {
  const brandPath = path.join(publicHardwarePath, brand);
  if (!fs.existsSync(brandPath)) {
    fs.mkdirSync(brandPath, { recursive: true });
  }
});

let updatedData = [...hardwareData];

updatedData = updatedData.map(item => {
  if (!item.image || item.image.startsWith('http')) return item; // skip if no image or absolute URL

  const oldImagePath = path.join(__dirname, '..', 'public', item.image);
  
  // Create a clean slug from the name
  let cleanName = item.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric with dashes
    .replace(/^-+|-+$/g, '');    // trim leading/trailing dashes

  // Remove redundant brand prefixes
  const brandSlug = item.brand.toLowerCase();
  if (cleanName.startsWith(`${brandSlug}-`)) {
    cleanName = cleanName.substring(brandSlug.length + 1);
  }
  
  // If the cleanName is still too long, shorten it a bit, maybe first 5 words max
  let parts = cleanName.split('-');
  if (parts.length > 7) {
    cleanName = parts.slice(0, 7).join('-');
  }

  const ext = path.extname(item.image);
  
  let newImageRelPath = `/hardware/${brandSlug}/${cleanName}${ext}`;
  let newImagePath = path.join(__dirname, '..', 'public', newImageRelPath);

  // Handle conflicts (if two products have the same clean name)
  let counter = 1;
  while (fs.existsSync(newImagePath) && newImagePath !== oldImagePath) {
    newImageRelPath = `/hardware/${brandSlug}/${cleanName}-${counter}${ext}`;
    newImagePath = path.join(__dirname, '..', 'public', newImageRelPath);
    counter++;
  }

  if (fs.existsSync(oldImagePath) && oldImagePath !== newImagePath) {
    fs.renameSync(oldImagePath, newImagePath);
    console.log(`Renamed: ${item.image} -> ${newImageRelPath}`);
  } else if (!fs.existsSync(oldImagePath)) {
     console.warn(`File not found: ${oldImagePath}`);
  }

  return {
    ...item,
    image: newImageRelPath
  };
});

// Reconstruct the file content
const newArrayString = JSON.stringify(updatedData, null, 2);
const newFileContent = fileContent.substring(0, startIndex) + newArrayString + ';\n';

fs.writeFileSync(hardwareFilePath, newFileContent, 'utf8');
console.log("hardware.ts updated successfully!");
