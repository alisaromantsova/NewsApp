// збереження в локалсторедж по кліку на add
const divClassNews = document.querySelector('.news');
divClassNews.addEventListener('click', onAddToFavoriteClick);




export function onAddToFavoriteClick(event) {
  const arreyCard = JSON.parse(localStorage.getItem('newsCard'))
    ? [...JSON.parse(localStorage.getItem('newsCard'))]
    : [];

  if (
    event.target.tagName !== 'SPAN' &&
    event.target.tagName !== 'BUTTON' &&
    event.target.tagName !== 'svg' &&
    event.target.tagName !== 'path' &&
    event.target.tagName !== 'use'
  ) {
    return;
  }

  const newsCard = event.target.closest('.new__card').innerHTML;
  const linkNewCArd = event.target
    .closest('.new__card')
    .querySelector('.news__link');

  if (!newsCard.includes('news__addbtn is-hidden')) {
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

    if (arreyCardSecond.length !== 0) {
      localStorage.setItem('newsCard', JSON.stringify(arreyCardSecond));
    }
    return;
  }

  arreyCard.push({ newsCard });
  localStorage.setItem('newsCard', JSON.stringify(arreyCard));
}
