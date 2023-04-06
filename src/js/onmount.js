import {
  fetchPopularNews,
 
} from './fetches';
import { renderMarkupData } from './render-markup';
import { categoryValue, removeActiveClass } from './navigation';
import { successCallback, failureCallback } from './weather';
console.log(window.location.pathname )

if(window.location.pathname ==='/index.html'){
  onMount()   
}

export async function onMount() {
  removeActiveClass();
  categoryValue.value = '';
  const result = await fetchPopularNews();
  renderMarkupData(result);
  navigator.geolocation.getCurrentPosition(successCallback, failureCallback);
}
