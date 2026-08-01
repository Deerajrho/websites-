# Pigment — image generation prompts

Each `.txt` file in this folder is one ready-to-use prompt for a single image. Generate each one and save the result into the matching `output/` subfolder using the **exact filename** noted at the top of each prompt file (extension can be `.png` or `.jpg` — either is fine, just tell me which if it's not `.png`).

Once files land in `output/`, tell me and I'll run them through the existing `scripts/optimize-hero-images.mjs` compression pass, move them into `src/assets/`, and wire them into the Gallery, Process, Reviews, and favicon/OG components.

## Shared style reference

All prompts are written to match two existing assets already in `src/assets/hero/`:

- `salon-interior.png` — **photorealistic** style: warm golden-hour lighting, sage-green upholstery, brushed-gold fixtures, cream/walnut tones, shallow depth of field, editorial salon-photography look
- `portrait-women.png` / `portrait-men.png` — **illustrated ink-wash** style: monochrome painterly brush portraits, loose expressive linework, warm paper-cream background

Brand palette (hex): background dark `#1e1c15`, surface `#2c2e21`, cream `#f6f1e6`, foil gold `#c9a227` / bright `#e4c24c`, sage `#8fa07a` / deep `#5b6b49`. Color-level scale (dark→light, used as swatches): `#3b2417 #4c2e1b #6b3a22 #8b4f27 #a9682f #c08640 #c99a4a #d9b876 #e8cfa0 #ede6da`.

## Files

| Prompt file | Style | Output filename | Aspect ratio |
|---|---|---|---|
| `gallery-01-balayage.txt` | photorealistic | `output/gallery/balayage.png` | 4:5 |
| `gallery-02-copper-correction.txt` | photorealistic | `output/gallery/copper-correction.png` | 4:5 |
| `gallery-03-root-melt.txt` | photorealistic | `output/gallery/root-melt.png` | 4:5 |
| `gallery-04-silver-toner.txt` | photorealistic | `output/gallery/silver-toner.png` | 4:5 |
| `gallery-05-curly-cut.txt` | photorealistic | `output/gallery/curly-cut.png` | 4:5 |
| `gallery-06-bridal-lift.txt` | photorealistic | `output/gallery/bridal-lift.png` | 4:5 |
| `stylist-portrait.txt` | photorealistic | `output/portrait/stylist.png` | 4:5 |
| `testimonial-avatar-01.txt` through `-05.txt` | illustrated ink-wash | `output/avatars/avatar-01.png` ... `avatar-05.png` | 1:1 |
| `favicon.txt` | flat mark | `output/brand/favicon-mark.png` | 1:1, 512×512 min |
| `og-image.txt` | photorealistic + type | `output/brand/og-image.png` | 1200×630 |

Generate at the highest resolution your tool allows — they'll be downscaled/compressed during optimization, not upscaled.
