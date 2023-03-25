import { renderEmptyMarkup } from './fetches';
const favoriteList = document.querySelector('.list-news');
const cards = JSON.parse(localStorage.getItem('newsCard'));
if (!cards) {
  favoriteList.innerHTML = renderEmptyMarkup();
}

function renderMarkup() {
  if (cards) {
    favoriteList.insertAdjacentHTML(
      'afterend',
      cards.map(card => `<div class="new__card">${card.newsCard}</div>`)
    );
  }
}

renderMarkup();
