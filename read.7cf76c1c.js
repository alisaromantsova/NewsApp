var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){n[e]=r},e.parcelRequired7c6=t),t("5o68A"),t("lY1JX"),t("8AWxP"),t("iSPhc"),t("8FnLx"),t("9ARzK");document.querySelector(".news").addEventListener("click",(function(e){const r=JSON.parse(localStorage.getItem("newsReadMore"))?[...JSON.parse(localStorage.getItem("newsReadMore"))]:[];if("A"!==e.target.tagName)return;const n=e.target.closest(".new__card").querySelector(".news__link");let t=e.target.closest(".new__card").innerHTML;0!==r.length&&r.map((e=>{if(e.newsReadMoreCard.includes(n))return t=null,!1}));t&&(r.push({newsReadMoreCard:t}),localStorage.setItem("newsReadMore",JSON.stringify(r)))})),t("jfAPC"),t("e86eX");
//# sourceMappingURL=read.7cf76c1c.js.map
