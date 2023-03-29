import { renderEmptyMarkup } from './fetches';
import { onAddToFavoriteClick } from './news-card-listner';
import { setEventAfterRender } from './news-card';
import { setEventAfterRead } from './news-card';

function renderDate() {
  const currentDate = new Date(Date.now());
  const day = currentDate.getDate();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;
  dateMerkup.innerHTML = formattedDate;
}

function renderMarkup() {
  if (cardsRead) {
    readList.innerHTML = cardsRead
      .map(card => `<div class="new__card">${card.newsReadMoreCard}</div>`)
      .join('');
  }
  //renderDate();
}

//renderMarkup();

const containerRead = document.querySelector('.container__read');
containerRead.addEventListener('click', onRemoveNewCardToReadClick);
function onRemoveNewCardToReadClick(event) {
  onAddToFavoriteClick(event);
}
let cards = JSON.parse(localStorage.getItem('newsReadMore'));

if (!cards) {
  containerRead.innerHTML = renderEmptyMarkup();
} else {
  //cards = cards.map(item => item.newsReadMoreCard);
  const arrayForRendering = createNewsArraysForRendering(cards);
  renderMarkupNew(arrayForRendering);
  containerRead.addEventListener('click', onCurrentDateClick);
}

// function getDateOfNews(card) {
//   let test = card.match(/(<p class="news__date">)(\d{2}-\d{2}-\d{4})/)[2];
//   let date1 = test.split('-');
//   let currentDate = [date1[2], date1[1], date1[0]].join('/');
//   return currentDate;
// }

// function createNewsArraysForRendering(newsArray) {
//   const newsArraySorted = newsArray.sort((a, b) =>
//     getDateOfNews(a).localeCompare(getDateOfNews(b))
//   );
//   let arrayForRender = [];
//   let date = 0;
//   for (let i = 0; i < newsArray.length; i += 1) {
//     if (arrayForRender.length === 0) {
//       date = getDateOfNews(newsArraySorted[i]);
//       arrayForRender.push([newsArraySorted[i]]);
//       continue;
//     }
//     if (date == getDateOfNews(newsArraySorted[i])) {
//       arrayForRender[arrayForRender.length - 1].push(newsArraySorted[i]);
//     } else {
//       date = getDateOfNews(newsArraySorted[i]);
//       arrayForRender.push([newsArraySorted[i]]);
//     }
//   }
//   return arrayForRender;
// }

// function renderMarkupNew(cardsArray) {
//   cardsArray.map(cards => {
//     const cardsArrayByDate = cards
//       .map(card => `<li class="new__card">${card}</li>`)
//       .join('');
//     containerRead.insertAdjacentHTML(
//       'afterbegin',
//       `<div class='accardeon'><p class='read-date'>${getDateOfNews(
//         cards[0]
//       )}</p><ul class='list-news'>${cardsArrayByDate}</ul></div>`
//     );
//   });
// }
function onCurrentDateClick(event) {
  if (!event.target.classList.contains('read-date')) return;
  event.target.nextSibling.classList.toggle('is-hidden');
  event.target.classList.toggle('arrow-change');
}
function createNewsArraysForRendering(newsArray) {
  const newsArraySorted = newsArray.sort((a, b) =>{
  // console.log("a",a)
  // console.log("a.localeCompare",a.currentDate.localeCompare(b.currentDate))
  // console.log("b",b)
   return a.currentDate.localeCompare(b.currentDate)
  }
  );
  const arrayForRender = [];
  let date = 0;
  for (let i = 0; i < newsArraySorted.length; i += 1) {
    if (arrayForRender.length === 0) {
      date = newsArraySorted[i].currentDate;
      arrayForRender.push([newsArraySorted[i]]);
      continue;
    }
    if (date == newsArraySorted[i].currentDate) {
      arrayForRender[arrayForRender.length - 1].push(newsArraySorted[i]);
    } else {
      date = newsArraySorted[i].currentDate;
      arrayForRender.push([newsArraySorted[i]]);
    }
  }
  return arrayForRender;
}
function renderMarkupNew(cardsArray) {
  cardsArray.map(cards => {
    const cardsArrayByDate = cards
      .map(card => `<li class="new__card">${card.newsReadMoreCard}</li>`)
      .join('');
    containerRead.insertAdjacentHTML(
      'afterbegin',
      `<div class='accardeon'><p class='read-date'>${cards[0].currentDate
        .split('/')
        .reverse()
        .join(
          '/'
        )}</p><ul class='list-news is-hidden'>${cardsArrayByDate}</ul></div>`
    );
  });
  setEventAfterRender();
  setEventAfterRead();
}


const refs = {
  f: document.querySelector('.read-date'),
};
if(refs.f){
  refs.f.addEventListener('click', () => refs.f.classList.toggle('aa'));

}

