import {
  
  fetchNewsBySearch,
  renderEmptyMarkup,
} from './fetches';
import {  renderMarkupData } from './render-markup';
import { categoryValue } from './navigation';
export let inputValueData = { value: '' };
const searchForm = document.querySelector('#form-field');
const selectEl = document.querySelector('.custom-select-btn');
const div = document.querySelector('.news');

searchForm.addEventListener('submit', createNews);
searchForm.setAttribute('autocomplete', 'off');
function createNews(event) {
  event.preventDefault();
  const inputName = event.currentTarget.searchQuery.value.trim();
  onInput();
  async function onInput() {
    categoryValue.value = '';
    try {
      const result = await fetchNewsBySearch(inputName);
      if (inputName === '') {
        div.innerHTML = renderEmptyMarkup();
        return alert('Please enter a category');
      }
      if (result.length === 0) {
        return (div.innerHTML = renderEmptyMarkup());
      }
      if (inputName) {
        inputValueData.value = inputName;
        selectEl.setAttribute('disabled', true);
        const buttons = document.querySelectorAll(
          '.nav-buttons .category-item'
        );
        buttons.forEach(button => {
          button.disabled = true;
          button.style.backgroundColor = '#f4f4f4';
          button.style.color = '#4b48db';
        });
      }
      div.innerHTML = '';
      renderMarkupData(result, categoryValue, inputName);
    } catch (error) {}
  }
}
