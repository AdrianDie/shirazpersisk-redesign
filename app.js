(function(){
  "use strict";

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header: solid once scrolled past the hero edge
  var header = document.getElementById('siteHeader');
  if (header) {
    var onScroll = function(){
      if (window.scrollY > 24) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile off-canvas menu
  var hamburger = document.getElementById('hamburgerBtn');
  var closeEls = document.querySelectorAll('[data-close-menu]');
  function openMenu(){
    document.documentElement.classList.add('menu-open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
  }
  function closeMenu(){
    document.documentElement.classList.remove('menu-open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
  }
  if (hamburger) {
    hamburger.addEventListener('click', function(){
      document.documentElement.classList.contains('menu-open') ? closeMenu() : openMenu();
    });
  }
  closeEls.forEach(function(el){ el.addEventListener('click', closeMenu); });
  document.querySelectorAll('.mobile-panel a').forEach(function(a){ a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeMenu(); });

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in'); });
  }
})();
