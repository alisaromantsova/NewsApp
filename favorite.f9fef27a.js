!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a);var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l.default(e,t,r[t])}))}return e};var d,l=(d=a("hKHmD"))&&d.__esModule?d:{default:d};var i=a("8nrFW"),c=a("kjZFx"),s=document.querySelector(".list-news"),u=JSON.parse(localStorage.getItem("newsCard"));s.addEventListener("click",(function(t){if("SPAN"!==t.target.tagName&&"BUTTON"!==t.target.tagName&&"svg"!==t.target.tagName&&"path"!==t.target.tagName&&"use"!==t.target.tagName)return;var r=JSON.parse(localStorage.getItem("newsCard"))?e(i)(JSON.parse(localStorage.getItem("newsCard"))):[],n=null;switch(t.target.tagName){case"BUTTON":n=t.target.parentNode.parentNode.querySelector(".news__link");break;case"SPAN":case"svg":n=t.target.parentNode.parentNode.parentNode.querySelector(".news__link");break;case"path":n=t.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".news__link");break;case"use":n=t.target.parentNode.parentNode.parentNode.parentNode.querySelector(".news__link")}if(0!==r.length){localStorage.removeItem("newsCard");var a=[];return r.map((function(t){t.newsCard.includes(n)||t&&a.push(e(o)({},t))})),void(0!==a.length?(localStorage.setItem("newsCard",JSON.stringify(a)),s.innerHTML=null,s.insertAdjacentHTML("afterbegin",a.map((function(e){return'<div class="new__card">'.concat(e.newsCard,"</div>")})).join(""))):s.innerHTML=(0,c.renderEmptyMarkup)())}})),u||(s.innerHTML=(0,c.renderEmptyMarkup)()),u&&s.insertAdjacentHTML("afterbegin",u.map((function(e){return'<div class="new__card">'.concat(e.newsCard,"</div>")})).join("")),a("gsgVr"),a("2tROk"),a("4Y46F"),a("cs7FV"),a("liRKZ"),a("6GrKL")}();
//# sourceMappingURL=favorite.f9fef27a.js.map
