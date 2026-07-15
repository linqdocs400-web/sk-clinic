import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, "src/assets");
const COMPONENTS_DIR = path.join(__dirname, "src/components");
const OUT_DIR = path.join(__dirname, "public/optimized");
const WIDTHS = [480, 768, 1200, 1600];
const MAX_FILE_SIZE = 500 * 1024; // 500 KB limit
const START_QUALITY = 90;

async function scanUsedImages() {
  const usedImages = new Set();
  const files = fs.readdirSync(COMPONENTS_DIR);
  for (const file of files) {
    if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      const content = fs.readFileSync(path.join(COMPONENTS_DIR, file), "utf8");
      const matches = content.matchAll(/import\s+.*?\s+from\s+['"]\.\.\/assets\/(.*?)['"]/g);
      for (const match of matches) {
        usedImages.add(match[1]);
      }

      const baseNameMatches = content.matchAll(/baseName=['"]([^'"]+)['"]/g);
      for (const match of baseNameMatches) {
        // Need to find the actual file for this baseName
        // we'll just add all extensions to be safe, or wait, baseName doesn't have the extension.
        // I will collect baseNames here.
      }
    }
  }
  return usedImages;
}

async function compressToTarget(imageObj, width, format) {
  let quality = START_QUALITY;
  let buffer;
  while (quality >= 20) {
    if (format === "avif") {
      buffer = await imageObj
        .clone()
        .resize(width, null, { withoutEnlargement: true })
        .avif({ quality })
        .toBuffer();
    } else {
      buffer = await imageObj
        .clone()
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality })
        .toBuffer();
    }
    if (buffer.length <= MAX_FILE_SIZE) {
      break;
    }
    quality -= 10;
  }
  return buffer;
}

async function run() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const allImages = fs.readdirSync(ASSETS_DIR).filter((f) => f.match(/\.(jpg|jpeg|png)$/i));
  const imagesToProcess = allImages;

  console.log(`Found ${imagesToProcess.length} total images to process.`);

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  const processedStats = [];
  const imageDataDict = {};

  for (const img of imagesToProcess) {
    const inputPath = path.join(ASSETS_DIR, img);
    const stat = fs.statSync(inputPath);
    totalOriginalSize += stat.size;

    const ext = path.extname(img);
    const baseName = path.basename(img, ext);
    const safeBaseName = baseName.replace(/[^a-zA-Z0-9_-]/g, "-");

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    let targetWidths = WIDTHS.filter((w) => w <= metadata.width);
    if (targetWidths.length === 0) {
      targetWidths = [metadata.width];
    }

    imageDataDict[safeBaseName] = targetWidths;

    let imageOptimizedSize = 0;

    for (const width of targetWidths) {
      const avifBuffer = await compressToTarget(image, width, "avif");
      const avifPath = path.join(OUT_DIR, `${safeBaseName}-${width}w.avif`);
      fs.writeFileSync(avifPath, avifBuffer);
      imageOptimizedSize += avifBuffer.length;

      const webpBuffer = await compressToTarget(image, width, "webp");
      const webpPath = path.join(OUT_DIR, `${safeBaseName}-${width}w.webp`);
      fs.writeFileSync(webpPath, webpBuffer);
      imageOptimizedSize += webpBuffer.length;
    }

    // Fallback WebP (max width)
    const maxWidth = targetWidths[targetWidths.length - 1];
    const fallbackBuffer = await compressToTarget(image, maxWidth, "webp");
    const fallbackPath = path.join(OUT_DIR, `${safeBaseName}-fallback.webp`);
    fs.writeFileSync(fallbackPath, fallbackBuffer);
    imageOptimizedSize += fallbackBuffer.length;

    totalOptimizedSize += imageOptimizedSize;

    processedStats.push({
      original: img,
      safeBaseName,
      originalSize: stat.size,
      optimizedSize: imageOptimizedSize,
      widths: targetWidths,
    });
  }

  // Generate image-data.ts
  const dictFile = path.join(__dirname, "src/image-data.ts");
  const dictContent = `export const IMAGE_DATA: Record<string, number[]> = ${JSON.stringify(imageDataDict, null, 2)};\n`;
  fs.writeFileSync(dictFile, dictContent);

  const reduction = (((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(
    2,
  );

  const report = {
    totalOriginalSizeBytes: totalOriginalSize,
    totalOptimizedSizeBytes: totalOptimizedSize,
    reductionPercentage: reduction,
    processedImages: processedStats,
  };

  fs.writeFileSync("optimization-report.json", JSON.stringify(report, null, 2));
  console.log(`Optimization complete! Size reduced by ${reduction}%.`);
}

run().catch(console.error);
