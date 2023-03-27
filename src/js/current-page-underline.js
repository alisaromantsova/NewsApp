const refs = {
  currentPage: window.location.href,
  navItems: document.querySelectorAll('.site-nav__link'),
};

refs.navItems.forEach(addUnderLine);

function addUnderLine(navItem) {
  if (navItem.href === refs.currentPage) {
    refs.navItems[0].classList.remove('site-nav__link--current');
    navItem.classList.add('site-nav__link--current');
  }
}
