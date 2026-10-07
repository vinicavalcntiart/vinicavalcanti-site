/* inside.js - "lesson player" carousel for the Inside the course section (this page only).
   Chapters scroll the track; swiping updates the active chapter and the counter. No deps. */
(function () {
  'use strict';
  var root = document.getElementById('inside-player');
  if (!root) return;
  var track = root.querySelector('.player__track');
  var slides = Array.prototype.slice.call(root.querySelectorAll('.player__slide'));
  var chips = Array.prototype.slice.call(root.querySelectorAll('.player__chip'));
  var current = root.querySelector('.player__current');
  var index = 0;

  function go(i) {
    index = Math.max(0, Math.min(slides.length - 1, i));
    track.scrollTo({ left: slides[index].offsetLeft - track.offsetLeft, behavior: 'smooth' });
  }
  function sync(i) {
    index = i;
    chips.forEach(function (c, k) {
      c.classList.toggle('is-active', k === i);
      c.setAttribute('aria-selected', k === i ? 'true' : 'false');
    });
    if (current) current.textContent = String(i + 1);
  }

  chips.forEach(function (c, k) { c.addEventListener('click', function () { go(k); }); });
  var prev = root.querySelector('.player__nav--prev'), next = root.querySelector('.player__nav--next');
  if (prev) prev.addEventListener('click', function () { go(index - 1); });
  if (next) next.addEventListener('click', function () { go(index + 1); });
  track.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
  });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting && en.intersectionRatio > 0.6) sync(slides.indexOf(en.target)); });
    }, { root: track, threshold: [0.6] });
    slides.forEach(function (sl) { io.observe(sl); });
  } else {
    track.addEventListener('scroll', function () { sync(Math.round(track.scrollLeft / track.clientWidth)); });
  }
})();
