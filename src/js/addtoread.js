const linkReadMoreNews = document.querySelector('.news');
linkReadMoreNews.addEventListener('click', readMoreClick);

function readMoreClick(event) {
  const arreyReadCard = JSON.parse(localStorage.getItem('newsReadMore'))
    ? [...JSON.parse(localStorage.getItem('newsReadMore'))]
    : [];

  if (
    event.target.tagName !== 'A'
  ) {
    return;
  }

  const linkNewReadCard = event.target
  .closest('.new__card')
  .querySelector('.news__link');

  let newsReadMoreCard = event.target.closest('.new__card').innerHTML;
  if (arreyReadCard.length !== 0) {
  arreyReadCard.map((item) => {
    
  newsReadMoreCard = item.newsReadMoreCard.includes(linkNewReadCard) ? 
   0 : event.target.closest('.new__card').innerHTML;
   console.log(newsReadMoreCard);
  //  return newsReadMoreCard
  })
  }
  // newsReadMoreCard = event.target.closest('.new__card').innerHTML;
//     let linkMore = [];
//    if (arreyReadCard.length !== 0) {
   
//     arreyReadCard.map(item => {
//       if (item.newsReadMoreCard.includes(linkNewReadCard)) {
//           return;
//  }
//  else {
//   linkMore.push({ newsReadMoreCard });
//  }  
//   })
// linkMore = [];
  
//    } 
//    if (linkMore.length === 0) {
//     arreyReadCard.push({ newsReadMoreCard });
//     localStorage.setItem('newsReadMore', JSON.stringify(arreyReadCard));
//     return
//    }   
//    localStorage.setItem('newsReadMore', JSON.stringify(linkMore));
if (newsReadMoreCard !== 0) {
  arreyReadCard.push({ newsReadMoreCard });
  localStorage.setItem('newsReadMore', JSON.stringify(arreyReadCard));
}  
 }
