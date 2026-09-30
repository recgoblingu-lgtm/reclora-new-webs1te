(() => {
  const nav = document.querySelector('.navbar');
  const container = nav?.querySelector('.nav-container');
  const menu = nav?.querySelector('.nav-menu');
  if (!nav || !container || !menu) return;

  const navLogo = container.querySelector('.nav-logo');
  if (navLogo && !navLogo.querySelector('img')) {
    const logo = document.createElement('img');
    logo.src = 'IMG_7056.png';
    logo.alt = 'RecLora Logo';
    logo.className = 'logo-img';
    navLogo.prepend(logo);
  }

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
