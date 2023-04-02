import { renderEmptyMarkup } from './fetches';
import { onAddToFavoriteClick } from './news-card-listner';
import { setEventAfterRender } from './news-card';
import { setEventAfterRead } from './news-card';

const containerRead = document.querySelector('.container__read');
containerRead.addEventListener('click', onCurrentDateClick);
const cards = JSON.parse(localStorage.getItem('newsReadMore'));
const cardsAddToFavorit = JSON.parse(localStorage.getItem('newsCard'));
let dateAdded;

if (!cards) {
  containerRead.innerHTML = renderEmptyMarkup();
} else {
  cards.map((card) => {
    if(dateAdded === undefined || card.currentDate !== dateAdded){
    containerRead.insertAdjacentHTML("afterbegin", `<div class="accardeon"><p class="read-date">${card.currentDate}</p><ul class="list-news is-hidden" data-time = '${card.currentDate}'><li class="new__cards overlay" >
    <div class="new__card">${card.newsReadMoreCard}</div></li></ul></div>`) 
  }

    if(card.currentDate === dateAdded){
     document.querySelector(`[data-time="${dateAdded}"]`).insertAdjacentHTML("beforeend", `<li class="new__cards overlay" ><div class="new__card">${card.newsReadMoreCard}</div>`)
    }

    dateAdded = card.currentDate;
  })
  setEventAfterRender();
setEventAfterRead();
document.querySelector('.list-news').classList.toggle('is-hidden')
document.querySelector('.read-date').classList.toggle('arrow-change')
}





function onCurrentDateClick(event) {
  onAddToFavoriteClick(event);

    if (!event.target.classList.contains('read-date')) return;
    event.target.nextSibling.classList.toggle('is-hidden');
    event.target.classList.toggle('arrow-change');
  }

  function buttonChanging(){
const arreyNewsCard = document.querySelectorAll('.new__card');
if (!cardsAddToFavorit) {
  return
}
arreyNewsCard.forEach((card) => {
  cardsAddToFavorit.map((item) => {
    if (card.innerHTML.includes(item.linkHref)) {
      card.querySelector('.news__addbtn').classList.add('is-hidden');
      card.querySelector('.news__removebtn').classList.remove('is-hidden');
    }
  })
})
  }

  buttonChanging()
 