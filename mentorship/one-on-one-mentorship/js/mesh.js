/* Vini Cavalcanti School — mentorship-one-on-one
   Decorative animated 3D wireframe (icosahedron) for .mesh-canvas elements.
   Separate from js/main.js on purpose: main.js is frozen. Vanilla JS, no deps.
   - data-stroke="orange" (default): brand orange edges on light bands
   - data-stroke="light": white edges for the gradient CTA band
   Respects prefers-reduced-motion (renders one static frame) and pauses offscreen. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initMesh(cv) {
    var ctx = cv.getContext('2d');
    if (!ctx) return;
    var S = cv.width;

    /* Icosahedron vertices */
    var t = (1 + Math.sqrt(5)) / 2;
    var V = [
      [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
      [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
      [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]
    ];
    var norm = Math.sqrt(1 + t * t);
    V = V.map(function (v) { return v.map(function (c) { return c / norm; }); });

    /* Edges: vertex pairs closer than the edge length */
    var E = [];
    for (var i = 0; i < V.length; i++) {
      for (var j = i + 1; j < V.length; j++) {
        var d = Math.hypot(V[i][0] - V[j][0], V[i][1] - V[j][1], V[i][2] - V[j][2]);
        if (d < 1.2) E.push([i, j]);
      }
    }

    var light = cv.getAttribute('data-stroke') === 'light';
    var edgeRgb = light ? '255,255,255' : '239,119,34'; /* --color-orange */
    var dotRgb = light ? '255,255,255' : '6,6,6';       /* --color-text  */

    var a = 0.4, b = 0.2, running = false, raf = null;

    function frame() {
      ctx.clearRect(0, 0, S, S);
      var ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(b), sb = Math.sin(b);
      var P = V.map(function (v) {
        var x1 = v[0] * ca - v[2] * sa, z1 = v[0] * sa + v[2] * ca;
        var y1 = v[1] * cb - z1 * sb, z2 = v[1] * sb + z1 * cb;
        var persp = 2.6 / (2.6 + z2), r = S * 0.36;
        return [S / 2 + x1 * r * persp, S / 2 + y1 * r * persp, z2];
      });
      E.forEach(function (e) {
        var depth = (P[e[0]][2] + P[e[1]][2]) / 2;
        var alpha = 0.18 + 0.42 * (1 - (depth + 1) / 2);
        ctx.strokeStyle = 'rgba(' + edgeRgb + ',' + alpha.toFixed(2) + ')';
        ctx.lineWidth = depth < 0 ? 1.5 : 1;
        ctx.beginPath();
        ctx.moveTo(P[e[0]][0], P[e[0]][1]);
        ctx.lineTo(P[e[1]][0], P[e[1]][1]);
        ctx.stroke();
      });
      P.forEach(function (p) {
        var alpha = 0.3 + 0.5 * (1 - (p[2] + 1) / 2);
        ctx.fillStyle = 'rgba(' + dotRgb + ',' + alpha.toFixed(2) + ')';
        ctx.beginPath();
        ctx.arc(p[0], p[1], 2.2, 0, 7);
        ctx.fill();
      });
      a += 0.003;
      b += 0.0018;
      if (running && !reduced) raf = requestAnimationFrame(frame);
    }

    function start() {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(frame);
    }
    function stop() {
      running = false;
      if (raf) cancelAnimationFrame(raf);
    }

    if (reduced) { frame(); return; } /* single static frame */

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) start(); else stop();
        });
      }, { threshold: 0 }).observe(cv);
    } else {
      start();
    }
  }

  document.querySelectorAll('.mesh-canvas').forEach(initMesh);
})();
