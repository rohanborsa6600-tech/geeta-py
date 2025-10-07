
const root = document.documentElement;
let fontSize = localStorage.getItem('fontSize') || '18';
let mode = localStorage.getItem('mode') || 'light';

document.body.classList.toggle('dark', mode === 'dark');
document.body.style.fontSize = fontSize + 'px';

document.getElementById('font-inc')?.addEventListener('click', () => {
  fontSize = Math.min(parseInt(fontSize) + 2, 36);
  document.body.style.fontSize = fontSize + 'px';
  localStorage.setItem('fontSize', fontSize);
});

document.getElementById('font-dec')?.addEventListener('click', () => {
  fontSize = Math.max(parseInt(fontSize) - 2, 12);
  document.body.style.fontSize = fontSize + 'px';
  localStorage.setItem('fontSize', fontSize);
});

document.getElementById('mode-toggle')?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  mode = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('mode', mode);
});
