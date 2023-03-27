import { renderEmptyMarkup } from './fetches';
import { onAddToFavoriteClick } from './news-card-listner';
import { setEventAfterRender } from './news-card';
import { setEventAfterRead } from './news-card';
const readList = document.querySelector('.list-news');
const cardsRead = JSON.parse(localStorage.getItem('newsReadMore'));
readList.addEventListener('click', onRemoveNewCardToReadClick);
if (!cardsRead) {
  readList.innerHTML = renderEmptyMarkup();
}

function renderMarkup() {
  if (cardsRead) {
    readList.insertAdjacentHTML(
      'afterbegin',
      cardsRead
        .map(card => `<div class="new__card">${card.newsReadMoreCard}</div>`)
        .join('')
    );
  }
  setEventAfterRender();
  setEventAfterRead();
}

renderMarkup();

function onRemoveNewCardToReadClick(event) {
  onAddToFavoriteClick(event); // функція додавання карток у фейворіт
}
