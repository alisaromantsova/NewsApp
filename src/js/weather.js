// import {
//   fetchPopularNews,
//   fetchNewsByCategory,
//   fetchNewsBySearch,
// } from './fetches';
// import { renderMarkup } from './render-markup';
import { getCurrentWeather } from './fetches';

// const body = document.body;
// const weatherContainerRef = body.querySelector('.weather');

navigator.geolocation.getCurrentPosition(successCallback, failureCallback);

async function successCallback(position) {
  const { data } = await getCurrentWeather(
    position.coords.latitude,
    position.coords.longitude
  );
  console.log('data:', data);
  renderWeather(data);
}

async function failureCallback() {
  const { data } = await getCurrentWeather(40.748488, -73.985508);
  console.log({ data });
  renderWeather(data);
}

function renderWeather(data) {
  const currentDate = new Date();
  const currentDayName = new Date().toString().split(' ')[0];
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.toString().split(' ')[1];
  const currentYear = currentDate.getFullYear();
  const weatherMarkup = `<p class="weather__temperature">${Math.floor(
    data.main.temp
  )}°</p>
      <div class="weather__info">
        <p class="weather__state">${data.weather[0].main}</p>
        <p class="weather__location">${data.name}</p>
      </div>
      <div><img src="https://openweathermap.org/img/wn/${
        data.weather[0].icon
      }@2x.png" alt=""></div>
      <p class="weather__day">${currentDayName}</p>
      <p class="weather__date">${currentDay} ${currentMonth} ${currentYear}</p>`;
  //   weatherContainerRef.innerHTML = weatherMarkup;
}
