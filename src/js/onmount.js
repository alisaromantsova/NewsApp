import {
  fetchPopularNews,
 
} from './fetches';
import { renderMarkupData } from './render-markup';
import { categoryValue, removeActiveClass } from './navigation';
import { successCallback, failureCallback } from './weather';
onMount();

async function onMount() {
  removeActiveClass();
  categoryValue.value = '';
  const result = await fetchPopularNews();
  renderMarkupData(result);
  navigator.geolocation.getCurrentPosition(successCallback, failureCallback);
}
