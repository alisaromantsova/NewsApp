import { renderEmptyMarkup } from './fetches';
import { readMoreClick } from './addtoread';
import { setEventAfterRead } from './news-card';
import { refs,writeNewPost } from "./firebase";
const cardsIsRead = JSON.parse(localStorage.getItem('isRead'));
const favoriteList = document.querySelector('.list-news');
const loader = document.querySelector('.preloader')
// const cards = JSON.parse(localStorage.getItem('newsCard'));
// const cards = refs.favoriteLocal
if(favoriteList){
favoriteList.addEventListener('click', onRemoveNewCardToFavoriteClick);
}
export function renderMarkup() {
  // let cards = refs.favoriteLocal
  let cards = null

  if(!refs.logedUser){
    cards = JSON.parse(localStorage.getItem('newsCard')) ? JSON.parse(localStorage.getItem('newsCard')) : [];
  }
  if(refs.logedUser){
    cards = refs.favoriteLocal
  }
  if (cards.length === 0) {
    favoriteList.innerHTML = renderEmptyMarkup();
  }
  if (cards.length>0) {
    favoriteList.innerHTML = '';
    favoriteList.insertAdjacentHTML(
      'afterbegin',
      cards.map(card => `<li class="new__card">${card.newsCard}</li>`).join('')
    );
  }
  setEventAfterRead();
}
if(window.location.pathname === '/favorite.html'){
renderMarkup();
}

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
  // try
  // const arreyCard = JSON.parse(localStorage.getItem('newsCard'))
  //   ? [...JSON.parse(localStorage.getItem('newsCard'))]
  //   : [];
  // const arreyCard = refs.favoriteLocal ? refs.favoriteLocal : []
  let arreyCard = null
  if(!refs.logedUser){
    arreyCard = JSON.parse(localStorage.getItem('newsCard'))
      ? [...JSON.parse(localStorage.getItem('newsCard'))]
      : [];
  }
  if(refs.logedUser){
    arreyCard = refs.favoriteLocal ? refs.favoriteLocal : []
  }

  const linkNewReadCard = event.target
    .closest('.new__card')
    .querySelector('.news__link');

  if (arreyCard.length !== 0) {
    // localStorage.removeItem('newsCard');
    if(!refs.logedUser){
      localStorage.removeItem('newsCard');
    }
    if(refs.logedUser){
      refs.favoriteLocal = []
      writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal,refs.isReadLocal)
    }
    // refs.favoriteLocal = []
    // writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal,refs.isReadLocal)
    const arreyCardSecond = [];
    // const arreyCardSecond = [];
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
      if(!refs.logedUser){
        localStorage.setItem('newsCard', JSON.stringify(arreyCardSecond));
      }
      if(refs.logedUser){
        refs.favoriteLocal = [...arreyCardSecond]
      writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal,refs.isReadLocal)
      }
      // localStorage.setItem('newsCard', JSON.stringify(arreyCardSecond));
      // refs.favoriteLocal = [...arreyCardSecond]
      // writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal,refs.isReadLocal)
      favoriteList.innerHTML = '';
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



