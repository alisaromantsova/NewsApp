var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var n=a("drJjU");const o=document.querySelector(".list-news"),d=JSON.parse(localStorage.getItem("newsCard"));o.addEventListener("click",(function(e){if("SPAN"!==e.target.tagName&&"BUTTON"!==e.target.tagName&&e.target.classList.contains("news__icon")&&e.target.hasAttribute("d"))return;const t=JSON.parse(localStorage.getItem("newsCard"))?[...JSON.parse(localStorage.getItem("newsCard"))]:[];let r=null;"BUTTON"===e.target.tagName?r=e.target.parentNode.parentNode.querySelector(".news__link"):"SPAN"===e.target.tagName||"svg"===e.target.tagName?r=e.target.parentNode.parentNode.parentNode.querySelector(".news__link"):"path"===e.target.tagName?r=e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".news__link"):"use"===e.target.tagName&&(r=e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".news__link"));if(0!==t.length){localStorage.removeItem("newsCard");const e=[];return t.map((t=>{t.newsCard.includes(r)||t&&e.push({...t})})),void(0!==e.length?(localStorage.setItem("newsCard",JSON.stringify(e)),o.innerHTML=null,o.insertAdjacentHTML("afterbegin",e.map((e=>`<div class="new__card">${e.newsCard}</div>`)).join(""))):o.innerHTML=(0,n.renderEmptyMarkup)())}})),d||(o.innerHTML=(0,n.renderEmptyMarkup)()),d&&o.insertAdjacentHTML("afterbegin",d.map((e=>`<div class="new__card">${e.newsCard}</div>`)).join("")),a("lY1JX"),a("8AWxP"),a("iSPhc"),a("8FnLx");
//# sourceMappingURL=favorite.cf5ae395.js.map
