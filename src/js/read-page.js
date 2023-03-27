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
