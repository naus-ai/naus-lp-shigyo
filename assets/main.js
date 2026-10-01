(function () {
  var menuBtn = document.getElementById('menu-btn');
  var navMobile = document.getElementById('nav-mobile');

  function setMenu(open) {
    navMobile.hidden = !open;
  }

  menuBtn.addEventListener('click', function () {
    setMenu(navMobile.hidden);
  });

  navMobile.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 860) setMenu(false);
  });

  var tabs = document.querySelectorAll('.tab');
  var panels = document.querySelectorAll('.contact-form');

  function setTab(name) {
    tabs.forEach(function (t) {
      t.classList.toggle('is-active', t.getAttribute('data-tab') === name);
    });
    panels.forEach(function (p) {
      p.hidden = p.getAttribute('data-panel') !== name;
    });
  }

  document.querySelectorAll('[data-tab]').forEach(function (el) {
    el.addEventListener('click', function () {
      setTab(el.getAttribute('data-tab'));
    });
  });

  var fixedCta = document.querySelector('.fixed-cta');
  var heroBtns = document.querySelector('.hero-btns');

  if (fixedCta && heroBtns && 'IntersectionObserver' in window) {
    fixedCta.classList.add('is-hidden');
    new IntersectionObserver(function (entries) {
      fixedCta.classList.toggle('is-hidden', entries[entries.length - 1].isIntersecting);
    }).observe(heroBtns);
  }
})();
