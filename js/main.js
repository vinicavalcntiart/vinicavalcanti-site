/* Vini Cavalcanti School — ZBrush for Stylized Characters LP
   Vanilla JS only: scroll reveal, mobile menu, video autoplay guard,
   sticky mobile CTA. Respects prefers-reduced-motion. */

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Scroll-triggered reveal --------------------------------------- */
  var revealEls = document.querySelectorAll('.reveal');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* --- Mobile menu ----------------------------------------------------- */
  var burger = document.getElementById('nav-burger');
  var mobileMenu = document.getElementById('mobile-menu');
  if (burger && mobileMenu) {
    var setMenuOpen = function (open) {
      mobileMenu.hidden = !open;
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    burger.addEventListener('click', function () {
      setMenuOpen(mobileMenu.hidden);
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setMenuOpen(false); });
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !mobileMenu.hidden) setMenuOpen(false);
    });
  }

  /* --- Turntable autoplay guard ----------------------------------------
     Some mobile browsers (iOS low-power mode) block autoplay even when
     muted; retry playback on first user interaction. If the user prefers
     reduced motion, keep the poster frame instead of auto-spinning.     */
  var heroVideo = document.querySelector('.video-frame--hero video');
  if (heroVideo) {
    if (prefersReducedMotion) {
      heroVideo.removeAttribute('autoplay');
      heroVideo.pause();
      heroVideo.setAttribute('controls', '');
    } else {
      var tryPlay = function () {
        var p = heroVideo.play();
        if (p && typeof p.catch === 'function') { p.catch(function () {}); }
      };
      tryPlay();
      var resume = function () {
        if (heroVideo.paused) { tryPlay(); }
        document.removeEventListener('touchstart', resume);
        document.removeEventListener('click', resume);
      };
      document.addEventListener('touchstart', resume, { passive: true });
      document.addEventListener('click', resume);
    }
  }

  /* --- Sticky mobile CTA -------------------------------------------------
     Appears after the hero scrolls out of view; hides while the pricing
     card (which has its own CTA) is on screen.                            */
  var stickyCta = document.getElementById('sticky-cta');
  var hero = document.querySelector('.hero');
  var pricing = document.getElementById('pricing');
  if (stickyCta && hero && pricing && 'IntersectionObserver' in window) {
    stickyCta.hidden = false;
    var heroVisible = true;
    var pricingVisible = false;
    var update = function () {
      stickyCta.classList.toggle('is-visible', !heroVisible && !pricingVisible);
    };
    new IntersectionObserver(function (entries) {
      heroVisible = entries[0].isIntersecting;
      update();
    }, { threshold: 0.15 }).observe(hero);
    new IntersectionObserver(function (entries) {
      pricingVisible = entries[0].isIntersecting;
      update();
    }, { threshold: 0.2 }).observe(pricing);
  }
})();

/* Black Friday (real date: 2026-11-27, 00:00 BRT = 03:00 UTC). Top bar: day counter. BF hero: live DD:HH:MM:SS, "today" state during Nov 27 (BRT), hidden from Nov 28. */
(function () {
  'use strict';
  var TARGET = Date.UTC(2026, 10, 27, 3, 0, 0);
  var DAY = 86400000;
  var hero = document.querySelector('.bf-hero');
  var nums = {};
  document.querySelectorAll('.bf-hero__num').forEach(function (el) { nums[el.getAttribute('data-unit')] = el; });
  var barDays = document.querySelectorAll('.promo-bar__days');
  var pad = function (n) { return n < 10 ? '0' + n : String(n); };
  function tick() {
    var diff = TARGET - Date.now();
    if (diff > 0) {
      var d = Math.floor(diff / DAY), h = Math.floor(diff % DAY / 3600000), mi = Math.floor(diff % 3600000 / 60000), s = Math.floor(diff % 60000 / 1000);
      if (nums.d) { nums.d.textContent = String(d); nums.h.textContent = pad(h); nums.m.textContent = pad(mi); nums.s.textContent = pad(s); }
      barDays.forEach(function (el) { el.textContent = String(d); if (d < 1) { var w = el.closest('.promo-bar__count'); if (w) w.hidden = true; } });
      return true;
    }
    document.querySelectorAll('.promo-bar__count').forEach(function (el) { el.hidden = true; });
    if (hero) { if (diff > -DAY) { hero.classList.add('is-today'); } else { hero.hidden = true; } }
    return false;
  }
  if (tick()) { var id = setInterval(function () { if (!tick()) clearInterval(id); }, 1000); }
})();
