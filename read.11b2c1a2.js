!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r("j1lrD");var o=r("kjZFx"),l=r("dDDEV"),d=r("8nrFW");"/index.html"!==window.location.pathname&&"/NewsApp/"!==window.location.pathname&&"/"!==window.location.pathname&&"/NewsApp/index.html"!==window.location.pathname||document.querySelector(".news").addEventListener("click",c);document.querySelector(".news");function c(t){var n=JSON.parse(localStorage.getItem("newsCard"))?e(d)(JSON.parse(localStorage.getItem("newsCard"))):[];if("SPAN"===t.target.tagName||"BUTTON"===t.target.tagName||"svg"===t.target.tagName||"path"===t.target.tagName||"use"===t.target.tagName){var a=t.target.closest(".new__card").innerHTML,r=t.target.closest(".new__card").querySelector(".news__link");if(!a.includes("news__addbtn is-hidden")){localStorage.removeItem("newsCard");var o=[];return n.map((function(t){t.newsCard.includes(r)||t&&o.push(e(l)({},t))})),void(0!==o.length&&localStorage.setItem("newsCard",JSON.stringify(o)))}n.push({newsCard:a}),localStorage.setItem("newsCard",JSON.stringify(n))}}var s,u,g,w,f,p=r("lyUNr"),m=(p=r("lyUNr"),document.querySelector(".label")),v=document.querySelector(".content"),S=JSON.parse(localStorage.getItem("newsReadMore"));v.addEventListener("click",(function(e){c(e)})),S||(v.innerHTML=(0,o.renderEmptyMarkup)()),S&&(v.innerHTML=S.map((function(e){return'<div class="new__card">'.concat(e.newsReadMoreCard,"</div>")})).join("")),s=new Date(Date.now()),u=s.getDate(),g=String(s.getMonth()+1).padStart(2,"0"),w=s.getFullYear(),f="".concat(u,".").concat(g,".").concat(w),m.innerHTML=f,(0,p.setEventAfterRender)(),(0,p.setEventAfterRead)(),r("7VSht"),r("gsgVr"),r("2tROk"),r("4Y46F"),r("cs7FV"),r("liRKZ"),r("6GrKL");var N=document.getElementsByClassName("container-box");for(i=0;i<N.length;i++)N[i].addEventListener("click",(function(){this.classList.toggle("active")}))}();
//# sourceMappingURL=read.11b2c1a2.js.map
