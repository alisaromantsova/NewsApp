function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),o.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}})),o("lY1JX"),o("8AWxP"),o("iSPhc"),o("8FnLx");var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){var r=u.default(e,t,"get");return l.default(e,r)};var u=i(o("fExtF")),l=i(o("iaRLo"));function i(e){return e&&e.__esModule?e:{default:e}}var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t,r){s.default(e,t),t.set(e,r)};var d,s=(d=o("7K24o"))&&d.__esModule?d:{default:d};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,r){var n=p.default(e,t,"set");return v.default(e,n,r),r};var p=_(o("fExtF")),v=_(o("3LGG3"));function _(e){return e&&e.__esModule?e:{default:e}}var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r};var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t){b.default(e,t),t.add(e)};var b=function(e){return e&&e.__esModule?e:{default:e}}(o("7K24o"));var w={};Object.defineProperty(w,"__esModule",{value:!0}),w.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e},o("5o68A");var g=new WeakMap,x=new WeakSet;class M{get selectedCards(){return e(a)(this,g)}constructor(){e(y)(this,x),e(f)(this,g,{writable:!0,value:[]}),e(w)(this,"add",(t=>{e(a)(this,g).push(t),localStorage.setItem(M.KEY,JSON.stringify(e(a)(this,g)))})),e(h)(this,x,O).call(this)}}function O(){try{e(c)(this,g,JSON.parse(localStorage.getItem(M.KEY))||[])}catch(t){e(c)(this,g,[])}}e(w)(M,"KEY","SELECTED_CARD");new M;o("drJjU"),o("5o68A");
//# sourceMappingURL=read.7e71a40c.js.map
