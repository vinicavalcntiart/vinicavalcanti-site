/* i18n.js - EN | PT toggle for vinicavalcanti homepage */
(function () {
  'use strict';

  /* [selector, EN innerHTML, PT innerHTML] - applied to ALL matches */
  var STR = [
    ['#nav-link-courses, #mobile-menu a[href="#courses"], .site-footer__links a[href="#courses"]', 'Courses', 'Cursos'],
    ['#nav-link-mentorship, #mobile-menu a[href="#mentorship"], .site-footer__links a[href="#mentorship"]', 'Mentorship', 'Mentoria'],
    ['#nav-link-portfolio, #mobile-menu a[href*="artstation"]', 'Portfolio', 'Portf\u00f3lio'],
    ['#nav-link-contact, #mobile-menu a[href="#contact"], .site-footer__links a[href="#contact"]', 'Contact', 'Contato'],
    ['#nav-members-desktop, #mobile-menu .btn--members', 'Members Area', '\u00c1rea de Membros'],

    ['.hero--home h1', 'Learn to create <span class="accent-orange">memorable</span> 3D characters for games and animation.', 'Aprenda a criar personagens 3D <span class="accent-orange">memor\u00e1veis</span> para games e anima\u00e7\u00e3o.'],
    ['.hero__sub', 'A school dedicated to 3D character art for games and animation, taught by someone who lives this process every day inside real studios.', 'Uma escola dedicada \u00e0 arte de personagens 3D para games e anima\u00e7\u00e3o, ensinada por algu\u00e9m que vive esse processo todos os dias dentro de est\u00fadios reais.'],
    ['#hero-courses', 'Explore Courses &darr;', 'Explorar Cursos &darr;'],

    ['#about .eyebrow', 'The School', 'A Escola'],
    ['.instructor__body h2', "Learn from someone who's inside the industry, not just talking about it.", 'Aprenda com algu\u00e9m que est\u00e1 dentro da ind\u00fastria, n\u00e3o s\u00f3 falando sobre ela.'],
    ['.instructor__bio p:nth-of-type(1)',
      'Hi, I\'m <span class="accent-orange">Vini Cavalcanti</span>, <strong>Senior 3D Character Artist</strong> with <strong><em class="u-orange">10+ years</em></strong> in games and animation, focused on <em>stylized characters</em>. Currently at <strong>E-Line Media</strong> on <strong>Endstar</strong>, with credits on <em>The Wingfeather Saga</em> (<strong>Angel Studios</strong>) and games like <em>Wonderbox</em> and <em>Dice Dreams</em> at <strong>PUGA Studios</strong>.',
      'Oi, eu sou <span class="accent-orange">Vini Cavalcanti</span>, <strong>Senior 3D Character Artist</strong> com <strong><em class="u-orange">10+ anos</em></strong> em games e animação, focado em <em>personagens estilizados</em>. Atualmente na <strong>E-Line Media</strong>, no <strong>Endstar</strong>, com créditos em <em>The Wingfeather Saga</em> (<strong>Angel Studios</strong>) e games como <em>Wonderbox</em> e <em>Dice Dreams</em> na <strong>PUGA Studios</strong>.'],
    ['.instructor__bio p:nth-of-type(2)',
      "I've mentored artists who now work in studios. This school is the shortcut I wish I'd had: the real process, taught by someone who lives it every day.",
      'Já mentorei artistas que hoje trabalham em estúdios. Esta escola é o atalho que eu queria ter tido: o processo real, ensinado por quem vive isso todos os dias.'],
    ['.instructor__pills span:nth-child(1)', 'Senior Artist', 'Artista S\u00eanior'],
    ['.instructor__pills span:nth-child(2)', '10+ years exp', '10+ anos de exp'],
    ['.instructor__pills span:nth-child(3)', 'Industry active', 'Ativo na indústria'],
    ['.instructor__pills span:nth-child(4)', 'M.A. Cand. &middot; PG Dip', 'Mestrando &middot; PG Dip'],

    ['#courses .section__head .eyebrow', 'Courses', 'Cursos'],
    ['#courses .section__head h2', 'Learn the full character pipeline', 'Aprenda o pipeline completo de personagens'],
    ['#courses .section__lead', 'Each course covers one real stage of production, taught the same way it happens inside a studio. Lifetime access, 15-day money-back guarantee.', 'Cada curso cobre uma etapa real de produ\u00e7\u00e3o, ensinada do mesmo jeito que acontece dentro de um est\u00fadio. Acesso vital\u00edcio, garantia de reembolso de 15 dias.'],
    ['#courses .grid-3 article:nth-of-type(1) .course-card__ribbon', 'START HERE', 'COMECE AQUI'],
    ['#courses .grid-3 article:nth-of-type(1) .badge--level', 'Absolute Beginner', 'Iniciante Absoluto'],
    ['#courses .grid-3 article:nth-of-type(1) .badge--meta', '13 lessons', '13 aulas'],
    ['#courses .grid-3 article:nth-of-type(1) .course-card__body > p', 'Your first steps in ZBrush. Finish your first complete character: sculpted, painted and rendered.', 'Seus primeiros passos no ZBrush. Termine seu primeiro personagem completo: esculpido, pintado e renderizado.'],
    ['#courses .grid-3 article:nth-of-type(2) .badge--level', 'Beginner / Intermediate', 'Iniciante / Intermedi\u00e1rio'],
    ['#courses .grid-3 article:nth-of-type(3) .badge--level', 'Intermediate', 'Intermedi\u00e1rio'],
    ['#courses .grid-3 article:nth-of-type(4) .badge--level', 'Beginner / Intermediate', 'Iniciante / Intermedi\u00e1rio'],
    ['#courses .grid-3 article:nth-of-type(2) .course-card__body > p', 'From concept to finished sculpt, the complete process for designing and sculpting original stylized characters.', 'Do conceito ao sculpt finalizado, o processo completo para desenhar e esculpir personagens estilizados originais.'],
    ['#courses .grid-3 article:nth-of-type(3) .course-card__body > p', 'Clean, animation-ready topology without the pain. The retopology stage explained from start to finish.', 'Topologia limpa e pronta para anima\u00e7\u00e3o, sem sofrimento. A etapa de retopologia explicada do in\u00edcio ao fim.'],
    ['#courses .grid-3 article:nth-of-type(4) .course-card__body > p', 'Design and sculpt an appealing creature from scratch, balancing anatomy, charm and strong shape language.', 'Desenhe e esculpa uma criatura cheia de apelo do zero, equilibrando anatomia, carisma e uma linguagem de formas forte.'],
    ['#courses .course-card__foot a', 'Get this course', 'Quero este curso'],
    ['.courses__note', 'All courses are in English with Portuguese subtitles.', 'Todos os cursos s\u00e3o em ingl\u00eas com legendas em portugu\u00eas.'],

    ['.mship-billboard__badges .badge--season', 'Season 2', 'Temporada 2'],
    ['.mship-billboard__badges span:nth-child(2)', 'Limited Spots', 'Vagas Limitadas'],
    ['.mship-billboard__badges span:nth-child(3)', 'One-on-One', 'Individual'],
    ['.mship-billboard h2', 'Mentorship Program', 'Programa de Mentoria'],
    ['.mship-billboard__lead', '<strong>One-on-one mentorship</strong> with a Senior Character Artist. One complete character, from blockout to portfolio-ready render.', '<strong>Mentoria individual</strong> com um Senior Character Artist. Um personagem completo, do blockout ao render de portfólio.'],
    ['.mship-billboard__facts li:nth-child(1)', 'Up to 2 live sessions a week', 'Até 2 sessões ao vivo por semana'],
    ['.mship-billboard__facts li:nth-child(2)', 'Until your character is done', 'Até o seu personagem ficar pronto'],
    ['.mship-billboard__facts li:nth-child(3)', 'Lifetime access', 'Acesso vitalício'],
    ['.mship-billboard__tag', "This is not a course. It's a mentorship.", 'Isso n\u00e3o \u00e9 um curso. \u00c9 uma mentoria.'],
    ['#mentorship-cta', 'Start Now!', 'Come\u00e7ar Agora!'],
    ['.mship-billboard__price span:nth-child(1)', 'Investment', 'Investimento'],
    ['.mship-billboard__price .hero__price-note', 'or 3 payments', 'ou 3x'],

    ['#testimonials .eyebrow', 'Students', 'Alunos'],
    ['#testimonials .section__head h2', 'Artists already on their way.', 'Artistas j\u00e1 a caminho.'],
    ['#testimonials .section__lead', 'Students from different levels and countries, building real portfolios with these courses.', 'Alunos de diferentes níveis e países, construindo portfólios reais com estes cursos.'],
    ['#testimonials .tstm-card:nth-of-type(1) blockquote',
      'Vini\'s courses were <span class="hl">essential in helping me switch to Blender</span>, and I highly recommend them. I\'ve always worked with Cinema 4D and Autodesk Maya and found it difficult to switch because Blender is quite different. However, thanks to the courses, I\'m already using it in my pipeline for some projects, and soon I\'ll be using it 100% of the time.',
      'Os cursos do Vini foram <span class="hl">essenciais para eu migrar para o Blender</span>, e eu recomendo muito. Sempre trabalhei com Cinema 4D e Autodesk Maya e achava dif\u00edcil migrar porque o Blender \u00e9 bem diferente. Mas, gra\u00e7as aos cursos, j\u00e1 estou usando ele no meu pipeline em alguns projetos, e logo estarei usando 100% do tempo.'],
    ['#testimonials .tstm-card:nth-of-type(2) blockquote',
      'What I like most about Vini teaching method is that, beyond using the pipelines of the biggest animation studios, he <span class="hl">presents them in an uncomplicated way</span>. He teaches in such a manner that even the most professional processes become logical and make sense within the workflow.',
      'O que eu mais gosto no m\u00e9todo de ensino do Vini \u00e9 que, al\u00e9m de usar os pipelines dos maiores est\u00fadios de anima\u00e7\u00e3o, ele <span class="hl">apresenta tudo de um jeito descomplicado</span>. Ele ensina de um jeito que at\u00e9 os processos mais profissionais se tornam l\u00f3gicos e fazem sentido dentro do workflow.'],
    ['#testimonials .tstm-card:nth-of-type(3) blockquote',
      'Taking classes with Vini has been amazing. I was very afraid of not being good enough to keep up with his classes, but his teaching and explanations are <span class="hl">very precise and make everything clear</span>. He always answers us when we have questions. Today, I believe I can become a good Character Artist soon.',
      'Ter aulas com o Vini tem sido incr\u00edvel. Eu tinha muito medo de n\u00e3o ser bom o suficiente para acompanhar as aulas, mas o ensino e as explica\u00e7\u00f5es dele s\u00e3o <span class="hl">muito precisos e deixam tudo claro</span>. Ele sempre responde quando temos d\u00favidas. Hoje acredito que posso me tornar um bom Character Artist em breve.'],
    ['#testimonials .tstm-card:nth-of-type(4) blockquote',
      'Vini\'s classes <span class="hl">really elevated the level of my work</span>, especially in how I see the entire process. The retopology part with TopoGun became much clearer. Today, I have a much better understanding of edge loop flow and how to prepare meshes with animation and game performance in mind.',
      'As aulas do Vini <span class="hl">elevaram muito o n\u00edvel do meu trabalho</span>, principalmente em como eu enxergo o processo inteiro. A parte de retopologia com o TopoGun ficou muito mais clara. Hoje entendo muito melhor o fluxo de edge loops e como preparar meshes pensando em anima\u00e7\u00e3o e performance de game.'],

    ['#discord h2', 'Join the school\'s Discord', 'Entre no Discord da escola'],
    ['#discord p', 'Share your progress, ask questions and meet other artists learning 3D. Free for everyone.', 'Compartilhe seu progresso, tire dúvidas e conheça outros artistas aprendendo 3D. Gratuito para todos.'],
    ['#discord .btn', 'Join the Discord', 'Entrar no Discord'],

    ['#faq .section__head h2', 'Frequently asked questions', 'Perguntas frequentes'],
    ['#faq .section__lead', "If you still have questions, they're probably answered right here.", 'Se voc\u00ea ainda tem d\u00favidas, provavelmente elas est\u00e3o respondidas aqui.'],
    ['#faq .faq-item:nth-of-type(1) summary span:first-child', 'Do I need prior experience in 3D?', 'Preciso de experi\u00eancia pr\u00e9via em 3D?'],
    ['#faq .faq-item:nth-of-type(1) .faq-item__body p', 'Depends on the course. Some start from zero, others go deeper for artists who already have a foundation. The level is on each card.', 'Depende do curso. Alguns começam do zero, outros aprofundam para quem já tem base. O nível está no card de cada um.'],
    ['#faq .faq-item:nth-of-type(2) summary span:first-child', 'What software will I need?', 'Quais softwares vou precisar?'],
    ['#faq .faq-item:nth-of-type(2) .faq-item__body p', 'It varies per course and is listed before you buy. Across the school: ZBrush, Blender, Substance Painter, Houdini, TopoGun 3 and Marmoset Toolbag.', 'Varia por curso e está listado antes da compra. Na escola usamos ZBrush, Blender, Substance Painter, Houdini, TopoGun 3 e Marmoset Toolbag.'],
    ['#faq .faq-item:nth-of-type(3) summary span:first-child', 'Is there a deadline to finish the courses?', 'Existe prazo para concluir os cursos?'],
    ['#faq .faq-item:nth-of-type(3) .faq-item__body p', 'No. Access is lifetime. Study at your own pace and come back whenever you want.', 'Não. O acesso é vitalício. Estude no seu ritmo e volte quando quiser.'],
    ['#faq .faq-item:nth-of-type(4) summary span:first-child', 'Are the courses in Portuguese or English?', 'Os cursos s\u00e3o em portugu\u00eas ou ingl\u00eas?'],
    ['#faq .faq-item:nth-of-type(4) .faq-item__body p', 'Each card shows the language. The ZBrush courses, for example, are in English with Portuguese subtitles.', 'Cada card mostra o idioma. Os cursos de ZBrush, por exemplo, são em inglês com legendas em português.'],
    ['#faq .faq-item:nth-of-type(5) summary span:first-child', 'Will I be able to build a portfolio with these courses?', 'Vou conseguir montar um portf\u00f3lio com esses cursos?'],
    ['#faq .faq-item:nth-of-type(5) .faq-item__body p', 'Yes. Every course is project-driven: you finish with a piece you can post on ArtStation or show to a studio.', 'Sim. Todo curso é baseado em projeto: você termina com uma peça para postar no ArtStation ou mostrar a um estúdio.'],
    ['#faq .faq-item:nth-of-type(6) summary span:first-child', 'How does support work?', 'Como funciona o suporte?'],
    ['#faq .faq-item:nth-of-type(6) .faq-item__body p', "Every student gets access to the school's Discord. The invite is in the welcome lesson, right after you enroll.", 'Todo aluno tem acesso ao Discord da escola. O convite está na aula de boas-vindas, logo após a matrícula.'],
    ['#faq .faq-item:nth-of-type(7) summary span:first-child', "What if I'm not happy with the course?", 'E se eu n\u00e3o gostar do curso?'],
    ['#faq .faq-item:nth-of-type(7) .faq-item__body p', 'You have a 15-day money-back guarantee. Half of the course is already open during that period, so you can decide with the content in hand.', 'Você tem 15 dias de garantia de reembolso. Metade do curso já fica aberta nesse período, para decidir com o conteúdo em mãos.'],

    ['#contact .eyebrow', 'Contact', 'Contato'],
    ['#contact .section__head h2', "Let's talk", 'Vamos conversar'],
    ['#contact .section__lead', 'Questions about a course, the mentorship or a project? Send a message and Vini will get back to you.', 'D\u00favidas sobre um curso, a mentoria ou um projeto? Mande uma mensagem e o Vini te responde.'],
    ['label[for="cf-name"]', 'Name', 'Nome'],
    ['label[for="cf-email"]', 'Email', 'Email'],
    ['label[for="cf-message"]', 'Message', 'Mensagem'],
    ['#contact-submit', 'Send message', 'Enviar mensagem']
  ];

  /* [selector, attribute, EN, PT] */
  var ATTR = [
    ['#cf-name', 'placeholder', 'Your name', 'Seu nome'],
    ['#cf-email', 'placeholder', 'you@email.com', 'voce@email.com'],
    ['#cf-message', 'placeholder', 'How can I help?', 'Como posso ajudar?']
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
      btn.setAttribute('aria-label', lang === 'pt' ? 'Mudar idioma para ingl\u00eas' : 'Switch language to Portuguese');
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
