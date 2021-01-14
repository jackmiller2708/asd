/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./utils/toast/main.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./utils/toast/main.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n** Component\n*/\n.el-toast {\n  align-items: center;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  margin: 16px;\n  opacity: 1;\n  padding: 0 0 10px;\n  position: fixed;\n  right: 0;\n  transition: opacity 150ms cubic-bezier(0.5, 0, 0.1, 1);\n  width: 350px;\n}\n.el-toast--paused {\n  opacity: 0.9;\n}\n.el-toast button, .el-toast button:focus, .el-toast button:hover {\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  outline: none;\n}\n.el-toast__item:not(:first-child) {\n  margin-top: 8px;\n}\n.el-toast__item:nth-child(n+4) {\n  bottom: 0;\n  max-height: 40px;\n  position: absolute;\n}\n.el-toast__item:nth-child(n+4) .el-toast__icon,\n.el-toast__item:nth-child(n+4) .el-toast__progress,\n.el-toast__item:nth-child(n+4) .el-toast__description,\n.el-toast__item:nth-child(n+4) .el-toast__action {\n  opacity: 0;\n}\n.el-toast__item:nth-child(n+6) {\n  opacity: 0;\n  transform: translateY(0) scale(0.85);\n  z-index: 1970;\n}\n.el-toast__item:nth-child(4) {\n  background-color: #595959;\n  transform: translateY(-4px) scale(0.95);\n  z-index: 1990;\n}\n.el-toast__item:nth-child(5) {\n  background-color: #767676;\n  transform: translateY(0) scale(0.9);\n  z-index: 1980;\n}\n.el-toast__item {\n  animation: append-in 300ms cubic-bezier(0, 0, 0.25, 1) forwards;\n  background-color: #222222;\n  border-radius: 2px;\n  color: #fff;\n  display: grid;\n  grid-template: [header] \"icon description close\" auto [body] \"icon action close\" auto [footer] \"progress progress progress\" auto/38px 1fr 38px;\n  max-height: 400px;\n  overflow: hidden;\n  position: relative;\n  transform-origin: center bottom;\n  transition: transform 300ms cubic-bezier(0, 0, 0.25, 1), background 300ms cubic-bezier(0, 0, 0.25, 1), opacity 300ms cubic-bezier(0, 0, 0.25, 1), max-height 300ms cubic-bezier(0, 0, 0.25, 1);\n  user-select: none;\n  width: 100%;\n  z-index: 2000;\n}\n@keyframes append-in {\n  from {\n    max-height: 0;\n    opacity: 0;\n    transform: scale(0.9);\n  }\n}\n@keyframes append-out {\n  to {\n    max-height: 0;\n    opacity: 0;\n    transform: scale(0.9);\n  }\n}\n.el-toast__item--danger .el-toast__action button,\n.el-toast__item--danger .el-toast__action a, .el-toast__item--danger .el-toast__action i, .el-toast__item--danger .el-toast__description button,\n.el-toast__item--danger .el-toast__description a, .el-toast__item--danger .el-toast__description i, .el-toast__item--danger .el-toast__icon button,\n.el-toast__item--danger .el-toast__icon a, .el-toast__item--danger .el-toast__icon i {\n  color: #DF6962;\n}\n.el-toast__item--danger .el-toast__bar {\n  background-color: #D64038;\n}\n.el-toast__item--alert .el-toast__action button,\n.el-toast__item--alert .el-toast__action a, .el-toast__item--alert .el-toast__action i, .el-toast__item--alert .el-toast__description button,\n.el-toast__item--alert .el-toast__description a, .el-toast__item--alert .el-toast__description i, .el-toast__item--alert .el-toast__icon button,\n.el-toast__item--alert .el-toast__icon a, .el-toast__item--alert .el-toast__icon i {\n  color: #F3CC6B;\n}\n.el-toast__item--alert .el-toast__bar {\n  background-color: #EFBC3C;\n}\n.el-toast__item--success .el-toast__action button,\n.el-toast__item--success .el-toast__action a, .el-toast__item--success .el-toast__action i, .el-toast__item--success .el-toast__description button,\n.el-toast__item--success .el-toast__description a, .el-toast__item--success .el-toast__description i, .el-toast__item--success .el-toast__icon button,\n.el-toast__item--success .el-toast__icon a, .el-toast__item--success .el-toast__icon i {\n  color: #54A668;\n}\n.el-toast__item--success .el-toast__bar {\n  background-color: #54A668;\n}\n.el-toast__item--info .el-toast__action button,\n.el-toast__item--info .el-toast__action a, .el-toast__item--info .el-toast__action i, .el-toast__item--info .el-toast__description button,\n.el-toast__item--info .el-toast__description a, .el-toast__item--info .el-toast__description i, .el-toast__item--info .el-toast__icon button,\n.el-toast__item--info .el-toast__icon a, .el-toast__item--info .el-toast__icon i {\n  color: #71C3DD;\n}\n.el-toast__item--info .el-toast__bar {\n  background-color: #48B1D3;\n}\n.el-toast__item--message .el-toast__action button,\n.el-toast__item--message .el-toast__action a, .el-toast__item--message .el-toast__action i, .el-toast__item--message .el-toast__description button,\n.el-toast__item--message .el-toast__description a, .el-toast__item--message .el-toast__description i, .el-toast__item--message .el-toast__icon button,\n.el-toast__item--message .el-toast__icon a, .el-toast__item--message .el-toast__icon i {\n  color: #FFF;\n}\n.el-toast__item--message .el-toast__bar {\n  background-color: #FFF;\n}\n.el-toast__item--removing {\n  animation: append-out 300ms cubic-bezier(0.25, 0, 1, 1) forwards;\n}\n.el-toast__icon {\n  display: flex;\n  font-size: 1.5em;\n  grid-area: icon;\n  justify-content: center;\n  padding: 12px 8px 12px 12px;\n}\n.el-toast__description {\n  font-size: 1.4em;\n  grid-area: description;\n  line-height: 1.5;\n  margin: 10px 0;\n  max-height: 200px;\n  overflow-x: auto;\n  padding: 0 8px;\n}\n.el-toast__description button:hover, .el-toast__description button:focus {\n  text-decoration: underline;\n}\n.el-toast__close {\n  display: flex;\n  font-size: 1.5em;\n  grid-area: close;\n  justify-content: center;\n}\n.el-toast__close button {\n  color: #fff;\n  display: block;\n  height: 38px;\n  padding: 10px 8px 8px;\n  text-align: center;\n  width: 100%;\n}\n.el-toast__action {\n  grid-column: action;\n}\n.el-toast__action button,\n.el-toast__action a {\n  display: inline-block;\n  font-size: 1.4em;\n  padding: 0 8px 10px;\n  text-transform: uppercase;\n}\n.el-toast__action button:hover, .el-toast__action button:focus,\n.el-toast__action a:hover,\n.el-toast__action a:focus {\n  text-decoration: underline;\n}\n.el-toast__progress {\n  background-color: rgba(225, 227, 230, 0.15);\n  grid-column: progress;\n  height: 4px;\n  width: 100%;\n  z-index: 20;\n}\n.el-toast__progress--hide {\n  display: none;\n}\n.el-toast__bar {\n  bottom: 0;\n  display: block;\n  height: 4px;\n  position: absolute;\n  transition: width 100ms cubic-bezier(0.5, 0, 0.1, 1);\n  width: 100%;\n  z-index: 10;\n}\n.el-toast--example {\n  left: calc(50% - 175px);\n  right: 0;\n  top: calc(50% - 33px);\n}\n\n@media only screen and (max-width: 720px) {\n  .el-toast {\n    margin: 16px 0;\n    max-height: 400px;\n    padding: 10px 0px;\n    width: 100%;\n  }\n  .el-toast__item {\n    width: calc(100% - 30px);\n  }\n  .el-toast__item:not(:first-child) {\n    margin-top: 8px;\n  }\n  .el-toast__item:nth-child(n+2) {\n    bottom: 0;\n    max-height: 40px;\n    position: absolute;\n  }\n  .el-toast__item:nth-child(n+2) .el-toast__icon,\n.el-toast__item:nth-child(n+2) .el-toast__progress,\n.el-toast__item:nth-child(n+2) .el-toast__description,\n.el-toast__item:nth-child(n+2) .el-toast__action {\n    opacity: 0;\n  }\n  .el-toast__item:nth-child(n+4) {\n    opacity: 0;\n    transform: translateY(0) scale(0.9);\n    z-index: 1970;\n  }\n  .el-toast__item:nth-child(2) {\n    background-color: #595959;\n    transform: translateY(-4px) scale(0.95);\n    width: calc(100% - 60px);\n    z-index: 1990;\n  }\n  .el-toast__item:nth-child(3) {\n    background-color: #767676;\n    transform: translateY(0) scale(0.9);\n    width: calc(100% - 60px);\n    z-index: 1980;\n  }\n  .el-toast--example {\n    left: 0;\n    top: calc(50% - 33px);\n  }\n}", "",{"version":3,"sources":["webpack://./utils/toast/main.scss"],"names":[],"mappings":"AAEA;;CAAA;AASA;EACC,mBAAA;EACA,SAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,YAAA;EACA,UAAA;EACA,iBAAA;EACA,eAAA;EACA,QAAA;EACA,sDAAA;EACA,YAAA;AAND;AAQC;EACC,YAAA;AANF;AAUE;EAGC,6BAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;AAVH;AAcC;EACC,eAAA;AAZF;AAeC;EACC,SAAA;EACA,gBAAA;EACA,kBAAA;AAbF;AAeE;;;;EAIC,UAAA;AAbH;AAiBC;EACC,UAAA;EACA,oCAAA;EACA,aAAA;AAfF;AAkBC;EACC,yBAAA;EACA,uCAAA;EACA,aAAA;AAhBF;AAmBC;EACC,yBAAA;EACA,mCAAA;EACA,aAAA;AAjBF;AAoBC;EACC,+DAAA;EACA,yBAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,8IAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,+BAAA;EACA,8LAAA;EAEA,iBAAA;EACA,WAAA;EACA,aAAA;AAnBF;AAqBE;EACC;IACC,aAAA;IACA,UAAA;IACA,qBAAA;EAnBF;AACF;AAsBE;EACC;IACC,aAAA;IACA,UAAA;IACA,qBAAA;EApBF;AACF;AA4BK;;;;EAEC,cAAA;AAxBN;AA4BI;EACC,yBAAA;AA1BL;AAoCK;;;;EAEC,cAAA;AAhCN;AAoCI;EACC,yBAAA;AAlCL;AA4CK;;;;EAEC,cAAA;AAxCN;AA4CI;EACC,yBAAA;AA1CL;AAoDK;;;;EAEC,cAAA;AAhDN;AAoDI;EACC,yBAAA;AAlDL;AA4DK;;;;EAEC,WAAA;AAxDN;AA4DI;EACC,sBAAA;AA1DL;AA+DE;EACC,gEAAA;AA7DH;AAiEC;EACC,aAAA;EACA,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,2BAAA;AA/DF;AAkEC;EACC,gBAAA;EACA,sBAAA;EACA,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;AAhEF;AAmEG;EAEC,0BAAA;AAlEJ;AAuEC;EACC,aAAA;EACA,gBAAA;EACA,gBAAA;EACA,uBAAA;AArEF;AAuEE;EACC,WAAA;EACA,cAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,WAAA;AArEH;AAyEC;EACC,mBAAA;AAvEF;AAyEE;;EAEC,qBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;AAvEH;AAyEG;;;EAEC,0BAAA;AAtEJ;AA2EC;EACC,2CAAA;EACA,qBAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;AAzEF;AA2EE;EACC,aAAA;AAzEH;AA6EC;EACC,SAAA;EACA,cAAA;EACA,WAAA;EACA,kBAAA;EACA,oDAAA;EACA,WAAA;EACA,WAAA;AA3EF;AAgFC;EACC,uBAAA;EACA,QAAA;EACA,qBAAA;AA9EF;;AAkFA;EACC;IACC,cAAA;IACA,iBAAA;IACA,iBAAA;IACA,WAAA;EA/EA;EAgFA;IACC,wBAAA;EA9ED;EAgFA;IACC,eAAA;EA9ED;EAiFA;IACC,SAAA;IACA,gBAAA;IACA,kBAAA;EA/ED;EAiFC;;;;IAIC,UAAA;EA/EF;EAmFA;IACC,UAAA;IACA,mCAAA;IACA,aAAA;EAjFD;EAoFA;IACC,yBAAA;IACA,uCAAA;IACA,wBAAA;IACA,aAAA;EAlFD;EAqFA;IACC,yBAAA;IACA,mCAAA;IACA,wBAAA;IACA,aAAA;EAnFD;EAwFD;IACC,OAAA;IACA,qBAAA;EAtFA;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700\");\r\n\r\n/*\r\n** Component\r\n*/\r\n\r\n$root: \".el-toast\";\r\n$transition-default: cubic-bezier(0.5, 0, 0.1, 1);\r\n$transition-in: cubic-bezier(0, 0, 0.25, 1);\r\n$transition-out: cubic-bezier(0.25, 0, 1, 1);\r\n\r\n#{$root} {\r\n align-items: center;\r\n bottom: 0;\r\n display: flex;\r\n flex-direction: column;\r\n list-style: none;\r\n margin: 16px;\r\n opacity: 1;\r\n padding: 0 0 10px;\r\n position: fixed;\r\n right: 0;\r\n transition: opacity 150ms $transition-default;\r\n width: 350px;\r\n\r\n &--paused {\r\n  opacity: 0.9;\r\n }\r\n\r\n button {\r\n  &,\r\n  &:focus,\r\n  &:hover {\r\n   background-color: transparent;\r\n   border: 0;\r\n   cursor: pointer;\r\n   outline: none;\r\n  }\r\n }\r\n\r\n &__item:not(:first-child) {\r\n  margin-top: 8px;\r\n }\r\n\r\n &__item:nth-child(n + 4) {\r\n  bottom: 0;\r\n  max-height: 40px;\r\n  position: absolute;\r\n\r\n  #{$root}__icon,\r\n  #{$root}__progress,\r\n  #{$root}__description,\r\n  #{$root}__action {\r\n   opacity: 0;\r\n  }\r\n }\r\n\r\n &__item:nth-child(n + 6) {\r\n  opacity: 0;\r\n  transform: translateY(0) scale(0.85);\r\n  z-index: 1970;\r\n }\r\n\r\n &__item:nth-child(4) {\r\n  background-color: #595959;\r\n  transform: translateY(-4px) scale(0.95);\r\n  z-index: 1990;\r\n }\r\n\r\n &__item:nth-child(5) {\r\n  background-color: #767676;\r\n  transform: translateY(0) scale(0.9);\r\n  z-index: 1980;\r\n }\r\n\r\n &__item {\r\n  animation: append-in 300ms $transition-in forwards;\r\n  background-color: #222222;\r\n  border-radius: 2px;\r\n  color: #fff;\r\n  display: grid;\r\n  grid-template: [header] \"icon description close\"auto [body] \"icon action close\"auto [footer] \"progress progress progress\"auto / 38px 1fr 38px;\r\n  max-height: 400px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  transform-origin: center bottom;\r\n  transition: transform 300ms $transition-in, background 300ms $transition-in,\r\n   opacity 300ms $transition-in, max-height 300ms $transition-in;\r\n  user-select: none;\r\n  width: 100%;\r\n  z-index: 2000;\r\n\r\n  @keyframes append-in {\r\n   from {\r\n    max-height: 0;\r\n    opacity: 0;\r\n    transform: scale(0.9);\r\n   }\r\n  }\r\n\r\n  @keyframes append-out {\r\n   to {\r\n    max-height: 0;\r\n    opacity: 0;\r\n    transform: scale(0.9);\r\n   }\r\n  }\r\n\r\n  &--danger {\r\n   #{$root} {\r\n    &__action,\r\n    &__description,\r\n    &__icon {\r\n     button,\r\n     a, i {\r\n      color: \t#DF6962;\r\n     }\r\n    }\r\n\r\n    &__bar {\r\n     background-color: #D64038;\r\n    }\r\n   }\r\n  }\r\n\r\n  &--alert {\r\n   #{$root} {\r\n    &__action,\r\n    &__description,\r\n    &__icon {\r\n     button,\r\n     a, i {\r\n      color: #F3CC6B;\r\n     }\r\n    }\r\n\r\n    &__bar {\r\n     background-color: #EFBC3C;\r\n    }\r\n   }\r\n  }\r\n\r\n  &--success {\r\n   #{$root} {\r\n    &__action,\r\n    &__description,\r\n    &__icon {\r\n     button,\r\n     a, i {\r\n      color: #54A668;\r\n     }\r\n    }\r\n\r\n    &__bar {\r\n     background-color: #54A668;\r\n    }\r\n   }\r\n  }\r\n\r\n  &--info {\r\n   #{$root} {\r\n    &__action,\r\n    &__description,\r\n    &__icon {\r\n     button,\r\n     a, i {\r\n      color: #71C3DD;\r\n     }\r\n    }\r\n\r\n    &__bar {\r\n     background-color: #48B1D3;\r\n    }\r\n   }\r\n  }\r\n\r\n  &--message {\r\n   #{$root} {\r\n    &__action,\r\n    &__description,\r\n    &__icon {\r\n     button,\r\n     a, i {\r\n      color: #FFF;\r\n     }\r\n    }\r\n\r\n    &__bar {\r\n     background-color: #FFF;\r\n    }\r\n   }\r\n  }\r\n\r\n  &--removing {\r\n   animation: append-out 300ms $transition-out forwards;\r\n  }\r\n }\r\n\r\n &__icon {\r\n  display: flex;\r\n  font-size: 1.5em;\r\n  grid-area: icon;\r\n  justify-content: center;\r\n  padding: 12px 8px 12px 12px;\r\n }\r\n\r\n &__description {\r\n  font-size: 1.4em;\r\n  grid-area: description;\r\n  line-height: 1.5;\r\n  margin: 10px 0;\r\n  max-height: 200px;\r\n  overflow-x: auto;\r\n  padding: 0 8px;\r\n\r\n  button {\r\n   &:hover,\r\n   &:focus {\r\n    text-decoration: underline;\r\n   }\r\n  }\r\n }\r\n\r\n &__close {\r\n  display: flex;\r\n  font-size: 1.5em;\r\n  grid-area: close;\r\n  justify-content: center;\r\n\r\n  button {\r\n   color: #fff;\r\n   display: block;\r\n   height: 38px;\r\n   padding: 10px 8px 8px;\r\n   text-align: center;\r\n   width: 100%;\r\n  }\r\n }\r\n\r\n &__action {\r\n  grid-column: action;\r\n\r\n  button,\r\n  a {\r\n   display: inline-block;\r\n   font-size: 1.4em;\r\n   padding: 0 8px 10px;\r\n   text-transform: uppercase;\r\n\r\n   &:hover,\r\n   &:focus {\r\n    text-decoration: underline;\r\n   }\r\n  }\r\n }\r\n\r\n &__progress {\r\n  background-color: transparentize(#E1E3E6, 0.85);\r\n  grid-column: progress;\r\n  height: 4px;\r\n  width: 100%;\r\n  z-index: 20;\r\n\r\n  &--hide {\r\n   display: none;\r\n  }\r\n }\r\n\r\n &__bar {\r\n  bottom: 0;\r\n  display: block;\r\n  height: 4px;\r\n  position: absolute;\r\n  transition: width 100ms $transition-default;\r\n  width: 100%;\r\n  z-index: 10;\r\n }\r\n\r\n // Ignore\r\n\r\n &--example {\r\n  left: calc(50% - 175px);\r\n  right: 0;\r\n  top: calc(50% - 33px);\r\n }\r\n}\r\n\r\n@media only screen and (max-width: 720px) {\r\n #{$root} {\r\n  margin: 16px 0;\r\n  max-height: 400px;\r\n  padding: 10px 0px;\r\n  width: 100%;\r\n  &__item {\r\n   width: calc(100% - 30px);\r\n  }\r\n  &__item:not(:first-child) {\r\n   margin-top: 8px;\r\n  }\r\n\r\n  &__item:nth-child(n + 2) {\r\n   bottom: 0;\r\n   max-height: 40px;\r\n   position: absolute;\r\n\r\n   #{$root}__icon,\r\n   #{$root}__progress,\r\n   #{$root}__description,\r\n   #{$root}__action {\r\n    opacity: 0;\r\n   }\r\n  }\r\n\r\n  &__item:nth-child(n + 4) {\r\n   opacity: 0;\r\n   transform: translateY(0) scale(0.9);\r\n   z-index: 1970;\r\n  }\r\n\r\n  &__item:nth-child(2) {\r\n   background-color: #595959;\r\n   transform: translateY(-4px) scale(0.95);\r\n   width: calc(100% - 60px);\r\n   z-index: 1990;\r\n  }\r\n\r\n  &__item:nth-child(3) {\r\n   background-color: #767676;\r\n   transform: translateY(0) scale(0.9);\r\n   width: calc(100% - 60px);\r\n   z-index: 1980;\r\n  }\r\n\r\n // Ignore\r\n\r\n &--example {\r\n  left: 0;\r\n  top: calc(50% - 33px);\r\n  }\r\n }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./utils/toast/main.scss":
/*!*******************************!*\
  !*** ./utils/toast/main.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./utils/toast/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./utils/flatted.js":
/*!**************************!*\
  !*** ./utils/flatted.js ***!
  \**************************/
/***/ ((module) => {

"use strict";

/*! (c) 2020 Andrea Giammarchi */

const {parse: $parse, stringify: $stringify} = JSON;
const {keys} = Object;

const Primitive = String;   // it could be Number
const primitive = 'string'; // it could be 'number'

const ignore = {};
const object = 'object';

const noop = (_, value) => value;

const primitives = value => (
  value instanceof Primitive ? Primitive(value) : value
);

const Primitives = (_, value) => (
  typeof value === primitive ? new Primitive(value) : value
);

const revive = (input, parsed, output, $) => {
  const lazy = [];
  for (let ke = keys(output), {length} = ke, y = 0; y < length; y++) {
    const k = ke[y];
    const value = output[k];
    if (value instanceof Primitive) {
      const tmp = input[value];
      if (typeof tmp === object && !parsed.has(tmp)) {
        parsed.add(tmp);
        output[k] = ignore;
        lazy.push({k, a: [input, parsed, tmp, $]});
      }
      else
        output[k] = $.call(output, k, tmp);
    }
    else if (output[k] !== ignore)
      output[k] = $.call(output, k, value);
  }
  for (let {length} = lazy, i = 0; i < length; i++) {
    const {k, a} = lazy[i];
    output[k] = $.call(output, k, revive.apply(null, a));
  }
  return output;
};

const set = (known, input, value) => {
  const index = Primitive(input.push(value) - 1);
  known.set(value, index);
  return index;
};

const parse = (text, reviver) => {
  const input = $parse(text, Primitives).map(primitives);
  const value = input[0];
  const $ = reviver || noop;
  const tmp = typeof value === object && value ?
              revive(input, new Set, value, $) :
              value;
  return $.call({'': tmp}, '', tmp);
};

const stringify = (value, replacer, space) => {
  const $ = replacer && typeof replacer === object ?
            (k, v) => (k === '' || -1 < replacer.indexOf(k) ? v : void 0) :
            (replacer || noop);
  const known = new Map;
  const input = [];
  const output = [];
  let i = +set(known, input, $.call({'': value}, '', value));
  let firstRun = !i;
  while (i < input.length) {
    firstRun = true;
    output[i] = $stringify(input[i++], replace, space);
  }
  return '[' + output.join(',') + ']';
  function replace(key, value) {
    if (firstRun) {
      firstRun = !firstRun;
      return value;
    }
    const after = $.call(this, key, value);
    switch (typeof after) {
      case object:
        if (after === null) return after;
      case primitive:
        return known.get(after) || set(known, input, after);
    }
    return after;
  }
};

module.exports = { parse, stringify }


/***/ }),

/***/ "./utils/mapUtitls.js":
/*!****************************!*\
  !*** ./utils/mapUtitls.js ***!
  \****************************/
/***/ ((module) => {

/**
 *
 * @param key
 * @param value
 * @returns {{dataType: string, value: [unknown, unknown][]}|*}
 */
function replacer(key, value) {
    const originalObject = this[key];
    if(originalObject instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(originalObject.entries()), // or with spread: value: [...originalObject]
        };
    } else {
        return value;
    }
}

/**
 *
 * @param key
 * @param value
 * @returns {Map<unknown, unknown>|*}
 */
function reviver(key, value) {
    if(typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }
    return value;
}

module.exports = {
    replacer,
    reviver
};


/***/ }),

/***/ "./utils/toast/Toastify.js":
/*!*********************************!*\
  !*** ./utils/toast/Toastify.js ***!
  \*********************************/
/***/ (() => {

/**
 * notifcation types
 * @type {string}
 */
const NAME_ITEM = "el-toast",
    ICONS = {
		SUCCESS: {
			CLASSES: ["fas", "fa-check-circle"]
		},
		DANGER: {
			CLASSES: ["fas", "fa-exclamation-triangle"]
		},
		INFO: {
			CLASSES: ["fas", "fa-exclamation-circle"]
		},
		ALERT: {
			CLASSES: ["fas", "fa-exclamation-triangle"]
		},
	},
	MOBILE_RESOLUTION = 720
;

// Create the template
buildTemplate(document.querySelector('body'));


let $templateItem = document.querySelector("#elToastItem");

// Clone and extract its content
$templateItem = $templateItem.cloneNode(true).content;

/**
 * Represents a notification Toast
 */
class ToastItem extends HTMLLIElement {

    /**
     * Initializes the ToastItem Class object
     */
    constructor() {
		super();

		// Register a new TOAST_REMOVED custom event if not exist, otherwise create it.
		this._eventOnRemove = new CustomEvent("TOAST_REMOVED") || document.createEvent("TOAST_REMOVED");

		// Set initial visible to false
		this.isVisible = false;
	}

    /**
     * Overrides the default connectedCallback method
     */
	connectedCallback() {

		// Get the Toastify object's attributes
		let type = this.getAttribute("type").toUpperCase(),
		description = this.getAttribute("description"),
		timeout = Number(this.getAttribute("timeout")),
		hideClose = Boolean(JSON.parse(this.getAttribute("hide-close")));

		// Check if the type is valid
		if (!ICONS.hasOwnProperty(type)) {
			throw new Error(`[${NAME_ITEM}] invalid type`);
		}

		let $item = $templateItem.cloneNode(true),								// Copy the template item
		$itemDescription = $item.querySelector(`.${NAME_ITEM}__description`),  	// Grab item's description container
		$itemIcon = $item.querySelector(`.${NAME_ITEM}__icon`),					// Grab item's icon container
		$icon = document.createElement("i"),									// Create notification icon
		$itemProgress = $item.querySelector(`.${NAME_ITEM}__progress`),    		// Grab progress bar wrapper
		$itemProgressBar = $item.querySelector(`.${NAME_ITEM}__bar`),			// Grab progress bar container
		$itemClose = $item.querySelector(`.${NAME_ITEM}__close`),				// Grab item close button container
		$itemCloseAction = $item.querySelector(`.${NAME_ITEM}__close button`), 	// Grab item close button
		$container = this.parentElement.parentElement;

		// Listen to TOAST_REMOVED event
		this.addEventListener("TOAST_REMOVED", this.checkVisible, false);

		// If the object is hidden or closed, remove it
		if (hideClose) {
			$itemClose.remove();
		} else {

			// If not then listen to click event of the close button
			$itemCloseAction.addEventListener("click", event =>
				$container.remove(this.id)
			);
		}

		// Add notify icon class to icon
		$icon.classList.add(...ICONS[type].CLASSES);

		// Add the icon to icon container
		$itemIcon.appendChild($icon);
		
		// Set item classes
		this.classList.add(`${NAME_ITEM}__item`);
		this.classList.add(`${NAME_ITEM}__item--${type.toLowerCase()}`);
		
		// If the description is over 100 characters
		if (description.length > 100) {
			setShortDescription();
		} else {
			setFullDescription();
		}

		/**
		 * Sets full description for the toast
		 * @param {Event} event 
		 */
		function setFullDescription(event) {
			$itemDescription.innerHTML = description;
			
			// If the caller does not pass an event,
			// exit the function.
			if (!event) return;

			// Create a "view less" button
			let viewLess = document.createElement("button");
			viewLess.innerText = "View less";
			
			// Listen to click event. Execute setShortDescription if clicked
			viewLess.addEventListener("click", setShortDescription);
			
			// Add the button to item's description
			$itemDescription.appendChild(viewLess);
		}
		
		/**
		 * Sets short description for the toast
		 */
		function setShortDescription() {

			// Create a "view more" button
			let viewMore = document.createElement("button");
			viewMore.innerText = "View more";
			
			// Listen to click event. Execute setFullDescription if clicked
			viewMore.addEventListener("click", setFullDescription);
			
			// cut the description down to 100 characters then add "..."
			$itemDescription.innerHTML = description.slice(0, 99) + "...";

			// Add the button to item's description
			$itemDescription.appendChild(viewMore);
		}

		// Add this 
		this.appendChild($item);
		
		this.checkVisible();

		// If the counter reaches 0, hide the toast
		if (timeout === 0) {
			$itemProgress.classList.add(`${NAME_ITEM}__progress--hide`);
			return;
		}

		let countdownValue = 100,
		size = timeout - countdownValue;

		let checking = setInterval(() => {
			if (this.isVisible && !$container.isMouseOver()) {
				$itemProgressBar.style.width =
				size * 100 / (timeout - countdownValue) + "%";

				size -= countdownValue;
			}

			if (size < -countdownValue) {
				$container.remove(this.id);

				clearInterval(checking);
			}
		}, countdownValue);
	}

    /**
     * Checks whether it's the toast's turn to show up
     */
	checkVisible() {
		if (this.parentNode) {
			let numCards = document.body.clientWidth > MOBILE_RESOLUTION ? 3 : 1;
			this.isVisible = Array.from(this.parentNode.children).indexOf(this) < numCards;
		}
	}

    /**
     * Removes the toast
     * @returns {boolean}
     */
	remove() {
		let parent = this.parentElement;
		this.classList.add(`${NAME_ITEM}__item--removing`);
		if (!parent || parent.nodeType !== Node.ELEMENT_NODE || !this || this.nodeType !== Node.ELEMENT_NODE)
			return false;

		setTimeout(() => {
			if (parent.hasChildNodes() && parent.contains(this)) {
				parent.removeChild(this);

				parent.parentElement.dispatchEvent(this._eventOnRemove);

				return true;
			}
			return false;
		}, 300);
	}

    /**
     * Set function to be executed on close
     * @param {Function} action The function to be executed on close
     */
	setOnClose(action) {
		let $itemCloseAction = this.querySelector(`.${NAME_ITEM}__close button`);

		$itemCloseAction.addEventListener("click", action);
	}

    /**
     * Set actions
     * @param {object[]} actions
     */
	setActions(actions) {

		// If no action is set, exit the method
		if (!actions.length) {
			return;
		}
		
		// Grab action container
		let $itemActions = this.querySelector(`.${NAME_ITEM}__action`);
		
		// For each action in actions
		actions.map(action => {
			if (typeof action !== "object") {
				throw new Error(`[${NAME_ITEM}] Invalid action`);
			}

			let $action = document.createElement("button");

			if (typeof action.title !== "string") {
				throw new Error(`[${NAME_ITEM}] Enter a valid title for the action`);
			}

			$action.innerText = action.title;

			if (typeof action.onClick !== "function") {
				throw new Error(`[${NAME_ITEM}] Enter a valid role for the action`);
			}

			$action.addEventListener("click", action.onClick);

			$itemActions.appendChild($action);
		});
	}

    /**
     * Returns the item name
     * @returns {string} The name of the item
     */
	static is() {
		return `${NAME_ITEM}-item`;
	}
}

// Defines a custom li tag.
customElements.define(ToastItem.is(), ToastItem, { extends: "li" });

// Default constants
const NAME = "el-toast",
TIMEOUT_REMOVE = 8000,
DOM_LIMIT = 5;

// Grab the template tag
let $template = document.querySelector("#elToast");

// clone the template and grab the unordered list from the document fragment object
$template = $template.cloneNode(true).content.querySelector(`.${NAME}`);

/**
 * Represent a Toast object
 */
class Toast extends HTMLElement {

	/**
	 * Initalizes the Toast object.
	 */
	constructor() {
		super();

		// Register a new TOAST_REMOVED custom event if not exist, otherwise create it.
		this._eventOnRemove = new CustomEvent("TOAST_REMOVED") || document.createEvent("TOAST_REMOVED");

		// Initializes private variables
		this._mouseOver = false;
		this._list = {};
		this._listCache = {};
	}

    /**
     * Listens for mouseover event
     * @returns {Boolean} True or False
     */
	isMouseOver() {
		return this._mouseOver;
	}

    /**
     * Sets mouseover value
     * @param {String} value
     */
	setMouseOver(value) {
		this._mouseOver = Boolean(value);
	}

    /**
     * Overrides the default connectedCallback method
     */
	connectedCallback() {

		this.appendChild($template);
		
		// Listent to events
		this.addEventListener("TOAST_REMOVED", broadcastToastRemoved, false);
		this.addEventListener("mouseenter", handleMouseOver);
		this.addEventListener("touchstart", handleMouseOver);
		this.addEventListener("touchend", handleMouseOut);
		document.body.addEventListener("touchend", handleMouseOut);
		this.addEventListener("mouseleave", handleMouseOut);

		function handleMouseOver() {
			$template.classList.add(`${NAME}--paused`);
			this.setMouseOver(true);
		}

		function handleMouseOut() {
			$template.classList.remove(`${NAME}--paused`);
			this.setMouseOver(false);
		}

		function broadcastToastRemoved() {
			Object.values(this._list)
			.slice(0, 5)
			.map(toast => {
			toast.dispatchEvent(this._eventOnRemove);
			});
		}
	}

	/**
	 * Publish toast with a set of settings
	 * @param {Object} config The settings for the toast
	 */
	publish(config) {
		
		// Get elements from config object if existed, otherwise set as default
		let type = String(config.type || "info"),
		description = config.description || "",	  

		timeout = config.timeout < 0 || typeof config.timeout !== "number" 	? TIMEOUT_REMOVE : config.timeout,

		onClose = typeof config.onClose === "function" ? config.onClose : function() {},

		hideClose = Boolean(config.hideClose),
		actions = typeof config.actions === "object" ? config.actions : [],
		$toast = document.createElement("li", { is: `${NAME}-item` }),

		id = "toast_" + generateId();

		if (!description) {
			throw new Error(`[${NAME}] A description is required`);
		}

		$toast.id = id;
		$toast.setAttribute("type", type);
		$toast.setAttribute("description", description);
		$toast.setAttribute("timeout", timeout);
		$toast.setAttribute("hide-close", String(hideClose));

		$toast = $toast.cloneNode(true);

		if (Object.values(this._list).length > DOM_LIMIT) {
			this._listCache[id] = {
			el: $toast,
			hideClose: hideClose,
			onClose: onClose,
			actions: actions
			};
		} else {
			$toast = $template.appendChild($toast);

			if (!$toast) {
				return;
			}
			if (!hideClose) {
				$toast.setOnClose(onClose);
			}

			if (actions.length) {
				$toast.setActions(actions);
			}

			this._list[id] = $toast;
		}
		
		/**
		 * Randomly generate toast id
		 */
		function generateId() {
			return Math.random().toString(36).substr(2, 9);
		}

		return id;
	}

	/**
	 * Removes toast
	 * @param {Number} id 
	 */
	remove(id) {
		if (this._list.hasOwnProperty(id)) {
			this._list[id].remove();
			delete this._list[id];
		} else if (this._listCache.hasOwnProperty(id)) {
			delete this._listCache[id];
		} else {
			return;
		}

		if (Object.keys(this._listCache).length) {
			let keyCached = Object.keys(this._listCache)[0],
			valueCached = Object.values(this._listCache)[0];

			valueCached.el = $template.appendChild(valueCached.el);

			if (!valueCached.hideClose) {
				valueCached.el.setOnClose(valueCached.onClose);
			}

			if (valueCached.actions.length) {
				valueCached.el.setActions(valueCached.actions);
			}

			this._list[keyCached] = valueCached.el;

			delete this._listCache[keyCached];
		}
	}

	/**
	 * returns the name of the template element
	 * @returns {String} The name of the template element
	 */
	static is() {
		return NAME;
	}
}

/**
 * Defines the custom element
 */
customElements.define(Toast.is(), Toast);

/**
 * Build the template
 * @param {HTMLElement} target 
 */
function buildTemplate(target){
	let template_name = "el-toast";

	// Create elements
	let template_container 	= document.createElement('div'),
	item_container 			= document.createElement(template_name),
	document_fragment 		= document.createElement('template'),
	icon_container 			= document.createElement('div'),
	close_button_container  = document.createElement('div'),
	close_button 			= document.createElement('button'),
	close_button_text 		= document.createElement('i'),
	description_container 	= document.createElement('div'),
	action_container 		= document.createElement('div'),
	progress_bar_wrapper  	= document.createElement('div'),
	progress_bar_container 	= document.createElement('div'),
	document_fragment_2 	= document.createElement('template'),
	document_fragment_2_ul  = document.createElement('ul');


	// Assign IDs
	template_container.id  = "template";
	document_fragment.id   = "elToastItem";
	document_fragment_2.id = "elToast";

	// Assign Classes
	icon_container.classList 		 = template_name + "__icon";
	close_button_container.classList = template_name + "__close";
	description_container.classList  = template_name + "__description";
	action_container.classList 		 = template_name + "__action";
	progress_bar_wrapper.classList 	 = template_name + "__progress";
	progress_bar_container.classList = template_name + "__bar";
	close_button_text.classList 	 = "fa fa-fw fa-times";
	document_fragment_2_ul.classList = template_name;

	// Add predefined styled
	template_container.style.fontSize  = "10px";
	progress_bar_container.style.width = "100%";

	// Append elements
	close_button.appendChild(close_button_text);
	close_button_container.appendChild(close_button);
	progress_bar_wrapper.appendChild(progress_bar_container);
	
	// Append element to document fragments
	document_fragment.content.appendChild(icon_container);
	document_fragment.content.appendChild(close_button_container);
	document_fragment.content.appendChild(description_container);
	document_fragment.content.appendChild(action_container);
	document_fragment.content.appendChild(progress_bar_wrapper);

	document_fragment_2.content.appendChild(document_fragment_2_ul);

	// Append everything to the template container
	template_container.appendChild(item_container);
	template_container.appendChild(document_fragment);
	template_container.appendChild(document_fragment_2);

	// Addpend the notification to the body
	target.appendChild(template_container);

	return template_container;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"admin~utils_f": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/javascripts/admin-main.js","admin~node_modules_bootstrap_dist_js_bootstrap_esm_js_7b17e101","admin~node_modules_c","admin~node_modules_fortawesome_fontawesome-free_js_r","admin~node_modules_jquery_dist_jquery_js_1","admin~node_modules_p","admin~src_j"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkchatsupport_4_0"] = self["webpackChunkchatsupport_4_0"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0c3VwcG9ydC00LjAvLi91dGlscy90b2FzdC9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vY2hhdHN1cHBvcnQtNC4wLy4vdXRpbHMvdG9hc3QvbWFpbi5zY3NzPzA5ZGYiLCJ3ZWJwYWNrOi8vY2hhdHN1cHBvcnQtNC4wLy4vdXRpbHMvZmxhdHRlZC5qcyIsIndlYnBhY2s6Ly9jaGF0c3VwcG9ydC00LjAvLi91dGlscy9tYXBVdGl0bHMuanMiLCJ3ZWJwYWNrOi8vY2hhdHN1cHBvcnQtNC4wLy4vdXRpbHMvdG9hc3QvVG9hc3RpZnkuanMiLCJ3ZWJwYWNrOi8vY2hhdHN1cHBvcnQtNC4wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NoYXRzdXBwb3J0LTQuMC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jaGF0c3VwcG9ydC00LjAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NoYXRzdXBwb3J0LTQuMC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NoYXRzdXBwb3J0LTQuMC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NoYXRzdXBwb3J0LTQuMC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NoYXRzdXBwb3J0LTQuMC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jaGF0c3VwcG9ydC00LjAvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Ysc0hBQXNIO0FBQ3RIO0FBQ0EsMkVBQTJFLHdCQUF3QixjQUFjLGtCQUFr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O1VDamhCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQSxnQkFBZ0IsMkJBQTJCO1dBQzNDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSw0Q0FBNEM7V0FDNUM7V0FDQSxFOzs7O1VDcEZBO1VBQ0EiLCJmaWxlIjoiYWRtaW5+dXRpbHNfZi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw0MDBpLDcwMCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuKiogQ29tcG9uZW50XFxuKi9cXG4uZWwtdG9hc3Qge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMTZweDtcXG4gIG9wYWNpdHk6IDE7XFxuICBwYWRkaW5nOiAwIDAgMTBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjEsIDEpO1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG4uZWwtdG9hc3QtLXBhdXNlZCB7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcbi5lbC10b2FzdCBidXR0b24sIC5lbC10b2FzdCBidXR0b246Zm9jdXMsIC5lbC10b2FzdCBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uZWwtdG9hc3RfX2l0ZW06bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG4uZWwtdG9hc3RfX2l0ZW06bnRoLWNoaWxkKG4rNCkge1xcbiAgYm90dG9tOiAwO1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmVsLXRvYXN0X19pdGVtOm50aC1jaGlsZChuKzQpIC5lbC10b2FzdF9faWNvbixcXG4uZWwtdG9hc3RfX2l0ZW06bnRoLWNoaWxkKG4rNCkgLmVsLXRvYXN0X19wcm9ncmVzcyxcXG4uZWwtdG9hc3RfX2l0ZW06bnRoLWNoaWxkKG4rNCkgLmVsLXRvYXN0X19kZXNjcmlwdGlvbixcXG4uZWwtdG9hc3RfX2l0ZW06bnRoLWNoaWxkKG4rNCkgLmVsLXRvYXN0X19hY3Rpb24ge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLmVsLXRvYXN0X19pdGVtOm50aC1jaGlsZChuKzYpIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC44NSk7XFxuICB6LWluZGV4OiAxOTcwO1xcbn1cXG4uZWwtdG9hc3RfX2l0ZW06bnRoLWNoaWxkKDQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTU5NTk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMC45NSk7XFxuICB6LWluZGV4OiAxOTkwO1xcbn1cXG4uZWwtdG9hc3RfX2l0ZW06bnRoLWNoaWxkKDUpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3Njc2NzY7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45KTtcXG4gIHotaW5kZXg6IDE5ODA7XFxufVxcbi5lbC10b2FzdF9faXRlbSB7XFxuICBhbmltYXRpb246IGFwcGVuZC1pbiAzMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgZm9yd2FyZHM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogW2hlYWRlcl0gXFxcImljb24gZGVzY3JpcHRpb24gY2xvc2VcXFwiIGF1dG8gW2JvZHldIFxcXCJpY29uIGFjdGlvbiBjbG9zZVxcXCIgYXV0byBbZm9vdGVyXSBcXFwicHJvZ3Jlc3MgcHJvZ3Jlc3MgcHJvZ3Jlc3NcXFwiIGF1dG8vMzhweCAxZnIgMzhweDtcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpLCBiYWNrZ3JvdW5kIDMwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSwgb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSksIG1heC1oZWlnaHQgMzAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDIwMDA7XFxufVxcbkBrZXlmcmFtZXMgYXBwZW5kLWluIHtcXG4gIGZyb20ge1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYXBwZW5kLW91dCB7XFxuICB0byB7XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gIH1cXG59XFxuLmVsLXRvYXN0X19pdGVtLS1kYW5nZXIgLmVsLXRvYXN0X19hY3Rpb24gYnV0dG9uLFxcbi5lbC10b2FzdF9faXRlbS0tZGFuZ2VyIC5lbC10b2FzdF9fYWN0aW9uIGEsIC5lbC10b2FzdF9faXRlbS0tZGFuZ2VyIC5lbC10b2FzdF9fYWN0aW9uIGksIC5lbC10b2FzdF9faXRlbS0tZGFuZ2VyIC5lbC10b2FzdF9fZGVzY3JpcHRpb24gYnV0dG9uLFxcbi5lbC10b2FzdF9faXRlbS0tZGFuZ2VyIC5lbC10b2FzdF9fZGVzY3JpcHRpb24gYSwgLmVsLXRvYXN0X19pdGVtLS1kYW5nZXIgLmVsLXRvYXN0X19kZXNjcmlwdGlvbiBpLCAuZWwtdG9hc3RfX2l0ZW0tLWRhbmdlciAuZWwtdG9hc3RfX2ljb24gYnV0dG9uLFxcbi5lbC10b2FzdF9faXRlbS0tZGFuZ2VyIC5lbC10b2FzdF9faWNvbiBhLCAuZWwtdG9hc3RfX2l0ZW0tLWRhbmdlciAuZWwtdG9hc3RfX2ljb24gaSB7XFxuICBjb2xvcjogI0RGNjk2MjtcXG59XFxuLmVsLXRvYXN0X19pdGVtLS1kYW5nZXIgLmVsLXRvYXN0X19iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2NDAzODtcXG59XFxuLmVsLXRvYXN0X19pdGVtLS1hbGVydCAuZWwtdG9hc3RfX2FjdGlvbiBidXR0b24sXFxuLmVsLXRvYXN0X19pdGVtLS1hbGVydCAuZWwtdG9hc3RfX2FjdGlvbiBhLCAuZWwtdG9hc3RfX2l0ZW0tLWFsZXJ0IC5lbC10b2FzdF9fYWN0aW9uIGksIC5lbC10b2FzdF9faXRlbS0tYWxlcnQgLmVsLXRvYXN0X19kZXNjcmlwdGlvbiBidXR0b24sXFxuLmVsLXRvYXN0X19pdGVtLS1hbGVydCAuZWwtdG9hc3RfX2Rlc2NyaXB0aW9uIGEsIC5lbC10b2FzdF9faXRlbS0tYWxlcnQgLmVsLXRvYXN0X19kZXNjcmlwdGlvbiBpLCAuZWwtdG9hc3RfX2l0ZW0tLWFsZXJ0IC5lbC10b2FzdF9faWNvbiBidXR0b24sXFxuLmVsLXRvYXN0X19pdGVtLS1hbGVydCAuZWwtdG9hc3RfX2ljb24gYSwgLmVsLXRvYXN0X19pdGVtLS1hbGVydCAuZWwtdG9hc3RfX2ljb24gaSB7XFxuICBjb2xvcjogI0YzQ0M2QjtcXG59XFxuLmVsLXRvYXN0X19pdGVtLS1hbGVydCAuZWwtdG9hc3RfX2JhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZCQzNDO1xcbn1cXG4uZWwtdG9hc3RfX2l0ZW0tLXN1Y2Nlc3MgLmVsLXRvYXN0X19hY3Rpb24gYnV0dG9uLFxcbi5lbC10b2FzdF9faXRlbS0tc3VjY2VzcyAuZWwtdG9hc3RfX2FjdGlvbiBhLCAuZWwtdG9hc3RfX2l0ZW0tLXN1Y2Nlc3MgLmVsLXRvYXN0X19hY3Rpb24gaSwgLmVsLXRvYXN0X19pdGVtLS1zdWNjZXNzIC5lbC10b2FzdF9fZGVzY3JpcHRpb24gYnV0dG9uLFxcbi5lbC10b2FzdF9faXRlbS0tc3VjY2VzcyAuZWwtdG9hc3RfX2Rlc2NyaXB0aW9uIGEsIC5lbC10b2FzdF9faXRlbS0tc3VjY2VzcyAuZWwtdG9hc3RfX2Rlc2NyaXB0aW9uIGksIC5lbC10b2FzdF9faXRlbS0tc3VjY2VzcyAuZWwtdG9hc3RfX2ljb24gYnV0dG9uLFxcbi5lbC10b2FzdF9faXRlbS0tc3VjY2VzcyAuZWwtdG9hc3RfX2ljb24gYSwgLmVsLXRvYXN0X19pdGVtLS1zdWNjZXNzIC5lbC10b2FzdF9faWNvbiBpIHtcXG4gIGNvbG9yOiAjNTRBNjY4O1xcbn1cXG4uZWwtdG9hc3RfX2l0ZW0tLXN1Y2Nlc3MgLmVsLXRvYXN0X19iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0QTY2ODtcXG59XFxuLmVsLXRvYXN0X19pdGVtLS1pbmZvIC5lbC10b2FzdF9fYWN0aW9uIGJ1dHRvbixcXG4uZWwtdG9hc3RfX2l0ZW0tLWluZm8gLmVsLXRvYXN0X19hY3Rpb24gYSwgLmVsLXRvYXN0X19pdGVtLS1pbmZvIC5lbC10b2FzdF9fYWN0aW9uIGksIC5lbC10b2FzdF9faXRlbS0taW5mbyAuZWwtdG9hc3RfX2Rlc2NyaXB0aW9uIGJ1dHRvbixcXG4uZWwtdG9hc3RfX2l0ZW0tLWluZm8gLmVsLXRvYXN0X19kZXNjcmlwdGlvbiBhLCAuZWwtdG9hc3RfX2l0ZW0tLWluZm8gLmVsLXRvYXN0X19kZXNjcmlwdGlvbiBpLCAuZWwtdG9hc3RfX2l0ZW0tLWluZm8gLmVsLXRvYXN0X19pY29uIGJ1dHRvbixcXG4uZWwtdG9hc3RfX2l0ZW0tLWluZm8gLmVsLXRvYXN0X19pY29uIGEsIC5lbC10b2FzdF9faXRlbS0taW5mbyAuZWwtdG9hc3RfX2ljb24gaSB7XFxuICBjb2xvcjogIzcxQzNERDtcXG59XFxuLmVsLXRvYXN0X19pdGVtLS1pbmZvIC5lbC10b2FzdF9fYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OEIxRDM7XFxufVxcbi5lbC10b2FzdF9faXRlbS0tbWVzc2FnZSAuZWwtdG9hc3RfX2FjdGlvbiBidXR0b24sXFxuLmVsLXRvYXN0X19pdGVtLS1tZXNzYWdlIC5lbC10b2FzdF9fYWN0aW9uIGEsIC5lbC10b2FzdF9faXRlbS0tbWVzc2FnZSAuZWwtdG9hc3RfX2FjdGlvbiBpLCAuZWwtdG9hc3RfX2l0ZW0tLW1lc3NhZ2UgLmVsLXRvYXN0X19kZXNjcmlwdGlvbiBidXR0b24sXFxuLmVsLXRvYXN0X19pdGVtLS1tZXNzYWdlIC5lbC10b2FzdF9fZGVzY3JpcHRpb24gYSwgLmVsLXRvYXN0X19pdGVtLS1tZXNzYWdlIC5lbC10b2FzdF9fZGVzY3JpcHRpb24gaSwgLmVsLXRvYXN0X19pdGVtLS1tZXNzYWdlIC5lbC10b2FzdF9faWNvbiBidXR0b24sXFxuLmVsLXRvYXN0X19pdGVtLS1tZXNzYWdlIC5lbC10b2FzdF9faWNvbiBhLCAuZWwtdG9hc3RfX2l0ZW0tLW1lc3NhZ2UgLmVsLXRvYXN0X19pY29uIGkge1xcbiAgY29sb3I6ICNGRkY7XFxufVxcbi5lbC10b2FzdF9faXRlbS0tbWVzc2FnZSAuZWwtdG9hc3RfX2JhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbn1cXG4uZWwtdG9hc3RfX2l0ZW0tLXJlbW92aW5nIHtcXG4gIGFuaW1hdGlvbjogYXBwZW5kLW91dCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMCwgMSwgMSkgZm9yd2FyZHM7XFxufVxcbi5lbC10b2FzdF9faWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGdyaWQtYXJlYTogaWNvbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTJweCA4cHggMTJweCAxMnB4O1xcbn1cXG4uZWwtdG9hc3RfX2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS40ZW07XFxuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgcGFkZGluZzogMCA4cHg7XFxufVxcbi5lbC10b2FzdF9fZGVzY3JpcHRpb24gYnV0dG9uOmhvdmVyLCAuZWwtdG9hc3RfX2Rlc2NyaXB0aW9uIGJ1dHRvbjpmb2N1cyB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmVsLXRvYXN0X19jbG9zZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGdyaWQtYXJlYTogY2xvc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmVsLXRvYXN0X19jbG9zZSBidXR0b24ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMzhweDtcXG4gIHBhZGRpbmc6IDEwcHggOHB4IDhweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uZWwtdG9hc3RfX2FjdGlvbiB7XFxuICBncmlkLWNvbHVtbjogYWN0aW9uO1xcbn1cXG4uZWwtdG9hc3RfX2FjdGlvbiBidXR0b24sXFxuLmVsLXRvYXN0X19hY3Rpb24gYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDEuNGVtO1xcbiAgcGFkZGluZzogMCA4cHggMTBweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5lbC10b2FzdF9fYWN0aW9uIGJ1dHRvbjpob3ZlciwgLmVsLXRvYXN0X19hY3Rpb24gYnV0dG9uOmZvY3VzLFxcbi5lbC10b2FzdF9fYWN0aW9uIGE6aG92ZXIsXFxuLmVsLXRvYXN0X19hY3Rpb24gYTpmb2N1cyB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmVsLXRvYXN0X19wcm9ncmVzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMjI3LCAyMzAsIDAuMTUpO1xcbiAgZ3JpZC1jb2x1bW46IHByb2dyZXNzO1xcbiAgaGVpZ2h0OiA0cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG4uZWwtdG9hc3RfX3Byb2dyZXNzLS1oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5lbC10b2FzdF9fYmFyIHtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAxMDBtcyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjEsIDEpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuLmVsLXRvYXN0LS1leGFtcGxlIHtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTc1cHgpO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IGNhbGMoNTAlIC0gMzNweCk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcXG4gIC5lbC10b2FzdCB7XFxuICAgIG1hcmdpbjogMTZweCAwO1xcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcXG4gICAgcGFkZGluZzogMTBweCAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmVsLXRvYXN0X19pdGVtIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xcbiAgfVxcbiAgLmVsLXRvYXN0X19pdGVtOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgfVxcbiAgLmVsLXRvYXN0X19pdGVtOm50aC1jaGlsZChuKzIpIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB9XFxuICAuZWwtdG9hc3RfX2l0ZW06bnRoLWNoaWxkKG4rMikgLmVsLXRvYXN0X19pY29uLFxcbi5lbC10b2FzdF9faXRlbTpudGgtY2hpbGQobisyKSAuZWwtdG9hc3RfX3Byb2dyZXNzLFxcbi5lbC10b2FzdF9faXRlbTpudGgtY2hpbGQobisyKSAuZWwtdG9hc3RfX2Rlc2NyaXB0aW9uLFxcbi5lbC10b2FzdF9faXRlbTpudGgtY2hpbGQobisyKSAuZWwtdG9hc3RfX2FjdGlvbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAuZWwtdG9hc3RfX2l0ZW06bnRoLWNoaWxkKG4rNCkge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45KTtcXG4gICAgei1pbmRleDogMTk3MDtcXG4gIH1cXG4gIC5lbC10b2FzdF9faXRlbTpudGgtY2hpbGQoMikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMC45NSk7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcXG4gICAgei1pbmRleDogMTk5MDtcXG4gIH1cXG4gIC5lbC10b2FzdF9faXRlbTpudGgtY2hpbGQoMykge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzY3Njc2O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45KTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xcbiAgICB6LWluZGV4OiAxOTgwO1xcbiAgfVxcbiAgLmVsLXRvYXN0LS1leGFtcGxlIHtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDMzcHgpO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi91dGlscy90b2FzdC9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7O0NBQUE7QUFTQTtFQUNDLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0Esc0RBQUE7RUFDQSxZQUFBO0FBTkQ7QUFRQztFQUNDLFlBQUE7QUFORjtBQVVFO0VBR0MsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFWSDtBQWNDO0VBQ0MsZUFBQTtBQVpGO0FBZUM7RUFDQyxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWJGO0FBZUU7Ozs7RUFJQyxVQUFBO0FBYkg7QUFpQkM7RUFDQyxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FBZkY7QUFrQkM7RUFDQyx5QkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtBQWhCRjtBQW1CQztFQUNDLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0FBakJGO0FBb0JDO0VBQ0MsK0RBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4SUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsOExBQUE7RUFFQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBbkJGO0FBcUJFO0VBQ0M7SUFDQyxhQUFBO0lBQ0EsVUFBQTtJQUNBLHFCQUFBO0VBbkJGO0FBQ0Y7QUFzQkU7RUFDQztJQUNDLGFBQUE7SUFDQSxVQUFBO0lBQ0EscUJBQUE7RUFwQkY7QUFDRjtBQTRCSzs7OztFQUVDLGNBQUE7QUF4Qk47QUE0Qkk7RUFDQyx5QkFBQTtBQTFCTDtBQW9DSzs7OztFQUVDLGNBQUE7QUFoQ047QUFvQ0k7RUFDQyx5QkFBQTtBQWxDTDtBQTRDSzs7OztFQUVDLGNBQUE7QUF4Q047QUE0Q0k7RUFDQyx5QkFBQTtBQTFDTDtBQW9ESzs7OztFQUVDLGNBQUE7QUFoRE47QUFvREk7RUFDQyx5QkFBQTtBQWxETDtBQTRESzs7OztFQUVDLFdBQUE7QUF4RE47QUE0REk7RUFDQyxzQkFBQTtBQTFETDtBQStERTtFQUNDLGdFQUFBO0FBN0RIO0FBaUVDO0VBQ0MsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUEvREY7QUFrRUM7RUFDQyxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFoRUY7QUFtRUc7RUFFQywwQkFBQTtBQWxFSjtBQXVFQztFQUNDLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFyRUY7QUF1RUU7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQXJFSDtBQXlFQztFQUNDLG1CQUFBO0FBdkVGO0FBeUVFOztFQUVDLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBdkVIO0FBeUVHOzs7RUFFQywwQkFBQTtBQXRFSjtBQTJFQztFQUNDLDJDQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUF6RUY7QUEyRUU7RUFDQyxhQUFBO0FBekVIO0FBNkVDO0VBQ0MsU0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBM0VGO0FBZ0ZDO0VBQ0MsdUJBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7QUE5RUY7O0FBa0ZBO0VBQ0M7SUFDQyxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7RUEvRUE7RUFnRkE7SUFDQyx3QkFBQTtFQTlFRDtFQWdGQTtJQUNDLGVBQUE7RUE5RUQ7RUFpRkE7SUFDQyxTQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQS9FRDtFQWlGQzs7OztJQUlDLFVBQUE7RUEvRUY7RUFtRkE7SUFDQyxVQUFBO0lBQ0EsbUNBQUE7SUFDQSxhQUFBO0VBakZEO0VBb0ZBO0lBQ0MseUJBQUE7SUFDQSx1Q0FBQTtJQUNBLHdCQUFBO0lBQ0EsYUFBQTtFQWxGRDtFQXFGQTtJQUNDLHlCQUFBO0lBQ0EsbUNBQUE7SUFDQSx3QkFBQTtJQUNBLGFBQUE7RUFuRkQ7RUF3RkQ7SUFDQyxPQUFBO0lBQ0EscUJBQUE7RUF0RkE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNDAwaSw3MDBcXFwiKTtcXHJcXG5cXHJcXG4vKlxcclxcbioqIENvbXBvbmVudFxcclxcbiovXFxyXFxuXFxyXFxuJHJvb3Q6IFxcXCIuZWwtdG9hc3RcXFwiO1xcclxcbiR0cmFuc2l0aW9uLWRlZmF1bHQ6IGN1YmljLWJlemllcigwLjUsIDAsIDAuMSwgMSk7XFxyXFxuJHRyYW5zaXRpb24taW46IGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKTtcXHJcXG4kdHJhbnNpdGlvbi1vdXQ6IGN1YmljLWJlemllcigwLjI1LCAwLCAxLCAxKTtcXHJcXG5cXHJcXG4jeyRyb290fSB7XFxyXFxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuIGJvdHRvbTogMDtcXHJcXG4gZGlzcGxheTogZmxleDtcXHJcXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gbWFyZ2luOiAxNnB4O1xcclxcbiBvcGFjaXR5OiAxO1xcclxcbiBwYWRkaW5nOiAwIDAgMTBweDtcXHJcXG4gcG9zaXRpb246IGZpeGVkO1xcclxcbiByaWdodDogMDtcXHJcXG4gdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyAkdHJhbnNpdGlvbi1kZWZhdWx0O1xcclxcbiB3aWR0aDogMzUwcHg7XFxyXFxuXFxyXFxuICYtLXBhdXNlZCB7XFxyXFxuICBvcGFjaXR5OiAwLjk7XFxyXFxuIH1cXHJcXG5cXHJcXG4gYnV0dG9uIHtcXHJcXG4gICYsXFxyXFxuICAmOmZvY3VzLFxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgYm9yZGVyOiAwO1xcclxcbiAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICBvdXRsaW5lOiBub25lO1xcclxcbiAgfVxcclxcbiB9XFxyXFxuXFxyXFxuICZfX2l0ZW06bm90KDpmaXJzdC1jaGlsZCkge1xcclxcbiAgbWFyZ2luLXRvcDogOHB4O1xcclxcbiB9XFxyXFxuXFxyXFxuICZfX2l0ZW06bnRoLWNoaWxkKG4gKyA0KSB7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcclxcbiAgI3skcm9vdH1fX2ljb24sXFxyXFxuICAjeyRyb290fV9fcHJvZ3Jlc3MsXFxyXFxuICAjeyRyb290fV9fZGVzY3JpcHRpb24sXFxyXFxuICAjeyRyb290fV9fYWN0aW9uIHtcXHJcXG4gICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiB9XFxyXFxuXFxyXFxuICZfX2l0ZW06bnRoLWNoaWxkKG4gKyA2KSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDAuODUpO1xcclxcbiAgei1pbmRleDogMTk3MDtcXHJcXG4gfVxcclxcblxcclxcbiAmX19pdGVtOm50aC1jaGlsZCg0KSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDAuOTUpO1xcclxcbiAgei1pbmRleDogMTk5MDtcXHJcXG4gfVxcclxcblxcclxcbiAmX19pdGVtOm50aC1jaGlsZCg1KSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzY3Njc2O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDAuOSk7XFxyXFxuICB6LWluZGV4OiAxOTgwO1xcclxcbiB9XFxyXFxuXFxyXFxuICZfX2l0ZW0ge1xcclxcbiAgYW5pbWF0aW9uOiBhcHBlbmQtaW4gMzAwbXMgJHRyYW5zaXRpb24taW4gZm9yd2FyZHM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogW2hlYWRlcl0gXFxcImljb24gZGVzY3JpcHRpb24gY2xvc2VcXFwiYXV0byBbYm9keV0gXFxcImljb24gYWN0aW9uIGNsb3NlXFxcImF1dG8gW2Zvb3Rlcl0gXFxcInByb2dyZXNzIHByb2dyZXNzIHByb2dyZXNzXFxcImF1dG8gLyAzOHB4IDFmciAzOHB4O1xcclxcbiAgbWF4LWhlaWdodDogNDAwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyAkdHJhbnNpdGlvbi1pbiwgYmFja2dyb3VuZCAzMDBtcyAkdHJhbnNpdGlvbi1pbixcXHJcXG4gICBvcGFjaXR5IDMwMG1zICR0cmFuc2l0aW9uLWluLCBtYXgtaGVpZ2h0IDMwMG1zICR0cmFuc2l0aW9uLWluO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDIwMDA7XFxyXFxuXFxyXFxuICBAa2V5ZnJhbWVzIGFwcGVuZC1pbiB7XFxyXFxuICAgZnJvbSB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDA7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG4gICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAa2V5ZnJhbWVzIGFwcGVuZC1vdXQge1xcclxcbiAgIHRvIHtcXHJcXG4gICAgbWF4LWhlaWdodDogMDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbiAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtLWRhbmdlciB7XFxyXFxuICAgI3skcm9vdH0ge1xcclxcbiAgICAmX19hY3Rpb24sXFxyXFxuICAgICZfX2Rlc2NyaXB0aW9uLFxcclxcbiAgICAmX19pY29uIHtcXHJcXG4gICAgIGJ1dHRvbixcXHJcXG4gICAgIGEsIGkge1xcclxcbiAgICAgIGNvbG9yOiBcXHQjREY2OTYyO1xcclxcbiAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2JhciB7XFxyXFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDY0MDM4O1xcclxcbiAgICB9XFxyXFxuICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJi0tYWxlcnQge1xcclxcbiAgICN7JHJvb3R9IHtcXHJcXG4gICAgJl9fYWN0aW9uLFxcclxcbiAgICAmX19kZXNjcmlwdGlvbixcXHJcXG4gICAgJl9faWNvbiB7XFxyXFxuICAgICBidXR0b24sXFxyXFxuICAgICBhLCBpIHtcXHJcXG4gICAgICBjb2xvcjogI0YzQ0M2QjtcXHJcXG4gICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19iYXIge1xcclxcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VGQkMzQztcXHJcXG4gICAgfVxcclxcbiAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtLXN1Y2Nlc3Mge1xcclxcbiAgICN7JHJvb3R9IHtcXHJcXG4gICAgJl9fYWN0aW9uLFxcclxcbiAgICAmX19kZXNjcmlwdGlvbixcXHJcXG4gICAgJl9faWNvbiB7XFxyXFxuICAgICBidXR0b24sXFxyXFxuICAgICBhLCBpIHtcXHJcXG4gICAgICBjb2xvcjogIzU0QTY2ODtcXHJcXG4gICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19iYXIge1xcclxcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU0QTY2ODtcXHJcXG4gICAgfVxcclxcbiAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtLWluZm8ge1xcclxcbiAgICN7JHJvb3R9IHtcXHJcXG4gICAgJl9fYWN0aW9uLFxcclxcbiAgICAmX19kZXNjcmlwdGlvbixcXHJcXG4gICAgJl9faWNvbiB7XFxyXFxuICAgICBidXR0b24sXFxyXFxuICAgICBhLCBpIHtcXHJcXG4gICAgICBjb2xvcjogIzcxQzNERDtcXHJcXG4gICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19iYXIge1xcclxcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ4QjFEMztcXHJcXG4gICAgfVxcclxcbiAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtLW1lc3NhZ2Uge1xcclxcbiAgICN7JHJvb3R9IHtcXHJcXG4gICAgJl9fYWN0aW9uLFxcclxcbiAgICAmX19kZXNjcmlwdGlvbixcXHJcXG4gICAgJl9faWNvbiB7XFxyXFxuICAgICBidXR0b24sXFxyXFxuICAgICBhLCBpIHtcXHJcXG4gICAgICBjb2xvcjogI0ZGRjtcXHJcXG4gICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19iYXIge1xcclxcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXHJcXG4gICAgfVxcclxcbiAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtLXJlbW92aW5nIHtcXHJcXG4gICBhbmltYXRpb246IGFwcGVuZC1vdXQgMzAwbXMgJHRyYW5zaXRpb24tb3V0IGZvcndhcmRzO1xcclxcbiAgfVxcclxcbiB9XFxyXFxuXFxyXFxuICZfX2ljb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICBncmlkLWFyZWE6IGljb247XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEycHggOHB4IDEycHggMTJweDtcXHJcXG4gfVxcclxcblxcclxcbiAmX19kZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDEuNGVtO1xcclxcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAgOHB4O1xcclxcblxcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAmOmhvdmVyLFxcclxcbiAgICY6Zm9jdXMge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICB9XFxyXFxuICB9XFxyXFxuIH1cXHJcXG5cXHJcXG4gJl9fY2xvc2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICBncmlkLWFyZWE6IGNsb3NlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICBidXR0b24ge1xcclxcbiAgIGNvbG9yOiAjZmZmO1xcclxcbiAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgIGhlaWdodDogMzhweDtcXHJcXG4gICBwYWRkaW5nOiAxMHB4IDhweCA4cHg7XFxyXFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiB9XFxyXFxuXFxyXFxuICZfX2FjdGlvbiB7XFxyXFxuICBncmlkLWNvbHVtbjogYWN0aW9uO1xcclxcblxcclxcbiAgYnV0dG9uLFxcclxcbiAgYSB7XFxyXFxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgIGZvbnQtc2l6ZTogMS40ZW07XFxyXFxuICAgcGFkZGluZzogMCA4cHggMTBweDtcXHJcXG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcblxcclxcbiAgICY6aG92ZXIsXFxyXFxuICAgJjpmb2N1cyB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgIH1cXHJcXG4gIH1cXHJcXG4gfVxcclxcblxcclxcbiAmX19wcm9ncmVzcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudGl6ZSgjRTFFM0U2LCAwLjg1KTtcXHJcXG4gIGdyaWQtY29sdW1uOiBwcm9ncmVzcztcXHJcXG4gIGhlaWdodDogNHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAyMDtcXHJcXG5cXHJcXG4gICYtLWhpZGUge1xcclxcbiAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuIH1cXHJcXG5cXHJcXG4gJl9fYmFyIHtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgaGVpZ2h0OiA0cHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2l0aW9uOiB3aWR0aCAxMDBtcyAkdHJhbnNpdGlvbi1kZWZhdWx0O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gfVxcclxcblxcclxcbiAvLyBJZ25vcmVcXHJcXG5cXHJcXG4gJi0tZXhhbXBsZSB7XFxyXFxuICBsZWZ0OiBjYWxjKDUwJSAtIDE3NXB4KTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdG9wOiBjYWxjKDUwJSAtIDMzcHgpO1xcclxcbiB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcXHJcXG4gI3skcm9vdH0ge1xcclxcbiAgbWFyZ2luOiAxNnB4IDA7XFxyXFxuICBtYXgtaGVpZ2h0OiA0MDBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICAmX19pdGVtIHtcXHJcXG4gICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XFxyXFxuICB9XFxyXFxuICAmX19pdGVtOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXHJcXG4gICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtOm50aC1jaGlsZChuICsgMikge1xcclxcbiAgIGJvdHRvbTogMDtcXHJcXG4gICBtYXgtaGVpZ2h0OiA0MHB4O1xcclxcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHJcXG4gICAjeyRyb290fV9faWNvbixcXHJcXG4gICAjeyRyb290fV9fcHJvZ3Jlc3MsXFxyXFxuICAgI3skcm9vdH1fX2Rlc2NyaXB0aW9uLFxcclxcbiAgICN7JHJvb3R9X19hY3Rpb24ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2l0ZW06bnRoLWNoaWxkKG4gKyA0KSB7XFxyXFxuICAgb3BhY2l0eTogMDtcXHJcXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45KTtcXHJcXG4gICB6LWluZGV4OiAxOTcwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faXRlbTpudGgtY2hpbGQoMikge1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6ICM1OTU5NTk7XFxyXFxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDAuOTUpO1xcclxcbiAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcXHJcXG4gICB6LWluZGV4OiAxOTkwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faXRlbTpudGgtY2hpbGQoMykge1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6ICM3Njc2NzY7XFxyXFxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDAuOSk7XFxyXFxuICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xcclxcbiAgIHotaW5kZXg6IDE5ODA7XFxyXFxuICB9XFxyXFxuXFxyXFxuIC8vIElnbm9yZVxcclxcblxcclxcbiAmLS1leGFtcGxlIHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IGNhbGMoNTAlIC0gMzNweCk7XFxyXFxuICB9XFxyXFxuIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIid1c2Ugc3RyaWN0JztcclxuLyohIChjKSAyMDIwIEFuZHJlYSBHaWFtbWFyY2hpICovXHJcblxyXG5jb25zdCB7cGFyc2U6ICRwYXJzZSwgc3RyaW5naWZ5OiAkc3RyaW5naWZ5fSA9IEpTT047XHJcbmNvbnN0IHtrZXlzfSA9IE9iamVjdDtcclxuXHJcbmNvbnN0IFByaW1pdGl2ZSA9IFN0cmluZzsgICAvLyBpdCBjb3VsZCBiZSBOdW1iZXJcclxuY29uc3QgcHJpbWl0aXZlID0gJ3N0cmluZyc7IC8vIGl0IGNvdWxkIGJlICdudW1iZXInXHJcblxyXG5jb25zdCBpZ25vcmUgPSB7fTtcclxuY29uc3Qgb2JqZWN0ID0gJ29iamVjdCc7XHJcblxyXG5jb25zdCBub29wID0gKF8sIHZhbHVlKSA9PiB2YWx1ZTtcclxuXHJcbmNvbnN0IHByaW1pdGl2ZXMgPSB2YWx1ZSA9PiAoXHJcbiAgdmFsdWUgaW5zdGFuY2VvZiBQcmltaXRpdmUgPyBQcmltaXRpdmUodmFsdWUpIDogdmFsdWVcclxuKTtcclxuXHJcbmNvbnN0IFByaW1pdGl2ZXMgPSAoXywgdmFsdWUpID0+IChcclxuICB0eXBlb2YgdmFsdWUgPT09IHByaW1pdGl2ZSA/IG5ldyBQcmltaXRpdmUodmFsdWUpIDogdmFsdWVcclxuKTtcclxuXHJcbmNvbnN0IHJldml2ZSA9IChpbnB1dCwgcGFyc2VkLCBvdXRwdXQsICQpID0+IHtcclxuICBjb25zdCBsYXp5ID0gW107XHJcbiAgZm9yIChsZXQga2UgPSBrZXlzKG91dHB1dCksIHtsZW5ndGh9ID0ga2UsIHkgPSAwOyB5IDwgbGVuZ3RoOyB5KyspIHtcclxuICAgIGNvbnN0IGsgPSBrZVt5XTtcclxuICAgIGNvbnN0IHZhbHVlID0gb3V0cHV0W2tdO1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJpbWl0aXZlKSB7XHJcbiAgICAgIGNvbnN0IHRtcCA9IGlucHV0W3ZhbHVlXTtcclxuICAgICAgaWYgKHR5cGVvZiB0bXAgPT09IG9iamVjdCAmJiAhcGFyc2VkLmhhcyh0bXApKSB7XHJcbiAgICAgICAgcGFyc2VkLmFkZCh0bXApO1xyXG4gICAgICAgIG91dHB1dFtrXSA9IGlnbm9yZTtcclxuICAgICAgICBsYXp5LnB1c2goe2ssIGE6IFtpbnB1dCwgcGFyc2VkLCB0bXAsICRdfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICAgIG91dHB1dFtrXSA9ICQuY2FsbChvdXRwdXQsIGssIHRtcCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChvdXRwdXRba10gIT09IGlnbm9yZSlcclxuICAgICAgb3V0cHV0W2tdID0gJC5jYWxsKG91dHB1dCwgaywgdmFsdWUpO1xyXG4gIH1cclxuICBmb3IgKGxldCB7bGVuZ3RofSA9IGxhenksIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IHtrLCBhfSA9IGxhenlbaV07XHJcbiAgICBvdXRwdXRba10gPSAkLmNhbGwob3V0cHV0LCBrLCByZXZpdmUuYXBwbHkobnVsbCwgYSkpO1xyXG4gIH1cclxuICByZXR1cm4gb3V0cHV0O1xyXG59O1xyXG5cclxuY29uc3Qgc2V0ID0gKGtub3duLCBpbnB1dCwgdmFsdWUpID0+IHtcclxuICBjb25zdCBpbmRleCA9IFByaW1pdGl2ZShpbnB1dC5wdXNoKHZhbHVlKSAtIDEpO1xyXG4gIGtub3duLnNldCh2YWx1ZSwgaW5kZXgpO1xyXG4gIHJldHVybiBpbmRleDtcclxufTtcclxuXHJcbmNvbnN0IHBhcnNlID0gKHRleHQsIHJldml2ZXIpID0+IHtcclxuICBjb25zdCBpbnB1dCA9ICRwYXJzZSh0ZXh0LCBQcmltaXRpdmVzKS5tYXAocHJpbWl0aXZlcyk7XHJcbiAgY29uc3QgdmFsdWUgPSBpbnB1dFswXTtcclxuICBjb25zdCAkID0gcmV2aXZlciB8fCBub29wO1xyXG4gIGNvbnN0IHRtcCA9IHR5cGVvZiB2YWx1ZSA9PT0gb2JqZWN0ICYmIHZhbHVlID9cclxuICAgICAgICAgICAgICByZXZpdmUoaW5wdXQsIG5ldyBTZXQsIHZhbHVlLCAkKSA6XHJcbiAgICAgICAgICAgICAgdmFsdWU7XHJcbiAgcmV0dXJuICQuY2FsbCh7Jyc6IHRtcH0sICcnLCB0bXApO1xyXG59O1xyXG5cclxuY29uc3Qgc3RyaW5naWZ5ID0gKHZhbHVlLCByZXBsYWNlciwgc3BhY2UpID0+IHtcclxuICBjb25zdCAkID0gcmVwbGFjZXIgJiYgdHlwZW9mIHJlcGxhY2VyID09PSBvYmplY3QgP1xyXG4gICAgICAgICAgICAoaywgdikgPT4gKGsgPT09ICcnIHx8IC0xIDwgcmVwbGFjZXIuaW5kZXhPZihrKSA/IHYgOiB2b2lkIDApIDpcclxuICAgICAgICAgICAgKHJlcGxhY2VyIHx8IG5vb3ApO1xyXG4gIGNvbnN0IGtub3duID0gbmV3IE1hcDtcclxuICBjb25zdCBpbnB1dCA9IFtdO1xyXG4gIGNvbnN0IG91dHB1dCA9IFtdO1xyXG4gIGxldCBpID0gK3NldChrbm93biwgaW5wdXQsICQuY2FsbCh7Jyc6IHZhbHVlfSwgJycsIHZhbHVlKSk7XHJcbiAgbGV0IGZpcnN0UnVuID0gIWk7XHJcbiAgd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcclxuICAgIGZpcnN0UnVuID0gdHJ1ZTtcclxuICAgIG91dHB1dFtpXSA9ICRzdHJpbmdpZnkoaW5wdXRbaSsrXSwgcmVwbGFjZSwgc3BhY2UpO1xyXG4gIH1cclxuICByZXR1cm4gJ1snICsgb3V0cHV0LmpvaW4oJywnKSArICddJztcclxuICBmdW5jdGlvbiByZXBsYWNlKGtleSwgdmFsdWUpIHtcclxuICAgIGlmIChmaXJzdFJ1bikge1xyXG4gICAgICBmaXJzdFJ1biA9ICFmaXJzdFJ1bjtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYWZ0ZXIgPSAkLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XHJcbiAgICBzd2l0Y2ggKHR5cGVvZiBhZnRlcikge1xyXG4gICAgICBjYXNlIG9iamVjdDpcclxuICAgICAgICBpZiAoYWZ0ZXIgPT09IG51bGwpIHJldHVybiBhZnRlcjtcclxuICAgICAgY2FzZSBwcmltaXRpdmU6XHJcbiAgICAgICAgcmV0dXJuIGtub3duLmdldChhZnRlcikgfHwgc2V0KGtub3duLCBpbnB1dCwgYWZ0ZXIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFmdGVyO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBwYXJzZSwgc3RyaW5naWZ5IH1cclxuIiwiLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBrZXlcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEByZXR1cm5zIHt7ZGF0YVR5cGU6IHN0cmluZywgdmFsdWU6IFt1bmtub3duLCB1bmtub3duXVtdfXwqfVxyXG4gKi9cclxuZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxPYmplY3QgPSB0aGlzW2tleV07XHJcbiAgICBpZihvcmlnaW5hbE9iamVjdCBpbnN0YW5jZW9mIE1hcCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnTWFwJyxcclxuICAgICAgICAgICAgdmFsdWU6IEFycmF5LmZyb20ob3JpZ2luYWxPYmplY3QuZW50cmllcygpKSwgLy8gb3Igd2l0aCBzcHJlYWQ6IHZhbHVlOiBbLi4ub3JpZ2luYWxPYmplY3RdXHJcbiAgICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGtleVxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICogQHJldHVybnMge01hcDx1bmtub3duLCB1bmtub3duPnwqfVxyXG4gKi9cclxuZnVuY3Rpb24gcmV2aXZlcihrZXksIHZhbHVlKSB7XHJcbiAgICBpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmRhdGFUeXBlID09PSAnTWFwJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hcCh2YWx1ZS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHJlcGxhY2VyLFxyXG4gICAgcmV2aXZlclxyXG59O1xyXG4iLCIvKipcclxuICogbm90aWZjYXRpb24gdHlwZXNcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXHJcbmNvbnN0IE5BTUVfSVRFTSA9IFwiZWwtdG9hc3RcIixcclxuICAgIElDT05TID0ge1xyXG5cdFx0U1VDQ0VTUzoge1xyXG5cdFx0XHRDTEFTU0VTOiBbXCJmYXNcIiwgXCJmYS1jaGVjay1jaXJjbGVcIl1cclxuXHRcdH0sXHJcblx0XHREQU5HRVI6IHtcclxuXHRcdFx0Q0xBU1NFUzogW1wiZmFzXCIsIFwiZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIl1cclxuXHRcdH0sXHJcblx0XHRJTkZPOiB7XHJcblx0XHRcdENMQVNTRVM6IFtcImZhc1wiLCBcImZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiXVxyXG5cdFx0fSxcclxuXHRcdEFMRVJUOiB7XHJcblx0XHRcdENMQVNTRVM6IFtcImZhc1wiLCBcImZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCJdXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0TU9CSUxFX1JFU09MVVRJT04gPSA3MjBcclxuO1xyXG5cclxuLy8gQ3JlYXRlIHRoZSB0ZW1wbGF0ZVxyXG5idWlsZFRlbXBsYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSk7XHJcblxyXG5cclxubGV0ICR0ZW1wbGF0ZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VsVG9hc3RJdGVtXCIpO1xyXG5cclxuLy8gQ2xvbmUgYW5kIGV4dHJhY3QgaXRzIGNvbnRlbnRcclxuJHRlbXBsYXRlSXRlbSA9ICR0ZW1wbGF0ZUl0ZW0uY2xvbmVOb2RlKHRydWUpLmNvbnRlbnQ7XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIG5vdGlmaWNhdGlvbiBUb2FzdFxyXG4gKi9cclxuY2xhc3MgVG9hc3RJdGVtIGV4dGVuZHMgSFRNTExJRWxlbWVudCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgVG9hc3RJdGVtIENsYXNzIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Ly8gUmVnaXN0ZXIgYSBuZXcgVE9BU1RfUkVNT1ZFRCBjdXN0b20gZXZlbnQgaWYgbm90IGV4aXN0LCBvdGhlcndpc2UgY3JlYXRlIGl0LlxyXG5cdFx0dGhpcy5fZXZlbnRPblJlbW92ZSA9IG5ldyBDdXN0b21FdmVudChcIlRPQVNUX1JFTU9WRURcIikgfHwgZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJUT0FTVF9SRU1PVkVEXCIpO1xyXG5cclxuXHRcdC8vIFNldCBpbml0aWFsIHZpc2libGUgdG8gZmFsc2VcclxuXHRcdHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XHJcblx0fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGNvbm5lY3RlZENhbGxiYWNrIG1ldGhvZFxyXG4gICAgICovXHJcblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcblxyXG5cdFx0Ly8gR2V0IHRoZSBUb2FzdGlmeSBvYmplY3QncyBhdHRyaWJ1dGVzXHJcblx0XHRsZXQgdHlwZSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwidHlwZVwiKS50b1VwcGVyQ2FzZSgpLFxyXG5cdFx0ZGVzY3JpcHRpb24gPSB0aGlzLmdldEF0dHJpYnV0ZShcImRlc2NyaXB0aW9uXCIpLFxyXG5cdFx0dGltZW91dCA9IE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZShcInRpbWVvdXRcIikpLFxyXG5cdFx0aGlkZUNsb3NlID0gQm9vbGVhbihKU09OLnBhcnNlKHRoaXMuZ2V0QXR0cmlidXRlKFwiaGlkZS1jbG9zZVwiKSkpO1xyXG5cclxuXHRcdC8vIENoZWNrIGlmIHRoZSB0eXBlIGlzIHZhbGlkXHJcblx0XHRpZiAoIUlDT05TLmhhc093blByb3BlcnR5KHR5cGUpKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgWyR7TkFNRV9JVEVNfV0gaW52YWxpZCB0eXBlYCk7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0ICRpdGVtID0gJHRlbXBsYXRlSXRlbS5jbG9uZU5vZGUodHJ1ZSksXHRcdFx0XHRcdFx0XHRcdC8vIENvcHkgdGhlIHRlbXBsYXRlIGl0ZW1cclxuXHRcdCRpdGVtRGVzY3JpcHRpb24gPSAkaXRlbS5xdWVyeVNlbGVjdG9yKGAuJHtOQU1FX0lURU19X19kZXNjcmlwdGlvbmApLCAgXHQvLyBHcmFiIGl0ZW0ncyBkZXNjcmlwdGlvbiBjb250YWluZXJcclxuXHRcdCRpdGVtSWNvbiA9ICRpdGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke05BTUVfSVRFTX1fX2ljb25gKSxcdFx0XHRcdFx0Ly8gR3JhYiBpdGVtJ3MgaWNvbiBjb250YWluZXJcclxuXHRcdCRpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIiksXHRcdFx0XHRcdFx0XHRcdFx0Ly8gQ3JlYXRlIG5vdGlmaWNhdGlvbiBpY29uXHJcblx0XHQkaXRlbVByb2dyZXNzID0gJGl0ZW0ucXVlcnlTZWxlY3RvcihgLiR7TkFNRV9JVEVNfV9fcHJvZ3Jlc3NgKSwgICAgXHRcdC8vIEdyYWIgcHJvZ3Jlc3MgYmFyIHdyYXBwZXJcclxuXHRcdCRpdGVtUHJvZ3Jlc3NCYXIgPSAkaXRlbS5xdWVyeVNlbGVjdG9yKGAuJHtOQU1FX0lURU19X19iYXJgKSxcdFx0XHQvLyBHcmFiIHByb2dyZXNzIGJhciBjb250YWluZXJcclxuXHRcdCRpdGVtQ2xvc2UgPSAkaXRlbS5xdWVyeVNlbGVjdG9yKGAuJHtOQU1FX0lURU19X19jbG9zZWApLFx0XHRcdFx0Ly8gR3JhYiBpdGVtIGNsb3NlIGJ1dHRvbiBjb250YWluZXJcclxuXHRcdCRpdGVtQ2xvc2VBY3Rpb24gPSAkaXRlbS5xdWVyeVNlbGVjdG9yKGAuJHtOQU1FX0lURU19X19jbG9zZSBidXR0b25gKSwgXHQvLyBHcmFiIGl0ZW0gY2xvc2UgYnV0dG9uXHJcblx0XHQkY29udGFpbmVyID0gdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG5cdFx0Ly8gTGlzdGVuIHRvIFRPQVNUX1JFTU9WRUQgZXZlbnRcclxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIlRPQVNUX1JFTU9WRURcIiwgdGhpcy5jaGVja1Zpc2libGUsIGZhbHNlKTtcclxuXHJcblx0XHQvLyBJZiB0aGUgb2JqZWN0IGlzIGhpZGRlbiBvciBjbG9zZWQsIHJlbW92ZSBpdFxyXG5cdFx0aWYgKGhpZGVDbG9zZSkge1xyXG5cdFx0XHQkaXRlbUNsb3NlLnJlbW92ZSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdC8vIElmIG5vdCB0aGVuIGxpc3RlbiB0byBjbGljayBldmVudCBvZiB0aGUgY2xvc2UgYnV0dG9uXHJcblx0XHRcdCRpdGVtQ2xvc2VBY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+XHJcblx0XHRcdFx0JGNvbnRhaW5lci5yZW1vdmUodGhpcy5pZClcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBBZGQgbm90aWZ5IGljb24gY2xhc3MgdG8gaWNvblxyXG5cdFx0JGljb24uY2xhc3NMaXN0LmFkZCguLi5JQ09OU1t0eXBlXS5DTEFTU0VTKTtcclxuXHJcblx0XHQvLyBBZGQgdGhlIGljb24gdG8gaWNvbiBjb250YWluZXJcclxuXHRcdCRpdGVtSWNvbi5hcHBlbmRDaGlsZCgkaWNvbik7XHJcblx0XHRcclxuXHRcdC8vIFNldCBpdGVtIGNsYXNzZXNcclxuXHRcdHRoaXMuY2xhc3NMaXN0LmFkZChgJHtOQU1FX0lURU19X19pdGVtYCk7XHJcblx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoYCR7TkFNRV9JVEVNfV9faXRlbS0tJHt0eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcblx0XHRcclxuXHRcdC8vIElmIHRoZSBkZXNjcmlwdGlvbiBpcyBvdmVyIDEwMCBjaGFyYWN0ZXJzXHJcblx0XHRpZiAoZGVzY3JpcHRpb24ubGVuZ3RoID4gMTAwKSB7XHJcblx0XHRcdHNldFNob3J0RGVzY3JpcHRpb24oKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldEZ1bGxEZXNjcmlwdGlvbigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU2V0cyBmdWxsIGRlc2NyaXB0aW9uIGZvciB0aGUgdG9hc3RcclxuXHRcdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBzZXRGdWxsRGVzY3JpcHRpb24oZXZlbnQpIHtcclxuXHRcdFx0JGl0ZW1EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbjtcclxuXHRcdFx0XHJcblx0XHRcdC8vIElmIHRoZSBjYWxsZXIgZG9lcyBub3QgcGFzcyBhbiBldmVudCxcclxuXHRcdFx0Ly8gZXhpdCB0aGUgZnVuY3Rpb24uXHJcblx0XHRcdGlmICghZXZlbnQpIHJldHVybjtcclxuXHJcblx0XHRcdC8vIENyZWF0ZSBhIFwidmlldyBsZXNzXCIgYnV0dG9uXHJcblx0XHRcdGxldCB2aWV3TGVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0XHRcdHZpZXdMZXNzLmlubmVyVGV4dCA9IFwiVmlldyBsZXNzXCI7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBMaXN0ZW4gdG8gY2xpY2sgZXZlbnQuIEV4ZWN1dGUgc2V0U2hvcnREZXNjcmlwdGlvbiBpZiBjbGlja2VkXHJcblx0XHRcdHZpZXdMZXNzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRTaG9ydERlc2NyaXB0aW9uKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIEFkZCB0aGUgYnV0dG9uIHRvIGl0ZW0ncyBkZXNjcmlwdGlvblxyXG5cdFx0XHQkaXRlbURlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHZpZXdMZXNzKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZXRzIHNob3J0IGRlc2NyaXB0aW9uIGZvciB0aGUgdG9hc3RcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gc2V0U2hvcnREZXNjcmlwdGlvbigpIHtcclxuXHJcblx0XHRcdC8vIENyZWF0ZSBhIFwidmlldyBtb3JlXCIgYnV0dG9uXHJcblx0XHRcdGxldCB2aWV3TW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0XHRcdHZpZXdNb3JlLmlubmVyVGV4dCA9IFwiVmlldyBtb3JlXCI7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBMaXN0ZW4gdG8gY2xpY2sgZXZlbnQuIEV4ZWN1dGUgc2V0RnVsbERlc2NyaXB0aW9uIGlmIGNsaWNrZWRcclxuXHRcdFx0dmlld01vcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNldEZ1bGxEZXNjcmlwdGlvbik7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBjdXQgdGhlIGRlc2NyaXB0aW9uIGRvd24gdG8gMTAwIGNoYXJhY3RlcnMgdGhlbiBhZGQgXCIuLi5cIlxyXG5cdFx0XHQkaXRlbURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uLnNsaWNlKDAsIDk5KSArIFwiLi4uXCI7XHJcblxyXG5cdFx0XHQvLyBBZGQgdGhlIGJ1dHRvbiB0byBpdGVtJ3MgZGVzY3JpcHRpb25cclxuXHRcdFx0JGl0ZW1EZXNjcmlwdGlvbi5hcHBlbmRDaGlsZCh2aWV3TW9yZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQWRkIHRoaXMgXHJcblx0XHR0aGlzLmFwcGVuZENoaWxkKCRpdGVtKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5jaGVja1Zpc2libGUoKTtcclxuXHJcblx0XHQvLyBJZiB0aGUgY291bnRlciByZWFjaGVzIDAsIGhpZGUgdGhlIHRvYXN0XHJcblx0XHRpZiAodGltZW91dCA9PT0gMCkge1xyXG5cdFx0XHQkaXRlbVByb2dyZXNzLmNsYXNzTGlzdC5hZGQoYCR7TkFNRV9JVEVNfV9fcHJvZ3Jlc3MtLWhpZGVgKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBjb3VudGRvd25WYWx1ZSA9IDEwMCxcclxuXHRcdHNpemUgPSB0aW1lb3V0IC0gY291bnRkb3duVmFsdWU7XHJcblxyXG5cdFx0bGV0IGNoZWNraW5nID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5pc1Zpc2libGUgJiYgISRjb250YWluZXIuaXNNb3VzZU92ZXIoKSkge1xyXG5cdFx0XHRcdCRpdGVtUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPVxyXG5cdFx0XHRcdHNpemUgKiAxMDAgLyAodGltZW91dCAtIGNvdW50ZG93blZhbHVlKSArIFwiJVwiO1xyXG5cclxuXHRcdFx0XHRzaXplIC09IGNvdW50ZG93blZhbHVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoc2l6ZSA8IC1jb3VudGRvd25WYWx1ZSkge1xyXG5cdFx0XHRcdCRjb250YWluZXIucmVtb3ZlKHRoaXMuaWQpO1xyXG5cclxuXHRcdFx0XHRjbGVhckludGVydmFsKGNoZWNraW5nKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgY291bnRkb3duVmFsdWUpO1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIGl0J3MgdGhlIHRvYXN0J3MgdHVybiB0byBzaG93IHVwXHJcbiAgICAgKi9cclxuXHRjaGVja1Zpc2libGUoKSB7XHJcblx0XHRpZiAodGhpcy5wYXJlbnROb2RlKSB7XHJcblx0XHRcdGxldCBudW1DYXJkcyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPiBNT0JJTEVfUkVTT0xVVElPTiA/IDMgOiAxO1xyXG5cdFx0XHR0aGlzLmlzVmlzaWJsZSA9IEFycmF5LmZyb20odGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuKS5pbmRleE9mKHRoaXMpIDwgbnVtQ2FyZHM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB0aGUgdG9hc3RcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcblx0cmVtb3ZlKCkge1xyXG5cdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudDtcclxuXHRcdHRoaXMuY2xhc3NMaXN0LmFkZChgJHtOQU1FX0lURU19X19pdGVtLS1yZW1vdmluZ2ApO1xyXG5cdFx0aWYgKCFwYXJlbnQgfHwgcGFyZW50Lm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fCAhdGhpcyB8fCB0aGlzLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSlcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRpZiAocGFyZW50Lmhhc0NoaWxkTm9kZXMoKSAmJiBwYXJlbnQuY29udGFpbnModGhpcykpIHtcclxuXHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XHJcblxyXG5cdFx0XHRcdHBhcmVudC5wYXJlbnRFbGVtZW50LmRpc3BhdGNoRXZlbnQodGhpcy5fZXZlbnRPblJlbW92ZSk7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0sIDMwMCk7XHJcblx0fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIG9uIGNsb3NlXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gVGhlIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIG9uIGNsb3NlXHJcbiAgICAgKi9cclxuXHRzZXRPbkNsb3NlKGFjdGlvbikge1xyXG5cdFx0bGV0ICRpdGVtQ2xvc2VBY3Rpb24gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoYC4ke05BTUVfSVRFTX1fX2Nsb3NlIGJ1dHRvbmApO1xyXG5cclxuXHRcdCRpdGVtQ2xvc2VBY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGlvbik7XHJcblx0fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGFjdGlvbnNcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0W119IGFjdGlvbnNcclxuICAgICAqL1xyXG5cdHNldEFjdGlvbnMoYWN0aW9ucykge1xyXG5cclxuXHRcdC8vIElmIG5vIGFjdGlvbiBpcyBzZXQsIGV4aXQgdGhlIG1ldGhvZFxyXG5cdFx0aWYgKCFhY3Rpb25zLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vIEdyYWIgYWN0aW9uIGNvbnRhaW5lclxyXG5cdFx0bGV0ICRpdGVtQWN0aW9ucyA9IHRoaXMucXVlcnlTZWxlY3RvcihgLiR7TkFNRV9JVEVNfV9fYWN0aW9uYCk7XHJcblx0XHRcclxuXHRcdC8vIEZvciBlYWNoIGFjdGlvbiBpbiBhY3Rpb25zXHJcblx0XHRhY3Rpb25zLm1hcChhY3Rpb24gPT4ge1xyXG5cdFx0XHRpZiAodHlwZW9mIGFjdGlvbiAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgWyR7TkFNRV9JVEVNfV0gSW52YWxpZCBhY3Rpb25gKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0ICRhY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuXHRcdFx0aWYgKHR5cGVvZiBhY3Rpb24udGl0bGUgIT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFske05BTUVfSVRFTX1dIEVudGVyIGEgdmFsaWQgdGl0bGUgZm9yIHRoZSBhY3Rpb25gKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JGFjdGlvbi5pbm5lclRleHQgPSBhY3Rpb24udGl0bGU7XHJcblxyXG5cdFx0XHRpZiAodHlwZW9mIGFjdGlvbi5vbkNsaWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFske05BTUVfSVRFTX1dIEVudGVyIGEgdmFsaWQgcm9sZSBmb3IgdGhlIGFjdGlvbmApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkYWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY3Rpb24ub25DbGljayk7XHJcblxyXG5cdFx0XHQkaXRlbUFjdGlvbnMuYXBwZW5kQ2hpbGQoJGFjdGlvbik7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBpdGVtIG5hbWVcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBpdGVtXHJcbiAgICAgKi9cclxuXHRzdGF0aWMgaXMoKSB7XHJcblx0XHRyZXR1cm4gYCR7TkFNRV9JVEVNfS1pdGVtYDtcclxuXHR9XHJcbn1cclxuXHJcbi8vIERlZmluZXMgYSBjdXN0b20gbGkgdGFnLlxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoVG9hc3RJdGVtLmlzKCksIFRvYXN0SXRlbSwgeyBleHRlbmRzOiBcImxpXCIgfSk7XHJcblxyXG4vLyBEZWZhdWx0IGNvbnN0YW50c1xyXG5jb25zdCBOQU1FID0gXCJlbC10b2FzdFwiLFxyXG5USU1FT1VUX1JFTU9WRSA9IDgwMDAsXHJcbkRPTV9MSU1JVCA9IDU7XHJcblxyXG4vLyBHcmFiIHRoZSB0ZW1wbGF0ZSB0YWdcclxubGV0ICR0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWxUb2FzdFwiKTtcclxuXHJcbi8vIGNsb25lIHRoZSB0ZW1wbGF0ZSBhbmQgZ3JhYiB0aGUgdW5vcmRlcmVkIGxpc3QgZnJvbSB0aGUgZG9jdW1lbnQgZnJhZ21lbnQgb2JqZWN0XHJcbiR0ZW1wbGF0ZSA9ICR0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSkuY29udGVudC5xdWVyeVNlbGVjdG9yKGAuJHtOQU1FfWApO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudCBhIFRvYXN0IG9iamVjdFxyXG4gKi9cclxuY2xhc3MgVG9hc3QgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRhbGl6ZXMgdGhlIFRvYXN0IG9iamVjdC5cclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Ly8gUmVnaXN0ZXIgYSBuZXcgVE9BU1RfUkVNT1ZFRCBjdXN0b20gZXZlbnQgaWYgbm90IGV4aXN0LCBvdGhlcndpc2UgY3JlYXRlIGl0LlxyXG5cdFx0dGhpcy5fZXZlbnRPblJlbW92ZSA9IG5ldyBDdXN0b21FdmVudChcIlRPQVNUX1JFTU9WRURcIikgfHwgZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJUT0FTVF9SRU1PVkVEXCIpO1xyXG5cclxuXHRcdC8vIEluaXRpYWxpemVzIHByaXZhdGUgdmFyaWFibGVzXHJcblx0XHR0aGlzLl9tb3VzZU92ZXIgPSBmYWxzZTtcclxuXHRcdHRoaXMuX2xpc3QgPSB7fTtcclxuXHRcdHRoaXMuX2xpc3RDYWNoZSA9IHt9O1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExpc3RlbnMgZm9yIG1vdXNlb3ZlciBldmVudFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgb3IgRmFsc2VcclxuICAgICAqL1xyXG5cdGlzTW91c2VPdmVyKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vdXNlT3ZlcjtcclxuXHR9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIG1vdXNlb3ZlciB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXHJcbiAgICAgKi9cclxuXHRzZXRNb3VzZU92ZXIodmFsdWUpIHtcclxuXHRcdHRoaXMuX21vdXNlT3ZlciA9IEJvb2xlYW4odmFsdWUpO1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJyaWRlcyB0aGUgZGVmYXVsdCBjb25uZWN0ZWRDYWxsYmFjayBtZXRob2RcclxuICAgICAqL1xyXG5cdGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG5cclxuXHRcdHRoaXMuYXBwZW5kQ2hpbGQoJHRlbXBsYXRlKTtcclxuXHRcdFxyXG5cdFx0Ly8gTGlzdGVudCB0byBldmVudHNcclxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIlRPQVNUX1JFTU9WRURcIiwgYnJvYWRjYXN0VG9hc3RSZW1vdmVkLCBmYWxzZSk7XHJcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGhhbmRsZU1vdXNlT3Zlcik7XHJcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZU1vdXNlT3Zlcik7XHJcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBoYW5kbGVNb3VzZU91dCk7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBoYW5kbGVNb3VzZU91dCk7XHJcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhhbmRsZU1vdXNlT3V0KTtcclxuXHJcblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZU92ZXIoKSB7XHJcblx0XHRcdCR0ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKGAke05BTUV9LS1wYXVzZWRgKTtcclxuXHRcdFx0dGhpcy5zZXRNb3VzZU92ZXIodHJ1ZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VPdXQoKSB7XHJcblx0XHRcdCR0ZW1wbGF0ZS5jbGFzc0xpc3QucmVtb3ZlKGAke05BTUV9LS1wYXVzZWRgKTtcclxuXHRcdFx0dGhpcy5zZXRNb3VzZU92ZXIoZmFsc2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGJyb2FkY2FzdFRvYXN0UmVtb3ZlZCgpIHtcclxuXHRcdFx0T2JqZWN0LnZhbHVlcyh0aGlzLl9saXN0KVxyXG5cdFx0XHQuc2xpY2UoMCwgNSlcclxuXHRcdFx0Lm1hcCh0b2FzdCA9PiB7XHJcblx0XHRcdHRvYXN0LmRpc3BhdGNoRXZlbnQodGhpcy5fZXZlbnRPblJlbW92ZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUHVibGlzaCB0b2FzdCB3aXRoIGEgc2V0IG9mIHNldHRpbmdzXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgc2V0dGluZ3MgZm9yIHRoZSB0b2FzdFxyXG5cdCAqL1xyXG5cdHB1Ymxpc2goY29uZmlnKSB7XHJcblx0XHRcclxuXHRcdC8vIEdldCBlbGVtZW50cyBmcm9tIGNvbmZpZyBvYmplY3QgaWYgZXhpc3RlZCwgb3RoZXJ3aXNlIHNldCBhcyBkZWZhdWx0XHJcblx0XHRsZXQgdHlwZSA9IFN0cmluZyhjb25maWcudHlwZSB8fCBcImluZm9cIiksXHJcblx0XHRkZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbiB8fCBcIlwiLFx0ICBcclxuXHJcblx0XHR0aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQgPCAwIHx8IHR5cGVvZiBjb25maWcudGltZW91dCAhPT0gXCJudW1iZXJcIiBcdD8gVElNRU9VVF9SRU1PVkUgOiBjb25maWcudGltZW91dCxcclxuXHJcblx0XHRvbkNsb3NlID0gdHlwZW9mIGNvbmZpZy5vbkNsb3NlID09PSBcImZ1bmN0aW9uXCIgPyBjb25maWcub25DbG9zZSA6IGZ1bmN0aW9uKCkge30sXHJcblxyXG5cdFx0aGlkZUNsb3NlID0gQm9vbGVhbihjb25maWcuaGlkZUNsb3NlKSxcclxuXHRcdGFjdGlvbnMgPSB0eXBlb2YgY29uZmlnLmFjdGlvbnMgPT09IFwib2JqZWN0XCIgPyBjb25maWcuYWN0aW9ucyA6IFtdLFxyXG5cdFx0JHRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgaXM6IGAke05BTUV9LWl0ZW1gIH0pLFxyXG5cclxuXHRcdGlkID0gXCJ0b2FzdF9cIiArIGdlbmVyYXRlSWQoKTtcclxuXHJcblx0XHRpZiAoIWRlc2NyaXB0aW9uKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgWyR7TkFNRX1dIEEgZGVzY3JpcHRpb24gaXMgcmVxdWlyZWRgKTtcclxuXHRcdH1cclxuXHJcblx0XHQkdG9hc3QuaWQgPSBpZDtcclxuXHRcdCR0b2FzdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG5cdFx0JHRvYXN0LnNldEF0dHJpYnV0ZShcImRlc2NyaXB0aW9uXCIsIGRlc2NyaXB0aW9uKTtcclxuXHRcdCR0b2FzdC5zZXRBdHRyaWJ1dGUoXCJ0aW1lb3V0XCIsIHRpbWVvdXQpO1xyXG5cdFx0JHRvYXN0LnNldEF0dHJpYnV0ZShcImhpZGUtY2xvc2VcIiwgU3RyaW5nKGhpZGVDbG9zZSkpO1xyXG5cclxuXHRcdCR0b2FzdCA9ICR0b2FzdC5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG5cdFx0aWYgKE9iamVjdC52YWx1ZXModGhpcy5fbGlzdCkubGVuZ3RoID4gRE9NX0xJTUlUKSB7XHJcblx0XHRcdHRoaXMuX2xpc3RDYWNoZVtpZF0gPSB7XHJcblx0XHRcdGVsOiAkdG9hc3QsXHJcblx0XHRcdGhpZGVDbG9zZTogaGlkZUNsb3NlLFxyXG5cdFx0XHRvbkNsb3NlOiBvbkNsb3NlLFxyXG5cdFx0XHRhY3Rpb25zOiBhY3Rpb25zXHJcblx0XHRcdH07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkdG9hc3QgPSAkdGVtcGxhdGUuYXBwZW5kQ2hpbGQoJHRvYXN0KTtcclxuXHJcblx0XHRcdGlmICghJHRvYXN0KSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghaGlkZUNsb3NlKSB7XHJcblx0XHRcdFx0JHRvYXN0LnNldE9uQ2xvc2Uob25DbG9zZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChhY3Rpb25zLmxlbmd0aCkge1xyXG5cdFx0XHRcdCR0b2FzdC5zZXRBY3Rpb25zKGFjdGlvbnMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9saXN0W2lkXSA9ICR0b2FzdDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBSYW5kb21seSBnZW5lcmF0ZSB0b2FzdCBpZFxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBnZW5lcmF0ZUlkKCkge1xyXG5cdFx0XHRyZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBpZDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbW92ZXMgdG9hc3RcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gaWQgXHJcblx0ICovXHJcblx0cmVtb3ZlKGlkKSB7XHJcblx0XHRpZiAodGhpcy5fbGlzdC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcclxuXHRcdFx0dGhpcy5fbGlzdFtpZF0ucmVtb3ZlKCk7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLl9saXN0W2lkXTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5fbGlzdENhY2hlLmhhc093blByb3BlcnR5KGlkKSkge1xyXG5cdFx0XHRkZWxldGUgdGhpcy5fbGlzdENhY2hlW2lkXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5fbGlzdENhY2hlKS5sZW5ndGgpIHtcclxuXHRcdFx0bGV0IGtleUNhY2hlZCA9IE9iamVjdC5rZXlzKHRoaXMuX2xpc3RDYWNoZSlbMF0sXHJcblx0XHRcdHZhbHVlQ2FjaGVkID0gT2JqZWN0LnZhbHVlcyh0aGlzLl9saXN0Q2FjaGUpWzBdO1xyXG5cclxuXHRcdFx0dmFsdWVDYWNoZWQuZWwgPSAkdGVtcGxhdGUuYXBwZW5kQ2hpbGQodmFsdWVDYWNoZWQuZWwpO1xyXG5cclxuXHRcdFx0aWYgKCF2YWx1ZUNhY2hlZC5oaWRlQ2xvc2UpIHtcclxuXHRcdFx0XHR2YWx1ZUNhY2hlZC5lbC5zZXRPbkNsb3NlKHZhbHVlQ2FjaGVkLm9uQ2xvc2UpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodmFsdWVDYWNoZWQuYWN0aW9ucy5sZW5ndGgpIHtcclxuXHRcdFx0XHR2YWx1ZUNhY2hlZC5lbC5zZXRBY3Rpb25zKHZhbHVlQ2FjaGVkLmFjdGlvbnMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9saXN0W2tleUNhY2hlZF0gPSB2YWx1ZUNhY2hlZC5lbDtcclxuXHJcblx0XHRcdGRlbGV0ZSB0aGlzLl9saXN0Q2FjaGVba2V5Q2FjaGVkXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHJldHVybnMgdGhlIG5hbWUgb2YgdGhlIHRlbXBsYXRlIGVsZW1lbnRcclxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgdGVtcGxhdGUgZWxlbWVudFxyXG5cdCAqL1xyXG5cdHN0YXRpYyBpcygpIHtcclxuXHRcdHJldHVybiBOQU1FO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgdGhlIGN1c3RvbSBlbGVtZW50XHJcbiAqL1xyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoVG9hc3QuaXMoKSwgVG9hc3QpO1xyXG5cclxuLyoqXHJcbiAqIEJ1aWxkIHRoZSB0ZW1wbGF0ZVxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgXHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZFRlbXBsYXRlKHRhcmdldCl7XHJcblx0bGV0IHRlbXBsYXRlX25hbWUgPSBcImVsLXRvYXN0XCI7XHJcblxyXG5cdC8vIENyZWF0ZSBlbGVtZW50c1xyXG5cdGxldCB0ZW1wbGF0ZV9jb250YWluZXIgXHQ9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdGl0ZW1fY29udGFpbmVyIFx0XHRcdD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0ZW1wbGF0ZV9uYW1lKSxcclxuXHRkb2N1bWVudF9mcmFnbWVudCBcdFx0PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpLFxyXG5cdGljb25fY29udGFpbmVyIFx0XHRcdD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0Y2xvc2VfYnV0dG9uX2NvbnRhaW5lciAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRjbG9zZV9idXR0b24gXHRcdFx0PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuXHRjbG9zZV9idXR0b25fdGV4dCBcdFx0PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyksXHJcblx0ZGVzY3JpcHRpb25fY29udGFpbmVyIFx0PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRhY3Rpb25fY29udGFpbmVyIFx0XHQ9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdHByb2dyZXNzX2Jhcl93cmFwcGVyICBcdD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0cHJvZ3Jlc3NfYmFyX2NvbnRhaW5lciBcdD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0ZG9jdW1lbnRfZnJhZ21lbnRfMiBcdD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSxcclxuXHRkb2N1bWVudF9mcmFnbWVudF8yX3VsICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG5cclxuXHQvLyBBc3NpZ24gSURzXHJcblx0dGVtcGxhdGVfY29udGFpbmVyLmlkICA9IFwidGVtcGxhdGVcIjtcclxuXHRkb2N1bWVudF9mcmFnbWVudC5pZCAgID0gXCJlbFRvYXN0SXRlbVwiO1xyXG5cdGRvY3VtZW50X2ZyYWdtZW50XzIuaWQgPSBcImVsVG9hc3RcIjtcclxuXHJcblx0Ly8gQXNzaWduIENsYXNzZXNcclxuXHRpY29uX2NvbnRhaW5lci5jbGFzc0xpc3QgXHRcdCA9IHRlbXBsYXRlX25hbWUgKyBcIl9faWNvblwiO1xyXG5cdGNsb3NlX2J1dHRvbl9jb250YWluZXIuY2xhc3NMaXN0ID0gdGVtcGxhdGVfbmFtZSArIFwiX19jbG9zZVwiO1xyXG5cdGRlc2NyaXB0aW9uX2NvbnRhaW5lci5jbGFzc0xpc3QgID0gdGVtcGxhdGVfbmFtZSArIFwiX19kZXNjcmlwdGlvblwiO1xyXG5cdGFjdGlvbl9jb250YWluZXIuY2xhc3NMaXN0IFx0XHQgPSB0ZW1wbGF0ZV9uYW1lICsgXCJfX2FjdGlvblwiO1xyXG5cdHByb2dyZXNzX2Jhcl93cmFwcGVyLmNsYXNzTGlzdCBcdCA9IHRlbXBsYXRlX25hbWUgKyBcIl9fcHJvZ3Jlc3NcIjtcclxuXHRwcm9ncmVzc19iYXJfY29udGFpbmVyLmNsYXNzTGlzdCA9IHRlbXBsYXRlX25hbWUgKyBcIl9fYmFyXCI7XHJcblx0Y2xvc2VfYnV0dG9uX3RleHQuY2xhc3NMaXN0IFx0ID0gXCJmYSBmYS1mdyBmYS10aW1lc1wiO1xyXG5cdGRvY3VtZW50X2ZyYWdtZW50XzJfdWwuY2xhc3NMaXN0ID0gdGVtcGxhdGVfbmFtZTtcclxuXHJcblx0Ly8gQWRkIHByZWRlZmluZWQgc3R5bGVkXHJcblx0dGVtcGxhdGVfY29udGFpbmVyLnN0eWxlLmZvbnRTaXplICA9IFwiMTBweFwiO1xyXG5cdHByb2dyZXNzX2Jhcl9jb250YWluZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuXHJcblx0Ly8gQXBwZW5kIGVsZW1lbnRzXHJcblx0Y2xvc2VfYnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlX2J1dHRvbl90ZXh0KTtcclxuXHRjbG9zZV9idXR0b25fY29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlX2J1dHRvbik7XHJcblx0cHJvZ3Jlc3NfYmFyX3dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NfYmFyX2NvbnRhaW5lcik7XHJcblx0XHJcblx0Ly8gQXBwZW5kIGVsZW1lbnQgdG8gZG9jdW1lbnQgZnJhZ21lbnRzXHJcblx0ZG9jdW1lbnRfZnJhZ21lbnQuY29udGVudC5hcHBlbmRDaGlsZChpY29uX2NvbnRhaW5lcik7XHJcblx0ZG9jdW1lbnRfZnJhZ21lbnQuY29udGVudC5hcHBlbmRDaGlsZChjbG9zZV9idXR0b25fY29udGFpbmVyKTtcclxuXHRkb2N1bWVudF9mcmFnbWVudC5jb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uX2NvbnRhaW5lcik7XHJcblx0ZG9jdW1lbnRfZnJhZ21lbnQuY29udGVudC5hcHBlbmRDaGlsZChhY3Rpb25fY29udGFpbmVyKTtcclxuXHRkb2N1bWVudF9mcmFnbWVudC5jb250ZW50LmFwcGVuZENoaWxkKHByb2dyZXNzX2Jhcl93cmFwcGVyKTtcclxuXHJcblx0ZG9jdW1lbnRfZnJhZ21lbnRfMi5jb250ZW50LmFwcGVuZENoaWxkKGRvY3VtZW50X2ZyYWdtZW50XzJfdWwpO1xyXG5cclxuXHQvLyBBcHBlbmQgZXZlcnl0aGluZyB0byB0aGUgdGVtcGxhdGUgY29udGFpbmVyXHJcblx0dGVtcGxhdGVfY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1fY29udGFpbmVyKTtcclxuXHR0ZW1wbGF0ZV9jb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnRfZnJhZ21lbnQpO1xyXG5cdHRlbXBsYXRlX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudF9mcmFnbWVudF8yKTtcclxuXHJcblx0Ly8gQWRkcGVuZCB0aGUgbm90aWZpY2F0aW9uIHRvIHRoZSBib2R5XHJcblx0dGFyZ2V0LmFwcGVuZENoaWxkKHRlbXBsYXRlX2NvbnRhaW5lcik7XHJcblxyXG5cdHJldHVybiB0ZW1wbGF0ZV9jb250YWluZXI7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyB0aGUgc3RhcnR1cCBmdW5jdGlvblxuLy8gSXQncyBlbXB0eSBhcyBzb21lIHJ1bnRpbWUgbW9kdWxlIGhhbmRsZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Jcbl9fd2VicGFja19yZXF1aXJlX18ueCA9IHggPT4ge31cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhZG1pbn51dGlsc19mXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vc3JjL2phdmFzY3JpcHRzL2FkbWluLW1haW4uanNcIixcImFkbWlufm5vZGVfbW9kdWxlc19ib290c3RyYXBfZGlzdF9qc19ib290c3RyYXBfZXNtX2pzXzdiMTdlMTAxXCIsXCJhZG1pbn5ub2RlX21vZHVsZXNfY1wiLFwiYWRtaW5+bm9kZV9tb2R1bGVzX2ZvcnRhd2Vzb21lX2ZvbnRhd2Vzb21lLWZyZWVfanNfclwiLFwiYWRtaW5+bm9kZV9tb2R1bGVzX2pxdWVyeV9kaXN0X2pxdWVyeV9qc18xXCIsXCJhZG1pbn5ub2RlX21vZHVsZXNfcFwiLFwiYWRtaW5+c3JjX2pcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSB4ID0+IHt9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZSwgZXhlY3V0ZU1vZHVsZXNdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcblx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cdH1cblxuXHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG5cdGlmKGV4ZWN1dGVNb2R1bGVzKSBkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcblxuXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcblx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY2hhdHN1cHBvcnRfNF8wXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NoYXRzdXBwb3J0XzRfMFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7XG5cbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSB4ID0+IHt9O1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG52YXIgc3RhcnR1cCA9IF9fd2VicGFja19yZXF1aXJlX18ueDtcbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gc3RhcnR1cCB8fCAoeCA9PiB7fSk7XG5cdHJldHVybiAoY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwpKCk7XG59OyIsIi8vIHJ1biBzdGFydHVwXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9