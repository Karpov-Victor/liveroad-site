(function () {
  const base = document.querySelector('meta[name="base"]')?.content || '';

  const headerHTML = `
    <a class="logo" href="${base}index.html">LiveRoad<span> авторские путешествия по миру</span></a>
    <button class="burger" id="burger" aria-label="Меню" aria-expanded="false" aria-controls="mainNav">
      <span></span><span></span><span></span>
    </button>
    <nav id="mainNav">
      <ul>
        <li><a href="${base}index.html#countries">Страны</a></li>
        <li><a href="${base}index.html#fresh">Свежее</a></li>
        <li><a href="${base}index.html#tours">Туры</a></li>
        <li><a href="${base}gallery/index.html">Галерея</a></li>
       <li><a href="${base}about/index.html">Обо мне</a></li>
      </ul>
    </nav>
  `;

  const header = document.getElementById('siteHeader');
  if (!header) return;

  header.innerHTML = headerHTML;

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
    let href = a.getAttribute('href');
    if (!href) return;

    // Убираем ведущие ./ ../ и /, чтобы остался чистый путь
    const cleanHref = href
      .replace(/^\.\//, '')     // убираем "./"
      .replace(/^\.\.\//, '')   // убираем "../"
      .replace(/^\//, '');      // убираем "/"

    // Сравниваем: заканчивается ли текущий URL на этот чистый путь
    if (cleanHref && currentPath.endsWith(cleanHref)) {
      a.setAttribute('aria-current', 'page');
    }
  });


})();