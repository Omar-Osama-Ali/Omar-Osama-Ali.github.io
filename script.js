(function () {
  'use strict';
  var d = document;
  d.documentElement.classList.add('js');
  var b = d.getElementById('burger'), m = d.getElementById('mm');
  function menu(o) { m.hidden = !o; b.setAttribute('aria-expanded', String(o)); }
  if (b && m) {
    b.addEventListener('click', function () { menu(m.hidden); });
    m.addEventListener('click', function (e) { if (e.target.closest('a')) menu(false); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !m.hidden) { menu(false); b.focus(); } });
    window.matchMedia('(min-width:900px)').addEventListener('change', function (q) { if (q.matches) menu(false); });
  }
  var r = d.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var o = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); o.unobserve(e.target); } });
    }, { threshold: 0.1 });
    r.forEach(function (x) { o.observe(x); });
  } else { r.forEach(function (x) { x.classList.add('in'); }); }
  var y = d.getElementById('yr'); if (y) y.textContent = new Date().getFullYear();
  var links = d.querySelectorAll('.links a[href^="#"]');
  if (links.length && 'IntersectionObserver' in window) {
    var map = {}; links.forEach(function (a) { var s = d.querySelector(a.getAttribute('href')); if (s) map[s.id] = a; });
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting && map[e.target.id]) {
        links.forEach(function (a) { a.removeAttribute('aria-current'); }); map[e.target.id].setAttribute('aria-current', 'true'); } });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(map).forEach(function (k) { so.observe(d.getElementById(k)); });
  }
})();
