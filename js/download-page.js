(() => {
  const tabs = [...document.querySelectorAll('.download-tab[role="tab"]')];
  const panels = [...document.querySelectorAll('.download-content-panel[role="tabpanel"]')];
  if (!tabs.length || !panels.length) return;

  const activate = (tab, moveFocus = false) => {
    const panelId = tab.getAttribute('aria-controls');
    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    panels.forEach((panel) => {
      const selected = panel.id === panelId;
      panel.classList.toggle('active', selected);
      panel.hidden = !selected;
    });
    if (moveFocus) tab.focus();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', (event) => {
      let nextIndex;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') nextIndex = 0;
      else if (event.key === 'End') nextIndex = tabs.length - 1;
      else return;
      event.preventDefault();
      activate(tabs[nextIndex], true);
    });
  });

  const selectedTab = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0];
  activate(selectedTab);
})();
