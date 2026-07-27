/* i18n.js - EN | PT toggle for Retopology in TopoGun 3 LP
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
    ['.hero__badges span:nth-child(2)', 'Intermediate', 'Intermediário'],
    ['.hero__badges span:nth-child(3)', 'EN (PT Subtitles)', 'EN (Legendas PT)'],
    ['.hero h1', 'Retopology in <span class="accent-orange">TopoGun 3</span>.', 'Retopologia no <span class="accent-orange">TopoGun 3</span>.'],
    ['.hero__sub', 'Clean, efficient topology is what separates an amateur model from a production-ready one.', 'Topologia limpa e eficiente é o que separa um modelo amador de um modelo pronto para produção.'],
    ['#hero-buy', 'Get this course', 'Quero este curso'],
    ['.hero__price-label', 'Price', 'Preço'],
    ['.hero__price-note', 'One-time · Lifetime access', 'Pagamento único · Acesso vitalício'],
    ['.hero__media-caption', 'Real-time turntable — clean production topology from this course.', 'Turntable em tempo real — topologia limpa de produção feita neste curso.'],

    ['.studios__line', 'Taught by a <strong>Senior Character Artist</strong> who lives this process every day inside real studios.', 'Ensinado por um <strong>Senior Character Artist</strong> que vive esse processo todos os dias dentro de estúdios reais.'],

    ['#modules .section__head .eyebrow', 'Lessons included', 'Aulas incluídas'],
    ['#modules .section__head h2', 'Everything you\'ll learn', 'Tudo o que você vai aprender'],
    ['#modules .section__lead', 'Four modules that take retopology from the step you dread to the step you own — the same workflow Vini uses in production.', 'Quatro módulos que levam a retopologia da etapa que você teme para a etapa que você domina — o mesmo workflow que o Vini usa em produção.'],
    ['#modules .grid-4 article:nth-of-type(1) h3', 'Clean Topology Foundations', 'Fundamentos de Topologia Limpa'],
    ['#modules .grid-4 article:nth-of-type(1) p', 'The rules of production-ready topology — quads, poles and edge flow, and why they matter downstream.', 'As regras da topologia pronta para produção — quads, poles e edge flow, e por que eles importam nas etapas seguintes.'],
    ['#modules .grid-4 article:nth-of-type(2) h3', 'Tricky Areas Resolution', 'Resolução de Áreas Difíceis'],
    ['#modules .grid-4 article:nth-of-type(2) p', 'Hands, faces and complex junctions — solve the areas where most retopos fall apart.', 'Mãos, rostos e junções complexas — resolva as áreas onde a maioria das retopologias desmorona.'],
    ['#modules .grid-4 article:nth-of-type(3) h3', 'Edge Loops for Animation', 'Edge Loops para Animação'],
    ['#modules .grid-4 article:nth-of-type(3) p', 'Place loops that deform cleanly, so your models hold up in rigging and animation.', 'Posicione loops que deformam de forma limpa, para seus modelos aguentarem rigging e animação.'],
    ['#modules .grid-4 article:nth-of-type(4) h3', 'Poly Count Optimization', 'Otimização de Poly Count'],
    ['#modules .grid-4 article:nth-of-type(4) p', 'Hit your budget without losing the silhouette — density where it counts, economy everywhere else.', 'Atinja o budget sem perder a silhueta — densidade onde importa, economia em todo o resto.'],

    ['.identity__body h2', 'Retopology is the step everyone dreads.<br>Make it the one you <span class="accent-orange">master</span>.', 'Retopologia é a etapa que todo mundo teme.<br>Faça dela a etapa que você <span class="accent-orange">domina</span>.'],
    ['.identity__body p', 'It\'s the step many artists avoid — and the one that makes all the difference in the final result. This course is hands-on: efficient, clean topology in TopoGun 3, without the mistakes that hold beginners back.', 'É a etapa que muitos artistas evitam — e a que faz toda a diferença no resultado final. Este curso é mão na massa: topologia limpa e eficiente no TopoGun 3, sem os erros que seguram os iniciantes.'],
    ['.identity__body .btn--inverse', 'Master retopology today', 'Domine a retopologia hoje'],

    ['#bonuses .section__head .eyebrow', 'Exclusive student bonus', 'Bônus exclusivo para alunos'],
    ['#bonuses .section__head h2', 'One bonus that pays off immediately', 'Um bônus que se paga imediatamente'],
    ['#bonuses .bonus-single h3', '30% off the TopoGun 3 Perpetual License', '30% off na Licença Perpétua do TopoGun 3'],
    ['#bonuses .bonus-single p', 'Every student receives an exclusive 30% discount on the TopoGun 3 Perpetual License — the same software used throughout the course, yours to keep.', 'Todo aluno recebe um desconto exclusivo de 30% na Licença Perpétua do TopoGun 3 — o mesmo software usado ao longo do curso, seu para sempre.'],

    ['#instructor .eyebrow', 'Your instructor', 'Seu instrutor'],
    ['#instructor h2', 'Learn from someone who\'s inside the industry, not just talking about it.', 'Aprenda com alguém que está dentro da indústria, não só falando sobre ela.'],
    ['.instructor__bio', 'Hi, I\'m <span class="accent-orange"><strong>Vini Cavalcanti</strong></span> — <strong>Senior 3D Character Artist</strong> with <strong><em>10+ years of experience</em></strong> in games and entertainment, focused on <em>visual development</em> and <em>stylized characters</em>. Currently at <strong>E-Line Media</strong> on <strong>Endstar</strong>, with credits on <em>The Wingfeather Saga</em> (<strong>Angel Studios</strong>) and games like <em>Wonderbox</em> at <strong>PUGA Studios</strong>.', 'Oi, eu sou <span class="accent-orange"><strong>Vini Cavalcanti</strong></span> — <strong>Senior 3D Character Artist</strong> com <strong><em>10+ anos de experiência</em></strong> em games e entretenimento, focado em <em>desenvolvimento visual</em> e <em>personagens estilizados</em>. Atualmente na <strong>E-Line Media</strong> no <strong>Endstar</strong>, com créditos em <em>The Wingfeather Saga</em> (<strong>Angel Studios</strong>) e games como <em>Wonderbox</em> na <strong>PUGA Studios</strong>.'],
    ['.instructor__pills span:nth-child(1)', 'Senior Artist', 'Artista Sênior'],
    ['.instructor__pills span:nth-child(2)', '10+ years exp', '10+ anos de exp'],
    ['.instructor__pills span:nth-child(3)', 'Industry active', 'Ativo na indústria'],

    ['.pricing__badges .badge--limited', 'Lifetime access', 'Acesso vitalício'],
    ['.pricing__badges .badge--oneonone', 'EN · PT Subtitles', 'EN · Legendas PT'],
    ['.pricing__includes li:nth-child(1)', '3h of video lessons', '3h de videoaulas'],
    ['.pricing__includes li:nth-child(2)', '4 modules, from foundations to optimization', '4 módulos, dos fundamentos à otimização'],
    ['.pricing__includes li:nth-child(3)', '30% off TopoGun 3 Perpetual License', '30% off na licença perpétua do TopoGun 3'],
    ['.pricing__includes li:nth-child(4)', 'Lifetime access, study at your own pace', 'Acesso vitalício, estude no seu ritmo'],
    ['.pricing__includes li:nth-child(5)', 'English with Portuguese subtitles', 'Inglês com legendas em português'],
    ['.pricing__includes li:nth-child(6)', '15-day money-back guarantee', 'Garantia de reembolso de 15 dias'],
    ['.pricing__price-note', 'one-time payment', 'pagamento único'],
    ['#pricing-buy', 'Get this course', 'Quero este curso'],
    ['.pricing__scarcity', 'Secure checkout via Hotmart. Study at your own pace, come back to the lessons whenever you want.', 'Checkout seguro via Hotmart. Estude no seu ritmo e volte às aulas quando quiser.'],

    ['#faq .section__head h2', 'Frequently asked questions', 'Perguntas frequentes'],
    ['#faq .faq__item:nth-of-type(1) summary', 'Do I need prior experience in 3D? <span class="faq__icon">+</span>', 'Preciso de experiência prévia em 3D? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(1) .faq__answer', 'The course is aimed at intermediate artists. You should be comfortable navigating a 3D package and have models that need retopology — inside TopoGun 3, every decision is explained step by step.', 'O curso é voltado para artistas intermediários. Você deve estar confortável navegando em um pacote 3D e ter modelos que precisam de retopologia — dentro do TopoGun 3, cada decisão é explicada passo a passo.'],
    ['#faq .faq__item:nth-of-type(2) summary', 'What software will I need? <span class="faq__icon">+</span>', 'Quais softwares vou precisar? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(2) .faq__answer', 'TopoGun 3 is the only software required. As a student you get an exclusive 30% discount on the TopoGun 3 Perpetual License, so you can set it up right as you start the course.', 'O TopoGun 3 é o único software necessário. Como aluno, você recebe um desconto exclusivo de 30% na Licença Perpétua do TopoGun 3, para já configurá-lo assim que começar o curso.'],
    ['#faq .faq__item:nth-of-type(3) summary', 'Is there a deadline to finish? <span class="faq__icon">+</span>', 'Existe prazo para concluir? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(3) .faq__answer', 'No. After purchase, access is lifetime. Study at your own pace and come back to the content as many times as you want.', 'Não. Depois da compra, o acesso é vitalício. Estude no seu ritmo e volte ao conteúdo quantas vezes quiser.'],
    ['#faq .faq__item:nth-of-type(4) summary', 'Is the course in English or Portuguese? <span class="faq__icon">+</span>', 'O curso é em inglês ou português? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(4) .faq__answer', 'The lessons are in English with Portuguese subtitles.', 'As aulas são em inglês com legendas em português.'],
    ['#faq .faq__item:nth-of-type(5) summary', 'What if I\'m not happy with the course? <span class="faq__icon">+</span>', 'E se eu não gostar do curso? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(5) .faq__answer', 'You have a 15-day money-back guarantee after purchase — plenty of time to explore the content and decide whether it\'s the right fit for you.', 'Você tem garantia de reembolso de 15 dias após a compra — tempo de sobra para explorar o conteúdo e decidir se é para você.'],

    ['.final-cta h2', 'Stop dreading retopology.<br>Start owning it.', 'Pare de temer a retopologia.<br>Comece a dominá-la.'],
    ['.final-cta .container > p', '3 hours, 4 modules, and a workflow you\'ll use in every model from now on.', '3 horas, 4 módulos e um workflow que você vai usar em todos os modelos daqui pra frente.'],
    ['#final-buy', 'Get this course — $39', 'Quero este curso — $39'],

    ['.sticky-cta__label', 'TopoGun 3 course', 'Curso de TopoGun 3'],
    ['.sticky-cta > .btn', 'Get this course', 'Quero este curso']
  ];

  /* [selector, attribute, EN, PT] */
  var ATTR = [
    ['.video-frame--hero video', 'aria-label', 'Turntable of the character model retopologized in the course', 'Turntable do modelo de personagem retopologizado no curso']
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
