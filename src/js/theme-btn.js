import { fetchPopularNews, fetchNewsByCategory, fetchNewsBySearch } from './fetches';
import {renderMarkup} from './render-markup'

const checkboxEl = document.querySelector('.chose-checkbox');
checkboxEl.addEventListener('click', ChangeTheme);

let activeTheme = localStorage.getItem('theme'); 
document.body.classList.add(activeTheme);
let activeCheckbox = localStorage.getItem('isChecked');
console.log(activeCheckbox);
// if(activeCheckbox === 'true'){
    //     checkboxEl.setAttribute('checked', true);
// } else{
//     checkboxEl.removeAttribute('checked');
// }

// if(activeCheckbox === "true"){
//     checkboxEl.setAttribute('checked', true);
// }
function ChangeTheme(){
    //  else if(activeCheckbox === "false"){
    //     checkboxEl.removeAttribute('checked');
    // }
    if(document.body.classList.contains('light')){
        document.body.classList.remove('light');
        document.body.classList.add('dark'); 
    } else{
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
    let theme = document.body.getAttribute("class");
    localStorage.setItem('theme',theme);
    let isChecked = checkboxEl.checked;
    // if(theme === "dark"){
    //     isChecked = "true"
    // } else if(theme === "light"){
    //     isChecked = "false"
    // }
    localStorage.setItem('isChecked', isChecked);

};