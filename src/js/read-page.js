import { renderEmptyMarkup } from './fetches';

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
}

renderMarkup();

function onRemoveNewCardToReadClick(event) {
  //   if (
  //     event.target.tagName !== 'A'
  //       ) {
  //     return;
  //   }
  //   const arreyReadCard = JSON.parse(localStorage.getItem('newsReadMore'))
  //     ? [...JSON.parse(localStorage.getItem('newsReadMore'))]
  //     : [];
  //   const linkNewReadCard = event.target
  //     .closest('.new__card')
  //     .querySelector('.news__link');
  // if (arreyReadCard.length !== 0) {
  //   localStorage.removeItem('newsReadMore');
  //   const arreyCardSecond = [];
  //   arreyCard.map(item => {
  //     if (item.newsReadMore.includes(linkNewReadCard)) {
  //       return;
  //     } else {
  //       if (item) {
  //         arreyCardSecond.push({ ...item });
  //       }
  //     }
  //   });
  //     if (arreyCardSecond.length !== 0) {
  //       localStorage.setItem('newsReadMore', JSON.stringify(arreyCardSecond));
  //       readList.innerHTML = null;
  //       readList.insertAdjacentHTML(
  //         'afterbegin',
  //         arreyCardSecond
  //           .map(item => `<div class="new__card">${item.newsReadMore}</div>`)
  //           .join('')
  //       );
  //     } else {
  //       readList.innerHTML = renderEmptyMarkup();
  //     }
  //     return;
  //   }
}

// функція додавання карток у фейворіт
function onAddToFavoriteClick(event) {
  const arreyCard = JSON.parse(localStorage.getItem('newsCard'))
    ? [...JSON.parse(localStorage.getItem('newsCard'))]
    : [];

  if (
    event.target.tagName !== 'SPAN' &&
    event.target.tagName !== 'BUTTON' &&
    event.target.tagName !== 'svg' &&
    event.target.tagName !== 'path' &&
    event.target.tagName !== 'use'
  ) {
    return;
  }

  const newsCard = event.target.closest('.new__card').innerHTML;
  const linkNewCArd = event.target
    .closest('.new__card')
    .querySelector('.news__link');

  if (newsCard.includes('news__addbtn is-hidden')) {
    localStorage.removeItem('newsCard');
    const arreyCardSecond = [];
    arreyCard.map(item => {
      if (item.newsCard.includes(linkNewCArd)) {
      } else {
        if (item) {
          arreyCardSecond.push({ ...item });
        }
        return;
      }
    });

    if (arreyCardSecond.length !== 0) {
      localStorage.setItem('newsCard', JSON.stringify(arreyCardSecond));
    }
    return;
  }

  arreyCard.push({ newsCard });
  localStorage.setItem('newsCard', JSON.stringify(arreyCard));
}
