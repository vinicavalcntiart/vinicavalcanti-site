/* i18n.js - EN | PT toggle for Character Design: Baby Allosaurus LP
   Same mechanism and storage key (vc_lang) as the homepage js/i18n.js:
   dictionary keyed by CSS selectors, language persists across pages.
   RULE: whenever a text on the page is edited, update the matching entry here,
   otherwise the toggle will overwrite the edit with the old string. */
(function () {
  'use strict';

  /* [selector, EN innerHTML, PT innerHTML] - applied to ALL matches */
  var STR = [
    ['#nav-link-courses, #mobile-menu a[href$="#courses"], .site-footer__links a[href$="#courses"]', 'Courses', 'Cursos'],
    ['#nav-link-mentorship, #mobile-menu a[href$="#mentorship"], .site-footer__links a[href$="#mentorship"]', 'Mentorship', 'Mentoria'],
    ['#nav-link-portfolio, #mobile-menu a[href*="artstation"]', 'Portfolio', 'Portfólio'],
    ['#nav-link-contact, #mobile-menu a[href$="#contact"]', 'Contact', 'Contato'],
    ['#nav-members-desktop, #mobile-menu .btn--members', 'Members Area', 'Área de Membros'],

    ['.hero__badges .eyebrow--course', 'Course', 'Curso'],
    ['.hero__badges span:nth-child(2)', 'Beginner / Intermediate', 'Iniciante / Intermediário'],
    ['.hero__badges span:nth-child(3)', 'EN (PT Subtitles)', 'EN (Legendas PT)'],
    ['.hero h1', 'Character Design: <span class="accent-orange">Baby Allosaurus</span>.', 'Character Design: <span class="accent-orange">Baby Allosaurus</span>.'],
    ['.hero__sub', 'From storytelling to final render — a complete stylized character pipeline across 4 modules, built around one memorable character.', 'Do storytelling ao render final — um pipeline completo de personagem estilizado em 4 módulos, construído em torno de um personagem memorável.'],
    ['#hero-buy', 'Get this course', 'Quero este curso'],
    ['.hero__price-label', 'Price', 'Preço'],
    ['.hero__price-note', 'One-time · Lifetime access', 'Pagamento único · Acesso vitalício'],
    ['.hero__media-caption', 'Sculpt timelapse — the Baby Allosaurus you\'ll build in this course.', 'Timelapse do sculpt — o Baby Allosaurus que você vai construir neste curso.'],

    ['.studios__line', 'Taught by a <strong>Senior Character Artist</strong> who lives this process every day inside real studios.', 'Ensinado por um <strong>Senior Character Artist</strong> que vive esse processo todos os dias dentro de estúdios reais.'],

    ['#modules .section__head .eyebrow', 'Lessons included', 'Aulas incluídas'],
    ['#modules .section__head h2', 'Everything you\'ll learn', 'Tudo o que você vai aprender'],
    ['#modules .section__lead', 'Four modules, one character — creative decisions and technical execution, side by side.', 'Quatro módulos, um personagem — decisões criativas e execução técnica, lado a lado.'],
    ['#modules .grid-4 article:nth-of-type(1) h3', 'Foundations — Storytelling and Character Design', 'Fundamentos — Storytelling e Character Design'],
    ['#modules .grid-4 article:nth-of-type(1) p', 'Build the character before you ever open ZBrush: story, intention and the design decisions that make it memorable.', 'Construa o personagem antes mesmo de abrir o ZBrush: história, intenção e as decisões de design que o tornam memorável.'],
    ['#modules .grid-4 article:nth-of-type(2) h3', 'ZBrush — Blockout and Chibi Proportions', 'ZBrush — Blockout e Proporções Chibi'],
    ['#modules .grid-4 article:nth-of-type(2) p', 'Lock the silhouette and find charming, readable chibi proportions straight from the blockout.', 'Trave a silhueta e encontre proporções chibi carismáticas e legíveis já no blockout.'],
    ['#modules .grid-4 article:nth-of-type(3) h3', 'ZBrush — Sculpting, Detailing, and Expression', 'ZBrush — Escultura, Detalhamento e Expressão'],
    ['#modules .grid-4 article:nth-of-type(3) p', 'Sculpt personality, not just polygons — form, surface detail and the expression that sells the story.', 'Esculpa personalidade, não só polígonos — forma, detalhe de superfície e a expressão que vende a história.'],
    ['#modules .grid-4 article:nth-of-type(4) h3', 'Final Render — Lighting, Scene, and Visual Storytelling', 'Render Final — Iluminação, Cena e Storytelling Visual'],
    ['#modules .grid-4 article:nth-of-type(4) p', 'Compose, light and render the final shot in Blender — a portfolio-ready image that tells the story.', 'Componha, ilumine e renderize o shot final no Blender — uma imagem pronta para o portfólio que conta a história.'],

    ['.identity__body h2', 'Stop modeling shapes.<br>Start telling <span class="accent-orange">stories</span>.', 'Pare de modelar formas.<br>Comece a contar <span class="accent-orange">histórias</span>.'],
    ['.identity__body p', 'Your sculpts are technical. They should be memorable. This course is about the decisions that make a character feel alive — from the first idea to the final composed render.', 'Seus sculpts são técnicos. Eles deveriam ser memoráveis. Este curso é sobre as decisões que fazem um personagem parecer vivo — da primeira ideia ao render final composto.'],
    ['.identity__body .btn--inverse', 'Start your character today', 'Comece seu personagem hoje'],

    ['#bonuses .section__head .eyebrow', 'Exclusive student bonus', 'Bônus exclusivo para alunos'],
    ['#bonuses .section__head h2', 'Four bonuses included', 'Quatro bônus incluídos'],
    ['#bonuses .grid-4 article:nth-of-type(1) h3', 'Reference sheet pack', 'Pacote de reference sheets'],
    ['#bonuses .grid-4 article:nth-of-type(1) p', 'Turnaround sheets and study references for the Baby Allosaurus, ready to use.', 'Turnaround sheets e referências de estudo do Baby Allosaurus, prontas para usar.'],
    ['#bonuses .grid-4 article:nth-of-type(2) h3', 'Custom brush pack', 'Pacote de brushes personalizados'],
    ['#bonuses .grid-4 article:nth-of-type(2) p', 'The brushes Vini actually uses in production, ready to install.', 'Os brushes que o Vini realmente usa em produção, prontos para instalar.'],
    ['#bonuses .grid-4 article:nth-of-type(3) h3', 'HDRI lighting pack', 'Pacote de HDRIs de iluminação'],
    ['#bonuses .grid-4 article:nth-of-type(3) p', 'Sunset HDRIs used in the course, for the final render and beyond.', 'HDRIs de pôr do sol usados no curso, para o render final e além.'],
    ['#bonuses .grid-4 article:nth-of-type(4) h3', '30% off TopoGun 3', '30% off no TopoGun 3'],
    ['#bonuses .grid-4 article:nth-of-type(4) p', 'Discount on the TopoGun 3 Perpetual License for your retopology stage.', 'Desconto na licença perpétua do TopoGun 3 para a sua etapa de retopologia.'],

    ['#instructor .eyebrow', 'Your instructor', 'Seu instrutor'],
    ['#instructor h2', 'Learn from someone who\'s inside the industry, not just talking about it.', 'Aprenda com alguém que está dentro da indústria, não só falando sobre ela.'],
    ['.instructor__bio', 'Hi, I\'m <span class="accent-orange"><strong>Vini Cavalcanti</strong></span> — <strong>Senior 3D Character Artist</strong> with <strong><em>10+ years of experience</em></strong> in games and entertainment, focused on <em>visual development</em> and <em>stylized characters</em>. Currently at <strong>E-Line Media</strong> on <strong>Endstar</strong>, with credits on <em>The Wingfeather Saga</em> (<strong>Angel Studios</strong>) and games like <em>Wonderbox</em> at <strong>PUGA Studios</strong>.', 'Oi, eu sou <span class="accent-orange"><strong>Vini Cavalcanti</strong></span> — <strong>Senior 3D Character Artist</strong> com <strong><em>10+ anos de experiência</em></strong> em games e entretenimento, focado em <em>desenvolvimento visual</em> e <em>personagens estilizados</em>. Atualmente na <strong>E-Line Media</strong> no <strong>Endstar</strong>, com créditos em <em>The Wingfeather Saga</em> (<strong>Angel Studios</strong>) e games como <em>Wonderbox</em> na <strong>PUGA Studios</strong>.'],
    ['.instructor__pills span:nth-child(1)', 'Senior Artist', 'Artista Sênior'],
    ['.instructor__pills span:nth-child(2)', '10+ years exp', '10+ anos de exp'],
    ['.instructor__pills span:nth-child(3)', 'Industry active', 'Ativo na indústria'],

    ['.pricing__badges .badge--limited', 'Lifetime access', 'Acesso vitalício'],
    ['.pricing__badges .badge--oneonone', 'EN · PT Subtitles', 'EN · Legendas PT'],
    ['.pricing__includes li:nth-child(1)', '7h30min of video lessons', '7h30min de videoaulas'],
    ['.pricing__includes li:nth-child(2)', '4 modules, from storytelling to final render', '4 módulos, do storytelling ao render final'],
    ['.pricing__includes li:nth-child(3)', 'Reference sheet pack + custom brush pack', 'Pacote de reference sheets + brushes personalizados'],
    ['.pricing__includes li:nth-child(4)', 'Sunset HDRI lighting pack', 'Pacote de HDRIs de pôr do sol'],
    ['.pricing__includes li:nth-child(5)', '30% off TopoGun 3 Perpetual License', '30% off na licença perpétua do TopoGun 3'],
    ['.pricing__includes li:nth-child(6)', '15-day money-back guarantee', 'Garantia de reembolso de 15 dias'],
    ['.pricing__price-note', 'one-time payment', 'pagamento único'],
    ['#pricing-buy', 'Get this course', 'Quero este curso'],
    ['.pricing__scarcity', 'Secure checkout via Hotmart. Study at your own pace, come back to the lessons whenever you want.', 'Checkout seguro via Hotmart. Estude no seu ritmo e volte às aulas quando quiser.'],

    ['#faq .section__head h2', 'Frequently asked questions', 'Perguntas frequentes'],
    ['#faq .faq__item:nth-of-type(1) summary', 'Do I need prior experience in 3D? <span class="faq__icon">+</span>', 'Preciso de experiência prévia em 3D? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(1) .faq__answer', 'The course is designed for beginner and intermediate artists. Basic familiarity with ZBrush navigation helps, but every creative and technical decision is explained step by step.', 'O curso foi pensado para artistas iniciantes e intermediários. Familiaridade básica com a navegação do ZBrush ajuda, mas cada decisão criativa e técnica é explicada passo a passo.'],
    ['#faq .faq__item:nth-of-type(2) summary', 'What software will I need? <span class="faq__icon">+</span>', 'Quais softwares vou precisar? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(2) .faq__answer', 'ZBrush for sculpting and Blender (free) for the final scene and render. The TopoGun 3 discount is a bonus for when you move into retopology — it\'s not needed to follow the lessons.', 'ZBrush para a escultura e Blender (gratuito) para a cena e o render finais. O desconto do TopoGun 3 é um bônus para quando você for para a retopologia — não é preciso para acompanhar as aulas.'],
    ['#faq .faq__item:nth-of-type(3) summary', 'Is there a deadline to finish? <span class="faq__icon">+</span>', 'Existe prazo para concluir? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(3) .faq__answer', 'No. After purchase, access is lifetime. Study at your own pace and come back to the content as many times as you want.', 'Não. Depois da compra, o acesso é vitalício. Estude no seu ritmo e volte ao conteúdo quantas vezes quiser.'],
    ['#faq .faq__item:nth-of-type(4) summary', 'Is the course in English or Portuguese? <span class="faq__icon">+</span>', 'O curso é em inglês ou português? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(4) .faq__answer', 'The lessons are in English with Portuguese subtitles.', 'As aulas são em inglês com legendas em português.'],
    ['#faq .faq__item:nth-of-type(5) summary', 'What if I\'m not happy with the course? <span class="faq__icon">+</span>', 'E se eu não gostar do curso? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(5) .faq__answer', 'You have a 15-day money-back guarantee after purchase — plenty of time to explore the content and decide whether it\'s the right fit for you.', 'Você tem garantia de reembolso de 15 dias após a compra — tempo de sobra para explorar o conteúdo e decidir se é para você.'],

    ['.final-cta h2', 'One story. One pipeline.<br>Yours forever.', 'Uma história. Um pipeline.<br>Seu para sempre.'],
    ['.final-cta .container > p', 'From storytelling to final render, with every decision explained.', 'Do storytelling ao render final, com cada decisão explicada.'],
    ['#final-buy', 'Get this course — $49', 'Quero este curso — $49'],

    ['.sticky-cta__label', 'Baby Allosaurus course', 'Curso Baby Allosaurus'],
    ['.sticky-cta > .btn', 'Get this course', 'Quero este curso']
  ];

  /* [selector, attribute, EN, PT] */
  var ATTR = [
    ['.video-frame--hero video', 'aria-label', 'Sculpting timelapse of the Baby Allosaurus character created in the course', 'Timelapse de escultura do personagem Baby Allosaurus criado no curso']
  ];

  var KEY = 'vc_lang';

  function apply(lang) {
    var i = lang === 'pt' ? 2 : 1;
    STR.forEach(function (row) {
      document.querySelectorAll(row[0]).forEach(function (el) { el.innerHTML = row[i]; });
    });
    ATTR.forEach(function (row) {
      var j = lang === 'pt' ? 3 : 2;
      document.querySelectorAll(row[0]).forEach(function (el) { el.setAttribute(row[1], row[j]); });
    });
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
    document.querySelectorAll('.site-header__lang').forEach(function (btn) {
      btn.innerHTML = lang === 'pt' ? 'EN | <strong>PT</strong>' : '<strong>EN</strong> | PT';
      btn.setAttribute('aria-label', lang === 'pt' ? 'Mudar idioma para inglês' : 'Switch language to Portuguese');
    });
    try { localStorage.setItem(KEY, lang); } catch (e) { /* private mode */ }
  }

  function current() {
    try { return localStorage.getItem(KEY) === 'pt' ? 'pt' : 'en'; } catch (e) { return 'en'; }
  }

  function init() {
    var lang = current();
    if (lang === 'pt') { apply('pt'); } else { apply('en'); }
    document.querySelectorAll('.site-header__lang').forEach(function (btn) {
      btn.addEventListener('click', function () {
        apply(current() === 'pt' ? 'en' : 'pt');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
