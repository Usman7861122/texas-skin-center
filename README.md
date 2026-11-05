# Texas Skin Center website

Astro + React islands + Tailwind v4 + Framer Motion. Fonts: Poppins (headings) + Open Sans (body).

## Run
    npm install
    npm run dev      # http://localhost:4321
    npm run build

## Where things live
- `src/data/site.ts`: ALL content (text, nav, services, providers, insurance, testimonials, posts, locations, image paths)
- `src/components/sections/`: one file per homepage section
- `src/components/islands/`: React + Framer Motion pieces (header, hero text, provider showcase, testimonials, location tabs, contact form)
- `src/styles/global.css`: colour tokens, buttons, square image frames, effects

## Before launch
- Stock photos (services + Texas) are licensed Shutterstock downloads saved in `public/images/stock/`.
- Provider photos are in `public/images/providers/`, insurance logos in `public/insurance/`.
- Contact form is front-end only. Connect it in `islands/ContactForm.tsx`.
- Kingwood suite: address list says Suite 150, the old map link says Suite 220. Confirm.
