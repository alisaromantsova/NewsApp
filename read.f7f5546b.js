var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},e.parcelRequired7c6=t),t("lY1JX"),t("8AWxP"),t("iSPhc"),t("8FnLx");document.querySelector(".list-news").addEventListener("click",(function(e){const r=e.target.closest(".new__link");if(!r)return;r.parentNode.parentNode.parentNode.classList.add("opacity"),function(e){const r=new Date,n={year:"numeric",month:"numeric",day:"numeric"},t=r.toLocaleDateString([],n).replaceAll(".","/"),i={uri:e.nextElementSibling.textContent,date:e.parentNode.firstElementChild.innerText,img:e.parentNode.parentNode.childNodes[1].children[0].currentSrc,title:e.parentNode.parentNode.childNodes[3].children[0].innerText,description:e.parentNode.parentNode.childNodes[3].children[1].innerText,link:e.parentNode.children[1].href,category:e.parentNode.parentNode.childNodes[1].children[1].innerHTML,dayRead:t};for(let e=0;e<o.length;e+=1)if(o[e].uri===i.uri)return;o.push(i),localStorage.setItem("readMoreLocal",JSON.stringify(o))}(r)}));let o=[];!function(){if(null===JSON.parse(localStorage.getItem("readMoreLocal")))return;readMoreID=JSON.parse(localStorage.getItem("readMoreLocal"))}(),t("drJjU"),t("5o68A"),t("jfAPC"),t("e86eX");
//# sourceMappingURL=read.f7f5546b.js.map