import { getCurrentWeather } from './fetches';

function OnStorageSetWeather(data) {
  const WEATHER_KEY = 'onHourWeather';
  localStorage.setItem(WEATHER_KEY, JSON.stringify(data));
 
}

let parseWeather;
function OnStorageGetWeather() {
  const getWeather = localStorage.getItem('onHourWeather') || '';
  parseWeather = JSON.parse(getWeather);
  return parseWeather;
}

let timeDiff;
function onTimeCheck(parseWeather) {
  parseWeather = OnStorageGetWeather();
  const date = new Date();
  const dateNow = date.getTime() / 1000;
  const dt = parseWeather.dt;
  timeDiff = dateNow - dt;
  return timeDiff;
}

let page = 1;
export async function successCallback(position) {
  if (!localStorage.getItem('onHourWeather')) {
    let { data } = await getCurrentWeather(
      position.coords.latitude,
      position.coords.longitude
    );
    OnStorageSetWeather(data);
    OnStorageGetWeather();
    renderWeather(parseWeather);
    
  } else {
    OnStorageGetWeather();
    
    timeDiff = onTimeCheck(parseWeather);
    
    if (timeDiff < 3600) {
      renderWeather(parseWeather);
      
    } else {
      let { data } = await getCurrentWeather(
        position.coords.latitude,
        position.coords.longitude
      );
      OnStorageSetWeather(data);
      OnStorageGetWeather();
      renderWeather(parseWeather);
      
    }
  }
}


export async function failureCallback() {
  if (!localStorage.getItem('onHourWeather')) {
    let { data } = await getCurrentWeather(40.748488, -73.985508);
    OnStorageSetWeather(data);
    OnStorageGetWeather();
    renderWeather(parseWeather);
   
  } else {
    OnStorageGetWeather();
    
    timeDiff = onTimeCheck(parseWeather);
    
    if (timeDiff < 3600) {
      renderWeather(parseWeather);
     
    } else {
      let { data } = await getCurrentWeather(40.748488, -73.985508);
      OnStorageSetWeather(data);
      OnStorageGetWeather();
      renderWeather(parseWeather);
      
    }
  }
}

export function renderWeather(parseWeather) {
  const currentDate = new Date();
  const currentDayName = currentDate.toString().split(' ')[0];
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.toString().split(' ')[1];
  const currentYear = currentDate.getFullYear();

  const weatherMarkup = `
    <div class="weather">
      <div class="weather__info">
        <p class="weather__temperature">${Math.floor(
          parseWeather.main.temp
        )}°</p>
        <div class="weather__second-wrapper">
          <p class="weather__state">${parseWeather.weather[0].main}</p>
          <span class="weather__location">
            <svg class="weather__icon" width="18" height="18" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 0.25c-3.281 0.004-6.426 1.309-8.746 3.629s-3.625 5.465-3.629 8.746c-0.004 2.681 0.872 5.29 2.493 7.425 0 0 0.338 0.444 0.393 0.509l9.489 11.191 9.494-11.197c0.050-0.060 0.388-0.503 0.388-0.503l0.001-0.003c1.62-2.135 2.496-4.742 2.492-7.422-0.004-3.281-1.309-6.426-3.629-8.746s-5.465-3.625-8.746-3.629zM14 17.125c-0.89 0-1.76-0.264-2.5-0.758s-1.317-1.197-1.657-2.020c-0.341-0.822-0.43-1.727-0.256-2.6s0.602-1.675 1.232-2.304c0.629-0.629 1.431-1.058 2.304-1.232s1.778-0.085 2.6 0.256c0.822 0.341 1.525 0.917 2.020 1.657s0.758 1.61 0.758 2.5c-0.002 1.193-0.476 2.337-1.32 3.18s-1.987 1.318-3.18 1.32z"/>
            </svg>
          <p>${parseWeather.name}</p></span>
        </div>
      </div>
      <img src="https://openweathermap.org/img/wn/${
        parseWeather.weather[0].icon
      }@2x.png" alt="${parseWeather.weather[0].main}" width="128" height="121">
      <p class="weather__date"> ${currentDayName} <br>${currentDay} ${currentMonth} ${currentYear}</p>
    </div>
`;

  insertMarkup(weatherMarkup);
}

function insertMarkup(weatherMarkup) {
  const mediaQueries = [
    { query: '(max-width: 768px)' },
    { query: '(min-width: 769px) and (max-width: 1280px)' },
    { query: '(min-width: 1281px)' },
  ];

  mediaQueries.forEach((mq, index) => {
    const mediaQuery = window.matchMedia(mq.query);
    if (mediaQuery.matches) {
      const targetElement = document.querySelectorAll('.new__card');
      targetElement[index].insertAdjacentHTML('beforebegin', weatherMarkup);
    }
  });
}
