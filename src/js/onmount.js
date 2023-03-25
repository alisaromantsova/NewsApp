import {
  fetchPopularNews,
  fetchNewsByCategory,
  fetchNewsBySearch,
  renderEmptyMarkup,
} from './fetches';
import { renderMarkup, renderMarkupData } from './render-markup';
import { categoryValue, removeActiveClass } from './navigation';
import { successCallback, failureCallback } from './weather';

onMount();
async function onMount() {
  removeActiveClass();
  categoryValue.value = '';
  const result = await fetchPopularNews();
  // renderMarkup(result);
  renderMarkupData(result);
  navigator.geolocation.getCurrentPosition(successCallback, failureCallback);
}
