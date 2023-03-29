import {
 
  fetchNewsByCategory,
  
} from './fetches';
import {  renderMarkupData } from './render-markup';
export let categoryValue = { value: '' };
const div = document.querySelector('.news');
const categoriesList = [
  { section: 'admin', display_name: 'Admin' },
  { section: 'arts', display_name: 'Arts' },
  { section: 'automobiles', display_name: 'Automobiles' },
  { section: 'books', display_name: 'Books' },
  { section: 'briefing', display_name: 'Briefing' },
  { section: 'business', display_name: 'Business' },
  { section: 'climate', display_name: 'Climate' },
  { section: 'corrections', display_name: 'Corrections' },
  { section: 'crosswords & games', display_name: 'Crosswords & Games' },
  { section: 'education', display_name: 'Education' },
  { section: 'en español', display_name: 'En Español' },
  { section: 'fashion', display_name: 'Fashion' },
  { section: 'food', display_name: 'Food' },
  { section: 'guides', display_name: 'Guides' },
  { section: 'health', display_name: 'Health' },
  { section: 'home & garden', display_name: 'Home \u0026 Garden' },
  { section: 'home page', display_name: 'Home Page' },
  { section: 'job market', display_name: 'Job Market' },
  { section: 'lens', display_name: 'Lens' },
  { section: 'magazine', display_name: 'Magazine' },
  { section: 'movies', display_name: 'Movies' },
  { section: 'multimedia/photos', display_name: 'Multimedia/Photos' },
  { section: 'new york', display_name: 'New York' },
  { section: 'obituaries', display_name: 'Obituaries' },
  { section: 'opinion', display_name: 'Opinion' },
  { section: 'parenting', display_name: 'Parenting' },
  { section: 'podcasts', display_name: 'Podcasts' },
  { section: 'reader center', display_name: 'Reader Center' },
  { section: 'real estate', display_name: 'Real Estate' },
  { section: 'science', display_name: 'Science' },
  { section: 'smarter living', display_name: 'Smarter Living' },
  { section: 'sports', display_name: 'Sports' },
  { section: 'style', display_name: 'Style' },
  { section: 'sunday review', display_name: 'Sunday Review' },
  { section: 't brand', display_name: 'T Brand' },
  { section: 't magazine', display_name: 'T Magazine' },
  { section: 'technology', display_name: 'Technology' },
  { section: 'the learning network', display_name: 'The Learning Network' },
  { section: 'the upshot', display_name: 'The Upshot' },
  { section: 'the weekly', display_name: 'The Weekly' },
  { section: 'theater', display_name: 'Theater' },
  { section: 'times insider', display_name: 'Times Insider' },
  { section: 'today’s paper', display_name: 'Today’s Paper' },
  { section: 'travel', display_name: 'Travel' },
  { section: 'u.s.', display_name: 'U.S.' },
  { section: 'universal', display_name: 'Universal' },
  { section: 'video', display_name: 'Video' },
  { section: 'well', display_name: 'Well' },
  { section: 'world', display_name: 'World' },
  { section: 'your money', display_name: 'Your Money' },
];
const buttonsList = document.querySelector('.nav-buttons');
const selectList = document.querySelector('.custom-select-list');
const customSelectBtn = document.querySelector('.custom-select-btn');
if (
  window.location.pathname === '/index.html' ||
  window.location.pathname === '/NewsApp/' ||
  window.location.pathname === '/' ||
  window.location.pathname === '/NewsApp/index.html'
) {
  renderNavigation(window.screen.width);
}
if (
  window.location.pathname === '/index.html' ||
  window.location.pathname === '/NewsApp/' ||
  window.location.pathname === '/' ||
  window.location.pathname === '/NewsApp/index.html' ||
  window.location.pathname === '/NewsApp/index.html'
) {
  window.onresize = function checkWindow(e) {
    const width = e.target.outerWidth;
    renderNavigation(width);
  };
}
function renderNavigation(width) {
  buttonsList.innerHTML = '';
  selectList.innerHTML = '';

  if (width <= 768) {
    customSelectBtn.children[0].textContent = 'Categories';
    const markup = categoriesList
      .map(item => {
        return `<li class="custom-select-list-item js-custom-select-item" data-action="${encodeURIComponent(
          item.section
        )}">${item.display_name}</li>`;
      })
      .join('');

    selectList.insertAdjacentHTML('beforeend', markup);
  } else if (width > 768 && width < 1280) {
    customSelectBtn.children[0].textContent = 'Others';

    const buttons = [];
    const selections = [];

    for (let i = 0; i < categoriesList.length; i++) {
      if (i < 4) {
        const buttonsMarkup = `<button aria-label="chose-category" data-action="${encodeURIComponent(
          categoriesList[i].section
        )}" class="category-item">${categoriesList[i].display_name}</button>`;
        buttons.push(buttonsMarkup);
      } else {
        const selectMarkup = `<li class="custom-select-list-item js-custom-select-item" data-action="${encodeURIComponent(
          categoriesList[i].section
        )}">${categoriesList[i].display_name}</li>`;
        selections.push(selectMarkup);
      }
    }
    const markup = buttons.join('');
    buttonsList.innerHTML = markup;
    const markupSelection = selections.join('');

    selectList.insertAdjacentHTML('beforeend', markupSelection);
  } else {
    customSelectBtn.children[0].textContent = 'Others';
    const buttons = [];
    const selections = [];

    for (let i = 0; i < categoriesList.length; i++) {
      if (i < 6) {
        const buttonsMarkup = `<button aria-label="chose-category" data-action="${encodeURIComponent(
          categoriesList[i].section
        )}" class="category-item">${categoriesList[i].display_name}</button>`;
        buttons.push(buttonsMarkup);
      } else {
        const selectMarkup = `<li class="custom-select-list-item js-custom-select-item" data-action="${encodeURIComponent(
          categoriesList[i].section
        )}">${categoriesList[i].display_name}</li>`;
        selections.push(selectMarkup);
      }
    }
    const markup = buttons.join('');
    buttonsList.innerHTML = markup;
    const markupSelection = selections.join('');
    selectList.insertAdjacentHTML('beforeend', markupSelection);
  }
}

const block = document.querySelector('.nav-buttons');
if (
  window.location.pathname === '/index.html' ||
  window.location.pathname === '/NewsApp/' ||
  window.location.pathname === '/' ||
  window.location.pathname === '/NewsApp/index.html'
) {
  block.addEventListener('click', onCategoryButtonClick);
}
async function onCategoryButtonClick(e) {
  removeActiveClass();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  categoryValue.value = '';
  div.innerHTML = '';
  const chosenCategory = e.target.dataset.action;

  const result = await fetchNewsByCategory(chosenCategory);
  categoryValue.value = chosenCategory;
  addActiveClass(e.target);
  renderMarkupData(result, categoryValue.value);
}
const items = [...document.querySelectorAll('.category-item')];

export function removeActiveClass() {
  items.forEach(item => {
    if (item.classList.contains('category-item--active')) {
      item.classList.remove('category-item--active');
    }
  });
}
function addActiveClass(btn) {
  btn.classList.add('category-item--active');
}

//custom
const customSelectList = document.querySelector('.custom-select-list');
const custonmSelectListItem = document.querySelector('.js-custom-select-item');

const onClickCustomSelectBtn = e => {
  e.preventDefault();
  customSelectList.classList.toggle('is-hidden');
  customSelectBtn.children[1].classList.toggle('custom-select-is-open');
};
const onClickCustonListItem = async e => {
  e.preventDefault();
  removeActiveClass();
  categoryValue.value = '';
  div.innerHTML = '';
  if (e.target === customSelectList) {
    return;
  }
  customSelectBtn.children[0].textContent = e.target.textContent;
  customSelectBtn.children[1].classList.remove('custom-select-is-open');
  customSelectList.classList.add('is-hidden');
  const result = await fetchNewsByCategory(e.target.dataset.action);
  categoryValue.value = e.target.dataset.action;
  addActiveClass(e.target);
  renderMarkupData(result, categoryValue.value);
};
const onClickOutsideCustomSelect = e => {
  if (
    e.target === customSelectBtn ||
    e.target === customSelectBtn.children[0] ||
    e.target === customSelectBtn.children[1]
  ) {
    return;
  }

  if (e.target !== custonmSelectListItem) {
    customSelectList.classList.add('is-hidden');
    customSelectBtn.children[1].classList.remove('custom-select-is-open');
  }
};

const addListenersOnCustomSelect = () => {
  customSelectList.addEventListener('click', onClickCustonListItem);
  window.addEventListener('click', onClickOutsideCustomSelect);
};

const customSelectFn = () => {
  customSelectBtn.addEventListener('click', onClickCustomSelectBtn);

  const markup = categoriesList
    .map(item => {
      return `<li class="custom-select-list-item js-custom-select-item" data-action="${encodeURIComponent(
        item.section
      )}">${item.display_name}</li>`;
    })
    .join('');

  customSelectList.insertAdjacentHTML('beforeend', markup);
  if (
    window.location.pathname === '/index.html' ||
    window.location.pathname === '/NewsApp/' ||
    window.location.pathname === '/' ||
    window.location.pathname === '/NewsApp/index.html'
  ) {
    addListenersOnCustomSelect();
  }
};

if (
  window.location.pathname === '/index.html' ||
  window.location.pathname === '/NewsApp/' ||
  window.location.pathname === '/' ||
  window.location.pathname === '/NewsApp/index.html'
) {
  customSelectFn();
}
