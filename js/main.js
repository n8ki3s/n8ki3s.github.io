// Highlight the nav link of the section currently in view.
const links = [...document.querySelectorAll('.topbar nav a')];
const targets = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-40% 0px -55% 0px' });

targets.forEach((t) => observer.observe(t));
