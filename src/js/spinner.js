document.addEventListener('DOMContentLoaded', function () {
  const preloader = document.querySelector('#preloader');
  preloader.classList.add('hide');
  setTimeout(function () {
    preloader.parentNode.removeChild(preloader);
  }, 500);
});
