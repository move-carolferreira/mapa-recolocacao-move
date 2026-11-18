document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.faq-question').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var item = btn.closest('.faq-item');
    var answer = item.querySelector('.faq-answer');
    var isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-answer').style.maxHeight = null;
      }
    });

    if (isOpen) {
      item.classList.remove('open');
      answer.style.maxHeight = null;
    } else {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

var navToggle = document.getElementById('nav-toggle');
var mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', function () {
    var isOpen = mainNav.classList.toggle('open');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
