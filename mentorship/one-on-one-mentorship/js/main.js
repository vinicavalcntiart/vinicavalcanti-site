/* Vini Cavalcanti School — Mentorship One-on-One LP
   Vanilla JS only. Scroll-triggered reveal, respecting reduced motion. */

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  );

  revealEls.forEach(function (el) { observer.observe(el); });
})();

/* Header v2: mobile hamburger menu (home replica) */
(function () {
  'use strict';

  var burger = document.getElementById('nav-burger');
  var menu = document.getElementById('mobile-menu');
  if (!burger || !menu) return;

  function setOpen(open) {
    menu.hidden = !open;
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  burger.addEventListener('click', function () {
    setOpen(menu.hidden);
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !menu.hidden) setOpen(false);
  });
})();

/* --- Copy coupon buttons (2026-11-12) --------------------------------
   Any .copy-code button copies its data-code to the clipboard. Delegated
   on document so buttons re-rendered by i18n keep working. Feedback: icon
   becomes a check and the text reads "copied!" / "copiado!" for 1.5s. */
(function () {
  'use strict';
  var COPY = '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>';
  var CHECK = '<path d="M20 6 9 17l-5-5"/>';
  function write(text) {
    if (navigator.clipboard && window.isSecureContext) { return navigator.clipboard.writeText(text); }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-100px';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, text.length);
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      if (ok) { resolve(); } else { reject(new Error('copy failed')); }
    });
  }
  document.addEventListener('click', function (ev) {
    var btn = ev.target && ev.target.closest ? ev.target.closest('.copy-code') : null;
    if (!btn || btn.classList.contains('is-copied')) return;
    var code = btn.getAttribute('data-code') || btn.textContent.trim();
    write(code).then(function () {
      var txt = btn.querySelector('.copy-code__text');
      var ico = btn.querySelector('.copy-code__ico');
      var pt = (document.documentElement.getAttribute('lang') || '').indexOf('pt') === 0;
      var label = btn.getAttribute('aria-label');
      btn.style.minWidth = btn.offsetWidth + 'px';
      btn.classList.add('is-copied');
      btn.setAttribute('aria-label', pt ? 'Cupom copiado' : 'Coupon copied');
      if (txt) txt.textContent = pt ? 'copiado!' : 'copied!';
      if (ico) ico.innerHTML = CHECK;
      setTimeout(function () {
        if (txt) txt.textContent = code;
        if (ico) ico.innerHTML = COPY;
        if (label) btn.setAttribute('aria-label', label);
        btn.classList.remove('is-copied');
        btn.style.minWidth = '';
      }, 1500);
    }).catch(function () { /* clipboard blocked: the code stays visible to select by hand */ });
  });
})();
