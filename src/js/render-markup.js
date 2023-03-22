const div = document.querySelector('.news')

export async function  renderMarkup(array){
const markup = array.map((article)=>{
    return `<div class="new__card">
    <p class="new__category-text">${article.category}</p>
    <p class="is-read">Have read</p>
    <h2 class="news__title">${article.title}</h2>
       <p class="news__text">${article.text}</p>
     <img class="new__img" src="${ article.imgSrc}"/>
     <div class="article_flag">
     <button class="article_flag--add"><span class="article_flag_text">Add to favorite</span>
     </button>
     <button class="article_flag--remove is-hidden"><span class="article_flag_text">Remove from favorite</span>
     </button>
     </div>
     <a class="new__link" href="${article.url}">read more</a>
     </div>`;
}).join('');
  div.insertAdjacentHTML('beforeend', markup);
}





