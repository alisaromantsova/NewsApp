import {
  fetchPopularNews,
  fetchNewsByCategory,
  fetchNewsBySearch,
  renderEmptyMarkup,
} from './fetches';
import { renderMarkup } from './render-markup';

export function setEventAfterRender() {
  const card = document.querySelectorAll('.new__card');

  const addBtns = document.querySelectorAll('.news__addbtn');
  const removeBtns = document.querySelectorAll('.news__removebtn');

  addBtns.forEach((addBtn, i) => {
    addBtn.addEventListener('click', () => {
      const removeBtn = removeBtns[i];
      addBtn.classList.add('is-hidden');
      removeBtn.classList.remove('is-hidden');
    });
  });

  removeBtns.forEach((removeBtn, i) => {
    removeBtn.addEventListener('click', () => {
      const addBtn = addBtns[i];
      addBtn.classList.remove('is-hidden');
      removeBtn.classList.add('is-hidden');
    });
  });
}

// export function setEventAfterRender() {
//   const cardContainer = document.querySelector('.news');
//   const addBtns = cardContainer.querySelectorAll('.news__addbtn');
//   const removeBtns = cardContainer.querySelectorAll('.news__removebtn');

//   cardContainer.addEventListener('click', event => {
//     const addBtn = event.target.closest('.news__addbtn');
//     if (addBtn) {
//       const removeBtn = addBtn.nextElementSibling;
//       addBtn.classList.add('is-hidden');
//       removeBtn.classList.remove('is-hidden');
//     }

//     const removeBtn = event.target.closest('.news__removebtn');
//     if (removeBtn) {
//       const addBtn = removeBtn.previousElementSibling;
//       addBtn.classList.remove('is-hidden');
//       removeBtn.classList.add('is-hidden');
//     }
//   });
// }

// export function setEventAfterRead() {
//   const [cards, newsLinks, readsMarks] = [
//     document.querySelectorAll('.new__card'),
//     document.querySelectorAll('.news__link'),
//     document.querySelectorAll('.is-read'),
//     ,
//   ];

//   newsLinks.forEach((newsLink, i) => {
//     newsLink.addEventListener('click', () => {
//       readsMarks[i].classList.remove('is-hidden');
//       cards[i].classList.add('overlay');
//     });
//   });
// }

export function setEventAfterRead() {
  const cards = document.querySelectorAll('.new__card');
  const newsLinks = document.querySelectorAll('.news__link');
  const readsMarks = document.querySelectorAll('.is-read');
  let localStorageKey = 'isRead';

  newsLinks.forEach((newsLink, i) => {
    newsLink.addEventListener('click', () => {
      readsMarks[i].classList.remove('is-hidden');
      cards[i].classList.add('overlay');
      localStorage.setItem(
        localStorageKey,
        JSON.stringify({
          ...JSON.parse(localStorage.getItem(localStorageKey)),
          [i]: true,
        })
      );
    });
    const storedData = JSON.parse(localStorage.getItem(localStorageKey));
    if (storedData && storedData[i]) {
      readsMarks[i].classList.remove('is-hidden');
      cards[i].classList.add('overlay');
    }
  });
}

export function createThreePoints(str) {
  if (str.length > 130) {
    return str.slice(0, 130) + '...';
  }
  return str;
}
