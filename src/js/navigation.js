import {
  fetchPopularNews,
  fetchNewsByCategory,
  fetchNewsBySearch,
  renderEmptyMarkup,
} from './fetches';
import { renderMarkup } from './render-markup';
export let categoryValue = '';
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
const selectList = document.querySelector('.nav-select');

renderNavigation(window.screen.width);

window.onresize = function checkWindow(e) {
  const width = e.target.outerWidth;
  renderNavigation(width);
};

function renderNavigation(width) {
  buttonsList.innerHTML = '';
  selectList.innerHTML = '';
  // console.log(width);
  if (width <= 768) {
    const name = '<option hidden>Categories</option>';
    const markup = categoriesList
      .map(item => {
        return `<option data-action="${encodeURIComponent(item.section)}">${
          item.display_name
        }</option>`;
      })
      .join('');

    selectList.insertAdjacentHTML('beforeend', name);
    selectList.insertAdjacentHTML('beforeend', markup);
  } else if (width > 768 && width < 1280) {
    const name = '<option hidden>Others</option>';
    const buttons = [];
    const selections = [];

    for (let i = 0; i < categoriesList.length; i++) {
      if (i < 4) {
        const buttonsMarkup = `<button data-action="${encodeURIComponent(
          categoriesList[i].section
        )}" class="category-item">${categoriesList[i].display_name}</button>`;
        buttons.push(buttonsMarkup);
      } else {
        const selectMarkup = `<option data-action="${encodeURIComponent(
          categoriesList[i].section
        )}">${categoriesList[i].display_name}</option>`;
        selections.push(selectMarkup);
      }
    }
    const markup = buttons.join('');
    buttonsList.innerHTML = markup;
    const markupSelection = selections.join('');

    selectList.insertAdjacentHTML('beforeend', name);
    selectList.insertAdjacentHTML('beforeend', markupSelection);
  } else {
    const name = '<option hidden>Others</option>';
    const buttons = [];
    const selections = [];

    for (let i = 0; i < categoriesList.length; i++) {
      if (i < 6) {
        const buttonsMarkup = `<button data-action="${encodeURIComponent(
          categoriesList[i].section
        )}" class="category-item">${categoriesList[i].display_name}</button>`;
        buttons.push(buttonsMarkup);
      } else {
        const selectMarkup = `<option data-action="${encodeURIComponent(
          categoriesList[i].section
        )}">${categoriesList[i].display_name}</option>`;
        selections.push(selectMarkup);
      }
    }
    const markup = buttons.join('');
    buttonsList.innerHTML = markup;
    const markupSelection = selections.join('');

    selectList.insertAdjacentHTML('beforeend', name);
    selectList.insertAdjacentHTML('beforeend', markupSelection);
  }
}

const block = document.querySelector('.nav-buttons');
block.addEventListener('click', onCategoryButtonClick);
async function onCategoryButtonClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  categoryValue = '';
  div.innerHTML = '';
  const chosenCategory = e.target.dataset.action;
  const result = await fetchNewsByCategory(chosenCategory);
  categoryValue = chosenCategory;
  renderMarkup(result);
}
const select = document.querySelector('.nav-select');

select.addEventListener('change', onSelect);
async function onSelect() {
  categoryValue = '';
  div.innerHTML = '';
  const selectedOption = select.options[select.selectedIndex];
  const optionsValue = selectedOption.dataset.action;
  const result = await fetchNewsByCategory(optionsValue);
  categoryValue = optionsValue;
  renderMarkup(result);
}
