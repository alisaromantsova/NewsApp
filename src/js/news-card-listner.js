// збереження в локалсторедж по кліку на add

const divClassNews = document.querySelector('.news');

divClassNews.addEventListener('click', onAddToFavoriteClick);
const arreyCard = JSON.parse(localStorage.getItem('newsCard'))
  ? [...JSON.parse(localStorage.getItem('newsCard'))]
  : [];

function onAddToFavoriteClick(event) {
  if (event.target.tagName !== 'SPAN' && event.target.tagName !== 'BUTTON') {
    return;
  }

  const newsCard =
    event.target.tagName === 'BUTTON'
      ? event.target.parentNode.parentNode.innerHTML
      : event.target.parentNode.parentNode.parentNode.innerHTML;

  arreyCard.push({ newsCard });
  localStorage.setItem('newsCard', JSON.stringify(arreyCard));
}
