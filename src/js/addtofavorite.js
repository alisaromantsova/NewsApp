import { fetchPopularNews, fetchNewsByCategory, fetchNewsBySearch } from './fetches';
import { renderMarkup } from './render-markup'

 // const emptyPage = document.querySelector('.');Коли буде заготовка на немає новин
// const container = document.querySelector('.favorite-container');

// const objFromStorale = localStorage.getItem('cards');
// if (objFromStorale === '[]') {
//   emptyPage.style.display = 'block';
//   container.style.padding = 0;
// }
// const objParse = JSON.parse(objFromStorale);

// const newsWrapper = document.querySelector('.news');
// newsWrapper.addEventListener('click', addRemoveToLocalStorage);



// Функція 
// function addRemoveToLocalStorage(evt) {
//     if (
//         evt.target.tagName !== 'BUTTON' &&
//         evt.target.tagName !== 'SPAN' &&
//         evt.target.tagName !== 'svg' 
//     ) {
//         return;
//     }



// }




// let btnAddtoStorage = evt.target;
 // const btnDiv = btnAddtoStorage.closest('div.article_flag'); розмітка яку додавала я для кнопок, зараз закоментовано в render-markup
// const btnDivID = evt.target.closest('     ').; Нам треба або id карток або дату, щоб розуміти, яку карточку ми тягнемо

// let storage = localStorage.getItem('cards');
//   let parseStorage = JSON.parse(storage);
//   updateStorage(parseStorage, btnDivID);

//   if (btnDiv.hasAttribute('checked')) {
//     btnDiv.removeAttribute('checked');
//     let storage = localStorage.getItem('cards');
//     const parseStorage = JSON.parse(storage);
//     updateStorage(parseStorage, btnDivID);
//     return;
//   }

// btnDiv.setAttribute('checked', true);
  

