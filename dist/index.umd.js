parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"xFa0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={enable:!0};exports.default=e;
},{}],"W01G":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../global"));function t(e){return e&&e.__esModule?e:{default:e}}var r=function(t){e.default.enable=t.enable};exports.default=r;
},{"../global":"xFa0"}],"9SzV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("../global"));function r(e){return e&&e.__esModule?e:{default:e}}var n={debug:function(){if(e.default.enable){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];console.debug(n)}},info:function(){if(e.default.enable){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];console.info(n)}},log:function(){if(e.default.enable){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];console.log(n)}},warn:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];console.warn(r)},error:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];console.error(r)}};exports.default=n;
},{"../global":"xFa0"}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./init")),r=t(require("./logger"));function t(e){return e&&e.__esModule?e:{default:e}}var u={init:e.default,debug:r.default.debug,info:r.default.info,log:r.default.log,warn:r.default.warn,error:r.default.error};exports.default=u;
},{"./init":"W01G","./logger":"9SzV"}]},{},["Focm"], "JsLogger")
//# sourceMappingURL=/index.umd.map