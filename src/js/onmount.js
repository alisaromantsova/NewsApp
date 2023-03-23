import { fetchPopularNews, fetchNewsByCategory, fetchNewsBySearch, renderEmptyMarkup } from './fetches';
import {renderMarkup} from './render-markup'
import { categoryValue } from './navigation';
onMount()
async function onMount(){
    categoryValue=""
    const result = await fetchPopularNews()
renderMarkup(result)
}