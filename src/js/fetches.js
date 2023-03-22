import axios, { isCancel, AxiosError } from 'axios';
const KEY = 'l8KIk4PAFV2Lgtto4JKKNaM7Q53Z5QMa';

const KEY_WEATHER_API = 'b45ce7b42bd659df434b4de28331d70c';

const div = document.querySelector('.news');

// Фетч популярних
export async function fetchPopularNews() {
  const response = await axios.get(
    `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${KEY}`
  );

  const popularNews = await response.data.results;
  const array = popularNews.map(article => {
    const meta = 'media-metadata';
    const newsObject = {
      title: article.title,
      text: article.abstract,
      imgSrc: article.media[0][meta][0].url
        ? article.media[0][meta][0].url
        : 'qwe',
      link: article.url,
    };
    return newsObject;
  });
  return array;
}

//Фетч по категориям
export async function fetchNewsByCategory(category) {
  const response = await axios.get(
    `https://api.nytimes.com/svc/news/v3/content/nyt/${category}.json?api-key=${KEY}`
  );

  const newsByCategory = await response.data.results;
  const array = newsByCategory.map(article => {
    const newsObject = {
      title: article.title,
      text: article.abstract,
      imgSrc: article.multimedia[0] ? article.multimedia[0].url : 'qwe',
      link: article.url,
    };
    return newsObject;
  });
  return array;
}

//Фетч по поисковому запросу
export async function fetchNewsBySearch(search) {
  const response = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${KEY}`
  );

  const newsBySearch = await response.data.response.docs;
  console.log(newsBySearch);
  const array = newsBySearch.map(article => {
    const newsObject = {
      title: article.headline.main,
      text: article.abstract,
      imgSrc: `https://static01.nyt.com/${
        article.multimedia[0].url ? article.multimedia[0].url : 'qwe'
      }`,
      link: article.url,
    };
    return newsObject;
  });
  return array;
}


//  Запит на Weather API
export async function getCurrentWeather(lat, lon) {
  const products = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY_WEATHER_API}&units=metric`
  );
  return products;
}

