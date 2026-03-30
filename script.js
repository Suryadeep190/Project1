function updateOpenStatus() {
  const el = document.getElementById('open-status');
  if (!el) return;

  // IST = UTC+5:30
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utc + 5.5 * 3600000);

  const hours = ist.getHours();
  const minutes = ist.getMinutes();
  const totalMins = hours * 60 + minutes;

  // Open: 19:30 (1170 mins) to 23:00 (1380 mins)
  const openMins = 19 * 60 + 30;   // 1170
  const closeMins = 23 * 60;        // 1380

  // Opening soon: within 60 mins before opening
  const soonMins = openMins - 60;   // 1110

  if (totalMins >= openMins && totalMins < closeMins) {
    // Currently open
    const minsLeft = closeMins - totalMins;
    const hoursLeft = Math.floor(minsLeft / 60);
    const minsRem = minsLeft % 60;
    let timeLeft = hoursLeft > 0
      ? hoursLeft + 'h ' + minsRem + 'm left'
      : minsRem + ' mins left';
    el.textContent = '🟢 Open Now · ' + timeLeft;
    el.className = 'open-status status-open';
  } else if (totalMins >= soonMins && totalMins < openMins) {
    // Opening soon
    const minsToOpen = openMins - totalMins;
    el.textContent = '🟡 Opens in ' + minsToOpen + ' mins';
    el.className = 'open-status status-soon';
  } else {
    // Closed
    el.textContent = '🔴 Closed · Opens at 7:30 PM';
    el.className = 'open-status status-closed';
  }
}

updateOpenStatus();
// Refresh every 60 seconds
setInterval(updateOpenStatus, 60000);

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

// Testimonial scroll dots
const testimonialGrid = document.querySelector('.testimonial-grid');
const dots = document.querySelectorAll('#testimonial-dots .dot');
if (testimonialGrid && dots.length) {
  testimonialGrid.addEventListener('scroll', () => {
    const index = Math.round(
      testimonialGrid.scrollLeft /
      (testimonialGrid.scrollWidth / dots.length)
    );
    dots.forEach((d, i) =>
      d.classList.toggle('active', i === Math.min(index, dots.length - 1))
    );
  }, { passive: true });
}
