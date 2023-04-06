import { refs,writeNewPost } from "./firebase";

export function setEventAfterRender() {
  
  const card = document.querySelectorAll('.new__card');

  const addBtns = document.querySelectorAll('.news__addbtn');
  const removeBtns = document.querySelectorAll('.news__removebtn');

  addBtns.forEach((addBtn, i) => {
    addBtn.addEventListener('click', () => {
      console.log('addBtnafter render')
      const removeBtn = removeBtns[i];
      addBtn.classList.add('is-hidden');
      removeBtn.classList.remove('is-hidden');
    });
  });

  removeBtns.forEach((removeBtn, i) => {
    removeBtn.addEventListener('click', () => {
      console.log('remove btn after render')
      const addBtn = addBtns[i];
      addBtn.classList.remove('is-hidden');
      removeBtn.classList.add('is-hidden');
    });
  });
}

export function createThreePoints(str) {
  if (str.length > 130) {
    return str.slice(0, 130) + '...';
  }
  return str;
}

export function setEventAfterRead() {
  
  const cards = Array.from(document.querySelectorAll('.new__card'));
  const newsLinks = Array.from(document.querySelectorAll('.news__link'));
  const readsMarks = Array.from(document.querySelectorAll('.is-read'));
  let localStorageKey = 'isRead';

  newsLinks.forEach((newsLink, i) => {
    const q = newsLink.href.split('/')[newsLink.href.split('/').length-1].split('.')[0]
    newsLink.addEventListener('click', () => {
      console.log('remove btn after read')
      readsMarks[i].classList.remove('is-hidden');
      cards[i].classList.add('overlay');
      let isReadData = {}

      if(!refs.logedUser){
        isReadData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
        isReadData[newsLink.getAttribute('href')] = true;
        localStorage.setItem(localStorageKey, JSON.stringify(isReadData));
      }
      if(refs.logedUser){
       isReadData = refs.isReadLocal || {};
       isReadData[q] = true;
       writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal,refs.isReadLocal)
      }


      // const isReadData =
        //try 
        // JSON.parse(localStorage.getItem(localStorageKey)) || {};
        // refs.isReadLocal || {};
      
      // isReadData[q] = true;
      // isReadData[newsLink.getAttribute('href')] = true;
      // console.log("newsLink",.slice(-newsLink.href.split('/').length-4))
      
      // console.log(refs.isReadLocal)
      // console.log(isReadData)
      // console.log(isReadData[newsLink.getAttribute('href')])
      //try
      // localStorage.setItem(localStorageKey, JSON.stringify(isReadData));
      // writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal,refs.isReadLocal)
    });
    // try
    // const storedData = JSON.parse(localStorage.getItem(localStorageKey));
    // const storedData = refs.isReadLocal
    let storedData = null
    if(!refs.logedUser){
      storedData = JSON.parse(localStorage.getItem(localStorageKey));
      if (storedData && storedData[newsLink.getAttribute('href')]) {
        readsMarks[i].classList.remove('is-hidden');
        cards[i].classList.add('overlay');
      }
    }
    if(refs.logedUser){
      storedData = refs.isReadLocal
      if (storedData && storedData[q]) {
        readsMarks[i].classList.remove('is-hidden');
        cards[i].classList.add('overlay');
      }
    }
    // if (storedData && storedData[newsLink.getAttribute('href')]) {
    //   readsMarks[i].classList.remove('is-hidden');
    //   cards[i].classList.add('overlay');
    // }
    // if (storedData && storedData[q]) {
    //   readsMarks[i].classList.remove('is-hidden');
    //   cards[i].classList.add('overlay');
    // }
  });
}
