import { renderMarkup } from './render-markup';
import { successCallback, failureCallback } from './weather';

export const paginationData = {
  page: 1,
};

export function pagination(e) {
  if (e.target.classList.contains('pagination__next')) {
    prevBtnRef.disabled = false;
    paginationData.page += 1;
    if (paginationData.page > 1) {
      paginationData.start =
        (paginationData.page - 1) * paginationData.newsPerPage - 1;
      paginationData.end = paginationData.start + paginationData.newsPerPage;
    } else {
      paginationData.start =
        (paginationData.page - 1) * paginationData.newsPerPage;
      paginationData.end = paginationData.start + paginationData.newsPerPage;
    }
    if (paginationData.end > paginationData.originalArray.length) {
      paginationData.end = paginationData.originalArray.length;
    }
    renderMarkup(
      paginationData.originalArray.slice(
        paginationData.start,
        paginationData.end
      )
    );
    if (paginationData.page === paginationData.totalPage) {
      nextBtnRef.disabled = true;
    }
    smoothScrollUp();
    return;
  }
  if (e.target.classList.contains('pagination__prev')) {
    paginationData.page -= 1;
    if (paginationData.page === 1) {
      paginationData.start =
        (paginationData.page - 1) * paginationData.newsPerPage;
      paginationData.end =
        paginationData.start + paginationData.newsPerPage - 1;
    } else {
      paginationData.start =
        (paginationData.page - 1) * paginationData.newsPerPage;
      paginationData.end = paginationData.start + paginationData.newsPerPage;
    }
    if (paginationData.start < 1) {
      prevBtnRef.disabled = true;
      paginationData.start = 0;
    }
    if (paginationData.page == paginationData.totalPage - 1) {
      paginationData.start -= 1;
      paginationData.end -= 1;
    }
    nextBtnRef.disabled = false;
    renderMarkup(
      paginationData.originalArray.slice(
        paginationData.start,
        paginationData.end
      )
    );
    smoothScrollUp();
  }
}

export function renderPaginationBtn() {
  let markup = '';
  for (let index = 1; index <= paginationData.totalPage; index += 1) {
    markup += `<button type="button" class="pagination__btn pagination__num-btn" data-page="${index}">${index}</button>`;
  }
  paginationRef.children[1].innerHTML = markup;
}

export function paginationNumericBtn(e) {
  
}

const prevBtnRef = document.querySelector('.pagination__prev');
const nextBtnRef = document.querySelector('.pagination__next');
const paginationRef = document.querySelector('.pagination__container');

const paginationNumericBtnContainerRef = document.querySelector(
  '.pagination__numeric-btn-container'
);

const paginEventListener = () => {
  paginationRef.addEventListener('click', pagination);
};
const paginNumericBtnEventListener = () => {
  paginationNumericBtnContainerRef.addEventListener(
    'click',
    paginationNumericBtn
  );
};

if (prevBtnRef) prevBtnRef.disabled = true;
if (
  window.location.pathname === '/index.html' ||
  window.location.pathname === '/NewsApp/' ||
  window.location.pathname === '/' ||
  window.location.pathname === '/NewsApp/index.html'
) {
  paginEventListener();
  paginNumericBtnEventListener();
}
function smoothScrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
