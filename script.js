const tabs = Array.from(document.querySelectorAll('.tab'));
const panels = Array.from(document.querySelectorAll('.tab-panel'));

for (const tab of tabs) {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach((btn) => btn.classList.remove('active'));
    panels.forEach((panel) => panel.classList.remove('active'));

    tab.classList.add('active');
    const panel = document.getElementById(target);
    if (panel) panel.classList.add('active');
  });
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const menuLastUpdatedEl = document.getElementById('menu-last-updated');
if (menuLastUpdatedEl) {
  const now = new Date();
  const formatted = now.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  menuLastUpdatedEl.textContent = formatted;
  menuLastUpdatedEl.setAttribute('datetime', now.toISOString().slice(0, 10));
}
