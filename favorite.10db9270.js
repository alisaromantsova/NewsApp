var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var a={id:e,exports:{}};return r[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequired7c6=n);var a=n("drJjU");const i=document.querySelector(".list-news"),o=JSON.parse(localStorage.getItem("newsCard"));i.addEventListener("click",(function(e){if("SPAN"!==e.target.tagName&&"BUTTON"!==e.target.tagName&&"svg"!==e.target.tagName&&"path"!==e.target.tagName&&"use"!==e.target.tagName)return;const r=JSON.parse(localStorage.getItem("newsCard"))?[...JSON.parse(localStorage.getItem("newsCard"))]:[],t=e.target.closest(".new__card").querySelector(".news__link");if(0!==r.length){localStorage.removeItem("newsCard");const e=[];return r.map((r=>{r.newsCard.includes(t)||r&&e.push({...r})})),void(0!==e.length?(localStorage.setItem("newsCard",JSON.stringify(e)),i.innerHTML=null,i.insertAdjacentHTML("afterbegin",e.map((e=>`<div class="new__card">${e.newsCard}</div>`)).join(""))):i.innerHTML=(0,a.renderEmptyMarkup)())}})),o||(i.innerHTML=(0,a.renderEmptyMarkup)()),o&&i.insertAdjacentHTML("afterbegin",o.map((e=>`<div class="new__card">${e.newsCard}</div>`)).join("")),n("lY1JX"),n("8AWxP"),n("iSPhc"),n("8FnLx"),n("jfAPC"),n("e86eX");
//# sourceMappingURL=favorite.10db9270.js.map