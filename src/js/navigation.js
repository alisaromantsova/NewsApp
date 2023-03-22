import { fetchPopularNews, fetchNewsByCategory, fetchNewsBySearch } from './fetches';
import {renderMarkup} from './render-markup'
const button = document.querySelector('.artss')
button.addEventListener('click', onClick)

async function onClick(){
const result = await fetchNewsByCategory("food")
renderMarkup(result)
}