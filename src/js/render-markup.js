const div = document.querySelector('.news');
let newsCardAddToFavorite = 0;

// export async function  renderMarkup(array){
// const markup = array.map((article)=>{
//     return `<div class="new__card">
//     <h2 class="news__title">${article.title}</h2>
//        <p class="news__text">${article.text}</p>
//      <img class="new__img" src="${ article.imgSrc}"/>
//      <div class="article_flag">
//      <button class="article_flag--add"><span class="article_flag_text">Add to favorite</span>
//      </button>
//      <button class="article_flag--remove is-hidden"><span class="article_flag_text">Remove from favorite</span>
//      </button>
//      </div>
//      <a class="new__link" href="${article.url}">read more</a>
//      </div>`;
// }).join('');
//   div.insertAdjacentHTML('beforeend', markup);
// }

import { setEventAfterRender } from './news-card';
import { setEventAfterRead } from './news-card';
import { createThreePoints } from './news-card';
import sprite from '../images/symbol-defs.svg';

export async function renderMarkup(array) {
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
      <button class="news__addbtn is-hidden" type="button">Add to favorite<svg class="news__heart-icon" width="16" height="16">
            <use href="${sprite + '#icon-heartBcg'}"></use>
          </svg></button>
                <button class="news__removebtn" type="button"><span class="text__removebtn">Remove from favorite</span><svg class="news__fiilheart-icon" width="16" height="16">
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
      <button class="news__addbtn" type="button"><span>Add to favorite</span><svg class="news__heart-icon" width="16" height="16">
            <use href="${sprite + '#icon-heartBcg'}"></use>
          </svg></button>
                <button class="news__removebtn is-hidden" type="button">Remove from favorite<svg class="news__fiilheart-icon" width="16" height="16">
            <use href="${sprite + '#icon-heartBcg'}"></use>
          </svg></button>
       </div>
    <h2 class="news__title">${article.title}</h2>
       <p class="news__text">${createThreePoints(article.text)}</p>
        <div class="news__details">
     <p class="news__date">${article.date}</p>
  <a class="news__link" href="${
    article.link
  }" target="_blank" rel="noreferrer noopener">read more</a>
 </div>
 </div>`;
      }
    })
    .join('');

  div.insertAdjacentHTML('beforeend', markup);
  setEventAfterRender();
  setEventAfterRead();
}
