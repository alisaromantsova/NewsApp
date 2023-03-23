const div = document.querySelector('.news');

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

export async function renderMarkup(array) {
  const markup = array
    .map(article => {
      return `<div class="new__card">
      <div class="box">
      <p class="is-read is-hidden">Already read <svg class="checked-news-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1882 3.59413C16.0324 3.59878 15.8844 3.66393 15.7757 3.77577L6.59995 12.9516L2.82417 9.17577C2.76888 9.11819 2.70266 9.07222 2.62939 9.04054C2.55611 9.00887 2.47725 8.99214 2.39742 8.99133C2.3176 8.99052 2.23842 9.00564 2.16451 9.03581C2.0906 9.06599 2.02346 9.11061 1.96701 9.16705C1.91057 9.2235 1.86595 9.29064 1.83578 9.36455C1.8056 9.43846 1.79048 9.51764 1.79129 9.59746C1.7921 9.67729 1.80883 9.75615 1.84051 9.82943C1.87218 9.9027 1.91815 9.96892 1.97573 10.0242L6.17573 14.2242C6.28826 14.3367 6.44085 14.3999 6.59995 14.3999C6.75906 14.3999 6.91165 14.3367 7.02417 14.2242L16.6242 4.62421C16.7109 4.53993 16.7701 4.43143 16.7941 4.31292C16.818 4.19441 16.8057 4.07141 16.7585 3.96006C16.7114 3.84871 16.6317 3.75419 16.53 3.6889C16.4282 3.6236 16.3091 3.59057 16.1882 3.59413Z" fill="#00DD73"/>
                </svg></p>
      <img class="new__img" src="${article.imgSrc}" alt="" width="395" height="395" loading="lazy"/>
      <p class="news__category">${article.category}</p>
      <button class="news__addbtn" type="button"><span>Add to favorite</span><svg class="news__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.66659 2C2.82592 2 1.33325 3.47733 1.33325 5.3C1.33325 6.77133 1.91659 10.2633 7.65858 13.7933C7.76144 13.8559 7.87952 13.889 7.99992 13.889C8.12032 13.889 8.2384 13.8559 8.34125 13.7933C14.0833 10.2633 14.6666 6.77133 14.6666 5.3C14.6666 3.47733 13.1739 2 11.3333 2C9.49258 2 7.99992 4 7.99992 4C7.99992 4 6.50725 2 4.66659 2Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></button>
                <button class="news__removebtn is-hidden" type="button"><span class="text__removebtn">Remove from favorite</span><svg class="card-button-icon" width="20" height="20" viewBox="0 0 16 16" fill="#4b48da" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.66659 2C2.82592 2 1.33325 3.47733 1.33325 5.3C1.33325 6.77133 1.91659 10.2633 7.65858 13.7933C7.76144 13.8559 7.87952 13.889 7.99992 13.889C8.12032 13.889 8.2384 13.8559 8.34125 13.7933C14.0833 10.2633 14.6666 6.77133 14.6666 5.3C14.6666 3.47733 13.1739 2 11.3333 2C9.49258 2 7.99992 4 7.99992 4C7.99992 4 6.50725 2 4.66659 2Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></button>
       </div>
    <h2 class="news__title">${article.title}</h2>
       <p class="news__text">${article.text}</p>
        <div class="news__details">
     <p class="news__date">${article.date}</p>
  <a class="news__link" href="${article.link}" target="_blank" rel="noreferrer noopener">read more</a>
 </div>
 </div>`;
    })
    .join('');
  div.insertAdjacentHTML('beforeend', markup);
  setEventAfterRender();
  setEventAfterRead();
}

// let currentId = 0;
// let isFav = false;
// const STORAGE = 'favorites';
// addToFavoriteBtn.addEventListener('click', handleFavorite);
// const favoritesArray = [];

// function handleFavorite() {
// if (isFav) {
//   isFav = false;
//   const currentState = localStorageService.load(STORAGE);

// const index = currentState.findIndex(i=> i.isFav === false);
// currentState.splice(index, 1);
// favoritesArray.pop();
//   // localStorageService.save(STORAGE, currentState);
// } else {
//   isFav = true;
// favoritesArray.push(i);
// currentId += 1;
// localStorageService.save(STORAGE, favoritesArray);
//   }
// }
