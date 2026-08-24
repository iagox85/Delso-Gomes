(() => {
  'use strict';

  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  const setHeaderState = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 16);
  };

  const setMenuOpen = (open) => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    mobileMenu.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
    menuToggle.innerHTML = open
      ? '<svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>'
      : '<svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16M4 12h16M4 19h16"/></svg>';
  };

  window.addEventListener('scroll', setHeaderState, { passive: true });
  setHeaderState();

  menuToggle?.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && menuToggle?.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
    }
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('animate-rise');
        entry.target.classList.remove('reveal');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item, index) => {
      item.style.animationDelay = `${(index % 4) * 70}ms`;
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach((item) => item.classList.remove('reveal'));
  }

  document.querySelectorAll('.detail-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const detail = document.getElementById(button.getAttribute('aria-controls'));
      if (!detail) return;
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      detail.hidden = expanded;
    });
  });
})();
