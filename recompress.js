import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUT_DIR = path.join(__dirname, "public/optimized");
const MAX_FILE_SIZE = 500 * 1024; // 500 KB limit

async function compressToTarget(inputPath, format) {
  let quality = 70; // start at 70 for recompression
  let buffer;
  const imageObj = sharp(inputPath);
  const metadata = await imageObj.metadata();

  // If the image is extremely large, resize it to max 1600 width before recompressing
  let resizeOptions = undefined;
  if (metadata.width > 1600) {
    resizeOptions = { width: 1600, withoutEnlargement: true };
  }

  while (quality >= 10) {
    let cloned = imageObj.clone();
    if (resizeOptions) {
      cloned = cloned.resize(resizeOptions);
    }

    if (format === "avif") {
      buffer = await cloned.avif({ quality }).toBuffer();
    } else {
      buffer = await cloned.webp({ quality }).toBuffer();
    }
    if (buffer.length <= MAX_FILE_SIZE) {
      break;
    }
    quality -= 10;
  }
  return buffer;
}

async function run() {
  const files = fs.readdirSync(OUT_DIR);
  for (const file of files) {
    const filePath = path.join(OUT_DIR, file);
    const stat = fs.statSync(filePath);

    // Process large avif/webp files or files > 1600w (which might have large widths in their filename)
    if (
      (stat.size > MAX_FILE_SIZE ||
        file.includes("4284w") ||
        file.includes("4000w") ||
        file.includes("3024w")) &&
      (file.endsWith(".webp") || file.endsWith(".avif"))
    ) {
      console.log(`Recompressing ${file} (Size: ${(stat.size / 1024).toFixed(2)} KB)`);
      const format = file.endsWith(".avif") ? "avif" : "webp";
      const newBuffer = await compressToTarget(filePath, format);
      fs.writeFileSync(filePath, newBuffer);
      console.log(` -> New size: ${(newBuffer.length / 1024).toFixed(2)} KB`);
    }
  }

  console.log("Done recompressing.");
}

run().catch(console.error);
