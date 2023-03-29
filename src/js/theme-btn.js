

let checkboxEl = document.querySelector('.chose-checkbox');
const screenWidth = window.screen.width;
const isTrue = screenWidth <= 767;

if (isTrue !== true) {
  checkboxEl = document.querySelector('.choseTheme .chose-checkbox');
} else if (isTrue === true) {
  checkboxEl = document.querySelector(
    '.js-menu-container .menu__choseTheme .chose-checkbox'
  );
}

window.onload = function () {
  let selectedTheme = localStorage.getItem('selectedTheme');
  if (selectedTheme) {
    document.body.classList.add(selectedTheme);
  }
  if (!selectedTheme) {
    document.body.classList.add('light');
    localStorage.setItem('selectedTheme', 'light');
    localStorage.setItem('isChecked', false);
  }
  if (selectedTheme === 'light') {
    localStorage.setItem('isChecked', false);
  }
  if (selectedTheme === 'dark') {
    localStorage.setItem('isChecked', true);
  }
};
checkboxEl.addEventListener('click', changeTheme);
let activeCheckbox = localStorage.getItem('isChecked');
if (activeCheckbox === 'true') {
  checkboxEl.setAttribute('checked', true);
}

function changeTheme() {
  if (document.body.classList.contains('light')) {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  }

  let theme = document.body.getAttribute('class');
  localStorage.setItem('selectedTheme', theme);

  let isChecked = checkboxEl.checked;
  localStorage.setItem('isChecked', isChecked);
}
