import { refs,writeNewPost } from "./firebase";

if (
  window.location.pathname === '/index.html' ||
  window.location.pathname === '/' ||
  window.location.pathname === '/NewsApp/' ||
  window.location.pathname === '/NewsApp/index.html'
) {
  const divClassNews = document.querySelector('.news');
  divClassNews.addEventListener('click', onAddToFavoriteClick);
}

const divClassNews = document.querySelector('.news');

export function onAddToFavoriteClick(event) {
   //combine auth & ls
  let arreyCard = []
  if(refs.logedUser){
    arreyCard = refs.favoriteLocal ? refs.favoriteLocal : []
  }
  if(!refs.logedUser){
    console.log('user not loged')
     //combine auth & ls
    arreyCard = JSON.parse(localStorage.getItem('newsCard'))
    ? [...JSON.parse(localStorage.getItem('newsCard'))]
    : [];
    // return
  }
  // const arreyCard = JSON.parse(localStorage.getItem('newsCard'))
  //   ? [...JSON.parse(localStorage.getItem('newsCard'))]
  //   : [];
 

  if (
    event.target.tagName !== 'SPAN' &&
    event.target.tagName !== 'BUTTON' &&
    event.target.tagName !== 'svg' &&
    event.target.tagName !== 'path' &&
    event.target.tagName !== 'use'
  ) {
    return;
  }

  const newsCard = event.target.closest('.new__card').innerHTML;
  const linkNewCArd = event.target
    .closest('.new__card')
    .querySelector('.news__link');
  const linkHref = event.target
    .closest('.new__card')
    .querySelector('.news__link')
    .getAttribute('href');

  if (!newsCard.includes('news__addbtn is-hidden')) {
    //combine auth & ls
    if(!refs.logedUser){
      localStorage.removeItem('newsCard');
    }
    // // if one cards in db or ls than clear array
    if(refs.logedUser){
      refs.favoriteLocal = []
      writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal,refs.isReadLocal)
    }
    const arreyCardSecond = [];
    arreyCard.map(item => {
      if (item.newsCard.includes(linkNewCArd)) {
      } else {
        if (item) {
          arreyCardSecond.push({ ...item });
        }
        return;
      }
    });
    if (arreyCardSecond.length !== 0) {
      //try
      if(!refs.logedUser){
        localStorage.setItem('newsCard', JSON.stringify(arreyCardSecond)); 
      }
      // idk
      if(refs.logedUser){
        refs.favoriteLocal = [...arreyCardSecond]
        writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal,refs.isReadLocal)
      }
    }
    return;
  }

  arreyCard.push({ newsCard, linkHref });
  //try
  if(!refs.logedUser){
    localStorage.setItem('newsCard', JSON.stringify(arreyCard)); 
  }
  // localStorage.setItem('newsCard', JSON.stringify(arreyCard));

  // idk
  if(refs.logedUser){
    refs.favoriteLocal = [...arreyCard]
    writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal,refs.isReadLocal)
  }
  // refs.favoriteLocal = [...arreyCard]
  //  writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal,refs.isReadLocal)


  
}
