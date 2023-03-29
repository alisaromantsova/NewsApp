

export function setEventAfterRender() {
  const card = document.querySelectorAll('.new__card');

  const addBtns = document.querySelectorAll('.news__addbtn');
  const removeBtns = document.querySelectorAll('.news__removebtn');

  addBtns.forEach((addBtn, i) => {
    addBtn.addEventListener('click', () => {
      const removeBtn = removeBtns[i];
      addBtn.classList.add('is-hidden');
      removeBtn.classList.remove('is-hidden');
    });
  });

  removeBtns.forEach((removeBtn, i) => {
    removeBtn.addEventListener('click', () => {
      const addBtn = addBtns[i];
      addBtn.classList.remove('is-hidden');
      removeBtn.classList.add('is-hidden');
    });
  });
}

export function createThreePoints(str) {
  if (str.length > 130) {
    return str.slice(0, 130) + '...';
  }
  return str;
}

export function setEventAfterRead() {
  const cards = Array.from(document.querySelectorAll('.new__card'));
  const newsLinks = Array.from(document.querySelectorAll('.news__link'));
  const readsMarks = Array.from(document.querySelectorAll('.is-read'));
  let localStorageKey = 'isRead';

  newsLinks.forEach((newsLink, i) => {
    newsLink.addEventListener('click', () => {
      readsMarks[i].classList.remove('is-hidden');
      cards[i].classList.add('overlay');
      const isReadData =
        JSON.parse(localStorage.getItem(localStorageKey)) || {};
      isReadData[newsLink.getAttribute('href')] = true;
      localStorage.setItem(localStorageKey, JSON.stringify(isReadData));
    });
    const storedData = JSON.parse(localStorage.getItem(localStorageKey));
    if (storedData && storedData[newsLink.getAttribute('href')]) {
      readsMarks[i].classList.remove('is-hidden');
      cards[i].classList.add('overlay');
    }
  });
}
