const linkReadMoreNews = document.querySelector('.news');
if (
  window.location.pathname === '/index.html' ||
  window.location.pathname === '/NewsApp/' ||
  window.location.pathname === '/' ||
  window.location.pathname === '/NewsApp/index.html'
) {
  linkReadMoreNews.addEventListener('click', readMoreClick);
}

export function readMoreClick(event) {
  const arreyReadCard = JSON.parse(localStorage.getItem('newsReadMore'))
    ? [...JSON.parse(localStorage.getItem('newsReadMore'))]
    : [];

  if (event.target.tagName !== 'A') {
    return;
  }

  const linkNewReadCard = event.target
    .closest('.new__card')
    .querySelector('.news__link');

  let newsReadMoreCard = event.target.closest('.new__card').innerHTML;
  if (arreyReadCard.length !== 0) {
    arreyReadCard.map(item => {
      if (item.newsReadMoreCard.includes(linkNewReadCard)) {
        newsReadMoreCard = null;
        return false;
      }
    });
  }

  
  if (newsReadMoreCard) {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    // const currentDate = `${day}/${month}/${year}`;
    const currentDate = "03/04/2023"
    arreyReadCard.push({ newsReadMoreCard, currentDate });
    localStorage.setItem('newsReadMore', JSON.stringify(arreyReadCard));
 }


}
