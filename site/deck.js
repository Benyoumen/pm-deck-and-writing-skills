/* PM Deck and Writing Skills: deck navigation. No dependencies.
   Rules it implements (slide-writing-rules, Rule 12): previous and next buttons,
   arrow keys, Page Up and Page Down, Space, Home and End, a #sN hash per slide,
   a progress bar and an n / total counter. Clicking content does nothing. */
(function () {
  'use strict';

  var html = document.documentElement;
  html.classList.add('js');

  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var total = slides.length;
  var progress = document.getElementById('progress');
  var counter = document.getElementById('counter');
  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');
  var stagewrap = document.getElementById('stagewrap');
  var wide = window.matchMedia('(min-width: 721px)');
  var current = -1;

  function indexFromHash() {
    var m = /^#s(\d+)$/.exec(window.location.hash);
    if (m) {
      var n = parseInt(m[1], 10);
      if (n >= 1 && n <= total) { return n - 1; }
    }
    return 0;
  }

  function show(i, updateHash) {
    i = Math.max(0, Math.min(total - 1, i));
    if (i === current) { return; }
    current = i;
    slides.forEach(function (slide, k) {
      var active = k === i;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
    counter.textContent = (i + 1) + ' / ' + total;
    progress.style.width = ((i + 1) / total * 100) + '%';
    prevBtn.disabled = i === 0;
    nextBtn.disabled = i === total - 1;
    if (updateHash !== false) {
      var hash = '#s' + (i + 1);
      if (window.location.hash !== hash) {
        window.history.replaceState(null, '', hash);
      }
    }
    if (!wide.matches) { window.scrollTo(0, 0); }
  }

  function step(delta) { show(current + delta); }

  /* Scale the fixed 1280 by 720 stage to the space available. */
  function fit() {
    if (!wide.matches) {
      html.style.removeProperty('--scale');
      return;
    }
    var box = stagewrap.parentNode;
    var cs = window.getComputedStyle(box);
    var w = box.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    var h = box.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    var s = Math.min(w / 1280, h / 720);
    if (s > 0 && isFinite(s)) { html.style.setProperty('--scale', String(s)); }
  }

  document.addEventListener('click', function (e) {
    var target = e.target.closest ? e.target.closest('[data-nav]') : null;
    if (!target) { return; }
    e.preventDefault();
    step(target.getAttribute('data-nav') === 'next' ? 1 : -1);
  });

  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) { return; }
    var tag = (e.target && e.target.tagName ? e.target.tagName : '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || (e.target && e.target.isContentEditable)) { return; }
    if (tag === 'button' && (e.key === ' ' || e.key === 'Enter')) { return; }
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
        step(1); e.preventDefault(); break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        step(-1); e.preventDefault(); break;
      case ' ':
        step(e.shiftKey ? -1 : 1); e.preventDefault(); break;
      case 'Home':
        show(0); e.preventDefault(); break;
      case 'End':
        show(total - 1); e.preventDefault(); break;
      default:
        break;
    }
  });

  /* Swipe on touch screens. A tap or a text selection does nothing. */
  var touchX = null;
  var touchY = null;
  document.addEventListener('touchstart', function (e) {
    var t = e.changedTouches[0];
    touchX = t.clientX;
    touchY = t.clientY;
  }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (touchX === null) { return; }
    var t = e.changedTouches[0];
    var dx = t.clientX - touchX;
    var dy = t.clientY - touchY;
    touchX = null;
    touchY = null;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      step(dx < 0 ? 1 : -1);
    }
  }, { passive: true });

  window.addEventListener('hashchange', function () { show(indexFromHash(), false); });
  window.addEventListener('resize', fit);
  if (wide.addEventListener) { wide.addEventListener('change', fit); } else if (wide.addListener) { wide.addListener(fit); }
  if (document.fonts && document.fonts.ready) { document.fonts.ready.then(fit); }

  fit();
  show(indexFromHash());
})();
