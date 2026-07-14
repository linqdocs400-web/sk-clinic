import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, 'src/assets');
const COMPONENTS_DIR = path.join(__dirname, 'src/components');
const OUT_DIR = path.join(__dirname, 'public/optimized');
const WIDTHS = [480, 768, 1200, 1600];
const QUALITY = 90;

async function scanUsedImages() {
  const usedImages = new Set();
  const files = fs.readdirSync(COMPONENTS_DIR);
  for (const file of files) {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(path.join(COMPONENTS_DIR, file), 'utf8');
      // Match imports like: import myImg from "../assets/filename.ext";
      const matches = content.matchAll(/import\s+.*?\s+from\s+['"]\.\.\/assets\/(.*?)['"]/g);
      for (const match of matches) {
        usedImages.add(match[1]);
      }
    }
  }
  return usedImages;
}

async function run() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const usedImages = await scanUsedImages();
  const allImages = fs.readdirSync(ASSETS_DIR).filter(f => f.match(/\.(jpg|jpeg|png)$/i));
  
  const unusedImages = allImages.filter(img => !usedImages.has(img));
  const imagesToProcess = allImages.filter(img => usedImages.has(img));

  console.log(`Found ${imagesToProcess.length} used images.`);
  console.log(`Found ${unusedImages.length} unused images. Deleting them...`);
  
  for (const img of unusedImages) {
    fs.unlinkSync(path.join(ASSETS_DIR, img));
  }

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  const processedStats = [];

  for (const img of imagesToProcess) {
    const inputPath = path.join(ASSETS_DIR, img);
    const stat = fs.statSync(inputPath);
    totalOriginalSize += stat.size;
    
    const ext = path.extname(img);
    const baseName = path.basename(img, ext);
    // Sanitize baseName for URL usage (replace spaces and special chars)
    const safeBaseName = baseName.replace(/[^a-zA-Z0-9_-]/g, '-');
    
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    const targetWidths = WIDTHS.filter(w => w <= metadata.width);
    if (targetWidths.length === 0 || targetWidths[targetWidths.length - 1] < metadata.width) {
      targetWidths.push(metadata.width);
    }
    
    let imageOptimizedSize = 0;

    for (const width of targetWidths) {
      // AVIF
      const avifBuffer = await image.clone().resize(width).avif({ quality: QUALITY }).toBuffer();
      const avifPath = path.join(OUT_DIR, `${safeBaseName}-${width}w.avif`);
      fs.writeFileSync(avifPath, avifBuffer);
      imageOptimizedSize += avifBuffer.length;

      // WebP
      const webpBuffer = await image.clone().resize(width).webp({ quality: QUALITY }).toBuffer();
      const webpPath = path.join(OUT_DIR, `${safeBaseName}-${width}w.webp`);
      fs.writeFileSync(webpPath, webpBuffer);
      imageOptimizedSize += webpBuffer.length;
    }
    
    // Fallback WebP (max width)
    const fallbackBuffer = await image.clone().resize(targetWidths[targetWidths.length - 1]).webp({ quality: QUALITY }).toBuffer();
    const fallbackPath = path.join(OUT_DIR, `${safeBaseName}-fallback.webp`);
    fs.writeFileSync(fallbackPath, fallbackBuffer);
    imageOptimizedSize += fallbackBuffer.length;
    
    totalOptimizedSize += imageOptimizedSize;
    
    processedStats.push({
      original: img,
      safeBaseName,
      originalSize: stat.size,
      optimizedSize: imageOptimizedSize,
      widths: targetWidths
    });
    
    // Delete original file from assets folder since it's replaced
    fs.unlinkSync(inputPath);
  }

  const reduction = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(2);
  
  const report = {
    totalOriginalSizeBytes: totalOriginalSize,
    totalOptimizedSizeBytes: totalOptimizedSize,
    reductionPercentage: reduction,
    deletedUnusedImages: unusedImages,
    processedImages: processedStats
  };

  fs.writeFileSync('optimization-report.json', JSON.stringify(report, null, 2));
  console.log(`Optimization complete! Size reduced by ${reduction}%. Report saved to optimization-report.json`);
}

run().catch(console.error);
