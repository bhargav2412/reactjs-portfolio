// Converts source images into responsive WebP files for the site.
// Usage: node scripts/optimize-images.mjs <input> <output-basename> [width ...] [--crop=W:H]
// Example: node scripts/optimize-images.mjs raw/photo.jpg src/assets/img/portrait 480 960 --crop=4:5
// Supports raster files and SVGs that wrap an embedded base64 raster.
import sharp from "sharp";
import { readFile } from "node:fs/promises";

const args = process.argv.slice(2);
const crop = args.find((a) => a.startsWith("--crop="))?.slice(7);
const [input, output, ...rest] = args.filter((a) => !a.startsWith("--"));
const widths = rest.length ? rest.map(Number) : [800];

if (!input || !output) {
  console.error("Usage: node scripts/optimize-images.mjs <input> <output-basename> [width ...] [--crop=W:H]");
  process.exit(1);
}

let source = await readFile(input);
if (input.endsWith(".svg")) {
  const match = source.toString().match(/data:image\/\w+;base64,([A-Za-z0-9+/=]+)/);
  if (match) source = Buffer.from(match[1], "base64");
}

for (const width of widths) {
  let pipeline = sharp(source).rotate();
  if (crop) {
    const [w, h] = crop.split(":").map(Number);
    pipeline = pipeline.resize(width, Math.round((width * h) / w), { fit: "cover", position: "attention" });
  } else {
    pipeline = pipeline.resize({ width, withoutEnlargement: true });
  }
  const file = `${output}-${width}.webp`;
  const info = await pipeline.webp({ quality: 78, effort: 6 }).toFile(file);
  console.log(`${file}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(1)} KB`);
}
