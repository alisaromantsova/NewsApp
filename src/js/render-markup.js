const div = document.querySelector('.news');

// export async function  renderMarkup(array){
// const markup = array.map((article)=>{
//     return `<div class="new__card">
//     <h2 class="news__title">${article.title}</h2>
//        <p class="news__text">${article.text}</p>
//      <img class="new__img" src="${ article.imgSrc}"/>
//      <div class="article_flag">
//      <button class="article_flag--add"><span class="article_flag_text">Add to favorite</span>
//      </button>
//      <button class="article_flag--remove is-hidden"><span class="article_flag_text">Remove from favorite</span>
//      </button>
//      </div>
//      <a class="new__link" href="${article.url}">read more</a>
//      </div>`;
// }).join('');
//   div.insertAdjacentHTML('beforeend', markup);
// }

export async function renderMarkup(array) {
  const markup = array
    .map(article => {
      return `<div class="new__card">
      <div class="box">
      <p class="is-read">Have read</p>
      <img class="new__img" src="${article.imgSrc}" alt="" width="395" height="395"/>
      <button type="button" class="news__category">${article.category}</button>
      <button class="news__addbtn" type="button"><span></span>Add to favorite</span><svg class="news__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.66659 2C2.82592 2 1.33325 3.47733 1.33325 5.3C1.33325 6.77133 1.91659 10.2633 7.65858 13.7933C7.76144 13.8559 7.87952 13.889 7.99992 13.889C8.12032 13.889 8.2384 13.8559 8.34125 13.7933C14.0833 10.2633 14.6666 6.77133 14.6666 5.3C14.6666 3.47733 13.1739 2 11.3333 2C9.49258 2 7.99992 4 7.99992 4C7.99992 4 6.50725 2 4.66659 2Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></button>
                <button class="news__romevebtn is-hidden" type="button"><span></span>Remove from favorite</span><svg class="card-button-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.66659 2C2.82592 2 1.33325 3.47733 1.33325 5.3C1.33325 6.77133 1.91659 10.2633 7.65858 13.7933C7.76144 13.8559 7.87952 13.889 7.99992 13.889C8.12032 13.889 8.2384 13.8559 8.34125 13.7933C14.0833 10.2633 14.6666 6.77133 14.6666 5.3C14.6666 3.47733 13.1739 2 11.3333 2C9.49258 2 7.99992 4 7.99992 4C7.99992 4 6.50725 2 4.66659 2Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></button>
       </div>
    <h2 class="news__title">${article.title}</h2>
       <p class="news__text">${article.text}</p>
        <div class="news__details">
     <p class="news__date">${article.date}</p>
  <a class="news__link" href="${article.link}">read more</a>
 </div>
 </div>`;
    })
    .join('');
  div.insertAdjacentHTML('beforeend', markup);
}
