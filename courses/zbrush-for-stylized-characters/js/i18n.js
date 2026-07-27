/* i18n.js - EN | PT toggle for ZBrush for Stylized Characters LP
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
    ['.hero h1', 'ZBrush for <span class="accent-orange">Stylized Characters</span>.', 'ZBrush para <span class="accent-orange">Personagens Estilizados</span>.'],
    ['.hero__sub', 'From concept to finished sculpt — the complete process for designing and sculpting original stylized characters with an identity of their own.', 'Do conceito ao sculpt finalizado — o processo completo para desenhar e esculpir personagens estilizados originais com identidade própria.'],
    ['#hero-buy', 'Get this course', 'Quero este curso'],
    ['.hero__price-label', 'Price', 'Preço'],
    ['.hero__price-note', 'One-time · Lifetime access', 'Pagamento único · Acesso vitalício'],
    ['.hero__media-caption', 'Real-time turntable — the sculpt you\'ll build in this course.', 'Turntable em tempo real — o sculpt que você vai construir neste curso.'],

    ['.studios__line', 'Taught by a <strong>Senior Character Artist</strong> who lives this process every day inside real studios.', 'Ensinado por um <strong>Senior Character Artist</strong> que vive esse processo todos os dias dentro de estúdios reais.'],

    ['#modules .section__head .eyebrow', 'Lessons included', 'Aulas incluídas'],
    ['#modules .section__head h2', 'Everything you\'ll learn', 'Tudo o que você vai aprender'],
    ['#modules .section__lead', 'The same four blocks Vini uses in production — creative decisions and technical execution, side by side.', 'Os mesmos quatro blocos que o Vini usa em produção — decisões criativas e execução técnica, lado a lado.'],
    ['#modules .grid-4 article:nth-of-type(1) h3', 'Design and volume', 'Design e volume'],
    ['#modules .grid-4 article:nth-of-type(1) p', 'Read a concept like a character artist and translate it into strong primary volumes.', 'Leia um conceito como um character artist e traduza-o em volumes primários fortes.'],
    ['#modules .grid-4 article:nth-of-type(2) h3', 'Form language', 'Linguagem de formas'],
    ['#modules .grid-4 article:nth-of-type(2) p', 'Shape vocabulary and silhouette control — what makes a character feel intentional.', 'Vocabulário de formas e controle de silhueta — o que faz um personagem parecer intencional.'],
    ['#modules .grid-4 article:nth-of-type(3) h3', 'Stylized sculpting', 'Escultura estilizada'],
    ['#modules .grid-4 article:nth-of-type(3) p', 'Sculpt personality, not just polygons. Build the character\'s identity directly in 3D.', 'Esculpa personalidade, não só polígonos. Construa a identidade do personagem direto no 3D.'],
    ['#modules .grid-4 article:nth-of-type(4) h3', 'Final refinement', 'Refinamento final'],
    ['#modules .grid-4 article:nth-of-type(4) p', 'Surface polish, detailing and presentation for a portfolio-ready final sculpt.', 'Polimento de superfície, detalhamento e apresentação para um sculpt final pronto para o portfólio.'],

    ['.identity__body h2', 'You can use ZBrush.<br>Now make it look like <span class="accent-orange">yours</span>.', 'Você sabe usar o ZBrush.<br>Agora faça parecer <span class="accent-orange">seu</span>.'],
    ['.identity__body p', 'This course is not about tools. It\'s about the creative decisions that give a sculpt an identity — taught by a Visual Development artist, from blockout to final.', 'Este curso não é sobre ferramentas. É sobre as decisões criativas que dão identidade a um sculpt — ensinado por um artista de Visual Development, do blockout ao final.'],
    ['.identity__body .btn--inverse', 'Start sculpting today', 'Comece a esculpir hoje'],

    ['#bonuses .section__head .eyebrow', 'Exclusive student bonus', 'Bônus exclusivo para alunos'],
    ['#bonuses .section__head h2', 'Four bonuses included', 'Quatro bônus incluídos'],
    ['#bonuses .grid-4 article:nth-of-type(1) h3', 'Topology basemesh', 'Basemesh de topologia'],
    ['#bonuses .grid-4 article:nth-of-type(1) p', 'Exclusive basemesh to jump straight into sculpting with clean topology.', 'Basemesh exclusivo para começar a esculpir direto com topologia limpa.'],
    ['#bonuses .grid-4 article:nth-of-type(2) h3', 'Brush pack', 'Pacote de brushes'],
    ['#bonuses .grid-4 article:nth-of-type(2) p', 'The brushes Vini actually uses in production, ready to install.', 'Os brushes que o Vini realmente usa em produção, prontos para instalar.'],
    ['#bonuses .grid-4 article:nth-of-type(3) h3', 'Custom ZBrush UI', 'UI personalizada do ZBrush'],
    ['#bonuses .grid-4 article:nth-of-type(3) p', 'Vini\'s own interface layout, built for a faster stylized workflow.', 'O layout de interface do próprio Vini, feito para um workflow estilizado mais rápido.'],
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
    ['.pricing__includes li:nth-child(1)', '6h30min of video lessons', '6h30min de videoaulas'],
    ['.pricing__includes li:nth-child(2)', '4 modules, from concept to final sculpt', '4 módulos, do conceito ao sculpt final'],
    ['.pricing__includes li:nth-child(3)', 'Exclusive topology basemesh + brush pack', 'Basemesh de topologia exclusivo + pacote de brushes'],
    ['.pricing__includes li:nth-child(4)', 'Custom ZBrush UI', 'UI personalizada do ZBrush'],
    ['.pricing__includes li:nth-child(5)', '30% off TopoGun 3 Perpetual License', '30% off na licença perpétua do TopoGun 3'],
    ['.pricing__includes li:nth-child(6)', '15-day money-back guarantee', 'Garantia de reembolso de 15 dias'],
    ['.pricing__price-note', 'one-time payment', 'pagamento único'],
    ['#pricing-buy', 'Get this course', 'Quero este curso'],
    ['.pricing__scarcity', 'Secure checkout via Hotmart. Study at your own pace, come back to the lessons whenever you want.', 'Checkout seguro via Hotmart. Estude no seu ritmo e volte às aulas quando quiser.'],

    ['#faq .section__head h2', 'Frequently asked questions', 'Perguntas frequentes'],
    ['#faq .faq__item:nth-of-type(1) summary', 'Do I need prior experience in 3D? <span class="faq__icon">+</span>', 'Preciso de experiência prévia em 3D? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(1) .faq__answer', 'The course is designed for beginner and intermediate artists. Basic familiarity with ZBrush navigation helps, but every creative and technical decision is explained step by step.', 'O curso foi pensado para artistas iniciantes e intermediários. Familiaridade básica com a navegação do ZBrush ajuda, mas cada decisão criativa e técnica é explicada passo a passo.'],
    ['#faq .faq__item:nth-of-type(2) summary', 'What software will I need? <span class="faq__icon">+</span>', 'Quais softwares vou precisar? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(2) .faq__answer', 'ZBrush is the only software required for the course. The TopoGun 3 discount is a bonus for when you move into retopology — it\'s not needed to follow the lessons.', 'O ZBrush é o único software necessário para o curso. O desconto do TopoGun 3 é um bônus para quando você for para a retopologia — não é preciso para acompanhar as aulas.'],
    ['#faq .faq__item:nth-of-type(3) summary', 'Is there a deadline to finish? <span class="faq__icon">+</span>', 'Existe prazo para concluir? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(3) .faq__answer', 'No. After purchase, access is lifetime. Study at your own pace and come back to the content as many times as you want.', 'Não. Depois da compra, o acesso é vitalício. Estude no seu ritmo e volte ao conteúdo quantas vezes quiser.'],
    ['#faq .faq__item:nth-of-type(4) summary', 'Is the course in English or Portuguese? <span class="faq__icon">+</span>', 'O curso é em inglês ou português? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(4) .faq__answer', 'The lessons are in English with Portuguese subtitles.', 'As aulas são em inglês com legendas em português.'],
    ['#faq .faq__item:nth-of-type(5) summary', 'What if I\'m not happy with the course? <span class="faq__icon">+</span>', 'E se eu não gostar do curso? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(5) .faq__answer', 'You have a 15-day money-back guarantee after purchase — plenty of time to explore the content and decide whether it\'s the right fit for you.', 'Você tem garantia de reembolso de 15 dias após a compra — tempo de sobra para explorar o conteúdo e decidir se é para você.'],

    ['.final-cta h2', 'One sculpt. One workflow.<br>Yours forever.', 'Um sculpt. Um workflow.<br>Seu para sempre.'],
    ['.final-cta .container > p', 'From concept to finished sculpt, with every decision explained.', 'Do conceito ao sculpt finalizado, com cada decisão explicada.'],
    ['#final-buy', 'Get this course — $49', 'Quero este curso — $49'],

    ['.sticky-cta__label', 'ZBrush course', 'Curso de ZBrush'],
    ['.sticky-cta > .btn', 'Get this course', 'Quero este curso']
  ];

  /* [selector, attribute, EN, PT] */
  var ATTR = [
    ['.video-frame--hero video', 'aria-label', 'Turntable of the stylized character sculpted in the course', 'Turntable do personagem estilizado esculpido no curso']
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
