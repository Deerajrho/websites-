# Shahrukhz Residences landing page (Optimum Point Business Solutions)

Static Next.js site. Enquiry forms have no backend: they open WhatsApp (+971 52 527 5032) with the visitor's details filled in.

```bash
npm install      # once
npm run dev      # preview at http://localhost:3000 while editing
npm run build    # builds the finished site into out/ (upload that folder to any host)
npx serve out    # preview the built site locally
```

## Where things live

```
app/
  layout.tsx          fonts, page title, search-engine details
  page.tsx            the sections in reading order
  globals.css         colours and base styles
  icon.png            browser tab icon
components/
  layout/             Header, Footer, MobileActionBar (phone call/WhatsApp bar)
  sections/           one file per page section (Hero, Residences, PaymentPlan, ...)
  ui/                 shared pieces: Button, LeadForm, Logo, SectionHeading
lib/
  content.ts          ALL text, prices and contact details: edit here
public/images/
  brand/              logo
  site/               hero, intro and location photos
  residences/         unit photos
  amenities/          amenity photos
  gallery/            gallery photos
  plans/              master-plan drawings
```

To change a price or phone number, edit `lib/content.ts`. To swap a photo, replace the file in `public/images/` with one of the same name.
