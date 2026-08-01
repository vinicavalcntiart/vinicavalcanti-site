# AI-STUDIO.md — Homepage vinicavalcanti (.art) — v4

Guia para qualquer IA editar este projeto sem quebrar a identidade visual.

## 1. Visão geral
Homepage estática da Vini Cavalcanti School (plano B, domínio vinicavalcanti.art). Objetivo: apresentar a escola, listar os 3 cursos, destacar a Mentoria como produto principal (billboard estilo "série em destaque"), provas sociais e contato. CTA principal: cursos e mentoria apontam para as páginas em vinicavalcanti.com. Idioma: EN por padrão, com toggle EN | PT funcional no header (traduz a página inteira via js/i18n.js).

## 2. Mapa de arquivos
- `index.html` — página única, seções marcadas com `<!-- SECTION: nome -->` na ordem: header, hero, school, courses, mentorship, testimonials, faq, contact, footer.
- `css/styles.css` — minificado, UMA regra por linha, blocos com `/* SECTION:nome */`. NUNCA reformatar (upload aborta com CSS expandido).
- `js/main.js` — menu mobile, reveal on scroll. `js/contact.js` — envio do formulário FormSubmit com fallback POST. `js/i18n.js` — toggle EN | PT funcional: dicionário de seletores CSS com strings EN/PT, aplica innerHTML, persiste em localStorage (`vc_lang`) e troca o atributo lang do html. Ao editar textos da página, atualizar TAMBÉM o dicionário no i18n.js, senão o toggle sobrescreve a edição. `js/tracking-params.js` — auto-tag de origem na URL (utm_source=direto&src=direto&sck=<id> quando a visita chega sem parâmetros; preserva os que vierem de anúncio/hotlink; persiste via sessionStorage `vc_track`) e repasse de src/utm_source aos links de checkout, mantendo o sck=lp_* fixo (arquivo compartilhado, idêntico em todas as páginas).
- `images/` — webp. `fonts/` — 8 woff2 (Inter 400/500/600/700, Outfit 400/500/600/700).

## 3. Design tokens (NUNCA alterar sem autorização)
Laranja `#EF7722` (hover `#d9661b`, soft `#FFF2E7`, grad `#F9A335`). Azul `#0CA6DF` (hover `#0995c9`, soft `#EFF8FD`, grad `#7ACEEE`). Bg `#FCFBF8`, texto `#060606`, body `#2b2b2b`. Fontes Inter (body) + Outfit (display). Radius 28/32px, botões pill. Fundo escuro do billboard da mentoria: `#0B0D0C` (neutro quase preto, usado só nessa banda).

## 4. Seções e decisões de layout
- **hero**: mosaico 12x12 com 10 artes do portfólio. Destaques (6x6, lado a lado no topo): `vinicius-cavalcanti-boardinsta01-3.webp` (esquerda) e `portfolio-character.webp` (direita). Abaixo, 8 tiles 3x3 na ordem: novice, warden, foxboard, warrior, render, stars, wip, `vinicius-cavalcanti-board1-1_1x.webp`. Não reordenar sem recalcular as áreas (soma deve dar 144).
- **mentorship**: banda escura full-width `mship-billboard` com pattern triangular branco (`section--pattern-light`), tudo centralizado: brand eyebrow laranja, arte `mentorship_image.webp` como banner arredondado no topo (21/9 em desktop), badges Season 2 / Limited Spots / One-on-One, título grande, CTA "Start Now!" e preço $600.
- **testimonials**: 4 cards editoriais com avatar de iniciais (gradiente laranja/azul), nome+cargo no topo, citação com frase-chave marcada (`span.hl`, marca-texto), aspas decorativas no canto. Cards 2 e 3 com fundo tintado (blue-soft / orange-soft); em desktop os cards pares descem 1.5rem (stagger). Depoimentos reais e autorizados. Não inventar novos.
- **contact**: fundo laranja soft com pattern triangular laranja (`section--pattern-orange`); hover do botão full-width do formulário é translateY(-2px), sem scale.
- Demais seções: header/footer são réplica do root, não alterar entre versões.

## 5. O que pode ser editado
Textos, preços, ordem dos cursos, imagens (mantendo dimensões e nomes descritivos), perguntas do FAQ.

## 6. O que NÃO pode ser alterado
Paleta, tipografia, logo, estrutura de pastas, caminhos relativos (`./images/...`), CSS minificado, honestidade do copy (sem countdown, sem vagas falsas, sem promessa de emprego/renda), CTAs dos cursos para as páginas individuais em vinicavalcanti.com.

EXCEÇÃO DOCUMENTADA (analytics): o projeto proíbe JS inline, mas os snippets de analytics no `<head>` (todas as 5 páginas) são a exceção padrão para código base de analytics: Meta Pixel (id 999436976070756) e Google Analytics 4 / gtag.js (Measurement ID G-ZQB2W7YE9M). NÃO remover o pixel nem o GA4 achando que é violação da regra de inline JS. O Pixel dispara APENAS PageView e só executa no domínio de produção (guard de hostname vinicavalcanti.com — impede eventos falsos em previews/dev); o InitiateCheckout é responsabilidade exclusiva da integração nativa da Hotmart no checkout (pay.hotmart.com) — NÃO readicionar esse evento nas páginas.

## 7. Como adicionar novas seções
Seguir o padrão: `<section class="section" id="nome">` + `<div class="container">` + `<div class="section__head reveal">` com eyebrow + h2.h-display + p.section__lead. Cards usam `.card`/`.card--lg`. Adicionar `reveal` para animação de entrada. Marcar com `<!-- SECTION: nome -->` no HTML e `/* SECTION:nome */` no CSS.

## 8. Pendências
1. Ativar FormSubmit no primeiro envio real do domínio vivo (email de confirmação chega em contact@vinicavalcanti.art, clicar Activate uma vez).
2. OG image dedicada 1200x630 (placeholder atual: `images/portfolio-warrior.webp`).
3. Cor do billboard da mentoria (`#0B0D0C`) foi definida como neutro escuro; se quiser tom amostrado da arte, informar hex.
