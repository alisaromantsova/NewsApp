!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r("j1lrD");var o=r("dDDEV"),l=r("8nrFW"),i=r("kjZFx"),s=(l=r("8nrFW"),document.querySelector(".news"));function c(t){var n=JSON.parse(localStorage.getItem("newsReadMore"))?e(l)(JSON.parse(localStorage.getItem("newsReadMore"))):[];if("A"===t.target.tagName){var a=t.target.closest(".new__card").querySelector(".news__link"),r=t.target.closest(".new__card").innerHTML;if(0!==n.length&&n.map((function(e){if(e.newsReadMoreCard.includes(a))return r=null,!1})),r){var o=new Date,i=String(o.getDate()).padStart(2,"0"),s=String(o.getMonth()+1).padStart(2,"0"),c=o.getFullYear(),d="".concat(i,"/").concat(s,"/").concat(c);n.push({newsReadMoreCard:r,currentDate:d}),localStorage.setItem("newsReadMore",JSON.stringify(n))}}}"/index.html"!==window.location.pathname&&"/NewsApp/"!==window.location.pathname&&"/"!==window.location.pathname&&"/NewsApp/index.html"!==window.location.pathname||s.addEventListener("click",c);var d=r("lyUNr"),g=(JSON.parse(localStorage.getItem("isRead")),document.querySelector(".list-news")),u=JSON.parse(localStorage.getItem("newsCard"));g.addEventListener("click",(function(t){if(c(t),"SPAN"!==t.target.tagName&&"BUTTON"!==t.target.tagName&&"svg"!==t.target.tagName&&"path"!==t.target.tagName&&"use"!==t.target.tagName)return;var n=JSON.parse(localStorage.getItem("newsCard"))?e(l)(JSON.parse(localStorage.getItem("newsCard"))):[],a=t.target.closest(".new__card").querySelector(".news__link");if(0!==n.length){localStorage.removeItem("newsCard");var r=[];return n.map((function(t){t.newsCard.includes(a)||t&&r.push(e(o)({},t))})),void(0!==r.length?(localStorage.setItem("newsCard",JSON.stringify(r)),g.innerHTML=null,g.insertAdjacentHTML("afterbegin",r.map((function(e){return'<li class="new__card">'.concat(e.newsCard,"</li>")})).join("")),(0,d.setEventAfterRead)()):g.innerHTML=(0,i.renderEmptyMarkup)())}})),u||(g.innerHTML=(0,i.renderEmptyMarkup)()),u&&g.insertAdjacentHTML("afterbegin",u.map((function(e){return'<li class="new__card">'.concat(e.newsCard,"</li>")})).join("")),(0,d.setEventAfterRead)(),r("gsgVr"),r("2tROk"),r("4Y46F"),r("cs7FV"),r("liRKZ"),r("6GrKL")}();
//# sourceMappingURL=favorite.12eea2a4.js.map
