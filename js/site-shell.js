(() => {
  const nav = document.querySelector('.navbar');
  const container = nav?.querySelector('.nav-container');
  const menu = nav?.querySelector('.nav-menu');
  if (!nav || !container || !menu) return;

  const navLogo = container.querySelector('.nav-logo');
  if (!container.querySelector('.nav-search')) {
    const search = document.createElement('input');
    search.className = 'nav-search';
    search.type = 'search';
    search.placeholder = 'Search...';
    search.setAttribute('aria-label', 'Search RecLora');
    container.insertBefore(search, menu);
  }
  if (navLogo && !navLogo.querySelector('img')) {
    const logo = document.createElement('img');
    logo.src = 'IMG_7056.png';
    logo.alt = 'RecLora Logo';
    logo.className = 'logo-img';
    navLogo.prepend(logo);
  }
  const brandMark = navLogo?.querySelector('img');
  if (brandMark) {
    brandMark.src = 'CFA173A2-3EAD-46C4-AFC3-00ACF142A775.png';
    brandMark.alt = '';
  }

  const iconByPage = {
    'index.html': 'Home.png', 'download.html': 'Events.png', 'rooms.html': 'Rooms.png',
    'news.html': 'Events.png', 'roadmap.html': 'Home.png', 'faq.html': 'Settings.png',
    'team.html': 'People.png', 'contact.html': 'People.png', 'rules.html': 'Settings.png',
    'fanart.html': 'Credit.png', 'appeals.html': 'Credit.png', 'shoutouts.html': 'People.png'
  };
  menu.querySelectorAll('a.nav-link').forEach((link) => {
    const page = new URL(link.getAttribute('href'), window.location.href).pathname.split('/').pop() || 'index.html';
    const icon = iconByPage[page.toLowerCase()];
    if (!icon || link.querySelector('.nav-icon')) return;
    const image = document.createElement('img');
    image.className = 'nav-icon';
    image.src = `assets/${icon}`;
    image.alt = '';
    image.setAttribute('aria-hidden', 'true');
    link.prepend(image);
  });

  let toggle = container.querySelector('.nav-toggle');
  const legacyToggle = toggle?.dataset.recloraLegacyNav === 'true';
  if (!toggle) {
    toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Open navigation menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span></span><span></span><span></span>';
    container.appendChild(toggle);
  }

  if (!menu.querySelector('.menu-brand')) {
    const brand = document.createElement('li');
    brand.className = 'menu-brand';
    brand.innerHTML = '<img src="IMG_6471-removebg-preview.png" alt="RecLora logo"><span>RecLora</span>';
    menu.prepend(brand);
  }

  if (!legacyToggle) {
    toggle.addEventListener('click', () => {
      const open = toggle.classList.toggle('open');
      menu.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    });
  }

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    if (!legacyToggle) {
      toggle.classList.remove('open');
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }));
})();
