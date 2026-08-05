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

    ['.hero--home h1', 'Learn to create <span class="accent-orange">memorable</span> 3D characters for games.', 'Aprenda a criar personagens 3D <span class="accent-orange">memor\u00e1veis</span> para games.'],
    ['.hero__sub', 'A school dedicated to 3D character art for games, taught by someone who lives this process every day inside real studios.', 'Uma escola dedicada \u00e0 arte de personagens 3D para games, ensinada por algu\u00e9m que vive esse processo todos os dias dentro de est\u00fadios reais.'],
    ['#hero-courses', 'Explore Courses &darr;', 'Explorar Cursos &darr;'],

    ['#about .eyebrow', 'The School', 'A Escola'],
    ['.instructor__body h2', "Learn from someone who's inside the industry, not just talking about it.", 'Aprenda com algu\u00e9m que est\u00e1 dentro da ind\u00fastria, n\u00e3o s\u00f3 falando sobre ela.'],
    ['.instructor__bio p:nth-of-type(1)',
      'Hi, I\'m <span class="accent-orange">Vini Cavalcanti</span>. I\'m a <strong>Senior 3D Character Artist</strong> with <strong><em class="u-orange">10+ years of experience</em></strong> in the games and entertainment industry, focused on <em>visual development</em> and <em>stylized characters</em>. I\'m currently part of the team at <strong>E-Line Media</strong>, working on the game <strong>Endstar</strong>, and throughout my career I\'ve contributed to productions like the animated series <em>The Wingfeather Saga</em> (<strong>Angel Studios</strong>) and games like <em>Wonderbox</em> and <em>Dice Dreams</em> at <strong>PUGA Studios</strong>.',
      'Oi, eu sou <span class="accent-orange">Vini Cavalcanti</span>. Sou <strong>Senior 3D Character Artist</strong> com <strong><em class="u-orange">10+ anos de experi\u00eancia</em></strong> na ind\u00fastria de games e entretenimento, focado em <em>desenvolvimento visual</em> e <em>personagens estilizados</em>. Atualmente fa\u00e7o parte do time da <strong>E-Line Media</strong>, trabalhando no game <strong>Endstar</strong>, e ao longo da carreira contribu\u00ed em produ\u00e7\u00f5es como a s\u00e9rie animada <em>The Wingfeather Saga</em> (<strong>Angel Studios</strong>) e games como <em>Wonderbox</em> e <em>Dice Dreams</em> na <strong>PUGA Studios</strong>.'],
    ['.instructor__bio p:nth-of-type(2)',
      "I'm a <strong>Master's M.A. Cand. in Creative Industries</strong> and a <strong>Game Art Specialist (PG Dip)</strong>. More than creating, I've always loved teaching. I've mentored students who now work in the industry, and I know exactly which challenges come up along the way because I've been through them too.",
      'Sou <strong>mestrando (M.A.) em Ind\u00fastrias Criativas</strong> e <strong>Especialista em Game Art (PG Dip)</strong>. Mais do que criar, sempre amei ensinar. J\u00e1 mentorei alunos que hoje trabalham na ind\u00fastria, e sei exatamente quais desafios aparecem pelo caminho porque tamb\u00e9m passei por eles.'],
    ['.instructor__bio p:nth-of-type(3)',
      '<span class="accent-orange">Vini Cavalcanti</span> School exists to be the shortcut I wish I\'d had: a place where you learn the real process, guided by someone who lives it every single day.',
      'A <span class="accent-orange">Vini Cavalcanti</span> School existe para ser o atalho que eu queria ter tido: um lugar onde voc\u00ea aprende o processo real, guiado por algu\u00e9m que vive isso todos os dias.'],
    ['.instructor__pills span:nth-child(1)', 'Senior Artist', 'Artista S\u00eanior'],
    ['.instructor__pills span:nth-child(2)', '10+ years exp', '10+ anos de exp'],
    ['.instructor__pills span:nth-child(3)', 'Industry active', 'Ativo na ind\u00fastria'],

    ['#courses .section__head .eyebrow', 'Courses', 'Cursos'],
    ['#courses .section__head h2', 'Learn the full character pipeline', 'Aprenda o pipeline completo de personagens'],
    ['#courses .section__lead', 'Each course covers one real stage of production, taught the same way it happens inside a studio. Lifetime access, 15-day money-back guarantee.', 'Cada curso cobre uma etapa real de produ\u00e7\u00e3o, ensinada do mesmo jeito que acontece dentro de um est\u00fadio. Acesso vital\u00edcio, garantia de reembolso de 15 dias.'],
    ['#courses .grid-3 article:nth-of-type(1) .course-card__ribbon', 'START HERE', 'COMECE AQUI'],
    ['#courses .grid-3 article:nth-of-type(1) .badge--level', 'Absolute Beginner', 'Iniciante Absoluto'],
    ['#courses .grid-3 article:nth-of-type(1) .badge--meta', '12 lessons', '12 aulas'],
    ['#courses .grid-3 article:nth-of-type(1) .course-card__body > p', 'Your first steps in ZBrush, one concept at a time \u2014 finish your first complete character, sculpted, painted and rendered.', 'Seus primeiros passos no ZBrush, um conceito de cada vez \u2014 finalize seu primeiro personagem completo, esculpido, pintado e renderizado.'],
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
    ['.mship-billboard__lead', '<strong>One-on-one mentorship</strong> for artists who want to grow with real industry guidance.', '<strong>Mentoria individual</strong> para artistas que querem evoluir com orienta\u00e7\u00e3o real da ind\u00fastria.'],
    ['.mship-billboard__text', "Over 10 weeks, you'll receive direct, one-on-one guidance from a Senior Character Artist who works in the industry every day. You'll build a complete character from the very first blockout to a portfolio-ready final piece, with feedback and support at every stage of the process.", 'Ao longo de 10 semanas, voc\u00ea recebe orienta\u00e7\u00e3o direta e individual de um Senior Character Artist que trabalha na ind\u00fastria todos os dias. Voc\u00ea vai construir um personagem completo, do primeiro blockout at\u00e9 uma pe\u00e7a final pronta para o portf\u00f3lio, com feedback e suporte em cada etapa do processo.'],
    ['.mship-billboard__tag', "This is not a course. It's a mentorship.", 'Isso n\u00e3o \u00e9 um curso. \u00c9 uma mentoria.'],
    ['#mentorship-cta', 'Start Now!', 'Come\u00e7ar Agora!'],
    ['.mship-billboard__price span:nth-child(1)', 'Investment', 'Investimento'],
    ['.mship-billboard__price .hero__price-note', 'or 3 payments', 'ou 3x'],

    ['#testimonials .eyebrow', 'Students', 'Alunos'],
    ['#testimonials .section__head h2', 'Artists already on their way.', 'Artistas j\u00e1 a caminho.'],
    ['#testimonials .section__lead', 'From different skill levels and different parts of the world, using these courses to build real portfolios and take real steps into the industry.', 'De diferentes n\u00edveis e diferentes partes do mundo, usando estes cursos para construir portf\u00f3lios reais e dar passos reais rumo \u00e0 ind\u00fastria.'],
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

    ['#faq .section__head h2', 'Frequently asked questions', 'Perguntas frequentes'],
    ['#faq .section__lead', "If you still have questions, they're probably answered right here.", 'Se voc\u00ea ainda tem d\u00favidas, provavelmente elas est\u00e3o respondidas aqui.'],
    ['#faq .faq-item:nth-of-type(1) summary span:first-child', 'Do I need prior experience in 3D?', 'Preciso de experi\u00eancia pr\u00e9via em 3D?'],
    ['#faq .faq-item:nth-of-type(1) .faq-item__body p', 'It depends on the course you choose. Some are designed for complete beginners and we cover the concepts from the ground up, step by step. Others are aimed at artists who already have a foundation and want to go deeper into specific parts of the process. Each course clearly indicates the recommended level on its card.', 'Depende do curso que voc\u00ea escolher. Alguns s\u00e3o feitos para iniciantes completos e cobrimos os conceitos do zero, passo a passo. Outros s\u00e3o voltados para artistas que j\u00e1 t\u00eam uma base e querem se aprofundar em partes espec\u00edficas do processo. Cada curso indica claramente o n\u00edvel recomendado no seu card.'],
    ['#faq .faq-item:nth-of-type(2) summary span:first-child', 'What software will I need?', 'Quais softwares vou precisar?'],
    ['#faq .faq-item:nth-of-type(2) .faq-item__body p', "The required software varies per course and is listed in each course's details before you purchase. In general, we work with ZBrush, Houdini, Blender, Substance Painter, TopoGun 3, and Marmoset Toolbag, which are widely used across the industry.", 'O software necess\u00e1rio varia por curso e est\u00e1 listado nos detalhes de cada um antes da compra. No geral, trabalhamos com ZBrush, Houdini, Blender, Substance Painter, TopoGun 3 e Marmoset Toolbag, que s\u00e3o amplamente usados na ind\u00fastria.'],
    ['#faq .faq-item:nth-of-type(3) summary span:first-child', 'Is there a deadline to finish the courses?', 'Existe prazo para concluir os cursos?'],
    ['#faq .faq-item:nth-of-type(3) .faq-item__body p', 'No. After purchase, access is lifetime. Study at your own pace, on your own schedule, without pressure and come back to the content as many times as you want.', 'N\u00e3o. Depois da compra, o acesso \u00e9 vital\u00edcio. Estude no seu ritmo, no seu hor\u00e1rio, sem press\u00e3o, e volte ao conte\u00fado quantas vezes quiser.'],
    ['#faq .faq-item:nth-of-type(4) summary span:first-child', 'Are the courses in Portuguese or English?', 'Os cursos s\u00e3o em portugu\u00eas ou ingl\u00eas?'],
    ['#faq .faq-item:nth-of-type(4) .faq-item__body p', 'Each course has the language indicated on its card: PT for Portuguese and EN for English. The ZBrush course, for example, is in English with Portuguese subtitles. Use the filters in the courses section to find the format that works best for you.', 'Cada curso tem o idioma indicado no card: PT para portugu\u00eas e EN para ingl\u00eas. O curso de ZBrush, por exemplo, \u00e9 em ingl\u00eas com legendas em portugu\u00eas. Use os filtros na se\u00e7\u00e3o de cursos para encontrar o formato que funciona melhor para voc\u00ea.'],
    ['#faq .faq-item:nth-of-type(5) summary span:first-child', 'Will I be able to build a portfolio with these courses?', 'Vou conseguir montar um portf\u00f3lio com esses cursos?'],
    ['#faq .faq-item:nth-of-type(5) .faq-item__body p', "That's exactly the point. The courses are project-driven and you finish with something real to publish, not just theory in your head. The goal is for you to leave with a piece you can post on ArtStation, use in job applications, or show to a studio.", 'Esse \u00e9 exatamente o objetivo. Os cursos s\u00e3o baseados em projetos e voc\u00ea termina com algo real para publicar, n\u00e3o s\u00f3 teoria na cabe\u00e7a. A meta \u00e9 voc\u00ea sair com uma pe\u00e7a para postar no ArtStation, usar em candidaturas ou mostrar para um est\u00fadio.'],
    ['#faq .faq-item:nth-of-type(6) summary span:first-child', 'How does support work?', 'Como funciona o suporte?'],
    ['#faq .faq-item:nth-of-type(6) .faq-item__body p', 'All students have access to an exclusive community on Discord. The invite link is available in the welcome lesson, right after you enroll. The community has a moderation team to keep the space focused and respectful.', 'Todos os alunos t\u00eam acesso a uma comunidade exclusiva no Discord. O link de convite fica dispon\u00edvel na aula de boas-vindas, logo depois da matr\u00edcula. A comunidade tem um time de modera\u00e7\u00e3o para manter o espa\u00e7o focado e respeitoso.'],
    ['#faq .faq-item:nth-of-type(7) summary span:first-child', "What if I'm not happy with the course?", 'E se eu n\u00e3o gostar do curso?'],
    ['#faq .faq-item:nth-of-type(7) .faq-item__body p', "You have a 15-day money-back guarantee after purchase. During that period, half of the course content is already available for you to explore and decide whether it's the right fit for you.", 'Voc\u00ea tem garantia de reembolso de 15 dias ap\u00f3s a compra. Durante esse per\u00edodo, metade do conte\u00fado do curso j\u00e1 fica dispon\u00edvel para voc\u00ea explorar e decidir se \u00e9 a escolha certa para voc\u00ea.'],

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
