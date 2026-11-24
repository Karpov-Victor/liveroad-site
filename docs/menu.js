// menu.js — общая шапка для всех страниц LiveRoad
(function () {
  const headerHTML = `
    <a class="logo" href="../index.html">LiveRoad<span> авторские путешествия по миру</span></a>
    <button class="burger" id="burger" aria-label="Меню" aria-expanded="false" aria-controls="mainNav">
      <span></span><span></span><span></span>
    </button>
    <nav id="mainNav">
      <ul>
        <li><a href="/index.html#countries">Страны</a></li>
        <li><a href="/index.html#fresh">Свежее</a></li>
        <li><a href="/index.html#tours">Туры</a></li>
        <li><a href="/gallery/index.html">Галерея</a></li>
      </ul>
    </nav>
  `;

  const header = document.getElementById('siteHeader');
  if (!header) return;

  header.innerHTML = headerHTML;

  // Бургер-меню
  const burger = header.querySelector('#burger');
  const nav = header.querySelector('#mainNav');

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
  });

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  // Авто-подсветка активного пункта по URL
  const currentPath = window.location.pathname;
  nav.querySelectorAll('a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && currentPath.endsWith(href.replace(/^\//, ''))) {
      a.setAttribute('aria-current', 'page');
    }
  });
})();