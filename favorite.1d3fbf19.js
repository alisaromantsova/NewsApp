var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("04jNI");var r=a("drJjU");const o=document.querySelector(".news");function s(e){const t=JSON.parse(localStorage.getItem("newsReadMore"))?[...JSON.parse(localStorage.getItem("newsReadMore"))]:[];if("A"!==e.target.tagName)return;const n=e.target.closest(".new__card").querySelector(".news__link");let a=e.target.closest(".new__card").innerHTML;0!==t.length&&t.map((e=>{if(e.newsReadMoreCard.includes(n))return a=null,!1})),a&&(t.push({newsReadMoreCard:a}),localStorage.setItem("newsReadMore",JSON.stringify(t)))}"/index.html"!==window.location.pathname&&"/NewsApp/"!==window.location.pathname&&"/"!==window.location.pathname&&"/NewsApp/index.html"!==window.location.pathname||o.addEventListener("click",s);var l=a("1n11p");const d=document.querySelector(".list-news"),i=JSON.parse(localStorage.getItem("newsCard"));d.addEventListener("click",(function(e){if(s(e),"SPAN"!==e.target.tagName&&"BUTTON"!==e.target.tagName&&"svg"!==e.target.tagName&&"path"!==e.target.tagName&&"use"!==e.target.tagName)return;const t=JSON.parse(localStorage.getItem("newsCard"))?[...JSON.parse(localStorage.getItem("newsCard"))]:[],n=e.target.closest(".new__card").querySelector(".news__link");if(0!==t.length){localStorage.removeItem("newsCard");const e=[];return t.map((t=>{t.newsCard.includes(n)||t&&e.push({...t})})),void(0!==e.length?(localStorage.setItem("newsCard",JSON.stringify(e)),d.innerHTML=null,d.insertAdjacentHTML("afterbegin",e.map((e=>`<div class="new__card">${e.newsCard}</div>`)).join(""))):d.innerHTML=(0,r.renderEmptyMarkup)())}})),i||(d.innerHTML=(0,r.renderEmptyMarkup)()),console.log(i,"sdsad"),i&&d.insertAdjacentHTML("afterbegin",i.map((e=>`<div class="new__card">${e.newsCard}</div>`)).join("")),(0,l.setEventAfterRead)(),a("lY1JX"),a("8AWxP"),a("iSPhc"),a("8FnLx"),a("jfAPC"),a("e86eX");
//# sourceMappingURL=favorite.1d3fbf19.js.map
