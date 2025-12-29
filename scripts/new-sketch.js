import fs from "fs";
import path from "path";

const sketchPath = process.argv[2];
const templateName = process.argv[3] || "_template";

if (!sketchPath) {
  console.error("Usage: npm run new-sketch <path> [template]");
  console.error("");
  console.error("Examples:");
  console.error("  npm run new-sketch my-sketch");
  console.error("  npm run new-sketch my-sketch _custom");
  console.error("  npm run new-sketch my-sketch _templates/my-template");
  console.error("  npm run new-sketch my-sketch favorites/circles");
  process.exit(1);
}

const templatePath = `src/sketches/${templateName}.ts`;
const fullPath = `src/sketches/${sketchPath}.ts`;
const dir = path.dirname(fullPath);

if (!fs.existsSync(templatePath)) {
  console.error(`Error: Template not found: ${templatePath}`);
  process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });

if (fs.existsSync(fullPath)) {
  console.error(`Error: File already exists: ${fullPath}`);
  process.exit(1);
}

fs.copyFileSync(templatePath, fullPath);

console.log(`Created: ${fullPath}`);
console.log(`URL: http://localhost:4321/sketches/${sketchPath}`);
