if (
  window.location.pathname === '/index.html' ||
  window.location.pathname === '/NewsApp/' ||
  window.location.pathname === '/' ||
  window.location.pathname === '/NewsApp/index.html'
) {
  document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.querySelector('#preloader');
    preloader.classList.add('hide');
    setTimeout(function () {
      preloader.parentNode.removeChild(preloader);
    }, 500);
  });
}
