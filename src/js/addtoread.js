import { refs,writeNewPost } from "./firebase";

const linkReadMoreNews = document.querySelector('.news');
if (
  window.location.pathname === '/index.html' ||
  window.location.pathname === '/NewsApp/' ||
  window.location.pathname === '/' ||
  window.location.pathname === '/NewsApp/index.html'
) {
  linkReadMoreNews.addEventListener('click', readMoreClick);
}

export function readMoreClick(event) {
  // try
  // const arreyReadCard = JSON.parse(localStorage.getItem('newsReadMore'))
  //   ? [...JSON.parse(localStorage.getItem('newsReadMore'))]
  //   : [];
  // const arreyReadCard = refs.readLocal
  let arreyReadCard = null;
  if(!refs.logedUser){
    arreyReadCard = JSON.parse(localStorage.getItem('newsReadMore'))
      ? [...JSON.parse(localStorage.getItem('newsReadMore'))]
      : [];
  }
  if(refs.logedUser){
    arreyReadCard = refs.readLocal
  }

  if (event.target.tagName !== 'A') {
    return;
  }

  const linkNewReadCard = event.target
    .closest('.new__card')
    .querySelector('.news__link');

  let newsReadMoreCard = event.target.closest('.new__card').innerHTML;
  if (arreyReadCard.length !== 0) {
    arreyReadCard.map(item => {
      if (item.newsReadMoreCard.includes(linkNewReadCard)) {
        newsReadMoreCard = null;
        refs.readLocal = []
        return false;
      }
    });
  }

  if (newsReadMoreCard) {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    const currentDate = `${day}/${month}/${year}`;

    // const currentDate = "01/04/2023"
    arreyReadCard.push({ newsReadMoreCard, currentDate });
    // localStorage.setItem('newsReadMore', JSON.stringify(arreyReadCard));
    // refs.readLocal = [...arreyReadCard]
    // writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal,refs.isReadLocal)

    if(!refs.logedUser){
      localStorage.setItem('newsReadMore', JSON.stringify(arreyReadCard));
    }
    if(refs.logedUser){
      refs.readLocal = [...arreyReadCard]
      writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal,refs.isReadLocal)
    }
 }

}

