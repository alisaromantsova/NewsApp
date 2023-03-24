import { fetchPopularNews, fetchNewsByCategory, fetchNewsBySearch, renderEmptyMarkup } from './fetches';
import {renderMarkup} from './render-markup'

const checkboxEl = document.querySelector('.chose-checkbox');
checkboxEl.addEventListener('click', changeTheme);



window.onload = function() {
    let selectedTheme = localStorage.getItem('selectedTheme');
    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else{
        document.body.classList.add('light');
    }
  }


let activeCheckbox = localStorage.getItem('isChecked');
if(activeCheckbox === "true"){
    checkboxEl.setAttribute('checked', true);
}



function changeTheme(){

    if(document.body.classList.contains('light')){
        document.body.classList.remove('light');
        document.body.classList.add('dark'); 
    } else{
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }

    let theme = document.body.getAttribute("class");
    localStorage.setItem('selectedTheme',theme);

    let isChecked = checkboxEl.checked;
    localStorage.setItem('isChecked', isChecked);
};


