import { fetchPopularNews, fetchNewsByCategory, fetchNewsBySearch, renderEmptyMarkup} from './fetches';
import {renderMarkup} from './render-markup';
import { categoryValue } from './navigation';

const searchForm = document.querySelector('#form-field')
const selectEl = document.querySelector('.nav-select ')
const div = document.querySelector('.news');



searchForm.addEventListener('submit', createNews);


function createNews(event){
   event.preventDefault();
   const inputName = event.currentTarget.searchQuery.value.trim();
    onInput();
   async function onInput(){
    categoryValue.value=''
   try{
      const result = await fetchNewsBySearch(inputName);
      if(inputName === ""){
        div.innerHTML = renderEmptyMarkup()
        return alert("Please enter a category")
      } 
      if(result.length === 0){
         return div.innerHTML = renderEmptyMarkup()
      } 
      if (inputName) {
           selectEl.setAttribute("disabled", true);
           const buttons = document.querySelectorAll('.nav-buttons .category-item');
         buttons.forEach((button) => {
         button.disabled = true;});
         }
            div.innerHTML='';
         renderMarkup(result);

   } catch(error){

    }

}
}