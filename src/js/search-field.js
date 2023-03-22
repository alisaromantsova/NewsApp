import { fetchPopularNews, fetchNewsByCategory, fetchNewsBySearch } from './fetches';
import {renderMarkup} from './render-markup';

const categoryButtons = document.querySelectorAll('.navblock__tablet button');

const searchForm = document.querySelector('#form-field')
const div = document.querySelector('.news');

console.log(searchForm);


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
       div.innerHTML='';
    renderMarkup(result);
}

}