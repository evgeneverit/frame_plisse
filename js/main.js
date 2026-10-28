document.addEventListener('DOMContentLoaded', function () {
  // Order form
  const orderForm = document.getElementById('order-form');
  if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('form-content').style.display = 'none';
      document.getElementById('form-success').classList.add('show');
    });
  }

  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('nav');

  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', function () {
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
        nav.style.gap = '16px';
      }
    });

    // Close menu on link click (mobile)
    document.querySelectorAll('nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 900) {
          nav.style.display = 'none';
        }
      });
    });
  }
});
