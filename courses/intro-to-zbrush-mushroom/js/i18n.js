/* i18n.js - EN | PT toggle for Intro to ZBrush: Mushroom LP
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
    ['.hero__badges span:nth-child(2)', 'Absolute Beginner', 'Iniciante Absoluto'],
    ['.hero__badges span:nth-child(3)', 'EN (EN/PT Subtitles)', 'EN (Legendas EN/PT)'],
    ['.hero__badges span:nth-child(4)', '13 lessons', '13 aulas'],
    ['.hero h1', 'Intro to ZBrush: <span class="accent-orange">Mushroom</span>.', 'Intro to ZBrush: <span class="accent-orange">Mushroom</span>.'],
    ['.hero__sub', 'Your first steps in ZBrush. Start from zero and finish your first complete character: sculpted, painted and rendered.', 'Seus primeiros passos no ZBrush. Comece do zero e termine seu primeiro personagem completo: esculpido, pintado e renderizado.'],
    ['#hero-buy', 'Get this course', 'Quero este curso'],
    ['.hero__price-label', 'Price', 'Preço'],
    ['.hero__price-note', 'One-time · Lifetime access', 'Pagamento único · Acesso vitalício'],
    ['.hero__media-caption', 'The character you build in this course.', 'O personagem que você constrói neste curso.'],

    ['.studios__line', 'Taught by a <strong>Senior Character Artist</strong> who lives this process every day inside real studios.', 'Ensinado por um <strong>Senior Character Artist</strong> que vive esse processo todos os dias dentro de estúdios reais.'],

    ['#modules .section__head .eyebrow', '13 lessons included', '13 aulas incluídas'],
    ['#modules .section__head h2', 'One concept per lesson', 'Um conceito por aula'],
    ['#modules .section__lead', 'Every lesson states its goal and ends with a self-check, so you know when you are ready to move on. Lessons 1 to 8 build the foundations, tool by tool. Lessons 9 to 12 are the final project. Lesson 13 is a bonus: the cartoon outline look.', 'Cada aula declara seu objetivo e termina com uma autoavaliação, assim você sabe quando está pronto para avançar. As aulas 1 a 8 constroem os fundamentos, ferramenta por ferramenta. As aulas 9 a 12 são o projeto final. A aula 13 é um bônus: o visual de contorno cartoon.'],
    ['#modules .modules__block-title:nth-of-type(1)', 'Foundations', 'Fundamentos'],
    ['#grid-foundations article:nth-of-type(1) h3', 'How ZBrush Works', 'Como o ZBrush Funciona'],
    ['#grid-foundations article:nth-of-type(1) p', 'Canvas, Edit Mode and Tools. Understand the logic that makes ZBrush different.', 'Canvas, Edit Mode e Tools. Entenda a lógica que faz o ZBrush ser diferente.'],
    ['#grid-foundations article:nth-of-type(2) h3', 'Navigation and Setup', 'Navegação e Setup'],
    ['#grid-foundations article:nth-of-type(2) p', 'Advanced navigation and a sculpting setup that stays out of your way.', 'Navegação avançada e um setup de escultura que não atrapalha o seu fluxo.'],
    ['#grid-foundations article:nth-of-type(3) h3', 'Subdivision and Brushes', 'Subdivisão e Brushes'],
    ['#grid-foundations article:nth-of-type(3) p', 'Resolution levels and the essential brushes you\'ll use in every sculpt.', 'Níveis de resolução e os brushes essenciais que você vai usar em toda escultura.'],
    ['#grid-foundations article:nth-of-type(4) h3', 'Masks and Polygroups', 'Máscaras e Polygroups'],
    ['#grid-foundations article:nth-of-type(4) p', 'Select, protect and organize your mesh like a character artist.', 'Selecione, proteja e organize sua mesh como um character artist.'],
    ['#grid-foundations article:nth-of-type(5) h3', 'Gizmo and Transpose', 'Gizmo e Transpose'],
    ['#grid-foundations article:nth-of-type(5) p', 'Move, scale and rotate with precision, plus a canvas setup that works for you.', 'Mova, escale e rotacione com precisão, além de um setup de canvas que trabalha a seu favor.'],
    ['#grid-foundations article:nth-of-type(6) h3', 'SubTools and Symmetry', 'SubTools e Simetria'],
    ['#grid-foundations article:nth-of-type(6) p', 'Build characters from parts and let symmetry do half the work.', 'Construa personagens por partes e deixe a simetria fazer metade do trabalho.'],
    ['#grid-foundations article:nth-of-type(7) h3', 'DynaMesh and Resolution', 'DynaMesh e Resolução'],
    ['#grid-foundations article:nth-of-type(7) p', 'Sculpt freely without worrying about topology running out.', 'Esculpa livremente sem se preocupar com a topologia acabar.'],
    ['#grid-foundations article:nth-of-type(8) h3', 'ZRemesher and Polypaint', 'ZRemesher e Polypaint'],
    ['#grid-foundations article:nth-of-type(8) p', 'Clean topology in one click and painting directly on your sculpt.', 'Topologia limpa em um clique e pintura direto na sua escultura.'],
    ['#modules .modules__block-title:nth-of-type(2)', 'Final Project: Cute Mushroom', 'Projeto Final: Cute Mushroom'],
    ['#grid-project article:nth-of-type(1) h3', 'Part 1: Blocking', 'Parte 1: Blocking'],
    ['#grid-project article:nth-of-type(1) p', 'Build the character\'s big shapes from simple forms.', 'Construa as grandes formas do personagem a partir de volumes simples.'],
    ['#grid-project article:nth-of-type(2) h3', 'Part 2: Shaping and Face', 'Parte 2: Formas e Rosto'],
    ['#grid-project article:nth-of-type(2) p', 'Refine the silhouette and bring the face to life.', 'Refine a silhueta e dê vida ao rosto.'],
    ['#grid-project article:nth-of-type(3) h3', 'Part 3: Details and Polypaint', 'Parte 3: Detalhes e Polypaint'],
    ['#grid-project article:nth-of-type(3) p', 'Surface details and full color, painted inside ZBrush.', 'Detalhes de superfície e cor completa, pintados dentro do ZBrush.'],
    ['#grid-project article:nth-of-type(4) h3', 'Part 4: Render and Export', 'Parte 4: Render e Exportação'],
    ['#grid-project article:nth-of-type(4) p', 'Render your finished character and export it to share anywhere.', 'Renderize seu personagem finalizado e exporte para compartilhar onde quiser.'],
    ['#grid-project article:nth-of-type(5) h3', 'Bonus: The Cartoon Outline Look', 'Bônus: O Visual de Contorno Cartoon'],
    ['#grid-project article:nth-of-type(5) p', 'Give your sculpt that hand-drawn cartoon look, with the outline you see on the course cover, straight inside ZBrush.', 'Dê à sua escultura aquele acabamento de desenho à mão, com o contorno que você vê na capa do curso, direto dentro do ZBrush.'],

    ['#inside .section__head .eyebrow', 'Inside the course', 'Por dentro do curso'],
    ['#inside .section__head h2', 'Real lessons, drawn over the screen', 'Aulas reais, desenhadas sobre a tela'],
    ['#inside .section__lead', 'Every concept is annotated live on top of ZBrush, so you see exactly where to look.', 'Cada conceito é anotado ao vivo por cima do ZBrush, para você ver exatamente para onde olhar.'],

    ['.identity__body h2', 'Never opened ZBrush?<br>This was made for <span class="accent-orange">you</span>.', 'Nunca abriu o ZBrush?<br>Isto foi feito para <span class="accent-orange">você</span>.'],
    ['.identity__body p', 'No prior knowledge needed. Every lesson tells you WHAT you\'re learning, WHY it matters and the GOAL you should reach before moving on. A step-by-step method built so beginners never feel lost.', 'Nenhum conhecimento prévio necessário. Cada aula diz O QUE você está aprendendo, POR QUE isso importa e o OBJETIVO que você deve alcançar antes de avançar. Um método passo a passo feito para iniciante não se perder.'],
    ['.identity__body .btn--inverse', 'Start from zero today', 'Comece do zero hoje'],

    ['#instructor .eyebrow', 'Your instructor', 'Seu instrutor'],
    ['#instructor h2', 'Learn from someone who\'s inside the industry, not just talking about it.', 'Aprenda com alguém que está dentro da indústria, não só falando sobre ela.'],
    ['.instructor__bio', 'Hi, I\'m <span class="accent-orange"><strong>Vini Cavalcanti</strong></span>, <strong>Senior 3D Character Artist</strong> with <strong><em>10+ years of experience</em></strong> in games and entertainment, focused on <em>visual development</em> and <em>stylized characters</em>. Currently at <strong>E-Line Media</strong> on <strong>Endstar</strong>, with credits on <em>The Wingfeather Saga</em> (<strong>Angel Studios</strong>) and games like <em>Wonderbox</em> at <strong>PUGA Studios</strong>.', 'Oi, eu sou <span class="accent-orange"><strong>Vini Cavalcanti</strong></span>, <strong>Senior 3D Character Artist</strong> com <strong><em>10+ anos de experiência</em></strong> em games e entretenimento, focado em <em>desenvolvimento visual</em> e <em>personagens estilizados</em>. Atualmente na <strong>E-Line Media</strong> no <strong>Endstar</strong>, com créditos em <em>The Wingfeather Saga</em> (<strong>Angel Studios</strong>) e games como <em>Wonderbox</em> na <strong>PUGA Studios</strong>.'],
    ['.instructor__pills span:nth-child(1)', 'Senior Artist', 'Artista Sênior'],
    ['.instructor__pills span:nth-child(2)', '10+ years exp', '10+ anos de exp'],
    ['.instructor__pills span:nth-child(3)', 'Industry active', 'Ativo na indústria'],

    ['.pricing__badges .badge--limited', 'Lifetime access', 'Acesso vitalício'],
    ['.pricing__badges .badge--oneonone', 'EN · EN/PT Subtitles', 'EN · Legendas EN/PT'],
    ['.pricing__includes li:nth-child(1)', '13 recorded video lessons', '13 videoaulas gravadas'],
    ['.pricing__includes li:nth-child(2)', 'From absolute zero, no experience needed', 'Do zero absoluto, nenhuma experiência necessária'],
    ['.pricing__includes li:nth-child(3)', 'Complete final project: sculpt, paint and render', 'Projeto final completo: esculpir, pintar e renderizar'],
    ['.pricing__includes li:nth-child(4)', 'Bonus lesson: the cartoon outline look', 'Aula bônus: o visual de contorno cartoon'],
    ['.pricing__includes li:nth-child(5)', 'Stated goal and self-check in every lesson', 'Objetivo declarado e autoavaliação em cada aula'],
    ['.pricing__includes li:nth-child(6)', 'English audio with English and Portuguese subtitles', 'Áudio em inglês com legendas em inglês e português'],
    ['.pricing__includes li:nth-child(7)', '15-day money-back guarantee', 'Garantia de reembolso de 15 dias'],
    ['.pricing__price-note', 'one-time payment', 'pagamento único'],
    ['#pricing-buy', 'Get this course', 'Quero este curso'],
    ['.pricing__scarcity', 'Secure checkout via Hotmart. Study at your own pace, come back to the lessons whenever you want.', 'Checkout seguro via Hotmart. Estude no seu ritmo e volte às aulas quando quiser.'],

    ['#next-steps .section__head .eyebrow', 'Want to go further?', 'Quer ir além?'],
    ['#next-steps .section__head h2', 'This course is step one', 'Este curso é o primeiro passo'],
    ['#next-steps .section__lead', 'When you finish the mushroom, these are the next steps. Both already include this course for free.', 'Quando você terminar o cogumelo, estes são os próximos passos. Os dois já incluem este curso de graça.'],
    ['#next-steps .next-steps__card:nth-of-type(1) h3', 'ZBrush for Stylized Characters', 'ZBrush for Stylized Characters'],
    ['#next-steps .next-steps__card:nth-of-type(1) > p:nth-of-type(1)', 'The complete process for designing and sculpting original stylized characters, from concept to final sculpt.', 'O processo completo para criar e esculpir personagens estilizados originais, do conceito ao sculpt final.'],
    ['#next-steps .next-steps__card:nth-of-type(1) .btn', 'See the course ($49)', 'Ver o curso ($49)'],
    ['#next-steps .next-steps__card:nth-of-type(2) h3', 'One-on-One Mentorship', 'Mentoria One-on-One'],
    ['#next-steps .next-steps__card:nth-of-type(2) > p:nth-of-type(1)', 'Ten weeks of one-on-one guidance from a Senior Character Artist. You finish a portfolio-ready character with feedback every week.', 'Dez semanas de orientação individual de um Senior Character Artist. Você termina um personagem de portfólio com feedback toda semana.'],
    ['#next-steps .next-steps__card:nth-of-type(2) .btn', 'See the mentorship ($600)', 'Ver a mentoria ($600)'],
    ['.next-steps__note', 'Includes Intro to ZBrush: Mushroom ($19 value)', 'Inclui o Intro to ZBrush: Mushroom (valor de $19)'],

    ['#discord h2', 'Join the school\'s Discord', 'Entre no Discord da escola'],
    ['#discord p', 'Share your progress, ask questions and meet other artists learning 3D. Free for everyone.', 'Compartilhe seu progresso, tire dúvidas e conheça outros artistas aprendendo 3D. Gratuito para todos.'],
    ['#discord .btn', 'Join the Discord', 'Entrar no Discord'],

    ['#faq .section__head h2', 'Frequently asked questions', 'Perguntas frequentes'],
    ['#faq .faq__item:nth-of-type(1) summary', 'Do I need any experience in 3D or ZBrush? <span class="faq__icon">+</span>', 'Preciso de alguma experiência em 3D ou ZBrush? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(1) .faq__answer', 'No. This course was designed for absolute beginners. It starts from opening ZBrush for the first time and explains every concept before using it.', 'Não. Este curso foi feito para iniciantes absolutos. Começa em abrir o ZBrush pela primeira vez e explica cada conceito antes de usá-lo.'],
    ['#faq .faq__item:nth-of-type(2) summary', 'What software will I need? <span class="faq__icon">+</span>', 'Quais softwares vou precisar? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(2) .faq__answer', 'Only ZBrush. The lessons use standard tools available in any recent version.', 'Apenas o ZBrush. As aulas usam ferramentas padrão, disponíveis em qualquer versão recente.'],
    ['#faq .faq__item:nth-of-type(3) summary', 'Is the course in English or Portuguese? <span class="faq__icon">+</span>', 'O curso é em inglês ou português? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(3) .faq__answer', 'The lessons are in English, with subtitles in both English and Portuguese.', 'As aulas são em inglês, com legendas em inglês e em português.'],
    ['#faq .faq__item:nth-of-type(4) summary', 'Is this course included anywhere else? <span class="faq__icon">+</span>', 'Este curso está incluído em algum outro? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(4) .faq__answer', 'Yes. It comes free with ZBrush for Stylized Characters and with the One-on-One Mentorship. If you\'re planning to get either of those, you don\'t need to buy this course separately.', 'Sim. Ele vem de graça com o ZBrush for Stylized Characters e com a Mentoria One-on-One. Se você pretende pegar um dos dois, não precisa comprar este curso separadamente.'],
    ['#faq .faq__item:nth-of-type(5) summary', 'Is there a deadline to finish? <span class="faq__icon">+</span>', 'Existe prazo para concluir? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(5) .faq__answer', 'No. After purchase, access is lifetime. Study at your own pace and come back to the content as many times as you want.', 'Não. Depois da compra, o acesso é vitalício. Estude no seu ritmo e volte ao conteúdo quantas vezes quiser.'],
    ['#faq .faq__item:nth-of-type(6) summary', 'What if I\'m not happy with the course? <span class="faq__icon">+</span>', 'E se eu não gostar do curso? <span class="faq__icon">+</span>'],
    ['#faq .faq__item:nth-of-type(6) .faq__answer', 'You have a 15-day money-back guarantee after purchase, with plenty of time to explore the content and decide whether it\'s the right fit for you.', 'Você tem garantia de reembolso de 15 dias após a compra, com tempo de sobra para explorar o conteúdo e decidir se é para você.'],

    ['.final-cta h2', 'Thirteen lessons. One cute mushroom.<br>Your first finished character.', 'Treze aulas. Um cogumelo fofo.<br>Seu primeiro personagem finalizado.'],
    ['.final-cta .container > p', 'The easiest way to find out if 3D character art is for you.', 'O jeito mais fácil de descobrir se arte de personagens 3D é para você.'],
    ['#final-buy', 'Get this course for $19', 'Quero este curso por $19'],

    ['.sticky-cta__label', 'Intro course', 'Curso intro'],
    ['.sticky-cta > .btn', 'Get this course', 'Quero este curso']
  ];

  /* [selector, attribute, EN, PT] */
  var ATTR = [
    ['.video-frame--hero video', 'aria-label', 'Turntable of the mushroom character sculpted in the course', 'Turntable do personagem cogumelo esculpido no curso']
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
