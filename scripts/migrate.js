const fs = require('fs');
const path = require('path');

const sourceDir = 'C:/Users/Genti/Desktop/ecovent';
const publicHardwareDir = path.join(__dirname, '../public/hardware');
const libDataDir = path.join(__dirname, '../lib/data');

// Create directories if they don't exist
if (!fs.existsSync(publicHardwareDir)) fs.mkdirSync(publicHardwareDir, { recursive: true });
if (!fs.existsSync(libDataDir)) fs.mkdirSync(libDataDir, { recursive: true });

const sourceJSONPath = path.join(sourceDir, 'source_of_truth.json');
const data = JSON.parse(fs.readFileSync(sourceJSONPath, 'utf-8'));

const hardwareData = [];

// Helper to make safe filenames
const sanitizeStr = (str) => {
  return str.replace(/[^a-zA-Z0-9-]/g, '-').replace(/-+/g, '-').toLowerCase();
};

data.forEach((item, index) => {
  // Read markdown content
  let markdownContent = '';
  if (item.content_file && item.content_file !== 'Manual Upload') {
    const mdPath = path.join(sourceDir, item.content_file);
    if (fs.existsSync(mdPath)) {
      markdownContent = fs.readFileSync(mdPath, 'utf-8');
    }
  }

  // Copy image
  let newImagePath = '';
  if (item.local_image_path && item.local_image_path !== 'Manual Upload') {
    const originalImagePath = path.join(sourceDir, item.local_image_path);
    if (fs.existsSync(originalImagePath)) {
      const ext = path.extname(originalImagePath);
      const safeName = sanitizeStr(`${item.brand}-${item.name}`) + ext;
      const targetImagePath = path.join(publicHardwareDir, safeName);
      
      // Copy file
      fs.copyFileSync(originalImagePath, targetImagePath);
      newImagePath = `/hardware/${safeName}`;
    }
  }

  // Generate ID
  const id = sanitizeStr(`${item.brand}-${item.name}`);

  hardwareData.push({
    id,
    name: item.name,
    category: item.category,
    brand: item.brand,
    image: newImagePath,
    uiServiceTab: item.ui_service_tab,
    originalLink: item.original_link,
    description: markdownContent
  });
});

// Write to TypeScript file
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

fs.writeFileSync(path.join(libDataDir, 'hardware.ts'), tsContent);
console.log(`Migrated ${hardwareData.length} hardware items successfully.`);
