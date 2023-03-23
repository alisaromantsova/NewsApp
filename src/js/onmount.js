import {
  fetchPopularNews,
  fetchNewsByCategory,
  fetchNewsBySearch,
  renderEmptyMarkup,
} from './fetches';
import { successCallback, failureCallback } from './weather';
import { renderMarkup } from './render-markup';
onMount();
async function onMount() {
  const result = await fetchPopularNews();
  renderMarkup(result);
  navigator.geolocation.getCurrentPosition(successCallback, failureCallback);
}
