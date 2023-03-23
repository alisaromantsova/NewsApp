import { fetchPopularNews, fetchNewsByCategory, fetchNewsBySearch } from './fetches';
import {renderMarkup} from './render-markup'

const spanEl = document.querySelector('.ball');
spanEl.addEventListener('click', ChangeTheme);
let activeTheme = localStorage.getItem('theme'); 
document.body.classList.add(activeTheme);
function ChangeTheme(){
    if(document.body.classList.contains('light')){
        document.body.classList.remove('light');
        document.body.classList.add('dark'); 
    } else{
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
    let theme = document.body.getAttribute("class");
    localStorage.setItem('theme', theme);
};
