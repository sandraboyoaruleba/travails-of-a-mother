// Travails of a Mother: small enhancements (mobile menu, review-marker toggle, footer year)
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Hide or show the gold "to confirm" markers while the draft is under review
  var reviewBtn = document.querySelector('.review-toggle');
  if (reviewBtn) {
    reviewBtn.addEventListener('click', function () {
      var hidden = document.body.classList.toggle('markers-off');
      document.body.classList.toggle('review-mode', !hidden);
      reviewBtn.setAttribute('aria-pressed', String(hidden));
      reviewBtn.textContent = hidden ? 'Show review markers' : 'Preview without markers';
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
