// збереження в локалсторедж по кліку на add

const divClassNews = document.querySelector('.news');
divClassNews.addEventListener('click', onAddToFavoriteClick);

function onAddToFavoriteClick(event) {
  const arreyCard = JSON.parse(localStorage.getItem('newsCard'))
    ? [...JSON.parse(localStorage.getItem('newsCard'))]
    : [];
  if (
    event.target.tagName !== 'SPAN' &&
    event.target.tagName !== 'BUTTON' &&
    event.target.classList.contains('news__icon') &&
    event.target.hasAttribute('d')
  ) {
    return;
  }

  let newsCard = null;
  let linkNewCArd = null;

  switch (event.target.tagName) {
    case 'BUTTON':
      newsCard = event.target.parentNode.parentNode.innerHTML;
      linkNewCArd =
        event.target.parentNode.parentNode.querySelector('.news__link');
      break;
    case 'SPAN':
      newsCard = event.target.parentNode.parentNode.parentNode.innerHTML;
      linkNewCArd =
        event.target.parentNode.parentNode.parentNode.querySelector(
          '.news__link'
        );
      break;
    case 'svg':
      newsCard = event.target.parentNode.parentNode.parentNode.innerHTML;
      linkNewCArd =
        event.target.parentNode.parentNode.parentNode.querySelector(
          '.news__link'
        );
      break;
    case 'path':
      newsCard =
        event.target.parentNode.parentNode.parentNode.parentNode.parentNode
          .parentNode.parentNode.parentNode.parentNode.innerHTML;
      linkNewCArd =
        event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(
          '.news__link'
        );
      break;
    case 'use':
      newsCard =
        event.target.parentNode.parentNode.parentNode.parentNode.innerHTML;
      linkNewCArd =
        event.target.parentNode.parentNode.parentNode.parentNode.querySelector(
          '.news__link'
        );
      break;
  }

  if (
    event.target.classList.contains('news__removebtn') ||
    event.target.parentNode.classList.contains('news__removebtn') ||
    event.target.parentNode.parentNode.classList.contains('news__removebtn') ||
    event.target.parentNode.parentNode.classList.contains('news__removebtn')
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
