import axios, { isCancel, AxiosError } from 'axios';
const KEY = 'jeNm7rY37TemUh2AGcwUEtOAak9bew4U';
const KEY_WEATHER_API = 'b45ce7b42bd659df434b4de28331d70c';
const div = document.querySelector('.news');

// Фетч популярних
export async function fetchPopularNews() {
  try {
    const response = await axios
      .get(
        `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${KEY}`
      )
      .catch(function (err) {
        div.innerHTML = renderEmptyMarkup();
      });

    if (!response.data.results) {
      div.innerHTML = renderEmptyMarkup();
    }

    const popularNews = await response.data.results;
    console.log(popularNews);
    const array = popularNews.map(article => {
      const meta = 'media-metadata';
      const newsObject = {
        title: article.title,
        text: article.abstract,
        imgSrc: article.media[0]
          ? article.media[0][meta][2].url
          : 'https://static01.nyt.com/images/2023/03/12/12vid-oscars-95910-cover/12vid-oscars-95910-cover-articleInline.jpg',
        link: article.url,

        category: article.section,
        date: makeDate(article.published_date),
      };
      return newsObject;
    });
    return array;
  } catch (e) {
    div.innerHTML = renderEmptyMarkup();
  }
}

//Фетч по категориям
export async function fetchNewsByCategory(category) {
  try {
    const response = await axios
      .get(
        `https://api.nytimes.com/svc/news/v3/content/nyt/${category}.json?api-key=${KEY}`
      )
      .catch(function (err) {
        div.innerHTML = renderEmptyMarkup();
      });

    if (!response.data.results) {
      div.innerHTML = renderEmptyMarkup();
    }

    const newsByCategory = await response.data.results;
    const array = newsByCategory.map(article => {
      const newsObject = {
        title: article.title,
        text: article.abstract,
        imgSrc: article.multimedia
          ? article.multimedia[2].url
          : 'https://static01.nyt.com/images/2023/03/12/12vid-oscars-95910-cover/12vid-oscars-95910-cover-articleInline.jpg',
        link: article.url,

        category: article.section,
        date: makeDate(article.published_date),
      };
      return newsObject;
    });
    return array;
  } catch (e) {
    div.innerHTML = renderEmptyMarkup();
  }
}

//Фетч по поисковому запросу
export async function fetchNewsBySearch(search) {
  try {
    const response = await axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${KEY}`
      )
      .catch(function (err) {
        div.innerHTML = renderEmptyMarkup();
      });

    if (!response.data.response.docs) {
      div.innerHTML = renderEmptyMarkup();
    }

    const newsBySearch = await response.data.response.docs;

    const array = newsBySearch.map(article => {
      const newsObject = {
        title: article.headline.main,
        text: article.abstract,
        imgSrc: `https://static01.nyt.com/${
          article.multimedia[0]
            ? article.multimedia[2].url
            : 'images/2023/02/21/multimedia/21skeleton-ukraine-01-zjwv/21skeleton-ukraine-01-zjwv-articleLarge.jpg'
        }`,
        link: article.url,

        category: article.section_name,
        date: makeDate(article.pub_date),
      };
      return newsObject;
    });
    return array;
  } catch (e) {
    div.innerHTML = renderEmptyMarkup();
  }
}

function makeDate(isodate) {
  const date = new Date(isodate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const result = `${day}-${month}-${year}`;
  return result;
}

//  Запит на Weather API
export async function getCurrentWeather(lat, lon) {
  const products = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY_WEATHER_API}&units=metric`
  );
  return products;
}

export function renderEmptyMarkup() {
  const img404 = require('../images/haventFound.png');

  return `
    <div style="width: 100%;
display: flex;
flex-flow: column nowrap;
align-items: center;">
<p>We haven’t found news from this category</p>
<img src='${img404}' alt='' width="400px">
    </div>
  `;
}

export async function fetchNewsByCategoryAndDate(
  date = '20220110',
  category = 'Sports'
) {
  try {
    const response = await axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("${category}")&begin_date=${date}&end_date=${date}&api-key=${KEY}`
      )
      .catch(function (err) {
        div.innerHTML = renderEmptyMarkup();
        console.log('error1');
      });

    if (!response.data.response.docs) {
      div.innerHTML = renderEmptyMarkup();
    }

    const newsBySearch = await response.data.response.docs;
    const array = newsBySearch.map(article => {
      const newsObject = {
        title: article.headline.main,
        text: article.abstract,
        imgSrc: `https://static01.nyt.com/${
          article.multimedia[0]
            ? article.multimedia[2].url
            : 'images/2023/02/21/multimedia/21skeleton-ukraine-01-zjwv/21skeleton-ukraine-01-zjwv-articleLarge.jpg'
        }`,
        link: article.url,

        category: article.section_name,
        date: makeDate(article.pub_date),
      };
      return newsObject;
    });
    return array;
  } catch (e) {
    div.innerHTML = renderEmptyMarkup();
  }
}
