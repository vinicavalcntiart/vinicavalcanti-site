/* inside.js - "lesson player" for the Inside the course section (this page only).
   One frame, three annotated screenshots: the main one is large, the other two are
   thumbnails; clicking (or Enter/Space on) a thumbnail makes it the main one. No deps. */
(function () {
  'use strict';
  var root = document.getElementById('inside-player');
  if (!root) return;
  var slides = Array.prototype.slice.call(root.querySelectorAll('.player__slide'));
  function makeMain(target) {
    if (target.classList.contains('is-main')) return;
    slides.forEach(function (s) { s.classList.toggle('is-main', s === target); });
  }
  slides.forEach(function (s) {
    s.addEventListener('click', function () { makeMain(s); });
    s.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); makeMain(s); }
    });
  });
})();
