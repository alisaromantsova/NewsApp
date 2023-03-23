import { fetchPopularNews, fetchNewsByCategory, fetchNewsBySearch, renderEmptyMarkup } from './fetches';
import {renderMarkup} from './render-markup'
onMount()
async function onMount(){
    const result = await fetchPopularNews()
renderMarkup(result)
}