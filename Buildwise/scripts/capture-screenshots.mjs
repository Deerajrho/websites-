import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "public", "portfolio");
mkdirSync(OUT_DIR, { recursive: true });

const TARGETS = [
  { slug: "kerala-trails", url: "https://kerala-trails-1c8abuxee-webwweavers.vercel.app/" },
  { slug: "salon", url: "https://salon-ncx3oeq0x-webwweavers.vercel.app/" },
  { slug: "portfolio-deerajbabu", url: "https://portfoliodeerajgamer.vercel.app/" },
];

const browser = await chromium.launch();

for (const target of TARGETS) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  try {
    await page.goto(target.url, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForTimeout(2500);
    const title = await page.title();
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content")
      .catch(() => null);

    await page.screenshot({
      path: join(OUT_DIR, `${target.slug}.jpg`),
      type: "jpeg",
      quality: 82,
    });

    console.log(`OK  ${target.slug} — title: "${title}" — description: "${description}"`);
  } catch (err) {
    console.log(`FAIL ${target.slug} (${target.url}): ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
