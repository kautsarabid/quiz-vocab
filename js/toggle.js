const toggle = document.querySelector('.menu-toggle');
const aside = document.querySelector('.pilih-level');

toggle.addEventListener('click', () => {
  aside.classList.toggle('slide');
});
