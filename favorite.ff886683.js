!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a("j1lrD");var o=a("dDDEV"),l=a("8nrFW"),i=a("kjZFx"),c=(l=a("8nrFW"),document.querySelector(".news"));function s(t){var n=JSON.parse(localStorage.getItem("newsReadMore"))?e(l)(JSON.parse(localStorage.getItem("newsReadMore"))):[];if("A"===t.target.tagName){var r=t.target.closest(".new__card").querySelector(".news__link"),a=t.target.closest(".new__card").innerHTML;if(0!==n.length&&n.map((function(e){if(e.newsReadMoreCard.includes(r))return a=null,!1})),a){var o=new Date,i=String(o.getDate()).padStart(2,"0"),c=String(o.getMonth()+1).padStart(2,"0"),s=o.getFullYear(),d="".concat(s,"/").concat(c,"/").concat(i);n.push({newsReadMoreCard:a,currentDate:d}),localStorage.setItem("newsReadMore",JSON.stringify(n))}}}"/index.html"!==window.location.pathname&&"/NewsApp/"!==window.location.pathname&&"/"!==window.location.pathname&&"/NewsApp/index.html"!==window.location.pathname||c.addEventListener("click",s);var d=a("lyUNr"),g=document.querySelector(".list-news"),u=JSON.parse(localStorage.getItem("newsCard"));g.addEventListener("click",(function(t){if(s(t),"SPAN"!==t.target.tagName&&"BUTTON"!==t.target.tagName&&"svg"!==t.target.tagName&&"path"!==t.target.tagName&&"use"!==t.target.tagName)return;var n=JSON.parse(localStorage.getItem("newsCard"))?e(l)(JSON.parse(localStorage.getItem("newsCard"))):[],r=t.target.closest(".new__card").querySelector(".news__link");if(0!==n.length){localStorage.removeItem("newsCard");var a=[];return n.map((function(t){t.newsCard.includes(r)||t&&a.push(e(o)({},t))})),void(0!==a.length?(localStorage.setItem("newsCard",JSON.stringify(a)),g.innerHTML=null,g.insertAdjacentHTML("afterbegin",a.map((function(e){return'<li class="new__card">'.concat(e.newsCard,"</li>")})).join("")),(0,d.setEventAfterRead)()):g.innerHTML=(0,i.renderEmptyMarkup)())}})),u||(g.innerHTML=(0,i.renderEmptyMarkup)()),u&&g.insertAdjacentHTML("afterbegin",u.map((function(e){return'<li class="new__card">'.concat(e.newsCard,"</li>")})).join("")),(0,d.setEventAfterRead)(),a("gsgVr"),a("2tROk"),a("4Y46F"),a("cs7FV"),a("liRKZ"),a("6GrKL")}();
//# sourceMappingURL=favorite.ff886683.js.map
