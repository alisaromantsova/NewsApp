const div = document.querySelector('.news');
let newsCardAddToFavorite = 0;
import {
  renderPaginationBtn,
  paginationData,
  prevBtnRef,
  nextBtnRef,
} from './pagination';
import { successCallback, failureCallback } from './weather';
import { setEventAfterRender } from './news-card';
import { setEventAfterRead } from './news-card';
import { createThreePoints } from './news-card';
import sprite from '../images/symbol-defs.svg';

export function renderMarkupData(array) {
  restart();

  switch (true) {
    case window.matchMedia('(max-width: 767px)').matches:
      paginationData.newsPerPage = 5;
      paginationData.start = 0;
      paginationData.end = 4;
      break;
    case window.matchMedia('(min-width: 768px) and (max-width: 1279px)')
      .matches:
      paginationData.newsPerPage = 8;
      paginationData.start = 0;
      paginationData.end = 7;
      break;
    case window.matchMedia('(min-width: 1280px)').matches:
      // треба переписати
      paginationData.newsPerPage = 9;
      paginationData.start = 0;
      paginationData.end = 8;
      break;
  }

  paginationData.originalArray = array;
  paginationData.totalPage = Math.ceil(
    (paginationData.originalArray.length + 1) / paginationData.newsPerPage
  );

  // console.log(
  //   'paginationData.end:',
  //   paginationData.end,
  //   'paginationData.start:',
  //   paginationData.start,
  //   'paginationData.page:',
  //   paginationData.page,
  //   'paginationData.totalPage:',
  //   paginationData.totalPage
  // );

  renderPaginationBtn();
  renderMarkup(array.slice(paginationData.start, paginationData.end));
}

export function renderMarkup(array) {
  // Алісин код!!! Чіпати тільки назву масиву який передає новини!!!

  const markup = array
    .map(article => {
      if (JSON.parse(localStorage.getItem('newsCard'))) {
        JSON.parse(localStorage.getItem('newsCard')).map(arrey => {
          if (arrey.newsCard.includes(article.link)) {
            return (newsCardAddToFavorite = 1);
          }
        });
      }

      if (newsCardAddToFavorite === 1) {
        newsCardAddToFavorite = 0;
        return `<div class="new__card">
      <div class="box">
      <p class="is-read is-hidden">Already read</p>
      <img class="new__img" src="${
        article.imgSrc
      }" alt="" width="395" height="395" loading="lazy"/>
      <p class="news__category">${article.category}</p>

      <button aria-label="add-to-favorite" class="news__addbtn is-hidden" type="button">Add to favorite<svg class="news__heart-icon" width="16" height="16">
            <use href="${sprite + '#icon-heartBcg'}"></use>
          </svg></button>
                <button class="news__removebtn is-hidden" type="button"><span class="text__removebtn">Remove from favorite</span><svg class="news__fiilheart-icon" width="16" height="16">
            <use href="${sprite + '#icon-heartBcg'}"></use>
          </svg></button>

   
       </div>
    <h2 class="news__title">${article.title}</h2>
       <p class="news__text">
         ${createThreePoints(article.text)}</p>
        <div class="news__details">
     <p class="news__date">${article.date}</p>
  <a class="news__link" href="${
    article.link
  }" target="_blank" rel="noreferrer noopener">read more</a>
 </div>
 </div>`;
      } else {
        return `<div class="new__card">
      <div class="box">
      <p class="is-read is-hidden">Already read </p>
      <img class="new__img" src="${
        article.imgSrc
      }" alt="" width="395" height="395" loading="lazy"/>
      <p class="news__category">${article.category}</p>

      <button aria-label="add-to-favorite" class="news__addbtn " type="button">Add to favorite<svg class="news__heart-icon" width="16" height="16">
      <use href="${sprite + '#icon-heartBcg'}"></use>
    </svg></button>
          <button class="news__removebtn is-hidden" type="button"><span class="text__removebtn">Remove from favorite</span><svg class="news__fiilheart-icon" width="16" height="16">
      <use href="${sprite + '#icon-heartBcg'}"></use>
    </svg></button>

       </div>
    <h2 class="news__title">${article.title}</h2>
       <p class="news__text">${createThreePoints(article.text)}</p>
        <div class="news__details">
     <p class="news__date">${article.date}</p>
  <a target="_blank" rel="noopener noreferrer" class="news__link" href="${
    article.link
  }" target="_blank" rel="noreferrer noopener">read more</a>
  
 </div>
 </div>`;
      }
    })
    .join('');

  div.innerHTML = markup;
  setEventAfterRender();
  setEventAfterRead();
}

function restart() {
  paginationData.newsPerPage = 0;
  paginationData.start = 0;
  paginationData.end = 0;
  paginationData.page = 1;
  prevBtnRef.disabled = false;
  nextBtnRef.disabled = false;
}
