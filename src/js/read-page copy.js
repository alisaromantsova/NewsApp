// import { renderEmptyMarkup } from './fetches';
// import { onAddToFavoriteClick } from './news-card-listner';
// import { setEventAfterRender } from './news-card';
// import { setEventAfterRead } from './news-card';
// import { refs, writeNewPost } from './firebase';

// const containerRead = document.querySelector('.container__read');
// if(containerRead){
// containerRead.addEventListener('click', onCurrentDateClick);
// }
// //try
// // const cards = JSON.parse(localStorage.getItem('newsReadMore'));
// // const cardsAddToFavorit = JSON.parse(localStorage.getItem('newsCard'));
// // const cards = refs.readLocal;

// // if(refs){
// //  cardsAddToFavorit = refs.isReadLocal
// // }



// // if (!cards) {
// //   containerRead.innerHTML = renderEmptyMarkup();
// // } else {
// //   cards.map((card) => {
// //     if(dateAdded === undefined || card.currentDate !== dateAdded){
// //     containerRead.insertAdjacentHTML("afterbegin", `<div class="accardeon"><p class="read-date">${card.currentDate}</p><ul class="list-news is-hidden" data-time = '${card.currentDate}'><li class="new__cards overlay" >
// //     <div class="new__card">${card.newsReadMoreCard}</div></li></ul></div>`) 
// //   }

// //     if(card.currentDate === dateAdded){
// //      document.querySelector(`[data-time="${dateAdded}"]`).insertAdjacentHTML("beforeend", `<li class="new__cards overlay" ><div class="new__card">${card.newsReadMoreCard}</div>`)
// //     }

// //     dateAdded = card.currentDate;
// //   })
// //   setEventAfterRender();
// // setEventAfterRead();
// // document.querySelector('.list-news').classList.toggle('is-hidden')
// // document.querySelector('.read-date').classList.toggle('arrow-change')
// // }
// export async function renderReadMarkup(){
//   console.log("refs.favoriteLocal",refs.favoriteLocal)
//   console.log("refs.isReadLocal",refs.isReadLocal)
//   console.log("refs.readLocal",refs.readLocal)
//   let dateAdded;
//   // if(!refs.favoriteLocal || !refs.isReadLocal || !refs.readLocal){
//   //   return
//   // }
//   const cards = refs.readLocal;
//   console.log('cards ',cards)
//   console.log('dateadded ',dateAdded)
 
// if (cards.length === 0) {
//   // console.log(cards)
//   containerRead.innerHTML = renderEmptyMarkup();
// }
// if(cards.length >0){
//   // console.log(cards)
//   containerRead.innerHTML = '';
//   cards.map((card) => {
//     console.log('card',card)
//     if(dateAdded === undefined || card.currentDate !== dateAdded){
//     containerRead.insertAdjacentHTML("afterbegin", `<div class="accardeon"><p class="read-date">${card.currentDate}</p><ul class="list-news is-hidden" data-time = '${card.currentDate}'><li class="new__cards overlay" >
//     <div class="new__card">${card.newsReadMoreCard}</div></li></ul></div>`) 
//   }

//     if(card.currentDate === dateAdded){
//      document.querySelector(`[data-time="${dateAdded}"]`).insertAdjacentHTML("beforeend", `<li class="new__cards overlay" ><div class="new__card">${card.newsReadMoreCard}</div>`)
//     }

//     dateAdded = card.currentDate;
//   })
//   // setEventAfterRender();
//   // setEventAfterRead();
// document.querySelector('.list-news').classList.toggle('is-hidden')
// document.querySelector('.read-date').classList.toggle('arrow-change')
// }
// }


// // setTimeout(()=>{
// //   renderReadMarkup()
// //   buttonChanging()
// //   },2000)


// function onCurrentDateClick(event) {
//   // onAddToFavoriteClick(event);
//   onAddToFavoriteClickOnReadPage(event)

//     if (!event.target.classList.contains('read-date')) return;
//     event.target.nextSibling.classList.toggle('is-hidden');
//     event.target.classList.toggle('arrow-change');
//   }

// export  function buttonChanging(){
// const arreyNewsCard = document.querySelectorAll('.new__card');
// const cardsAddToFavorit = refs.favoriteLocal

// // console.log('array news card ',arreyNewsCard)
// if (!cardsAddToFavorit) {
//   arreyNewsCard.forEach((card) => {

//     if ( card.querySelector('.news__addbtn').classList.contains("is-hidden")) {
//       card.querySelector('.news__addbtn').classList.remove('is-hidden');
//           card.querySelector('.news__removebtn').classList.add('is-hidden');
//     }
//   })
//   return
// }
// arreyNewsCard.forEach((card) => {
//   if (card.querySelector('.news__addbtn').classList.contains("is-hidden")) {
//     card.querySelector('.news__addbtn').classList.remove('is-hidden');
//         card.querySelector('.news__removebtn').classList.add('is-hidden');
//   }
//   cardsAddToFavorit.map((item) => {
//     if (card.innerHTML.includes(item.linkHref)) {
//       card.querySelector('.news__addbtn').classList.add('is-hidden');
//       card.querySelector('.news__removebtn').classList.remove('is-hidden');
//     }
//   })
// })
//   }

//   // buttonChanging()
 
//   function onAddToFavoriteClickOnReadPage (event){

//     if(!refs.logedUser){
//       console.log('user not loged')
//       return
//     }
//     const arreyCard = refs.favoriteLocal ? refs.favoriteLocal : []
  
//     if (
//       event.target.tagName !== 'SPAN' &&
//       event.target.tagName !== 'BUTTON' &&
//       event.target.tagName !== 'svg' &&
//       event.target.tagName !== 'path' &&
//       event.target.tagName !== 'use'
//     ) {
//       return;
//     }
  
//     const newsCard = event.target.closest('.new__card').innerHTML;
//     const linkNewCArd = event.target
//       .closest('.new__card')
//       .querySelector('.news__link');
//     const linkHref = event.target
//       .closest('.new__card')
//       .querySelector('.news__link')
//       .getAttribute('href');
    
//       // console.log("arreyCard",arreyCard)
//       console.log("newsCard",newsCard)
//       // // console.log("newsCard.includes('news__addbtn is-hidden')",newsCard.includes('news__addbtn is-hidden'))
//       // console.log("linkNewCArd",linkNewCArd)
//       // console.log("linkHref",linkHref)
//       const div = event.target.closest('div.box')
//       const addBtn = div.children[3]
//       const removeBtn = div.children[4]
//       const cardElement = refs.favoriteLocal.find((el)=>el.linkHref === linkHref)
//       const idx = refs.favoriteLocal.indexOf(cardElement)

//       console.log(idx)
//       console.dir(div)
//       console.log(addBtn)
//       console.log(removeBtn)

//       if(newsCard.includes('news__addbtn is-hidden')){
//         console.log('in favorite')
//         removeBtn.classList.add('is-hidden')
//         addBtn.classList.remove('is-hidden')
//         refs.favoriteLocal = refs.favoriteLocal.filter((el)=>el.linkHref !== linkHref)
//         writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal,refs.isReadLocal)
//       }
//       else{
//         console.log('not in favorite')
//         removeBtn.classList.remove('is-hidden')
//         addBtn.classList.add('is-hidden')
//         refs.favoriteLocal.push({linkHref,newsCard})
//         writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal,refs.isReadLocal)
//       }

//     // if (!newsCard.includes('news__addbtn is-hidden')) {
//     //   console.log('key')
//     //   // localStorage.removeItem('newsCard');
//     //   // // if one cards in db or ls than clear array
//     //   refs.favoriteLocal = []
//     //   writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal,refs.isReadLocal)
//     //   const arreyCardSecond = [];
//     //   arreyCard.map(item => {
//     //     console.log("key2")
//     //     if (item.newsCard.includes(linkNewCArd)) {
//     //     } else {
//     //       if (item) {
//     //         arreyCardSecond.push({ ...item });
//     //       }
//     //       return;
//     //     }
//     //   });
//     //   console.log('key5')
//     //   if (arreyCardSecond.length !== 0) {
//     //     console.log("key3")
//     //     refs.favoriteLocal = [...arreyCardSecond]
//     //     writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal,refs.isReadLocal)
//     //   }
//     //   return;
//     // }
  
//     // arreyCard.push({ newsCard, linkHref });
//     // console.log("key4")
  
//     // refs.favoriteLocal = [...arreyCard]
//     //  writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal,refs.isReadLocal)
  
  
//   }