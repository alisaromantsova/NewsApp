const refs = {
  mobileMenu: document.querySelector('.backdrop'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),
};

refs.openMenuBtn.addEventListener('click', menuToggle);
refs.closeMenuBtn.addEventListener('click', menuToggle);

function menuToggle() {
  refs.mobileMenu.classList.toggle('is-open');
  if (refs.mobileMenu.classList.contains('is-open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'scroll';
  }
}
