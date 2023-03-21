import { fetchPopularNews, fetchNewsByCategory, fetchNewsBySearch } from './fetches';
import {renderMarkup} from './render-markup'

async function onInput(){
    const result = await fetchNewsBySearch("food")
    renderMarkup(result)
}
// Функція, яка забирає з бекенду картки новин і робить розмітку. Замість food потрібно підставити значення з інпута