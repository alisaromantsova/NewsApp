import {
  fetchPopularNews,
  fetchNewsByCategory,
  fetchNewsBySearch,
  renderEmptyMarkup,
} from './fetches';
import { renderMarkup } from './render-markup';
import { categoryValue, removeActiveClass } from './navigation';
import { successCallback, failureCallback } from './weather';
console.log(window);
const date = new Date();
console.log(date.getTime()); 
onMount()
async function onMount() {
  removeActiveClass();
  categoryValue.value = '';
  const result = await fetchPopularNews();
  renderMarkup(result);
  navigator.geolocation.getCurrentPosition(successCallback, failureCallback);
}
