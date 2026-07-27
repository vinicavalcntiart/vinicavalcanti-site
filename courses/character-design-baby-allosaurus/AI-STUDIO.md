# AI-STUDIO.md — Character Design: Baby Allosaurus Landing Page

Instructions for any AI (Google AI Studio, Claude, etc.) editing this project. Read fully before touching any file.

## 1. Overview

- **What**: Sales landing page for the course "Character Design: Baby Allosaurus" by Vini Cavalcanti (vinicavalcanti.com).
- **Goal**: Convert visitors into buyers via Hotmart checkout.
- **Audience**: Beginner and intermediate character artists (international, English-speaking).
- **Primary CTA**: `https://pay.hotmart.com/M105761103N` — every conversion link on the page points here. Do not add other destinations.
- **Offer**: $49, one-time, lifetime access, 15-day money-back guarantee.
- **Course facts**: 7h30min, 4 modules, EN with PT subtitles, ZBrush + Blender, Beginner/Intermediate.
- **Page language**: EN by default, with a working EN | PT toggle in the header (`js/i18n.js`, same mechanism and `vc_lang` localStorage key as the homepage — the language persists across pages). The HTML copy stays in English; PT lives only in the i18n dictionary.
- **Modules**: 01 Foundations — Storytelling and Character Design · 02 ZBrush — Blockout and Chibi Proportions · 03 ZBrush — Sculpting, Detailing, and Expression · 04 Final Render — Lighting, Scene, and Visual Storytelling.
- **Bonuses**: Reference sheet pack, Custom brush pack, HDRI lighting pack (sunset), 30% off TopoGun 3 Perpetual License.

## 2. File map

```
character-design-baby-allosaurus/
├── index.html      — all markup; sections marked with <!-- SECTION: name -->
├── css/styles.css  — all styles; sections marked with /* SECTION: name */
├── js/main.js      — scroll-reveal + sticky CTA + mobile menu (shared with other LPs; DO NOT EDIT)
├── js/i18n.js      — EN | PT toggle: [selector, EN, PT] dictionary, persists in localStorage (vc_lang)
├── images/         — webp assets + hero mp4
├── fonts/          — Inter + Outfit woff2 (400/500/600/700)
└── AI-STUDIO.md    — this file
```

HTML sections in order: header, hero, studios, modules, identity, bonuses, instructor, pricing, faq, final-cta, footer, sticky-cta.

## 3. Design tokens (IMMUTABLE)

Defined in `:root` of `css/styles.css`. **Never change these values without explicit authorization from Vini.**

Root palette (from vinicavalcanti.com): orange `#EF7722` / hover `#d9661b` / soft `#FFF2E7` / grad-end `#F9A335`; blue `#0CA6DF` / hover `#0995c9` / soft `#EFF8FD` / grad-end `#7ACEEE`; bg `#FCFBF8`; text `#060606`; body `#2b2b2b`.

Course-specific sunset tokens (sampled from the Baby Allosaurus ad set): `--color-navy: #7A4E62` (mauve), `--color-navy-deep: #443049` (dusk purple), `--color-navy-light: #C77A56` (sunset glow). Variable names are kept as "navy" for template compatibility; only the values are course-specific. Gradients run deep (top) to light (bottom), matching the ads.

Typography: Inter (sans), Outfit (display). Radii: 28px cards, 32px large cards, pill buttons. Fox logo always in header.

## 4. What CAN be edited

- Text copy inside sections (keeping tone: direct, confident, no hype).
- Image files in `images/` (keep same dimensions and relative paths `./images/...`).
- FAQ questions/answers.
- Order of the middle sections (modules, identity, bonuses) if requested.

## 5. What CANNOT be changed

- Design tokens, palette, typography, logo.
- Header, footer, studios strip, and instructor section (replicas of the root site).
- `js/main.js` (shared file).
- Folder structure and relative paths.
- CTA destination: all conversion links go to the Hotmart checkout above.
- Honesty rules: no fabricated urgency, no countdowns, no fake enrollment numbers, no job/income guarantees. Testimonials only if real and authorized.
- No inline CSS or JS. No base64 images.
- CRITICAL i18n RULE: any copy edit in `index.html` MUST be mirrored in the matching EN value in `js/i18n.js` (and its PT translation updated), otherwise the toggle silently overwrites the edit with the old string. Never rename the `vc_lang` key or rewrite the toggle mechanism.

## 6. Adding new sections

Copy the pattern:

```html
<!-- SECTION: my-section -->
<section class="section" id="my-section">
  <div class="container">
    <div class="section__head reveal">
      <span class="eyebrow eyebrow--orange">Eyebrow</span>
      <h2 class="h-display">Title</h2>
    </div>
    ...
  </div>
</section>
```

Available utilities: `.section`, `.section--compact`, `.section--orange`, `.section--navy`, `.section--pattern-light`, `.container`, `.grid-4`, `.card`, `.card--lg`, `.eyebrow--blue/--orange/--course`, `.badge--hero/--limited/--oneonone`, `.btn--primary/--inverse/--members/--sm`, `.reveal` (scroll animation), `.accent-orange`.

## 7. Pending items

- `images/Ad_Video_Timelapse.mp4` is ~90MB — must be compressed (H.264, CRF 26-28, no audio, `-movflags +faststart`, target 2-3MB) before launch.
- Real poster frame from the video (currently using `Cover.webp`).
- Dedicated OG image 1200×630 (currently using `Cover.webp`).
