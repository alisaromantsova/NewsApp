!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a("j1lrD");var o=a("kjZFx"),s=a("dDDEV"),i=a("8nrFW");"/index.html"!==window.location.pathname&&"/NewsApp/"!==window.location.pathname&&"/"!==window.location.pathname&&"/NewsApp/index.html"!==window.location.pathname||document.querySelector(".news").addEventListener("click",l);document.querySelector(".news");function l(t){var r=JSON.parse(localStorage.getItem("newsCard"))?e(i)(JSON.parse(localStorage.getItem("newsCard"))):[];if("SPAN"===t.target.tagName||"BUTTON"===t.target.tagName||"svg"===t.target.tagName||"path"===t.target.tagName||"use"===t.target.tagName){var n=t.target.closest(".new__card").innerHTML,a=t.target.closest(".new__card").querySelector(".news__link");if(!n.includes("news__addbtn is-hidden")){localStorage.removeItem("newsCard");var o=[];return r.map((function(t){t.newsCard.includes(a)||t&&o.push(e(s)({},t))})),void(0!==o.length&&localStorage.setItem("newsCard",JSON.stringify(o)))}r.push({newsCard:n}),localStorage.setItem("newsCard",JSON.stringify(r))}}var c=a("lyUNr");c=a("lyUNr");var d=document.querySelector(".container__read");d.addEventListener("click",(function(e){l(e)}));var u=JSON.parse(localStorage.getItem("newsReadMore")),g=null;u?(g=function(e){newsArraySorted=e.sort((function(e,t){return e.currentDate.localeCompare(t.currentDate)}));for(var t=[],r=0,n=0;n<newsArraySorted.length;n+=1)0!==t.length&&r==newsArraySorted[n].currentDate?t[t.length-1].push(newsArraySorted[n]):(r=newsArraySorted[n].currentDate,t.push([newsArraySorted[n]]));return t}(u),g.map((function(e){var t=e.map((function(e){return'<li class="new__card">'.concat(e.newsReadMoreCard,"</li>")})).join("");d.insertAdjacentHTML("afterbegin","<div class='accardeon'><p class='read-date'>".concat(e[0].currentDate.split("/").reverse().join("/"),"</p><ul class='list-news'>").concat(t,"</ul></div>"))})),(0,c.setEventAfterRender)(),(0,c.setEventAfterRead)(),d.addEventListener("click",(function(e){if(e.target.classList.contains(".read-date"))return;e.target.nextSibling.classList.toggle("is-hidden")}))):d.innerHTML=(0,o.renderEmptyMarkup)(),a("7VSht"),a("gsgVr"),a("2tROk"),a("4Y46F"),a("cs7FV"),a("liRKZ"),a("6GrKL");for(var w=document.getElementsByClassName("container-box"),f=0;f<w.length;f++)w[f].addEventListener("click",(function(){this.classList.toggle("active")}))}();
//# sourceMappingURL=read.27657124.js.map
