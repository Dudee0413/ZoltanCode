document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('langToggle');
  const menuBtn = document.getElementById('menuToggle');
  const langMenu = document.getElementById('languageMenu');
  const mobileMenu = document.getElementById('mobileMenu');

  // ☰ -> ✕ animáció
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('slide-down');
    menuBtn.classList.toggle('active');

    // ikon váltás
    document.querySelector('.menu-toggle .open').classList.toggle('hidden');
    document.querySelector('.menu-toggle .close').classList.toggle('hidden');
  });

  langBtn.addEventListener('click', () => {
    langMenu.classList.toggle('hidden');
    langMenu.classList.toggle('slide-down');
  });

  document.addEventListener('click', (e) => {
    if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
      langMenu.classList.add('hidden');
    }
    if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      menuBtn.classList.remove('active');
      document.querySelector('.menu-toggle .open').classList.remove('hidden');
      document.querySelector('.menu-toggle .close').classList.add('hidden');
    }
  });

  // Menü záródjon kattintáskor
  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuBtn.classList.remove('active');
      document.querySelector('.menu-toggle .open').classList.remove('hidden');
      document.querySelector('.menu-toggle .close').classList.add('hidden');
    });
  });
});
