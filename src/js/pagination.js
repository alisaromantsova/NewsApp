import { renderMarkup } from './render-markup';
import { successCallback, failureCallback } from './weather';

export const paginationData = {
  page: 1,
};

export function pagination(e) {
  if (e.target.classList.contains('next')) {
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
  if (e.target.classList.contains('prev')) {
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

const prevBtnRef = document.querySelector('.prev');
const nextBtnRef = document.querySelector('.next');
const paginationRefs = document.querySelector('.pagination');

const paginEventListener = () => {
  paginationRefs.addEventListener('click', pagination);
};

if (prevBtnRef) prevBtnRef.disabled = true;
if (
  window.location.pathname === '/index.html' ||
  window.location.pathname === '/NewsApp/' ||
  window.location.pathname === '/' ||
  window.location.pathname === '/NewsApp/index.html'
) {
  paginEventListener();
}
function smoothScrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export function renderPaginationBtn() {
  let markup = '';
  for (let index = 1; index <= paginationData.totalPage; index += 1) {
    markup += `<button type="button" class="pag-btn pag-btn-${index}">${index}</button>`;
  }
  paginationRefs.children[1].innerHTML = markup;
}
