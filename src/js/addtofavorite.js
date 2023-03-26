import { renderEmptyMarkup } from './fetches';
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
      cards
        .map(card => `<div class="new__card">${card.newsCard}</div>`)
        .join('')
    );
  }
}

renderMarkup();

function onRemoveNewCardToFavoriteClick(event) {
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

  const linkNewCArd = event.target
    .closest('.new__card')
    .querySelector('.news__link');

  if (arreyCard.length !== 0) {
    localStorage.removeItem('newsCard');
    const arreyCardSecond = [];
    arreyCard.map(item => {
      if (item.newsCard.includes(linkNewCArd)) {
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
          .map(item => `<div class="new__card">${item.newsCard}</div>`)
          .join('')
      );
    } else {
      favoriteList.innerHTML = renderEmptyMarkup();
    }
    return;
  }
}
