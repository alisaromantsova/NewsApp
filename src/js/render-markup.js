const div = document.querySelector('.news')

export async function  renderMarkup(array){
const markup = array.map((article)=>{
    return `<div class="new__card">
    <h2 class="news__title">${article.title}</h2>
       <p class="news__text">${article.text}</p>
     <img class="new__img" src="${ article.imgSrc}"/>
  <a class="new__link" href="${article.url}">read more</a>
 </div>`;
  }) .join('');
div.insertAdjacentHTML('beforeend', markup);
}





