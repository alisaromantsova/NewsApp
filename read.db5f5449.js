var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("04jNI");var a=r("drJjU");if("/index.html"===window.location.pathname||"/NewsApp/"===window.location.pathname||"/"===window.location.pathname||"/NewsApp/index.html"===window.location.pathname){document.querySelector(".news").addEventListener("click",o)}document.querySelector(".news");function o(e){const t=JSON.parse(localStorage.getItem("newsCard"))?[...JSON.parse(localStorage.getItem("newsCard"))]:[];if("SPAN"!==e.target.tagName&&"BUTTON"!==e.target.tagName&&"svg"!==e.target.tagName&&"path"!==e.target.tagName&&"use"!==e.target.tagName)return;const n=e.target.closest(".new__card").innerHTML,r=e.target.closest(".new__card").querySelector(".news__link");if(!n.includes("news__addbtn is-hidden")){localStorage.removeItem("newsCard");const e=[];return t.map((t=>{t.newsCard.includes(r)||t&&e.push({...t})})),void(0!==e.length&&localStorage.setItem("newsCard",JSON.stringify(e)))}t.push({newsCard:n}),localStorage.setItem("newsCard",JSON.stringify(t))}r("1n11p"),r("1n11p");const s=document.querySelector(".container__read");s.addEventListener("click",(function(e){o(e)}));let i=JSON.parse(localStorage.getItem("newsReadMore")),l=null;i?(l=function(e){newsArraySorted=e.sort(((e,t)=>e.currentDate.localeCompare(t.currentDate)));let t=[],n=0;for(let e=0;e<newsArraySorted.length;e+=1)0!==t.length&&n==newsArraySorted[e].currentDate?t[t.length-1].push(newsArraySorted[e]):(n=newsArraySorted[e].currentDate,t.push([newsArraySorted[e]]));return t}(i),l.map((e=>{const t=e.map((e=>`<li class="new__card">${e.newsReadMoreCard}</li>`)).join("");s.insertAdjacentHTML("afterbegin",`<div class='accardeon'><p class='read-date'>${e[0].currentDate.split("/").reverse().join("/")}</p><ul class='list-news'>${t}</ul></div>`)})),s.addEventListener("click",(function(e){if(e.target.classList.contains(".read-date"))return;e.target.nextSibling.classList.toggle("is-hidden")}))):s.innerHTML=(0,a.renderEmptyMarkup)(),r("5o68A"),r("lY1JX"),r("8AWxP"),r("iSPhc"),r("8FnLx"),r("jfAPC"),r("e86eX");const d=document.getElementsByClassName("container-box");for(let e=0;e<d.length;e++)d[e].addEventListener("click",(function(){this.classList.toggle("active")}));
//# sourceMappingURL=read.db5f5449.js.map
