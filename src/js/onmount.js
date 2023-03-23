import {
  fetchPopularNews,
  fetchNewsByCategory,
  fetchNewsBySearch,
  renderEmptyMarkup,
} from './fetches';
import { renderMarkup } from './render-markup';
import { categoryValue, removeActiveClass } from './navigation';
onMount();
async function onMount() {
  removeActiveClass();
  categoryValue = '';
  const result = await fetchPopularNews();
  renderMarkup(result);
  navigator.geolocation.getCurrentPosition(successCallback, failureCallback);
}
