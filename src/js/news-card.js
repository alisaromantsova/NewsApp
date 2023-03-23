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

export function setEventAfterRead() {
  const card = document.querySelectorAll('.new__card');

  const newsLinks = document.querySelectorAll('.news__link');
  const readsMarks = document.querySelectorAll('.is-read');

  newsLinks.forEach((newsLink, i) => {
    newsLink.addEventListener('click', () => {
      const readsMark = readsMarks[i];
      readsMark.classList.remove('is-hidden');
    });
  });
}
