import sharp from "sharp";
import { readdirSync, mkdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC_DIR = join(__dirname, "..", "..", "frames");
const DESKTOP_DIR = join(__dirname, "..", "public", "frames-desktop");
const MOBILE_DIR = join(__dirname, "..", "public", "frames-mobile");

mkdirSync(DESKTOP_DIR, { recursive: true });
mkdirSync(MOBILE_DIR, { recursive: true });

const files = readdirSync(SRC_DIR)
  .filter((f) => f.toLowerCase().endsWith(".png"))
  .sort();

console.log(`Found ${files.length} source frames.`);

function totalSize(dir, names) {
  return names.reduce((sum, n) => sum + statSync(join(dir, n)).size, 0);
}

async function run() {
  let desktopBytes = 0;
  let mobileBytes = 0;

  for (let i = 0; i < files.length; i++) {
    const src = join(SRC_DIR, files[i]);
    const outName = `frame-${String(i + 1).padStart(4, "0")}.jpg`;

    const desktopOut = join(DESKTOP_DIR, outName);
    await sharp(src)
      .resize({ width: 1280, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(desktopOut);
    desktopBytes += statSync(desktopOut).size;

    const mobileOut = join(MOBILE_DIR, outName);
    await sharp(src)
      .resize({ width: 900, withoutEnlargement: true })
      .jpeg({ quality: 76, mozjpeg: true })
      .toFile(mobileOut);
    mobileBytes += statSync(mobileOut).size;

    if ((i + 1) % 40 === 0 || i === files.length - 1) {
      console.log(`Processed ${i + 1}/${files.length}`);
    }
  }

  console.log("\n--- Done ---");
  console.log(`Desktop set: ${(desktopBytes / 1024 / 1024).toFixed(2)} MB total, ${files.length} frames`);
  console.log(`Mobile set:  ${(mobileBytes / 1024 / 1024).toFixed(2)} MB total, ${files.length} frames`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
