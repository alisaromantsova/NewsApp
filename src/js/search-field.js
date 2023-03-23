import { fetchPopularNews, fetchNewsByCategory, fetchNewsBySearch } from './fetches';
import {renderMarkup} from './render-markup';


const searchForm = document.querySelector('#form-field')
const selectEl = document.querySelector('.nav-select ')
const div = document.querySelector('.news');




searchForm.addEventListener('submit', createNews);


function createNews(event){
    event.preventDefault();
    const inputName = event.currentTarget.searchQuery.value.trim();
    onInput();
   async function onInput(){
       const result = await fetchNewsBySearch(inputName);
       if(inputName === ''){
        return alert("OOPS")
      } if(result.length === 0){
         return alert("EMPTY")
      }
      if (inputName) {
        selectEl.setAttribute("disabled", true);
      }

       div.innerHTML='';
    renderMarkup(result);
}

}