const newsList = document.querySelector('.list-news');

newsList.addEventListener('click', linkReadMore);

let readMoreId = [];
isLocalEmpty();

function isLocalEmpty() {
    if (JSON.parse(localStorage.getItem('readMoreLocal')) === null)
    return;readMoreID = JSON.parse(localStorage.getItem('readMoreLocal'));
}

function linkReadMore(event) {
    const readMore = event.target.closest(`.new__link`);
    if (!readMore) return;
    readMore.parentNode.parentNode.parentNode.classList.add('opacity');
    addReadMore(readMore);
  }

  function addReadMore(readMore) {
    const evenDateNow = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const readDateNow = evenDateNow
      .toLocaleDateString([], options)
      .replaceAll('.', '/');
    const read = {
      uri: readMore.nextElementSibling.textContent,
      date: readMore.parentNode.firstElementChild.innerText,
      img: readMore.parentNode.parentNode.childNodes[1].children[0].currentSrc,
      title: readMore.parentNode.parentNode.childNodes[3].children[0].innerText,
      description:
        readMore.parentNode.parentNode.childNodes[3].children[1].innerText,
      link: readMore.parentNode.children[1].href,
      category:
        readMore.parentNode.parentNode.childNodes[1].children[1].innerHTML,
      dayRead: readDateNow,
    };

    for (let i = 0; i < readMoreId.length; i += 1) {
        if (readMoreId[i].uri === read.uri) {
          return;
        }
      }
      readMoreId.push(read);
      localStorage.setItem(`readMoreLocal`, JSON.stringify(readMoreId));
    }
// renderMarkup(array)
// news__link
// import {renderMarkup} from './render-markup'


// class renderMarkupStorage {
//   static KEY = "SELECTED_CARD";
// #selectedMarkup = [];

// #getMarkupFromStorage() {
//     try {
//         this.#selectedMarkup = JSON.parse(localStorage.getItem(renderMarkupStorage.KEY)) || [];
//     } catch (error) {
//         this.#selectedMarkup = [];
//     }
// }

// constructor() {
//     this.#getMarkupFromStorage();
// }

// add = (card) => {
//     this.#selectedMarkup.push(card);
//     localStorage.setItem(renderMarkupStorage.KEY, JSON.stringify(this.#selectedMarkup));
// };

// get selectedMarkup(){
//     return this.#selectedMarkup;
// }
// }

// const markupNewsStorage = new renderMarkupStorage();

// const refs =  {
// linkReadMore: document.querySelector('.news__link'),
// };

// refs.linkReadMore.addEventListener('click', addNewsMarkup);

 

