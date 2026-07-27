# AI-STUDIO.md — ZBrush for Stylized Characters Landing Page

Instructions for any AI (Google AI Studio, Claude, etc.) editing this project. Read fully before touching any file.

## 1. Overview

- **What**: Sales landing page for the course **ZBrush for Stylized Characters** ($49, 6h30min, EN with PT subtitles, Beginner/Intermediate).
- **Goal**: Convert visitors into buyers via the Hotmart checkout.
- **Audience**: Aspiring and junior character artists (international, English-speaking).
- **Primary CTA**: `https://pay.hotmart.com/J105527673H` — ALL buy buttons point here. Do not add other conversion destinations.
- **Language**: EN by default, with a working EN | PT toggle in the header (`js/i18n.js`, same mechanism and `vc_lang` localStorage key as the homepage — the language persists across pages). The HTML copy stays in English; PT lives only in the i18n dictionary.
- **Parent brand**: vinicavalcanti.com. Header and footer are faithful replicas of the root site and must stay identical to it.

## 2. File map

```
01 - ZBrush for Stylized Characters/
├── index.html        — single-page LP, sections marked with <!-- SECTION: name -->
├── css/styles.css    — all styling; tokens in :root; sections mirror HTML section names
├── js/main.js        — vanilla JS: reveal, mobile menu, video autoplay guard, sticky CTA
├── js/i18n.js        — EN | PT toggle: [selector, EN, PT] dictionary, persists in localStorage (vc_lang)
├── images/           — webp assets + Turnable_Zbrush.mp4
├── fonts/            — Inter + Outfit woff2 (400/500/600/700)
└── AI-STUDIO.md      — this file
```

HTML sections, in order: `header` (root replica) · `hero` (navy, autoplay turntable) · `studios` · `modules` · `identity` (navy) · `bonuses` · `instructor` · `pricing` · `faq` · `final-cta` (navy) · `footer` (root replica) · `sticky-cta` (mobile).

## 3. Design tokens (DO NOT CHANGE without authorization)

Root brand tokens (from vinicavalcanti.com):
- Orange `#EF7722`, hover `#d9661b`, soft `#FFF2E7`, gradient end `#F9A335`
- Blue `#0CA6DF`, hover `#0995c9`, soft `#EFF8FD`, gradient end `#7ACEEE`
- Background `#FCFBF8`, text `#060606`, body `#2b2b2b`, pills `#F5F5F2` / `#F4F4F1`
- Fonts: Inter (body), Outfit (display). Radii: 28px cards, 32px large cards, pill buttons.

Course-specific tokens (sampled from the course key art and ad set — unique to THIS page):
- Navy `#1B2A47`, navy deep `#131F36`, navy light `#223355`

The navy is used only for hero, identity section, and final CTA band. Everything else stays on the root off-white palette.

## 4. What CAN be edited

- Copy text (headlines, paragraphs, FAQ answers) — keep the tone: direct, confident, no hype.
- Images (keep the same filenames/paths or update `src` accordingly; keep dimensions/aspect).
- Order of sections (move whole `<section>` blocks; keep header first, footer last).
- Adding FAQ items (copy an existing `.faq__item` block).

## 5. What must NOT be changed

- Design token values in `:root`.
- Header and footer markup, links, and styling (they mirror vinicavalcanti.com).
- The single-CTA rule: every buy button → Hotmart checkout `J105527673H`.
- Folder structure and relative paths (`./css/`, `./js/`, `./images/`, `./fonts/`).
- No inline CSS or JS. No frameworks. No base64 images.
- Honesty rules: no fake urgency, no countdowns, no invented enrollment numbers, no job/income guarantees.
- `prefers-reduced-motion` handling in CSS and JS (accessibility requirement).
- CRITICAL i18n RULE: any copy edit in `index.html` MUST be mirrored in the matching EN value in `js/i18n.js` (and its PT translation updated), otherwise the toggle silently overwrites the edit with the old string. Never rename the `vc_lang` key or rewrite the toggle mechanism.

## 6. How to add a new section

1. Copy the structure of an existing section:
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
2. Reusable classes: `.card`, `.grid-4`, `.eyebrow--orange/--blue`, `.badge--*`, `.btn--primary/--inverse/--members`, `.reveal` (scroll animation), `.section--orange` (soft orange bg), `.section--navy` + `.section--pattern-light` (navy band with triangle pattern).
3. Add matching CSS under a `/* SECTION: my-section */` comment in `styles.css`.

## 7. Known pendências

- `Turnable_Zbrush.mp4` is ~10 MB — should be compressed to ~2-3 MB (H.264, CRF 26-28) and/or a webm variant added.
- Poster frame currently uses `images/1280x720.webp` (course cover art); a real first-frame poster from the video would be better.
- OG image uses `images/1280x720.webp`; a dedicated 1200×630 OG image is preferred.
