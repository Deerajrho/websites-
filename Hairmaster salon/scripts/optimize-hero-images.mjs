import sharp from "sharp";
import { readdirSync, statSync } from "node:fs";
import path from "node:path";

const dir = path.resolve(import.meta.dirname, "../src/assets/hero");
const targets = {
  "salon-interior.png": 1800,
  "portrait-men.png": 1200,
  "portrait-women.png": 1200,
};

for (const [file, maxWidth] of Object.entries(targets)) {
  const p = path.join(dir, file);
  const before = statSync(p).size;
  const buf = await sharp(p).resize({ width: maxWidth, withoutEnlargement: true }).png({ quality: 82, compressionLevel: 9 }).toBuffer();
  await sharp(buf).toFile(p);
  const after = statSync(p).size;
  console.log(`${file}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`);
}

console.log(readdirSync(dir));
