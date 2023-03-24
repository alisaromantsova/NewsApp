const favoriteList = document.querySelector('.list-news');

function renderMarkup() {
  const cards = JSON.parse(localStorage.getItem('newsCard'));
  if (cards) {
    favoriteList.insertAdjacentHTML(
      'afterend',
      cards.map(card => card.newsCard)
    );
  }
}

renderMarkup();
