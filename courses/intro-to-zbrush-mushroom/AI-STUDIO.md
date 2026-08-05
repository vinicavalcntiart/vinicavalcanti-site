# AI-STUDIO.md — Intro to ZBrush: Mushroom Landing Page

Guia para qualquer IA (Google AI Studio, Claude, etc.) editar este projeto sem quebrar a identidade visual de vinicavalcanti.com. Leia tudo antes de tocar em qualquer arquivo.

## 1. Visão geral

- **Página:** LP de venda do curso "Intro to ZBrush: Mushroom" — curso introdutório e produto de ENTRADA do funil da Vini Cavalcanti School.
- **Objetivo:** conversão direta para o checkout Hotmart próprio do produto.
- **Público:** iniciantes totais em ZBrush — nenhum conhecimento prévio.
- **Resultado do aluno:** um personagem cogumelo completo — esculpido, pintado (polypaint) e renderizado.
- **Método (ângulo pedagógico da escola):** um conceito por aula; cada aula declara O QUE / POR QUE / OBJETIVO e termina com autoavaliação — o aluno sabe se está pronto antes de avançar.
- **Preço:** $19 · one-time · lifetime · 15-day money-back guarantee.
- **Specs:** 12 videoaulas gravadas · áudio EN · legendas EN e PT · ZBrush (qualquer versão recente).
- **CTA único:** todos os botões de compra apontam para o checkout Hotmart deste produto com `?sck=lp_mushroom`. ATENÇÃO: o ID atual `XXXXXXXXXX` é PLACEHOLDER (ver Pendências).
- **Posicionamento no funil:** vendido separadamente por $19 E incluído de graça no ZBrush for Stylized Characters e na Mentoria. Por isso esta LP tem, DE PROPÓSITO, a seção `next-steps` com links para essas duas páginas — é a única LP autorizada a ter destinos secundários (é a porta de entrada do funil). Não replicar esse padrão nas outras LPs.
- **Idioma da página:** EN por padrão, com toggle EN | PT funcional no header (`js/i18n.js`, mesma mecânica e chave `vc_lang` da homepage).

## 2. Currículo (12 aulas — fonte da verdade)

Fundamentos (1–8): 01 How ZBrush Works - Canvas, Edit Mode and Tools · 02 Advanced Navigation and Sculpting Setup · 03 Subdivision and Essential Brushes · 04 Masks and Polygroups · 05 Gizmo, Transpose and Canvas Setup · 06 SubTools and Symmetry · 07 DynaMesh and Resolution · 08 ZRemesher and Polypaint.
Projeto final (9–12): Cute Mushroom — Part 1 Blocking · Part 2 Shaping and Face · Part 3 Details and Polypaint · Part 4 Render and Export.

## 3. Mapa de arquivos

```
intro-to-zbrush-mushroom/
├── index.html        ← página completa, seções com <!-- SECTION: nome -->
├── css/styles.css    ← tokens no :root; base copiada do template das LPs
├── js/main.js        ← reveal, menu mobile, sticky CTA, guard do vídeo. NÃO EDITAR (compartilhado).
├── js/i18n.js        ← toggle EN | PT: dicionário [seletor, EN, PT], localStorage (vc_lang)
├── js/tracking-params.js ← auto-tag de origem + repasse ao checkout. NÃO EDITAR (compartilhado).
├── images/           ← Hero_Mushroom.mp4 (turntable comprimido), poster 800x800, render 600x600
└── fonts/            ← Inter e Outfit woff2 (400/500/600/700)
```

Seções do index.html na ordem: header (réplica root, NÃO ALTERAR) · hero (banda vermelho-tijolo, vídeo turntable) · studios (NÃO ALTERAR) · modules (2 blocos: Foundations 8 cards + Final Project 4 cards) · identity (banda vermelha: método para iniciantes) · instructor (NÃO ALTERAR, compartilhado) · pricing ($19) · next-steps (funil: stylized + mentoria) · faq (6 `<details>`) · final-cta · footer (réplica, NÃO ALTERAR) · sticky-cta mobile.

## 4. Design tokens (NUNCA alterar sem autorização do Vini)

Root vinicavalcanti.com (imutáveis): laranja `#EF7722`/hover `#d9661b`/soft `#FFF2E7`/grad `#F9A335`; azul `#0CA6DF`/hover `#0995c9`/soft `#EFF8FD`/grad `#7ACEEE`; bg `#FCFBF8`; texto `#060606`; body `#2b2b2b`. Inter (body) + Outfit (display) · radius 28/32px · botões pill.

Específicos deste curso (sampleados do chapéu vermelho-tijolo da arte do cogumelo):
- `--color-navy: #A63A2B` (base) · `--color-navy-deep: #7E2418` · `--color-navy-light: #C25441`
- Nota: os nomes continuam `--color-navy*` por compatibilidade com o CSS compartilhado entre cursos; os valores são do Mushroom.

## 5. O que NÃO pode ser alterado

- Paleta, tipografia, radius, sombras (tokens do :root). Header, footer, studios e instructor (réplicas compartilhadas). `js/main.js` e `js/tracking-params.js`.
- Estrutura de pastas e caminhos relativos.
- CTA: todo link de compra aponta para o checkout Hotmart deste produto (com `sck=lp_mushroom`) ou âncora `#pricing`.
- Honestidade: sem countdown, sem vagas falsas, sem garantia de emprego/renda. A FAQ que avisa que o curso está incluído no Stylized e na Mentoria é INTENCIONAL (evita compra duplicada) — não remover.
- REGRA CRÍTICA do i18n: qualquer edição de texto no `index.html` DEVE ser espelhada no valor EN correspondente do `js/i18n.js` (e a tradução PT atualizada), senão o toggle sobrescreve a edição. Nunca renomear a chave `vc_lang` nem reescrever o mecanismo.
- EXCEÇÃO DOCUMENTADA (analytics): a página NÃO carrega fbevents.js — o PageView do Meta Pixel sai por image pixel direto dentro da trava de domínio de produção (o motor de inferência do fbevents gerava InitiateCheckout falso). Todo evento de funil nasce na integração nativa da Hotmart. NÃO reintroduzir fbevents.js/fbq. GA4 (gtag.js) no head é a exceção padrão de analytics.

## 6. Pendências

- [ ] **BLOQUEANTE: trocar o checkout placeholder.** Todos os links `https://pay.hotmart.com/XXXXXXXXXX?sck=lp_mushroom` (hero, identity, pricing, final-cta, sticky-cta) devem receber o ID real do produto na Hotmart assim que criado. NÃO divulgar a página antes disso.
- [ ] Substituir as artes provisórias (frames extraídos do vídeo) pelas oficiais quando os arquivos chegarem: capa quadrada (og:image + identity), capa wide 800x500 (card da home em `/images/course-Intro_Zbrush_Mushroom.webp`).
- [ ] Adicionar seção "inside the course" com screenshots anotados das aulas (3–6 imagens 1280x720 webp) quando os arquivos chegarem.
- [ ] OG image dedicada 1200×630 (gerar a partir da capa quadrada oficial).
