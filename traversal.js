const close = window.getComputedStyle(document.querySelector('.card'), '::after');
const name = document.querySelectorAll(".card .name h1");



name.forEach(e =>
  e.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.style.display = 'none';
  })
);
