import { renderEmptyMarkup } from './fetches';
import { readMoreClick } from './addtoread';
import { setEventAfterRead } from './news-card';
const cardsIsRead = JSON.parse(localStorage.getItem('isRead'));
const favoriteList = document.querySelector('.list-news');
const cards = JSON.parse(localStorage.getItem('newsCard'));
favoriteList.addEventListener('click', onRemoveNewCardToFavoriteClick);
if (!cards) {
  favoriteList.innerHTML = renderEmptyMarkup();
}

function renderMarkup() {
  if (cards) {
    favoriteList.insertAdjacentHTML(
      'afterbegin',
      cards.map(card => `<li class="new__card">${card.newsCard}</li>`).join('')
    );
  }
  setEventAfterRead();
}

renderMarkup();

function onRemoveNewCardToFavoriteClick(event) {
  readMoreClick(event);
  if (
    event.target.tagName !== 'SPAN' &&
    event.target.tagName !== 'BUTTON' &&
    event.target.tagName !== 'svg' &&
    event.target.tagName !== 'path' &&
    event.target.tagName !== 'use'
  ) {
    return;
  }
  const arreyCard = JSON.parse(localStorage.getItem('newsCard'))
    ? [...JSON.parse(localStorage.getItem('newsCard'))]
    : [];

  const linkNewReadCard = event.target
    .closest('.new__card')
    .querySelector('.news__link');

  if (arreyCard.length !== 0) {
    localStorage.removeItem('newsCard');
    const arreyCardSecond = [];
    arreyCard.map(item => {
      if (item.newsCard.includes(linkNewReadCard)) {
        return;
      } else {
        if (item) {
          arreyCardSecond.push({ ...item });
        }
      }
    });

    if (arreyCardSecond.length !== 0) {
      localStorage.setItem('newsCard', JSON.stringify(arreyCardSecond));
      favoriteList.innerHTML = null;
      favoriteList.insertAdjacentHTML(
        'afterbegin',
        arreyCardSecond
          .map(item => `<li class="new__card">${item.newsCard}</li>`)
          .join('')
      );
      setEventAfterRead();
    } else {
      favoriteList.innerHTML = renderEmptyMarkup();
    }
    return;
  }
}



