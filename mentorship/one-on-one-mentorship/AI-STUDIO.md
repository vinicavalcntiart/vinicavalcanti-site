# AI-STUDIO.md — Mentorship One-on-One Landing Page

Guide for any AI (Google AI Studio, Claude, etc.) or human editor working on this project. Read this fully before changing anything.

---

## 1. Overview

- **What**: Sales landing page for the **Vini Cavalcanti Mentorship Program (Season 2)**, a 10-week one-on-one mentorship in 3D character art.
- **Version**: v6.2. The page was deliberately shortened in v6 (less copy, more visuals, intro video); v6.1 added the color-band rhythm and the 3D mesh decoration (static pattern + animated icosahedron); v6.2 replaced the header with the homepage v2 header (full nav + EN | PT toggle + Members Area), added the contact form section and the site-wide language toggle (`js/i18n.js`), and shipped the mp4 video fallback. Do not re-inflate sections with long paragraphs; the short format is intentional.
- **Goal**: Conversion. Funnel: capture attention (hero), video pitch in Vini's own words, differentiate the one-on-one format, show mechanism and visual proof, build trust (mentor), remove objections (fit, FAQ), justify investment (career), drive to a single repeated CTA.
- **Audience**: Aspiring and junior 3D character artists in Europe and North America. Language: English.
- **Primary CTA**: "Sign up now!" → Hotmart checkout.
  - 1 payment: `https://pay.hotmart.com/D105581670W?bid=1781143563417`
  - 3 payments: `https://pay.hotmart.com/D105581670W?off=1l4bjdm8&bid=1781143564021`
- **Price**: $600 (or 3 payments). Scarcity is real: spots per season are capped because sessions are one-on-one. Never invent fake urgency (countdowns, fake stock numbers).
- **Tone**: Direct, confident, from someone who lives the industry. No empty hype, no job guarantees. Brand voice line: "taught by someone who lives this process every day inside real studios."

## 2. File map

```
mentorship-one-on-one/
├── css/styles.css     All styles. Design tokens in :root at the top.
├── fonts/             Inter + Outfit .woff2 (400/500/600/700 each).
├── images/            All page images (.webp), favicon (.png), intro video (.webm).
├── js/main.js         Scroll-reveal (IntersectionObserver) + mobile hamburger menu toggle. Vanilla JS.
├── js/mesh.js         Decorative animated 3D wireframe (icosahedron) for .mesh-canvas elements. Vanilla JS, no deps.
├── js/contact.js      Contact form AJAX submit (FormSubmit endpoint), copied from the homepage. Identical file.
├── js/i18n.js         EN | PT language toggle. Dictionary of CSS selectors covering the whole page. See section 14.
├── index.html         The entire page. One file, no build step.
└── AI-STUDIO.md       This file.
```

`index.html` is organized with HTML comments. Each section starts with `<!-- SECTION: name -->`:

| Section comment | Content | Funnel role |
|---|---|---|
| `SECTION: header` | Sticky header v2 (homepage replica): logo, nav links (Courses / Mentorship / Portfolio / Contact), EN \| PT toggle, blue Members Area button, mobile hamburger menu | Navigation + brand consistency |
| `SECTION: hero` | Badges, H1, short sub, CTA + price, studio pills, hero image | Attention + offer clarity |
| `SECTION: video` | Intro video (Vini presents the mentorship), problem-hook headline | Pitch + agitate the bottleneck |
| `SECTION: not-a-course` | 3-column comparison (recorded / cohort / 1-on-1) | Differentiation |
| `SECTION: how-it-works` | 4 cards, one sentence each | Mechanism |
| `SECTION: software` | Logo pills: ZBrush, Blender, Substance Painter, Houdini | Tool credibility |
| `SECTION: journey` | Pipeline image strip (5 stages) + 3 modules with topic-only week cards | Proof of structure |
| `SECTION: gallery` | 3 character renders by Vini, linking to the Hotmart checkout | Visual proof of the pipeline |
| `SECTION: mentor` | Photo, single-paragraph bio, studio + academic credentials | Authority |
| `SECTION: fit` | Who this is for / not for (3 bullets each), "Your result" callout | Honest filtering, trust |
| `SECTION: career` | Salary stats + salary-by-level, with data disclaimer. Blue band. | Justify the investment |
| `SECTION: pricing` | Includes list, price, both Hotmart CTAs, scarcity note | Conversion |
| `SECTION: faq` | 4 objection-killing questions | Objection handling |
| `SECTION: final-cta` | Banner.webp visual + closing headline + both CTAs | Last push |
| `SECTION: contact` | Contact form (name/email/message), orange band + pattern, FormSubmit backend | Secondary conversion / questions |
| `SECTION: footer` | Logo, links to root site, tagline | Brand consistency |

Removed in v6 (do not restore without explicit request): `problem` (its headline moved to the video section) and `testimonials` (the previous quotes were illustrative/fictional; the section returns only when real mentee quotes exist).

## 3. Design tokens (DO NOT CHANGE without authorization)

All tokens live in `:root` at the top of `css/styles.css`. They were extracted from the live vinicavalcanti.com CSS and must stay byte-identical to keep this page a visual extension of the main site.

| Token | Value | Use |
|---|---|---|
| `--color-orange` | `#EF7722` | Primary CTA, prices, accents |
| `--color-orange-hover` | `#d9661b` | CTA hover |
| `--color-orange-soft` | `#FFF2E7` | Orange-tinted pills/backgrounds |
| `--color-blue` | `#0CA6DF` | Secondary accents, badges, module bars |
| `--color-blue-hover` | `#0995c9` | Blue hover |
| `--color-blue-soft` | `#EFF8FD` | Blue-tinted pills and section bands |
| `--color-blue-grad-end` / `--color-orange-grad-end` | `#7ACEEE` / `#F9A335` | Gradient endpoints (from root) |
| `--color-bg` | `#FCFBF8` | Page background (never pure white) |
| `--color-bg-input` | `#FAFAF8` | Input backgrounds |
| `--color-pill` / `--color-pill-alt` | `#F5F5F2` / `#F4F4F1` | Neutral pills |
| `--color-text` | `#060606` | Headings |
| `--color-body` | `#2b2b2b` | Body text in bio blocks |
| `--font-sans` | Inter | Body |
| `--font-display` | Outfit | Available for display use |
| `--radius-card` / `--radius-card-lg` | `28px` / `32px` | Cards |
| `--radius-pill` | `9999px` | Buttons, badges |

Typography rules: headings use `font-weight: 600–700` with `letter-spacing: -0.025em` and `line-height: 1.25`. Body uses weight 400, `line-height: 1.6–1.625`, black at reduced opacity (`rgba(0,0,0,.6)` range). Inline emphasis inside paragraphs uses `<strong>` and `<em>` (see the mentor bio for the canonical pattern).

## 4. Video section rules

- The intro video lives at `images/Video-Introduction.webm` (~42 MB, VP8/VP9 WebM). The `<video>` element uses `controls preload="none" playsinline` and a poster, so nothing downloads until the visitor presses play. Never remove `preload="none"`.
- Poster is currently `images/mentorship_image.webp` (provisional). Ideally replace with a real exported frame of the video, same filename or update the `poster` attribute.
- DONE in v6.2: the H.264 fallback `<source src="./images/Video-Introduction.mp4" type="video/mp4">` sits BEFORE the webm source line, so Safari/iOS visitors can play the video. The mp4 in the Drive images folder is ~16.4 MB; compressing it is still pending (see section 8).
- Keep the video self-hosted with relative paths. Do not swap it for a YouTube/Vimeo iframe without authorization: the page intentionally has zero third-party embeds.
- The `.video-frame` wrapper mirrors the hero image treatment (white card, 10px padding, `--radius-card-lg`, `--shadow-xl`). Keep it.

## 5. What CAN be edited

- **Copy/text** in any section, keeping the tone rules from §1 and the short format from v6 (single sentences on cards, no long paragraphs).
- **Images**: swap files in `images/` keeping the same filenames or updating `src` paths. Keep intrinsic dimensions similar to the `width`/`height` attributes already set, keep `.webp`, keep descriptive alt text.
- **Section order**: sections are self-contained `<section>` blocks; reordering is safe. Keep `header` first, `video` right after `hero`, `pricing` before `faq`, `final-cta` last before footer.
- **FAQ items**: add/remove `<details class="faq__item">` blocks following the existing pattern. v6 keeps 4 on purpose; do not grow past 5 without cutting elsewhere.
- **Weeks/modules** in the journey if the program changes, following the `.module` / `.week-card` pattern. Week cards are topic-only in v6 (`<strong>Topic</strong>`, no descriptive sentence).

## 6. What must NOT be changed

- The design tokens in `:root` (palette, radii, fonts). Never introduce new accent colors.
- Typography families (Inter/Outfit) or the `fonts/` files.
- The logo (`images/logo_vini_cavalcanti_3D.webp`) and its placement in header/footer.
- Folder structure and relative paths (`./css/`, `./js/`, `./images/`, `./fonts/`). Never inline CSS/JS, never embed images as base64. DOCUMENTED EXCEPTION: the Meta Pixel base snippet in the `<head>` (analytics, id 999436976070756) is the standard exception to the no-inline-JS rule — do NOT remove it. The Pixel fires ONLY PageView and runs only on the production hostname (vinicavalcanti.com guard); InitiateCheckout is handled exclusively by Hotmart's native integration at checkout — do NOT re-add it on the page.
- The Hotmart checkout URLs, unless the owner provides new ones.
- The honest-scarcity rule: no countdown timers, no fabricated spot counters, no job guarantees anywhere in the copy. The career section keeps approximate public-data salary ranges with its disclaimer footnote; never present salaries as outcomes of the program or remove the footnote.
- The single-CTA principle: every link in the main flow leads to the Hotmart checkout (or anchors to `#pricing`). This includes the gallery images. Don't add competing CTAs (newsletter, socials, portfolio links, etc.).
- No fictional testimonials. The testimonials section was removed in v6 exactly because the quotes were illustrative; it only returns with real, authorized mentee quotes.

## 7. How to add a new section

1. Copy this skeleton and place it between two existing sections:

```html
<!-- SECTION: your-section-name -->
<section class="section">
  <div class="container">
    <div class="section__head reveal">
      <span class="eyebrow eyebrow--orange">Eyebrow label</span>
      <h2 class="h-display">Section headline</h2>
      <p class="section__lead">Optional lead paragraph.</p>
    </div>
    <!-- content -->
  </div>
</section>
```

2. Available utility/component classes:
   - Layout: `.container`, `.section`, `.section--compact`, `.section__head`, `.section__head--tight`, `.section__lead`, `.grid-3`, `.grid-4`
   - Components: `.card`, `.card--lg`, `.btn .btn--primary`, `.btn .btn--secondary`, `.badge--limited`, `.badge--oneonone`, `.badge--neutral`, `.eyebrow--blue`, `.eyebrow--orange`
   - Animation: add `.reveal` to any element for the scroll fade-in (handled by `js/main.js`, no extra JS needed).
3. Alternate eyebrow colors between sections (orange/blue) to keep the existing rhythm.
4. New styles go at the matching `/* SECTION: ... */` block position in `styles.css`, using only existing tokens via `var(--token)`.

## 8. Known pending items

1. **Compress the mp4.** `images/Video-Introduction.mp4` is ~16.4 MB. Re-encode to 2-3 MB: H.264, CRF 26-28, `-movflags +faststart`. Replace the file keeping the same name; no HTML change needed.
2. **Video poster.** Export a real frame of the video (16:9, .webp) to replace the provisional `mentorship_image.webp` poster.
3. **OG image.** Export `images/og-mentorship-one-on-one.webp` (1200x630); the meta tag already points to it.
4. **Real testimonials.** When real mentee quotes exist (with permission), re-add a testimonials section following the v5 card pattern (blue band, 3 cards). Until then the page ships without social proof, on purpose.

## 9. Technical standards

- Mobile-first responsive. Breakpoints used: 640px, 768px, 1024px. Test mentally at 380 / 768 / 1280.
- `loading="lazy"` on all below-the-fold images; hero and header logo use `eager` + `fetchpriority="high"`. The video uses `preload="none"` (see §4).
- Vanilla JS only, in four files: `main.js` (scroll reveal + hamburger menu), `mesh.js` (decorative 3D wireframe; keep the reduced-motion fallback and the offscreen pause), `contact.js` (form AJAX; identical to the homepage file), `i18n.js` (language toggle). All dependency-free.
- Accessibility: keep heading hierarchy (one `h1`, sections use `h2`/`h3`), descriptive alt text, `aria-label` on the video, visible `:focus-visible` styles, `prefers-reduced-motion` respected.
- SEO: `<title>`, meta description, and OG tags live in `<head>`. If copy changes materially, update them.

## 10. Interactivity rules

- All hover effects live in a single `@media (hover: hover)` block in `styles.css` (section `hover-interactivity`). This keeps mobile untouched: touch devices get only subtle `:active` feedback.
- Tap targets: buttons and FAQ summaries keep a min-height of 44px.
- Any new hover effect must go inside that block and be neutralized in the `prefers-reduced-motion` block.

## 11. Color rhythm & 3D decoration rules

- Sections alternate background bands using ONLY the soft tokens: `.section--blue` (`#EFF8FD`) and `.section--orange` (`#FFF2E7`). v6.1 rhythm: hero (default) → video (orange + pattern) → not-a-course (blue) → how-it-works (default) → software (blue, compact) → journey (default) → gallery (orange + pattern) → mentor (default) → fit (default) → career (blue) → pricing (default) → faq (default) → final-cta (gradient band + pattern).
- **3D mesh pattern**: `.section--pattern` adds a static equilateral-triangle grid (inline SVG data URI in `styles.css`) with a radial mask that fades it out at the center so it never competes with the section's content. Orange strokes at `.09` opacity on light bands; the `.final-cta--band` variant uses white strokes at `.12`. Only these two stroke colors are allowed. Content inside a pattern section must sit in `.container` (it carries `z-index: 1`).
- **Animated icosahedron**: `<canvas class="mesh-canvas">` elements are rendered by `js/mesh.js` (brand-orange edges by default, `data-stroke="light"` for the gradient band). They are decorative accents at section corners, hidden below 1024px, `aria-hidden="true"`, paused when offscreen, and reduced to a single static frame under `prefers-reduced-motion`. Never turn them into full-section backgrounds and never add more than one per section.
- The final CTA uses `.final-cta--band`: gradient `135deg, #EF7722 → #F9A335` with white text and `.btn--inverse` / `.btn--outline-light` buttons. These gradient endpoints come from the root site; never introduce other gradient colors.
- The pricing card has a 6px gradient top strip (`::before`). Keep it.
- Icons are inline lucide-style SVGs (`stroke="currentColor"`, stroke-width 2) inside tinted circles (`.how-card__icon`, `.fit__icon`, `.career__stat-icon`). New icons must follow the same pattern; never use emoji or icon fonts.
- Hero image file is `images/NewBanner.webp` (square, framed card style). Mobile caps it at 26rem; from 768px it fills the hero column. The previous hero image, `images/Banner.webp`, now closes the page inside the final CTA band (`.final-cta__media`, framed white card, ~15-17rem) as the last visual push before the buttons. Keep both square.
- The gallery caption is a conversion line (larger type, orange `<strong>` close), not a small legend. Keep that weight if the copy changes.
- The `.fit__result` callout (orange soft box, "Your result:" lead) closes the positive fit card. Keep it factual; never turn it into a job promise.

## 12. Software pills & pipeline strip

- `SECTION: software` uses `.software__pill` components. Two logo treatments: horizontal wordmark logos (ZBrush, Blender, Houdini) use `.software__logo` (height 1.625rem, natural width, no duplicated text name; only the `.software__role` caption accompanies them); square icon logos (Substance Painter) add `.software__logo--icon` (2rem square) and keep the tool name text. Logo files: `Zbrush_Logo.webp`, `blender_logo.webp`, `SubstancePainter.webp`, `Houdini_black_color.webp`. When adding a tool, pick the treatment that matches the logo shape; keep logos on white.
- The `.pipeline` strip at the top of `SECTION: journey` shows the 5 production stages with square-framed images: `Blockout.webp`, `Retopology.webp`, `UVs.webp`, `Texture.webp`, `Rendering.webp`, in pipeline order. Images use `object-fit: contain` on a white frame so full characters are never cropped; don't switch back to `cover`. It illustrates the course flow; it does not replace the 10-week module structure below it and must not contradict it. To swap a stage image, replace the file keeping the same name.
- Both rows are flex-wrap and center-aligned; they stack naturally on mobile. Don't convert them to horizontal scroll containers.

## 13. Career section rules

- `SECTION: career` shows three stat tiles (avg salary, freelance rate, demand) and a salary-by-level column (junior/mid in blue, senior/lead in orange), inside a white card on a blue band. All figures are approximate ranges from public US market data and must stay believable and rounded; never invent precise numbers.
- The disclaimer footnote (`.career__note`) is mandatory: data source, regional variation, and the line that no income is guaranteed by the program. Removing or softening it breaks the page's honesty rules.
- Keep this section before pricing: its funnel role is to justify the $600 investment right before the offer.

## 14. Header v2, contact form & language toggle (added in v6.2)

- **Header** is a replica of the homepage v2 header. Links: Courses -> `https://vinicavalcanti.com/#courses`, Mentorship -> `#top` (this page), Portfolio -> ArtStation, Contact -> `#contact` (local form). The blue `.btn--members` button links to the Hotmart club; the rule `.site-header__links > a.btn--members{color:var(--color-white)}` keeps its text white and must not be removed. Below 768px the nav collapses into the hamburger (`#nav-burger` / `#mobile-menu`, handled in `main.js`). The old header CTA ("Sign up now!") was intentionally removed; the hero and pricing CTAs carry conversion.
- **Contact section** (`SECTION: contact`, before the footer) is a byte-exact replica of the homepage form: FormSubmit endpoint `contact@vinicavalcanti.art`, honeypot `_honey`, AJAX submit via `contact.js` with a plain POST fallback. Status colors use the `--color-status-ok` / `--color-status-error` tokens appended to `:root`. The full-width submit button hovers with `translateY(-2px)` (no scale), like the homepage.
- **Language toggle**: the `EN | PT` button in the header switches every text on the page via `js/i18n.js`, a dictionary of `{selector, en, pt}` entries. The choice persists in `localStorage` under `vc_lang`, the same key the homepage uses, so the language follows the visitor across pages.
- **CRITICAL RULE**: any copy edit in `index.html` MUST be mirrored in the matching `en:` value in `js/i18n.js` (and its `pt:` translation updated). If the dictionary is not updated, the toggle will silently overwrite the edited text with the old string. Elements are targeted by ids (`#compare`, `#how`, `#software`, `#fit`, `#career`, section classes) and structural selectors; do not remove those ids or the `.faq__q` / `.fit__label` wrapper spans, they exist for the toggle.
- Styles for all v6.2 additions live at the end of `styles.css` under the comment "ADDED (home v2 parity)", copied byte-exact from the homepage stylesheet. Keep them grouped there.
