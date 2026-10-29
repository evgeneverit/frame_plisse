document.addEventListener('DOMContentLoaded', function () {
  // Форма
  const form = document.getElementById('order-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('form-content').style.display = 'none';
      document.getElementById('form-success').classList.add('show');
    });
  }

  // Мобильное меню
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      if (nav.style.display === 'flex') {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '64px';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'var(--bg)';
        nav.style.padding = '20px';
        nav.style.borderBottom = '1px solid var(--border)';
        nav.style.gap = '14px';
      }
    });
  }
});