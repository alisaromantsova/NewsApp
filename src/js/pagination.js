import { renderMarkup } from './render-markup';
import { successCallback, failureCallback } from './weather';
import { inputValueData } from './search-field';
import { categoryValue } from './navigation';

export const paginationData = {
  page: 1,
};

export function pagination(e) {
  if (e.target.classList.contains('pagination__next')) {
    prevBtnRef.disabled = false;
    paginationData.page += 1;
    addActiveBtn();
    if (paginationData.page > 1) {
      if (!categoryValue.value && !inputValueData.value) {
        paginationData.start =
          (paginationData.page - 1) * paginationData.newsPerPage - 1;
        paginationData.end = paginationData.start + paginationData.newsPerPage;
      } else {
        paginationData.start =
          (paginationData.page - 1) * paginationData.newsPerPage;
        paginationData.end = paginationData.start + paginationData.newsPerPage;
      }
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
    addActiveBtn();
    if (paginationData.page === 1) {
      if (!categoryValue.value && !inputValueData.value) {
        paginationData.start =
          (paginationData.page - 1) * paginationData.newsPerPage;
        paginationData.end =
          paginationData.start + paginationData.newsPerPage - 1;
        prevBtnRef.disabled = true;
        navigator.geolocation.getCurrentPosition(
          successCallback,
          failureCallback
        );
      } else {
        paginationData.start =
          (paginationData.page - 1) * paginationData.newsPerPage;
        paginationData.end = paginationData.start + paginationData.newsPerPage;
        prevBtnRef.disabled = true;
      }
    } else {
      paginationData.start =
        (paginationData.page - 1) * paginationData.newsPerPage - 1;
      paginationData.end = paginationData.start + paginationData.newsPerPage;
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
  if (paginationData.page === paginationData.totalPage) {
    prevBtnRef.disabled = true;
    nextBtnRef.disabled = true;
  }
  if (paginationData.page === 1) prevBtnRef.disabled = true;

  let markup = '';
  for (let index = 1; index <= paginationData.totalPage; index += 1) {
    markup += `<button type="button" class="pagination__btn pagination__num-btn" data-page-${index}>${index}</button>`;
  }
  paginationRef.children[1].innerHTML = markup;
  paginationNumericBtnContainerRef.children[0].classList.add('active-btn');
}

export function paginationNumericBtn(e) {
  const paginationPushedBtn = parseInt(
    paginationNumericBtnContainerRef.querySelector(
      `[data-page-${e.target.textContent}]`
    ).textContent
  );
  paginationData.page = paginationPushedBtn;
  switch (true) {
    case paginationPushedBtn === 1:
      prevBtnRef.disabled = true;
      nextBtnRef.disabled = false;
      if (!categoryValue.value && !inputValueData.value) {
        paginationData.start =
          (paginationPushedBtn - 1) * paginationData.newsPerPage;
        paginationData.end =
          paginationData.start + paginationData.newsPerPage - 1;
        navigator.geolocation.getCurrentPosition(
          successCallback,
          failureCallback
        );
      } else {
        paginationData.start =
          (paginationPushedBtn - 1) * paginationData.newsPerPage;
        paginationData.end = paginationData.start + paginationData.newsPerPage;
      }
      renderMarkup(
        paginationData.originalArray.slice(
          paginationData.start,
          paginationData.end
        )
      );
      addActiveBtn();
      smoothScrollUp();
      break;
    case paginationPushedBtn === paginationData.totalPage:
      nextBtnRef.disabled = true;
      prevBtnRef.disabled = false;
      if (!categoryValue.value && !inputValueData.value) {
        paginationData.start =
          (paginationPushedBtn - 1) * paginationData.newsPerPage - 1;
        paginationData.end = paginationData.originalArray.length;
      } else {
        paginationData.start =
          (paginationPushedBtn - 1) * paginationData.newsPerPage;
        paginationData.end = paginationData.originalArray.length;
      }
      renderMarkup(
        paginationData.originalArray.slice(
          paginationData.start,
          paginationData.end
        )
      );
      addActiveBtn();
      smoothScrollUp();

      break;
    default:
      nextBtnRef.disabled = false;
      prevBtnRef.disabled = false;
      if (!categoryValue.value && !inputValueData.value) {
        paginationData.start =
          (paginationPushedBtn - 1) * paginationData.newsPerPage - 1;
        paginationData.end =
          (paginationPushedBtn - 1) * paginationData.newsPerPage +
          paginationData.newsPerPage -
          1;
      } else {
        paginationData.start =
          (paginationPushedBtn - 1) * paginationData.newsPerPage;
        paginationData.end =
          (paginationPushedBtn - 1) * paginationData.newsPerPage +
          paginationData.newsPerPage;
      }

      renderMarkup(
        paginationData.originalArray.slice(
          paginationData.start,
          paginationData.end
        )
      );
      addActiveBtn();
      smoothScrollUp();

      break;
  }
}

function smoothScrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export function addActiveBtn() {
  paginationNumericBtnContainerRef
    .querySelector('.active-btn')
    .classList.remove('active-btn');
  paginationNumericBtnContainerRef
    .querySelectorAll('.pagination__num-btn')
    .forEach(addActive);

  function addActive(item) {
    if (item.textContent == paginationData.page) {
      item.classList.add('active-btn');
    }
  }
}

export const prevBtnRef = document.querySelector('.pagination__prev');
export const nextBtnRef = document.querySelector('.pagination__next');
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
