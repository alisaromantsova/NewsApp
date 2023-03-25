// збереження в локалсторедж по кліку на add

const divClassNews = document.querySelector('.news');

divClassNews.addEventListener('click', onAddToFavoriteClick);
let arreyCard = JSON.parse(localStorage.getItem('newsCard'))
  ? [...JSON.parse(localStorage.getItem('newsCard'))]
  : [];

function onAddToFavoriteClick(event) {
  if (event.target.tagName !== 'SPAN' && event.target.tagName !== 'BUTTON') {
    return;
  }

  let newsCard =
    event.target.tagName === 'BUTTON'
      ? event.target.parentNode.parentNode.innerHTML
      : event.target.parentNode.parentNode.parentNode.innerHTML;

  const linkNewCArd =
    event.target.tagName === 'BUTTON'
      ? event.target.parentNode.parentNode.querySelector('.news__link')
      : event.target.parentNode.parentNode.parentNode.querySelector(
          '.news__link'
        );

  if (
    event.target.classList.contains('news__removebtn') ||
    event.target.parentNode.classList.contains('news__removebtn')
  ) {
    localStorage.removeItem('newsCard');
    const arreyCardSecond = [];
    arreyCard.map(item => {
      if (item.newsCard.includes(linkNewCArd)) {
      } else {
        if (item) {
          arreyCardSecond.push({ ...item });
        }
        return;
      }
    });
    console.log(arreyCardSecond.length);
    if (arreyCardSecond.length !== 0) {
      localStorage.setItem('newsCard', JSON.stringify(arreyCardSecond));
    }
    return;
  }

  if (arreyCard !== []) {
    arreyCard.push({ newsCard });
    localStorage.setItem('newsCard', JSON.stringify(arreyCard));
  }
}
