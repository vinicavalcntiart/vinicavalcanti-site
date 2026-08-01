# AI-STUDIO.md — Retopology in TopoGun 3 Landing Page

Guia para qualquer IA (Google AI Studio, Claude, etc.) editar este projeto sem quebrar a identidade visual de vinicavalcanti.com.

## 1. Visão geral

- **Página:** LP de venda do curso "Retopology in TopoGun 3" — curso individual da Vini Cavalcanti School.
- **Objetivo:** conversão direta para o checkout Hotmart.
- **Público:** artistas 3D de nível intermediário (EN/NA), que já modelam mas travam ou perdem tempo na retopologia.
- **CTA único:** todos os botões de compra apontam para `https://pay.hotmart.com/S105526894H`.
- **Preço:** $39 · one-time · lifetime access · 15-day money-back guarantee.
- **Idioma da página:** EN por padrão, com toggle EN | PT funcional no header (`js/i18n.js`, mesmo mecanismo e chave `vc_lang` do localStorage da homepage — o idioma persiste entre páginas). O HTML fica em inglês; o PT vive só no dicionário do i18n. Curso em EN com legendas PT.
- **Specs do curso:** 3h de vídeo · 4 módulos · Intermediate · TopoGun 3.
- **Bônus (único):** 30% off na TopoGun 3 Perpetual License para todos os alunos.

## 2. Mapa de arquivos

```
02 - Retopology in TopoGun 3/
├── index.html        ← página completa, seções marcadas com <!-- SECTION: nome -->
├── css/styles.css    ← todos os estilos; tokens no :root
├── js/main.js        ← scroll reveal, menu mobile, sticky CTA, guard do vídeo. NÃO EDITAR.
├── js/i18n.js        ← toggle EN | PT: dicionário [seletor, EN, PT], persiste no localStorage (vc_lang)
├── images/           ← webp + mp4 (caminhos relativos ./images/...)
└── fonts/            ← Inter e Outfit em woff2 (400/500/600/700)
```

### Seções do index.html (na ordem)
1. `header` — réplica do root vinicavalcanti.com. **NÃO ALTERAR.**
2. `hero` — fundo azul-profundo do curso, badges de specs, h1, sub, CTA + preço, vídeo turntable.
3. `studios` — strip de autoridade (E-Line Media / Angel Studios / PUGA Studios). **NÃO ALTERAR.**
4. `modules` — grid-4: 01 Clean Topology Foundations · 02 Tricky Areas Resolution · 03 Edge Loops for Animation · 04 Poly Count Optimization.
5. `identity` — banda azul: statement + render 600x600 + CTA inverse.
6. `bonuses` — fundo laranja soft, **card único** (`.bonus-single`, não grid-4): 30% off TopoGun 3 Perpetual License.
7. `instructor` — foto + bio do Vini. **NÃO ALTERAR** (compartilhado entre cursos).
8. `pricing` — card branco, includes em 2 colunas, preço $39, CTA full-width.
9. `faq` — 5 `<details>`.
10. `final-cta` — banda azul, CTA inverse com preço.
11. `footer` — réplica do root. **NÃO ALTERAR.**
12. `sticky-cta` — barra fixa mobile.

## 3. Design tokens (NUNCA alterar sem autorização do Vini)

Root vinicavalcanti.com (imutáveis, iguais em toda LP):
- Laranja `#EF7722` · hover `#d9661b` · soft `#FFF2E7` · grad `#F9A335`
- Azul `#0CA6DF` · hover `#0995c9` · soft `#EFF8FD` · grad `#7ACEEE`
- Bg `#FCFBF8` · texto `#060606` · body `#2b2b2b` · pills `#F5F5F2`/`#F4F4F1`
- Inter (body) + Outfit (display) · radius 28/32px · botões pill

Específicos deste curso (sampleados da arte 600x600 do TopoGun — azul dos personagens):
- `--color-navy: #0A5A9E` (base)
- `--color-navy-deep: #063F73`
- `--color-navy-light: #1470B8`

Nota: os nomes das variáveis continuam `--color-navy*` por compatibilidade com o CSS compartilhado entre cursos; os valores é que são do TopoGun.

## 4. O que PODE ser editado

- Textos de hero, modules, identity, bonuses, pricing, faq e final-cta.
- Imagens, mantendo dimensões e caminhos relativos `./images/nome.webp`.
- Ordem das seções do meio (entre hero e footer).

## 5. O que NÃO pode ser alterado

- Paleta, tipografia, radius, sombras (tokens do :root).
- Header, footer, studios e instructor (compartilhados com o site root e outros cursos).
- `js/main.js`.
- Estrutura de pastas e caminhos relativos.
- CTA: todo link de compra aponta para o checkout Hotmart ou âncora `#pricing`.
- Honestidade: sem countdown, sem vagas falsas, sem garantia de emprego/renda. Reembolso de 15 dias é real (política Hotmart do produto).
- REGRA CRÍTICA do i18n: qualquer edição de texto no `index.html` DEVE ser espelhada no valor EN correspondente do `js/i18n.js` (e a tradução PT atualizada), senão o toggle sobrescreve a edição com o texto antigo. Nunca renomear a chave `vc_lang` nem reescrever o mecanismo do toggle.
- EXCEÇÃO DOCUMENTADA (analytics): o snippet do Meta Pixel no `<head>` (id 999436976070756) é a exceção padrão à regra de sem JS inline — NÃO remover. A página NÃO carrega o fbevents.js: o PageView sai por image pixel direto dentro da trava de domínio de produção (o motor de inferência do fbevents.js gerava InitiateCheckout FALSO no clique dos CTAs, imune a autoConfig=false e a wrappers no window.fbq). Todo evento de funil nasce exclusivamente na integração nativa da Hotmart em pay.hotmart.com — NÃO reintroduzir fbevents.js/fbq na página.

## 6. Como adicionar novas seções

Seguir o padrão: `<section class="section" id="nome"><div class="container">...` com `<!-- SECTION: nome -->` acima. Cards usam `.card` (+ `.module-card`/`.bonus-card`), títulos `.h-display`, eyebrows `.eyebrow .eyebrow--orange|--blue`, botões `.btn .btn--primary|--inverse`. Animação de entrada: adicionar classe `.reveal`.

## 7. Pendências

- [ ] Comprimir `Turnable_Topogun.mp4` (7.5MB → 2-3MB: H.264 CRF 26-28, `-movflags +faststart`, sem áudio).
- [x] Poster real exportado do primeiro frame do vídeo: `images/topogun-poster-720x720.webp` (720x720, mesma proporção do vídeo; usado como poster do vídeo e og:image). O nome antigo `topogun-poster-1280x720.webp` nunca existiu (era 404).
- [ ] Opcional: OG image dedicada 1200×630.
