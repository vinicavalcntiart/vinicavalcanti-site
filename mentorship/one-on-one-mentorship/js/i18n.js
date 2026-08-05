/* Vini Cavalcanti School — Mentorship One-on-One LP
   EN | PT language toggle. Same mechanism and storage key (vc_lang) as the homepage:
   a dictionary keyed by CSS selectors; the header button switches the language and
   the choice persists across visits via localStorage.
   RULE: whenever a text on the page is edited, update the matching entry here,
   otherwise the toggle will overwrite the edit with the old string. */
(function () {
  'use strict';

  var STORAGE_KEY = 'vc_lang';

  /* Each entry: s = CSS selector, en/pt = innerHTML (or attribute value when attr is set). */
  var DICT = [
    /* header + mobile menu */
    { s: '#nav-link-courses, #mobile-menu > a:nth-child(1)', en: 'Courses', pt: 'Cursos' },
    { s: '#nav-link-mentorship, #mobile-menu > a:nth-child(2)', en: 'Mentorship', pt: 'Mentoria' },
    { s: '#nav-link-portfolio, #mobile-menu > a:nth-child(3)', en: 'Portfolio', pt: 'Portf&oacute;lio' },
    { s: '#nav-link-contact, #mobile-menu > a:nth-child(4)', en: 'Contact', pt: 'Contato' },
    { s: '#nav-members-desktop, #mobile-menu .btn--members', en: 'Members Area', pt: '&Aacute;rea de Membros' },

    /* hero */
    { s: '.hero__badges .badge--limited', en: 'Limited Spots', pt: 'Vagas Limitadas' },
    { s: '.hero__badges .badge--oneonone', en: 'One-on-One Mentorship', pt: 'Mentoria One-on-One' },
    { s: '.hero__badges .badge--neutral', en: 'Season 2 &middot; 10 Weeks', pt: 'Season 2 &middot; 10 Semanas' },
    { s: '.hero h1', en: 'Finish a portfolio-ready character with a Senior Artist reviewing every step.', pt: 'Finalize um personagem de portf&oacute;lio com um Senior Artist revisando cada etapa.' },
    { s: '.hero__sub', en: 'Ten weeks of direct, one-on-one guidance from a Senior 3D Character Artist working inside real studios. Your work, on screen, every single week.', pt: 'Dez semanas de orienta&ccedil;&atilde;o direta, one-on-one, com um Senior 3D Character Artist que trabalha dentro de est&uacute;dios reais. Seu trabalho, na tela, toda semana.' },
    { s: '.hero__cta-row .btn--primary', en: 'Sign up now!', pt: 'Inscreva-se agora!' },
    { s: '.hero__price-label', en: 'Investment', pt: 'Investimento' },
    { s: '.hero__price-note', en: 'or 3 payments', pt: 'ou 3x' },

    /* video */
    { s: '.video-section .eyebrow', en: 'Watch first', pt: 'Assista primeiro' },
    { s: '.video-section h2', en: 'Tutorials taught you the tools.<br>Nobody is looking at <em>your</em> work.', pt: 'Tutoriais te ensinaram as ferramentas.<br>Ningu&eacute;m est&aacute; olhando para o <em>seu</em> trabalho.' },
    { s: '.video-section .section__lead', en: 'Vini explains how the mentorship works, in his own words.', pt: 'Vini explica como a mentoria funciona, nas pr&oacute;prias palavras dele.' },

    /* not-a-course */
    { s: '#compare .eyebrow', en: 'This is not a course', pt: 'Isto n&atilde;o &eacute; um curso' },
    { s: '#compare .section__head h2', en: "It's a mentorship. The difference is who's looking at your work.", pt: '&Eacute; uma mentoria. A diferen&ccedil;a &eacute; quem est&aacute; olhando para o seu trabalho.' },
    { s: '#compare .compare__card:nth-child(1) h3', en: 'Recorded course', pt: 'Curso gravado' },
    { s: '#compare .compare__card:nth-child(1) li:nth-child(1)', en: "You watch someone else's character get built.", pt: 'Voc&ecirc; assiste o personagem de outra pessoa ser constru&iacute;do.' },
    { s: '#compare .compare__card:nth-child(1) li:nth-child(2)', en: 'Zero feedback on your own work.', pt: 'Zero feedback no seu pr&oacute;prio trabalho.' },
    { s: '#compare .compare__card:nth-child(1) li:nth-child(3)', en: "When you get stuck, you're on your own.", pt: 'Quando voc&ecirc; trava, est&aacute; por conta pr&oacute;pria.' },
    { s: '#compare .compare__card:nth-child(2) h3', en: 'Cohort / bootcamp', pt: 'Turma / bootcamp' },
    { s: '#compare .compare__card:nth-child(2) li:nth-child(1)', en: 'One instructor split across 15&ndash;30 students.', pt: 'Um instrutor dividido entre 15&ndash;30 alunos.' },
    { s: '#compare .compare__card:nth-child(2) li:nth-child(2)', en: 'Minutes of attention on your piece, if any.', pt: 'Minutos de aten&ccedil;&atilde;o na sua pe&ccedil;a, se tanto.' },
    { s: '#compare .compare__card:nth-child(2) li:nth-child(3)', en: "The pace is the group's, not yours.", pt: 'O ritmo &eacute; do grupo, n&atilde;o o seu.' },
    { s: '#compare .compare__tag', en: 'This program', pt: 'Este programa' },
    { s: '#compare .compare__card--highlight h3', en: 'One-on-one mentorship', pt: 'Mentoria one-on-one' },
    { s: '#compare .compare__card--highlight li:nth-child(1)', en: 'Every session is about your character, your file, your decisions.', pt: 'Cada sess&atilde;o &eacute; sobre o seu personagem, o seu arquivo, as suas decis&otilde;es.' },
    { s: '#compare .compare__card--highlight li:nth-child(2)', en: 'A Senior Artist correcting your course every week.', pt: 'Um Senior Artist corrigindo seu rumo toda semana.' },
    { s: '#compare .compare__card--highlight li:nth-child(3)', en: 'Structured 10-week path with a finished piece at the end.', pt: 'Trilha estruturada de 10 semanas com uma pe&ccedil;a finalizada no fim.' },

    /* how it works */
    { s: '#how .eyebrow', en: 'How it works', pt: 'Como funciona' },
    { s: '#how .section__head h2', en: 'A simple weekly rhythm, built around you.', pt: 'Um ritmo semanal simples, constru&iacute;do em torno de voc&ecirc;.' },
    { s: '#how .how-card:nth-child(1) .how-card__step', en: 'Every week', pt: 'Toda semana' },
    { s: '#how .how-card:nth-child(1) h3', en: 'Live 1-on-1 session', pt: 'Sess&atilde;o 1-on-1 ao vivo' },
    { s: '#how .how-card:nth-child(1) p', en: 'A weekly live session on Google Meet, just you and Vini, booked in your time zone.', pt: 'Uma sess&atilde;o ao vivo por semana no Google Meet, s&oacute; voc&ecirc; e o Vini, agendada no seu fuso hor&aacute;rio.' },
    { s: '#how .how-card:nth-child(2) .how-card__step', en: 'Between sessions', pt: 'Entre as sess&otilde;es' },
    { s: '#how .how-card:nth-child(2) h3', en: 'Private Discord', pt: 'Discord privado' },
    { s: '#how .how-card:nth-child(2) p', en: 'Direct access in a private channel to post progress and get unstuck.', pt: 'Acesso direto em um canal privado para postar progresso e destravar.' },
    { s: '#how .how-card:nth-child(3) .how-card__step', en: 'On your schedule', pt: 'No seu ritmo' },
    { s: '#how .how-card:nth-child(3) h3', en: 'Structured lessons', pt: 'Aulas estruturadas' },
    { s: '#how .how-card:nth-child(3) p', en: "Each week's topic comes with lessons on the platform, so session time goes to your work.", pt: 'O tema de cada semana vem com aulas na plataforma, ent&atilde;o o tempo de sess&atilde;o vai para o seu trabalho.' },
    { s: '#how .how-card:nth-child(4) .how-card__step', en: 'After 10 weeks', pt: 'Depois de 10 semanas' },
    { s: '#how .how-card:nth-child(4) h3', en: 'One complete character', pt: 'Um personagem completo' },
    { s: '#how .how-card:nth-child(4) p', en: 'From the first blockout to a portfolio-ready final render.', pt: 'Do primeiro blockout a um render final pronto para o portf&oacute;lio.' },

    /* software */
    { s: '#software .eyebrow', en: 'Industry tools', pt: 'Ferramentas da ind&uacute;stria' },
    { s: '#software .section__head h2', en: "The software you'll master.", pt: 'Os softwares que voc&ecirc; vai dominar.' },
    { s: '#software .software__pill:nth-child(1) .software__role', en: 'sculpting', pt: 'escultura' },
    { s: '#software .software__pill:nth-child(2) .software__role', en: 'modeling', pt: 'modelagem' },
    { s: '#software .software__pill:nth-child(3) .software__role', en: 'texturing', pt: 'texturiza&ccedil;&atilde;o' },
    { s: '#software .software__pill:nth-child(4) .software__role', en: 'grooming &amp; render, optional', pt: 'grooming &amp; render, opcional' },

    /* journey */
    { s: '#schedule .eyebrow', en: 'Mentorship schedule', pt: 'Cronograma da mentoria' },
    { s: '#schedule .section__head h2', en: 'The 10-week journey', pt: 'A jornada de 10 semanas' },
    { s: '#schedule .section__lead', en: 'A complete character pipeline: sculpture in ZBrush and Blender, texturing in Substance Painter, grooming and rendering in Houdini.', pt: 'Um pipeline completo de personagem: escultura no ZBrush e Blender, texturiza&ccedil;&atilde;o no Substance Painter, grooming e render no Houdini.' },
    { s: '#schedule .pipeline__item:nth-child(2) span', en: 'Retopology', pt: 'Retopologia' },
    { s: '#schedule .pipeline__item:nth-child(3) span', en: 'UVs &amp; Baking', pt: 'UVs &amp; Bake' },
    { s: '#schedule .pipeline__item:nth-child(4) span', en: 'Texturing', pt: 'Texturiza&ccedil;&atilde;o' },
    { s: '#schedule .pipeline__item:nth-child(5) span', en: 'Final Render', pt: 'Render Final' },
    { s: '#schedule .module:nth-of-type(1) .module__title', en: 'Module 1: Sculpture &amp; Character Foundation (ZBrush &amp; Blender)', pt: 'M&oacute;dulo 1: Escultura &amp; Fundamentos do Personagem (ZBrush &amp; Blender)' },
    { s: '#schedule .module:nth-of-type(2) .module__title', en: 'Module 2: Advanced Grooming &amp; LookDev (Houdini &amp; Substance)', pt: 'M&oacute;dulo 2: Grooming Avan&ccedil;ado &amp; LookDev (Houdini &amp; Substance)' },
    { s: '#schedule .module:nth-of-type(3) .module__title', en: 'Module 3: Final Presentation (Houdini)', pt: 'M&oacute;dulo 3: Apresenta&ccedil;&atilde;o Final (Houdini)' },
    { s: '#schedule .module:nth-of-type(1) .week-card:nth-child(1) .week-card__label', en: 'Week 1', pt: 'Semana 1' },
    { s: '#schedule .module:nth-of-type(1) .week-card:nth-child(1) p', en: '<strong>Primary Forms &amp; Blocking</strong>', pt: '<strong>Formas Prim&aacute;rias &amp; Blocking</strong>' },
    { s: '#schedule .module:nth-of-type(1) .week-card:nth-child(2) .week-card__label', en: 'Week 2', pt: 'Semana 2' },
    { s: '#schedule .module:nth-of-type(1) .week-card:nth-child(2) p', en: '<strong>Head &amp; Facial Features</strong>', pt: '<strong>Cabe&ccedil;a &amp; Tra&ccedil;os Faciais</strong>' },
    { s: '#schedule .module:nth-of-type(1) .week-card:nth-child(3) .week-card__label', en: 'Week 3', pt: 'Semana 3' },
    { s: '#schedule .module:nth-of-type(1) .week-card:nth-child(3) p', en: '<strong>Hands &amp; Anatomical Detailing</strong>', pt: '<strong>M&atilde;os &amp; Detalhamento Anat&ocirc;mico</strong>' },
    { s: '#schedule .module:nth-of-type(1) .week-card:nth-child(4) .week-card__label', en: 'Week 4', pt: 'Semana 4' },
    { s: '#schedule .module:nth-of-type(1) .week-card:nth-child(4) p', en: '<strong>Hair Block-out</strong>', pt: '<strong>Block-out do Cabelo</strong>' },
    { s: '#schedule .module:nth-of-type(1) .week-card:nth-child(5) .week-card__label', en: 'Week 5', pt: 'Semana 5' },
    { s: '#schedule .module:nth-of-type(1) .week-card:nth-child(5) p', en: '<strong>Clothing &amp; Accessories</strong>', pt: '<strong>Roupas &amp; Acess&oacute;rios</strong>' },
    { s: '#schedule .module:nth-of-type(1) .week-card:nth-child(6) .week-card__label', en: 'Week 6', pt: 'Semana 6' },
    { s: '#schedule .module:nth-of-type(1) .week-card:nth-child(6) p', en: '<strong>Posing &amp; Composition</strong>', pt: '<strong>Pose &amp; Composi&ccedil;&atilde;o</strong>' },
    { s: '#schedule .module:nth-of-type(2) .week-card:nth-child(1) .week-card__label', en: 'Week 7', pt: 'Semana 7' },
    { s: '#schedule .module:nth-of-type(2) .week-card:nth-child(1) p', en: '<strong>Texturing &amp; PBR Workflow</strong>', pt: '<strong>Texturiza&ccedil;&atilde;o &amp; Workflow PBR</strong>' },
    { s: '#schedule .module:nth-of-type(2) .week-card:nth-child(2) .week-card__label', en: 'Week 8', pt: 'Semana 8' },
    { s: '#schedule .module:nth-of-type(2) .week-card:nth-child(2) p', en: '<strong>Intro to Houdini Grooming</strong>', pt: '<strong>Introdu&ccedil;&atilde;o ao Grooming no Houdini</strong>' },
    { s: '#schedule .module:nth-of-type(2) .week-card:nth-child(3) .week-card__label', en: 'Week 9', pt: 'Semana 9' },
    { s: '#schedule .module:nth-of-type(2) .week-card:nth-child(3) p', en: '<strong>Advanced Grooming &amp; LookDev</strong>', pt: '<strong>Grooming Avan&ccedil;ado &amp; LookDev</strong>' },
    { s: '#schedule .module:nth-of-type(3) .week-card:nth-child(1) .week-card__label', en: 'Week 10', pt: 'Semana 10' },
    { s: '#schedule .module:nth-of-type(3) .week-card:nth-child(1) p', en: '<strong>Final Rendering &amp; Portfolio</strong>', pt: '<strong>Render Final &amp; Portf&oacute;lio</strong>' },

    /* gallery */
    { s: '.gallery-section .eyebrow', en: "The standard you'll be chasing", pt: 'O padr&atilde;o que voc&ecirc; vai perseguir' },
    { s: '.gallery-section .section__head h2', en: 'Characters built with this exact pipeline.', pt: 'Personagens constru&iacute;dos com exatamente este pipeline.' },
    { s: '.gallery__caption', en: 'Every one of these went through the pipeline you just read: sculpt, texture, groom, render. <strong>The next character to come out of it is yours.</strong>', pt: 'Cada um deles passou pelo pipeline que voc&ecirc; acabou de ler: escultura, textura, grooming, render. <strong>O pr&oacute;ximo personagem a sair dele &eacute; o seu.</strong>' },

    /* mentor */
    { s: '.mentor .eyebrow', en: 'Your mentor', pt: 'Seu mentor' },
    { s: '.mentor__body h2', en: "Feedback from someone who's inside the industry, not just talking about it.", pt: 'Feedback de quem est&aacute; dentro da ind&uacute;stria, n&atilde;o s&oacute; falando sobre ela.' },
    { s: '.mentor__bio', en: 'Hi, I\'m <span class="accent">Vini Cavalcanti</span>. I\'m a <strong>Senior 3D Character Artist</strong> with <strong>10+ years of experience</strong> in games and entertainment, focused on <em>visual development</em> and <em>stylized characters</em>. I\'m also an <strong>MA Cand.</strong> and a <strong>Game Art Specialist (PG Dip)</strong>. I\'m currently on the team at <strong>E-Line Media</strong> working on <strong>Endstar</strong>, and I\'ve contributed to <em>The Wingfeather Saga</em> (<strong>Angel Studios</strong>) and games like <em>Wonderbox</em> and <em>Dice Dreams</em> at <strong>PUGA Studios</strong>. The feedback you get every week is the same kind of review that happens inside a studio.', pt: 'Oi, eu sou <span class="accent">Vini Cavalcanti</span>. Sou <strong>Senior 3D Character Artist</strong> com <strong>10+ anos de experi&ecirc;ncia</strong> em games e entretenimento, focado em <em>desenvolvimento visual</em> e <em>personagens estilizados</em>. Tamb&eacute;m sou <strong>Mestrando (MA Cand.)</strong> e <strong>Game Art Specialist (PG Dip)</strong>. Atualmente estou no time da <strong>E-Line Media</strong> trabalhando em <strong>Endstar</strong>, e contribu&iacute; para <em>The Wingfeather Saga</em> (<strong>Angel Studios</strong>) e jogos como <em>Wonderbox</em> e <em>Dice Dreams</em> na <strong>PUGA Studios</strong>. O feedback que voc&ecirc; recebe toda semana &eacute; o mesmo tipo de review que acontece dentro de um est&uacute;dio.' },
    { s: '.mentor__pills span:nth-child(3)', en: '10+ years exp', pt: '10+ anos de exp' },
    { s: '.mentor__pills span:nth-child(4)', en: 'Industry active', pt: 'Ativo na ind&uacute;stria' },
    { s: '.mentor__pills span:nth-child(5)', en: 'EN sessions &middot; PT-BR friendly', pt: 'Sess&otilde;es em EN &middot; PT-BR friendly' },

    /* fit */
    { s: '#fit .eyebrow', en: 'Honest fit check', pt: 'Checagem honesta de fit' },
    { s: '#fit .section__head h2', en: "Who this is for. And who it isn't.", pt: 'Para quem isto &eacute;. E para quem n&atilde;o &eacute;.' },
    { s: '.fit__card--yes .fit__label', en: 'This is for you if', pt: 'Isto &eacute; para voc&ecirc; se' },
    { s: '.fit__card--yes li:nth-child(1)', en: 'You want a complete, portfolio-ready stylized character with professional review at every stage.', pt: 'Voc&ecirc; quer um personagem estilizado completo, pronto para o portf&oacute;lio, com review profissional em cada etapa.' },
    { s: '.fit__card--yes li:nth-child(2)', en: "You're tired of guessing whether your work is good enough.", pt: 'Voc&ecirc; est&aacute; cansado de adivinhar se o seu trabalho est&aacute; bom o suficiente.' },
    { s: '.fit__card--yes li:nth-child(3)', en: 'You can commit a few hours per week for 10 weeks, with ZBrush and Blender installed (Houdini optional). No prior experience level required.', pt: 'Voc&ecirc; consegue dedicar algumas horas por semana durante 10 semanas, com ZBrush e Blender instalados (Houdini opcional). Nenhum n&iacute;vel de experi&ecirc;ncia pr&eacute;vio exigido.' },
    { s: '.fit__result', en: '<strong>Your result:</strong> one complete stylized character, blockout to final render, reviewed every week by a Senior Artist.', pt: '<strong>Seu resultado:</strong> um personagem estilizado completo, do blockout ao render final, revisado toda semana por um Senior Artist.' },
    { s: '.fit__card--no .fit__label', en: 'This is not for you if', pt: 'Isto n&atilde;o &eacute; para voc&ecirc; se' },
    { s: '.fit__card--no li:nth-child(1)', en: "You're looking for a job guarantee. No serious mentorship can promise that.", pt: 'Voc&ecirc; procura garantia de emprego. Nenhuma mentoria s&eacute;ria pode prometer isso.' },
    { s: '.fit__card--no li:nth-child(2)', en: 'You want a self-paced video library to binge. This is live, scheduled work.', pt: 'Voc&ecirc; quer uma biblioteca de v&iacute;deos para maratonar no seu ritmo. Isto &eacute; trabalho ao vivo, com agenda.' },
    { s: '.fit__card--no li:nth-child(3)', en: "You won't have time to work on your character between sessions.", pt: 'Voc&ecirc; n&atilde;o ter&aacute; tempo para trabalhar no seu personagem entre as sess&otilde;es.' },

    /* career */
    { s: '#career .eyebrow', en: 'Career prospects', pt: 'Perspectivas de carreira' },
    { s: '#career .section__head h2', en: 'A craft the industry pays well for.', pt: 'Um of&iacute;cio que a ind&uacute;stria paga bem.' },
    { s: '#career .career__stat:nth-child(1) .career__stat-label', en: 'Avg. salary', pt: 'Sal&aacute;rio m&eacute;dio' },
    { s: '#career .career__stat:nth-child(1) .career__stat-note', en: 'per year, US market', pt: 'por ano, mercado dos EUA' },
    { s: '#career .career__stat:nth-child(2) .career__stat-note', en: 'per hour', pt: 'por hora' },
    { s: '#career .career__stat:nth-child(3) .career__stat-label', en: 'Demand', pt: 'Demanda' },
    { s: '#career .career__stat:nth-child(3) .career__stat-value', en: 'Growing', pt: 'Em alta' },
    { s: '#career .career__stat:nth-child(3) .career__stat-note', en: 'games &amp; animation', pt: 'games &amp; anima&ccedil;&atilde;o' },
    { s: '#career .career__levels-title', en: 'Salary by level', pt: 'Sal&aacute;rio por n&iacute;vel' },
    { s: '#career .career__level:nth-of-type(1) span:first-child', en: 'Junior', pt: 'J&uacute;nior' },
    { s: '#career .career__level:nth-of-type(2) span:first-child', en: 'Mid-level', pt: 'Pleno' },
    { s: '#career .career__level:nth-of-type(3) span:first-child', en: 'Senior', pt: 'S&ecirc;nior' },
    { s: '#career .career__note', en: '* Based on public US market data (Glassdoor, LinkedIn Salary). Salaries vary widely by country, studio and portfolio. This program teaches the craft; no income is guaranteed.', pt: '* Baseado em dados p&uacute;blicos do mercado dos EUA (Glassdoor, LinkedIn Salary). Sal&aacute;rios variam muito por pa&iacute;s, est&uacute;dio e portf&oacute;lio. Este programa ensina o of&iacute;cio; nenhuma renda &eacute; garantida.' },

    /* pricing */
    { s: '#pricing .badge--limited', en: 'Limited Spots', pt: 'Vagas Limitadas' },
    { s: '#pricing .badge--oneonone', en: 'One-on-One Mentorship', pt: 'Mentoria One-on-One' },
    { s: '#pricing .pricing__includes li:nth-child(1)', en: '10 weeks of one-on-one mentorship', pt: '10 semanas de mentoria one-on-one' },
    { s: '#pricing .pricing__includes li:nth-child(2)', en: 'Weekly live feedback session, booked in your time zone', pt: 'Sess&atilde;o de feedback ao vivo toda semana, agendada no seu fuso' },
    { s: '#pricing .pricing__includes li:nth-child(3)', en: 'Private mentorship channel on Discord', pt: 'Canal privado de mentoria no Discord' },
    { s: '#pricing .pricing__includes li:nth-child(4)', en: 'Structured weekly lessons on the learning platform', pt: 'Aulas semanais estruturadas na plataforma' },
    { s: '#pricing .pricing__includes li:nth-child(5)', en: 'One complete character: blockout to final render', pt: 'Um personagem completo: do blockout ao render final' },
    { s: '#pricing .pricing__includes li:nth-child(6)', en: 'Portfolio-focused review in the final week', pt: 'Review focado em portf&oacute;lio na &uacute;ltima semana' },
    { s: '#pricing .pricing__price-note', en: 'one payment, or split in 3', pt: 'pagamento &uacute;nico, ou em 3x' },
    { s: '#pricing .pricing__cta .btn--primary', en: 'Sign up now!', pt: 'Inscreva-se agora!' },
    { s: '#pricing .pricing__cta .btn--secondary', en: 'Sign up now! 3 payments', pt: 'Inscreva-se agora! Em 3x' },
    { s: '#pricing .pricing__scarcity', en: 'Because every session is one-on-one, each season has a hard cap on students. When the spots are taken, enrollment closes until the next season.', pt: 'Como cada sess&atilde;o &eacute; one-on-one, cada season tem um limite r&iacute;gido de alunos. Quando as vagas acabam, as inscri&ccedil;&otilde;es fecham at&eacute; a pr&oacute;xima season.' },

    /* faq */
    { s: '.faq .section__head h2', en: 'Frequently asked questions', pt: 'Perguntas frequentes' },
    { s: '.faq__item:nth-of-type(1) .faq__q', en: "Can't I just learn this for free on YouTube?", pt: 'N&atilde;o posso aprender isso de gra&ccedil;a no YouTube?' },
    { s: '.faq__item:nth-of-type(1) .faq__answer', en: "You can learn the tools on YouTube, and you should. What free content can't do is look at <em>your</em> character and tell you why the silhouette reads wrong, where the anatomy breaks, or what a studio reviewer would flag first. That feedback loop is the entire product here.", pt: 'Voc&ecirc; pode aprender as ferramentas no YouTube, e deveria. O que o conte&uacute;do gratuito n&atilde;o faz &eacute; olhar para o <em>seu</em> personagem e dizer por que a silhueta l&ecirc; errado, onde a anatomia quebra, ou o que um revisor de est&uacute;dio apontaria primeiro. Esse loop de feedback &eacute; o produto inteiro aqui.' },
    { s: '.faq__item:nth-of-type(2) .faq__q', en: 'Will this get me a job in the industry?', pt: 'Isso vai me conseguir um emprego na ind&uacute;stria?' },
    { s: '.faq__item:nth-of-type(2) .faq__answer', en: 'No one can honestly promise you a job, and you should be suspicious of anyone who does. What this program gives you is the strongest asset for applications: a complete, portfolio-ready character reviewed at every stage by a Senior Artist who works inside studios.', pt: 'Ningu&eacute;m pode honestamente prometer um emprego, e voc&ecirc; deveria desconfiar de quem promete. O que este programa te d&aacute; &eacute; o ativo mais forte para candidaturas: um personagem completo, pronto para o portf&oacute;lio, revisado em cada etapa por um Senior Artist que trabalha dentro de est&uacute;dios.' },
    { s: '.faq__item:nth-of-type(3) .faq__q', en: 'How do the sessions and time zones work?', pt: 'Como funcionam as sess&otilde;es e os fusos hor&aacute;rios?' },
    { s: '.faq__item:nth-of-type(3) .faq__answer', en: 'Sessions run on Google Meet. Each week you book your slot through a scheduling link, picking the time that works best in your time zone. Mentees in Europe and North America are fully supported.', pt: 'As sess&otilde;es acontecem no Google Meet. A cada semana voc&ecirc; agenda seu hor&aacute;rio por um link, escolhendo o que funciona melhor no seu fuso. Mentorados na Europa e Am&eacute;rica do Norte s&atilde;o totalmente atendidos.' },
    { s: '.faq__item:nth-of-type(4) .faq__q', en: 'How much does it cost and how do I pay?', pt: 'Quanto custa e como eu pago?' },
    { s: '.faq__item:nth-of-type(4) .faq__answer', en: 'The full 10-week program is $600, paid once or split into 3 payments. Checkout is processed securely and international cards are accepted. For comparison: a single mentored course at the big online schools runs $600&ndash;$1,200, with one instructor shared across a full class.', pt: 'O programa completo de 10 semanas custa $600, em pagamento &uacute;nico ou dividido em 3x. O checkout &eacute; processado com seguran&ccedil;a e cart&otilde;es internacionais s&atilde;o aceitos. Para comparar: um &uacute;nico curso mentorado nas grandes escolas online sai por $600&ndash;$1.200, com um instrutor dividido entre a turma inteira.' },

    /* final cta */
    { s: '.final-cta h2', en: 'Ten weeks from now, you have a finished character. Or another folder of WIPs.', pt: 'Daqui a dez semanas, voc&ecirc; tem um personagem finalizado. Ou mais uma pasta de WIPs.' },
    { s: '.final-cta .container > p', en: "Spots are limited because every session is one-on-one. If you're ready to stop guessing and start finishing, this is the seat next to a Senior Artist.", pt: 'As vagas s&atilde;o limitadas porque cada sess&atilde;o &eacute; one-on-one. Se voc&ecirc; est&aacute; pronto para parar de adivinhar e come&ccedil;ar a finalizar, esta &eacute; a cadeira ao lado de um Senior Artist.' },
    { s: '.final-cta__row .btn--inverse', en: 'Sign up now!', pt: 'Inscreva-se agora!' },
    { s: '.final-cta__row .btn--outline-light', en: 'Sign up now! 3 payments', pt: 'Inscreva-se agora! Em 3x' },

    /* contact */
    { s: '#contact-eyebrow', en: 'Contact', pt: 'Contato' },
    { s: '#contact-title', en: "Let's talk", pt: 'Vamos conversar' },
    { s: '#contact-lead', en: 'Questions about a course, the mentorship or a project? Send a message and Vini will get back to you.', pt: 'D&uacute;vidas sobre um curso, a mentoria ou um projeto? Envie uma mensagem e o Vini responde voc&ecirc;.' },
    { s: '#cf-name-label', en: 'Name', pt: 'Nome' },
    { s: '#cf-message-label', en: 'Message', pt: 'Mensagem' },
    { s: '#cf-name', attr: 'placeholder', en: 'Your name', pt: 'Seu nome' },
    { s: '#cf-message', attr: 'placeholder', en: 'How can I help?', pt: 'Como posso ajudar?' },
    { s: '#contact-submit', en: 'Send message', pt: 'Enviar mensagem' },

    /* included (intro course bundled) */
    { s: '#included .eyebrow', en: 'Also included', pt: 'Tamb&eacute;m incluso' },
    { s: '#included h2', en: 'Intro to ZBrush: Mushroom comes with it', pt: 'O Intro to ZBrush: Mushroom vem junto' },
    { s: '#included p', en: 'Starting from zero in ZBrush? The mentorship already includes the full <strong>Intro to ZBrush: Mushroom</strong> course <strong>($19 value)</strong> — 12 lessons to cover the basics before your one-on-one sessions begin.', pt: 'Come&ccedil;ando do zero no ZBrush? A mentoria j&aacute; inclui o curso completo <strong>Intro to ZBrush: Mushroom</strong> <strong>(valor de $19)</strong> &mdash; 12 aulas para cobrir a base antes de as suas sess&otilde;es one-on-one come&ccedil;arem.' },

    /* footer */
    { s: '.site-footer__links a:nth-child(1)', en: 'Courses', pt: 'Cursos' },
    { s: '.site-footer__links a:nth-child(2)', en: 'Mentorship', pt: 'Mentoria' },
    { s: '.site-footer__links a:nth-child(4)', en: 'Contact', pt: 'Contato' }
  ];

  function apply(lang) {
    DICT.forEach(function (item) {
      if (!item.en && !item.pt) return; /* skip placeholder entries */
      var value = lang === 'pt' ? item.pt : item.en;
      var nodes;
      try { nodes = document.querySelectorAll(item.s); } catch (e) { return; }
      nodes.forEach(function (el) {
        if (item.attr) {
          el.setAttribute(item.attr, value);
        } else {
          el.innerHTML = value;
        }
      });
    });
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
    document.querySelectorAll('.site-header__lang').forEach(function (btn) {
      btn.innerHTML = lang === 'pt' ? 'EN | <strong>PT</strong>' : '<strong>EN</strong> | PT';
      btn.setAttribute('aria-label', lang === 'pt' ? 'Mudar idioma para inglês' : 'Switch language to Portuguese');
    });
  }

  var lang = 'en';
  try { lang = localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) { /* private mode */ }
  apply(lang);

  document.querySelectorAll('.site-header__lang').forEach(function (btn) {
    btn.addEventListener('click', function () {
      lang = lang === 'pt' ? 'en' : 'pt';
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
      apply(lang);
    });
  });
})();
