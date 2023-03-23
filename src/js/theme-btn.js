import { fetchPopularNews, fetchNewsByCategory, fetchNewsBySearch } from './fetches';
import {renderMarkup} from './render-markup'

const spanEl = document.querySelector('.ball');
spanEl.addEventListener('click', ChangeTheme);
document.body.classList.add('light');
function ChangeTheme(){
    if(document.body.classList.contains('light')){
        document.body.classList.remove('light');
        document.body.classList.add('dark'); 
    } else{
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
};