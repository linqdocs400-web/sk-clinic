import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const inputPath = path.join(__dirname, "src/assets/hair.jpeg");
  const outDir = path.join(__dirname, "public/optimized");
  const safeBaseName = "hair";

  const image = sharp(inputPath);
  const metadata = await image.metadata();

  const WIDTHS = [480, 768, 1200, 1600];
  let targetWidths = WIDTHS.filter((w) => w <= metadata.width);
  if (targetWidths.length === 0) {
    targetWidths = [metadata.width];
  }

  for (const width of targetWidths) {
    const avifBuffer = await image.clone().resize(width).avif({ quality: 80 }).toBuffer();
    fs.writeFileSync(path.join(outDir, `${safeBaseName}-${width}w.avif`), avifBuffer);

    const webpBuffer = await image.clone().resize(width).webp({ quality: 80 }).toBuffer();
    fs.writeFileSync(path.join(outDir, `${safeBaseName}-${width}w.webp`), webpBuffer);
  }

  const fallbackBuffer = await image
    .clone()
    .resize(targetWidths[targetWidths.length - 1])
    .webp({ quality: 80 })
    .toBuffer();
  fs.writeFileSync(path.join(outDir, `${safeBaseName}-fallback.webp`), fallbackBuffer);

  // Read existing image-data.ts
  const dictFile = path.join(__dirname, "src/image-data.ts");
  let content = fs.readFileSync(dictFile, "utf8");

  // We'll append it before the last closing brace
  const appendStr = `,\n  "hair": ${JSON.stringify(targetWidths)}`;
  content = content.replace(/\n\};/, `${appendStr}\n};`);

  fs.writeFileSync(dictFile, content);
  console.log("Processed hair.jpeg successfully");
}

run().catch(console.error);
