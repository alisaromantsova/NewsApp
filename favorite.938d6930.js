!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequired7c6=a);var o=a("dDDEV"),i=a("8nrFW"),l=a("kjZFx"),d=(i=a("8nrFW"),document.querySelector(".news"));function s(n){var t=JSON.parse(localStorage.getItem("newsReadMore"))?e(i)(JSON.parse(localStorage.getItem("newsReadMore"))):[];if("A"===n.target.tagName){var r=n.target.closest(".new__card").querySelector(".news__link"),a=n.target.closest(".new__card").innerHTML;0!==t.length&&t.map((function(e){if(e.newsReadMoreCard.includes(r))return a=null,!1})),a&&(t.push({newsReadMoreCard:a}),localStorage.setItem("newsReadMore",JSON.stringify(t)))}}"/index.html"!==window.location.pathname&&"/NewsApp/"!==window.location.pathname&&"/"!==window.location.pathname&&"/NewsApp/index.html"!==window.location.pathname||d.addEventListener("click",s);var c=document.querySelector(".list-news"),g=JSON.parse(localStorage.getItem("newsCard"));c.addEventListener("click",(function(n){if(s(n),"SPAN"!==n.target.tagName&&"BUTTON"!==n.target.tagName&&"svg"!==n.target.tagName&&"path"!==n.target.tagName&&"use"!==n.target.tagName)return;var t=JSON.parse(localStorage.getItem("newsCard"))?e(i)(JSON.parse(localStorage.getItem("newsCard"))):[],r=n.target.closest(".new__card").querySelector(".news__link");if(0!==t.length){localStorage.removeItem("newsCard");var a=[];return t.map((function(n){n.newsCard.includes(r)||n&&a.push(e(o)({},n))})),void(0!==a.length?(localStorage.setItem("newsCard",JSON.stringify(a)),c.innerHTML=null,c.insertAdjacentHTML("afterbegin",a.map((function(e){return'<div class="new__card">'.concat(e.newsCard,"</div>")})).join(""))):c.innerHTML=(0,l.renderEmptyMarkup)())}})),g||(c.innerHTML=(0,l.renderEmptyMarkup)()),g&&c.insertAdjacentHTML("afterbegin",g.map((function(e){return'<div class="new__card">'.concat(e.newsCard,"</div>")})).join("")),a("gsgVr"),a("2tROk"),a("4Y46F"),a("cs7FV"),a("liRKZ"),a("6GrKL")}();
//# sourceMappingURL=favorite.938d6930.js.map