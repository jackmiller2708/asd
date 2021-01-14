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
/******/ 			"admin~utils_m": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/javascripts/admin-main.js","admin~node_modules_b","admin~node_modules_fortawesome_fontawesome-free_js_b","admin~node_modules_fortawesome_fontawesome-free_js_r","admin~node_modules_jquery_dist_jquery_js_1","admin~node_modules_p","admin~src_j"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0c3VwcG9ydC00LjAvLi91dGlscy90b2FzdC9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vY2hhdHN1cHBvcnQtNC4wLy4vdXRpbHMvdG9hc3QvbWFpbi5zY3NzPzA5ZGYiLCJ3ZWJwYWNrOi8vY2hhdHN1cHBvcnQtNC4wLy4vdXRpbHMvbWFwVXRpdGxzLmpzIiwid2VicGFjazovL2NoYXRzdXBwb3J0LTQuMC8uL3V0aWxzL3RvYXN0L1RvYXN0aWZ5LmpzIiwid2VicGFjazovL2NoYXRzdXBwb3J0LTQuMC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaGF0c3VwcG9ydC00LjAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2hhdHN1cHBvcnQtNC4wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaGF0c3VwcG9ydC00LjAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jaGF0c3VwcG9ydC00LjAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaGF0c3VwcG9ydC00LjAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaGF0c3VwcG9ydC00LjAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2hhdHN1cHBvcnQtNC4wL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHNIQUFzSDtBQUN0SDtBQUNBLDJFQUEyRSx3QkFBd0IsY0FBYyxrQkFBa0IsMkJBQTJCLHFCQUFxQixpQkFBaUIsZUFBZSxzQkFBc0Isb0JBQW9CLGFBQWEs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QUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBLGdCQUFnQiwyQkFBMkI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLDRDQUE0QztXQUM1QztXQUNBLEU7Ozs7VUNwRkE7VUFDQSIsImZpbGUiOiJhZG1pbn51dGlsc19tLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDQwMGksNzAwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4qKiBDb21wb25lbnRcXG4qL1xcbi5lbC10b2FzdCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAxNnB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIHBhZGRpbmc6IDAgMCAxMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGN1YmljLWJlemllcigwLjUsIDAsIDAuMSwgMSk7XFxuICB3aWR0aDogMzUwcHg7XFxufVxcbi5lbC10b2FzdC0tcGF1c2VkIHtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuLmVsLXRvYXN0IGJ1dHRvbiwgLmVsLXRvYXN0IGJ1dHRvbjpmb2N1cywgLmVsLXRvYXN0IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5lbC10b2FzdF9faXRlbTpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbi5lbC10b2FzdF9faXRlbTpudGgtY2hpbGQobis0KSB7XFxuICBib3R0b206IDA7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4uZWwtdG9hc3RfX2l0ZW06bnRoLWNoaWxkKG4rNCkgLmVsLXRvYXN0X19pY29uLFxcbi5lbC10b2FzdF9faXRlbTpudGgtY2hpbGQobis0KSAuZWwtdG9hc3RfX3Byb2dyZXNzLFxcbi5lbC10b2FzdF9faXRlbTpudGgtY2hpbGQobis0KSAuZWwtdG9hc3RfX2Rlc2NyaXB0aW9uLFxcbi5lbC10b2FzdF9faXRlbTpudGgtY2hpbGQobis0KSAuZWwtdG9hc3RfX2FjdGlvbiB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uZWwtdG9hc3RfX2l0ZW06bnRoLWNoaWxkKG4rNikge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwLjg1KTtcXG4gIHotaW5kZXg6IDE5NzA7XFxufVxcbi5lbC10b2FzdF9faXRlbTpudGgtY2hpbGQoNCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTk1OTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgwLjk1KTtcXG4gIHotaW5kZXg6IDE5OTA7XFxufVxcbi5lbC10b2FzdF9faXRlbTpudGgtY2hpbGQoNSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc2NzY3NjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwLjkpO1xcbiAgei1pbmRleDogMTk4MDtcXG59XFxuLmVsLXRvYXN0X19pdGVtIHtcXG4gIGFuaW1hdGlvbjogYXBwZW5kLWluIDMwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSBmb3J3YXJkcztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBbaGVhZGVyXSBcXFwiaWNvbiBkZXNjcmlwdGlvbiBjbG9zZVxcXCIgYXV0byBbYm9keV0gXFxcImljb24gYWN0aW9uIGNsb3NlXFxcIiBhdXRvIFtmb290ZXJdIFxcXCJwcm9ncmVzcyBwcm9ncmVzcyBwcm9ncmVzc1xcXCIgYXV0by8zOHB4IDFmciAzOHB4O1xcbiAgbWF4LWhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSksIGJhY2tncm91bmQgMzAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpLCBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSwgbWF4LWhlaWdodCAzMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjAwMDtcXG59XFxuQGtleWZyYW1lcyBhcHBlbmQtaW4ge1xcbiAgZnJvbSB7XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhcHBlbmQtb3V0IHtcXG4gIHRvIHtcXG4gICAgbWF4LWhlaWdodDogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgfVxcbn1cXG4uZWwtdG9hc3RfX2l0ZW0tLWRhbmdlciAuZWwtdG9hc3RfX2FjdGlvbiBidXR0b24sXFxuLmVsLXRvYXN0X19pdGVtLS1kYW5nZXIgLmVsLXRvYXN0X19hY3Rpb24gYSwgLmVsLXRvYXN0X19pdGVtLS1kYW5nZXIgLmVsLXRvYXN0X19hY3Rpb24gaSwgLmVsLXRvYXN0X19pdGVtLS1kYW5nZXIgLmVsLXRvYXN0X19kZXNjcmlwdGlvbiBidXR0b24sXFxuLmVsLXRvYXN0X19pdGVtLS1kYW5nZXIgLmVsLXRvYXN0X19kZXNjcmlwdGlvbiBhLCAuZWwtdG9hc3RfX2l0ZW0tLWRhbmdlciAuZWwtdG9hc3RfX2Rlc2NyaXB0aW9uIGksIC5lbC10b2FzdF9faXRlbS0tZGFuZ2VyIC5lbC10b2FzdF9faWNvbiBidXR0b24sXFxuLmVsLXRvYXN0X19pdGVtLS1kYW5nZXIgLmVsLXRvYXN0X19pY29uIGEsIC5lbC10b2FzdF9faXRlbS0tZGFuZ2VyIC5lbC10b2FzdF9faWNvbiBpIHtcXG4gIGNvbG9yOiAjREY2OTYyO1xcbn1cXG4uZWwtdG9hc3RfX2l0ZW0tLWRhbmdlciAuZWwtdG9hc3RfX2JhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDY0MDM4O1xcbn1cXG4uZWwtdG9hc3RfX2l0ZW0tLWFsZXJ0IC5lbC10b2FzdF9fYWN0aW9uIGJ1dHRvbixcXG4uZWwtdG9hc3RfX2l0ZW0tLWFsZXJ0IC5lbC10b2FzdF9fYWN0aW9uIGEsIC5lbC10b2FzdF9faXRlbS0tYWxlcnQgLmVsLXRvYXN0X19hY3Rpb24gaSwgLmVsLXRvYXN0X19pdGVtLS1hbGVydCAuZWwtdG9hc3RfX2Rlc2NyaXB0aW9uIGJ1dHRvbixcXG4uZWwtdG9hc3RfX2l0ZW0tLWFsZXJ0IC5lbC10b2FzdF9fZGVzY3JpcHRpb24gYSwgLmVsLXRvYXN0X19pdGVtLS1hbGVydCAuZWwtdG9hc3RfX2Rlc2NyaXB0aW9uIGksIC5lbC10b2FzdF9faXRlbS0tYWxlcnQgLmVsLXRvYXN0X19pY29uIGJ1dHRvbixcXG4uZWwtdG9hc3RfX2l0ZW0tLWFsZXJ0IC5lbC10b2FzdF9faWNvbiBhLCAuZWwtdG9hc3RfX2l0ZW0tLWFsZXJ0IC5lbC10b2FzdF9faWNvbiBpIHtcXG4gIGNvbG9yOiAjRjNDQzZCO1xcbn1cXG4uZWwtdG9hc3RfX2l0ZW0tLWFsZXJ0IC5lbC10b2FzdF9fYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkJDM0M7XFxufVxcbi5lbC10b2FzdF9faXRlbS0tc3VjY2VzcyAuZWwtdG9hc3RfX2FjdGlvbiBidXR0b24sXFxuLmVsLXRvYXN0X19pdGVtLS1zdWNjZXNzIC5lbC10b2FzdF9fYWN0aW9uIGEsIC5lbC10b2FzdF9faXRlbS0tc3VjY2VzcyAuZWwtdG9hc3RfX2FjdGlvbiBpLCAuZWwtdG9hc3RfX2l0ZW0tLXN1Y2Nlc3MgLmVsLXRvYXN0X19kZXNjcmlwdGlvbiBidXR0b24sXFxuLmVsLXRvYXN0X19pdGVtLS1zdWNjZXNzIC5lbC10b2FzdF9fZGVzY3JpcHRpb24gYSwgLmVsLXRvYXN0X19pdGVtLS1zdWNjZXNzIC5lbC10b2FzdF9fZGVzY3JpcHRpb24gaSwgLmVsLXRvYXN0X19pdGVtLS1zdWNjZXNzIC5lbC10b2FzdF9faWNvbiBidXR0b24sXFxuLmVsLXRvYXN0X19pdGVtLS1zdWNjZXNzIC5lbC10b2FzdF9faWNvbiBhLCAuZWwtdG9hc3RfX2l0ZW0tLXN1Y2Nlc3MgLmVsLXRvYXN0X19pY29uIGkge1xcbiAgY29sb3I6ICM1NEE2Njg7XFxufVxcbi5lbC10b2FzdF9faXRlbS0tc3VjY2VzcyAuZWwtdG9hc3RfX2JhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRBNjY4O1xcbn1cXG4uZWwtdG9hc3RfX2l0ZW0tLWluZm8gLmVsLXRvYXN0X19hY3Rpb24gYnV0dG9uLFxcbi5lbC10b2FzdF9faXRlbS0taW5mbyAuZWwtdG9hc3RfX2FjdGlvbiBhLCAuZWwtdG9hc3RfX2l0ZW0tLWluZm8gLmVsLXRvYXN0X19hY3Rpb24gaSwgLmVsLXRvYXN0X19pdGVtLS1pbmZvIC5lbC10b2FzdF9fZGVzY3JpcHRpb24gYnV0dG9uLFxcbi5lbC10b2FzdF9faXRlbS0taW5mbyAuZWwtdG9hc3RfX2Rlc2NyaXB0aW9uIGEsIC5lbC10b2FzdF9faXRlbS0taW5mbyAuZWwtdG9hc3RfX2Rlc2NyaXB0aW9uIGksIC5lbC10b2FzdF9faXRlbS0taW5mbyAuZWwtdG9hc3RfX2ljb24gYnV0dG9uLFxcbi5lbC10b2FzdF9faXRlbS0taW5mbyAuZWwtdG9hc3RfX2ljb24gYSwgLmVsLXRvYXN0X19pdGVtLS1pbmZvIC5lbC10b2FzdF9faWNvbiBpIHtcXG4gIGNvbG9yOiAjNzFDM0REO1xcbn1cXG4uZWwtdG9hc3RfX2l0ZW0tLWluZm8gLmVsLXRvYXN0X19iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4QjFEMztcXG59XFxuLmVsLXRvYXN0X19pdGVtLS1tZXNzYWdlIC5lbC10b2FzdF9fYWN0aW9uIGJ1dHRvbixcXG4uZWwtdG9hc3RfX2l0ZW0tLW1lc3NhZ2UgLmVsLXRvYXN0X19hY3Rpb24gYSwgLmVsLXRvYXN0X19pdGVtLS1tZXNzYWdlIC5lbC10b2FzdF9fYWN0aW9uIGksIC5lbC10b2FzdF9faXRlbS0tbWVzc2FnZSAuZWwtdG9hc3RfX2Rlc2NyaXB0aW9uIGJ1dHRvbixcXG4uZWwtdG9hc3RfX2l0ZW0tLW1lc3NhZ2UgLmVsLXRvYXN0X19kZXNjcmlwdGlvbiBhLCAuZWwtdG9hc3RfX2l0ZW0tLW1lc3NhZ2UgLmVsLXRvYXN0X19kZXNjcmlwdGlvbiBpLCAuZWwtdG9hc3RfX2l0ZW0tLW1lc3NhZ2UgLmVsLXRvYXN0X19pY29uIGJ1dHRvbixcXG4uZWwtdG9hc3RfX2l0ZW0tLW1lc3NhZ2UgLmVsLXRvYXN0X19pY29uIGEsIC5lbC10b2FzdF9faXRlbS0tbWVzc2FnZSAuZWwtdG9hc3RfX2ljb24gaSB7XFxuICBjb2xvcjogI0ZGRjtcXG59XFxuLmVsLXRvYXN0X19pdGVtLS1tZXNzYWdlIC5lbC10b2FzdF9fYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxufVxcbi5lbC10b2FzdF9faXRlbS0tcmVtb3Zpbmcge1xcbiAgYW5pbWF0aW9uOiBhcHBlbmQtb3V0IDMwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLCAxLCAxKSBmb3J3YXJkcztcXG59XFxuLmVsLXRvYXN0X19pY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgZ3JpZC1hcmVhOiBpY29uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMnB4IDhweCAxMnB4IDEycHg7XFxufVxcbi5lbC10b2FzdF9fZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxLjRlbTtcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBwYWRkaW5nOiAwIDhweDtcXG59XFxuLmVsLXRvYXN0X19kZXNjcmlwdGlvbiBidXR0b246aG92ZXIsIC5lbC10b2FzdF9fZGVzY3JpcHRpb24gYnV0dG9uOmZvY3VzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uZWwtdG9hc3RfX2Nsb3NlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgZ3JpZC1hcmVhOiBjbG9zZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZWwtdG9hc3RfX2Nsb3NlIGJ1dHRvbiB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgcGFkZGluZzogMTBweCA4cHggOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5lbC10b2FzdF9fYWN0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiBhY3Rpb247XFxufVxcbi5lbC10b2FzdF9fYWN0aW9uIGJ1dHRvbixcXG4uZWwtdG9hc3RfX2FjdGlvbiBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMS40ZW07XFxuICBwYWRkaW5nOiAwIDhweCAxMHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLmVsLXRvYXN0X19hY3Rpb24gYnV0dG9uOmhvdmVyLCAuZWwtdG9hc3RfX2FjdGlvbiBidXR0b246Zm9jdXMsXFxuLmVsLXRvYXN0X19hY3Rpb24gYTpob3ZlcixcXG4uZWwtdG9hc3RfX2FjdGlvbiBhOmZvY3VzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uZWwtdG9hc3RfX3Byb2dyZXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjcsIDIzMCwgMC4xNSk7XFxuICBncmlkLWNvbHVtbjogcHJvZ3Jlc3M7XFxuICBoZWlnaHQ6IDRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjA7XFxufVxcbi5lbC10b2FzdF9fcHJvZ3Jlc3MtLWhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmVsLXRvYXN0X19iYXIge1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDEwMG1zIGN1YmljLWJlemllcigwLjUsIDAsIDAuMSwgMSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4uZWwtdG9hc3QtLWV4YW1wbGUge1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxNzVweCk7XFxuICByaWdodDogMDtcXG4gIHRvcDogY2FsYyg1MCUgLSAzM3B4KTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xcbiAgLmVsLXRvYXN0IHtcXG4gICAgbWFyZ2luOiAxNnB4IDA7XFxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuZWwtdG9hc3RfX2l0ZW0ge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XFxuICB9XFxuICAuZWwtdG9hc3RfX2l0ZW06bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICB9XFxuICAuZWwtdG9hc3RfX2l0ZW06bnRoLWNoaWxkKG4rMikge1xcbiAgICBib3R0b206IDA7XFxuICAgIG1heC1oZWlnaHQ6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIH1cXG4gIC5lbC10b2FzdF9faXRlbTpudGgtY2hpbGQobisyKSAuZWwtdG9hc3RfX2ljb24sXFxuLmVsLXRvYXN0X19pdGVtOm50aC1jaGlsZChuKzIpIC5lbC10b2FzdF9fcHJvZ3Jlc3MsXFxuLmVsLXRvYXN0X19pdGVtOm50aC1jaGlsZChuKzIpIC5lbC10b2FzdF9fZGVzY3JpcHRpb24sXFxuLmVsLXRvYXN0X19pdGVtOm50aC1jaGlsZChuKzIpIC5lbC10b2FzdF9fYWN0aW9uIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIC5lbC10b2FzdF9faXRlbTpudGgtY2hpbGQobis0KSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwLjkpO1xcbiAgICB6LWluZGV4OiAxOTcwO1xcbiAgfVxcbiAgLmVsLXRvYXN0X19pdGVtOm50aC1jaGlsZCgyKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTU5NTk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgwLjk1KTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xcbiAgICB6LWluZGV4OiAxOTkwO1xcbiAgfVxcbiAgLmVsLXRvYXN0X19pdGVtOm50aC1jaGlsZCgzKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Njc2NzY7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwLjkpO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XFxuICAgIHotaW5kZXg6IDE5ODA7XFxuICB9XFxuICAuZWwtdG9hc3QtLWV4YW1wbGUge1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzNweCk7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3V0aWxzL3RvYXN0L21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7Q0FBQTtBQVNBO0VBQ0MsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxzREFBQTtFQUNBLFlBQUE7QUFORDtBQVFDO0VBQ0MsWUFBQTtBQU5GO0FBVUU7RUFHQyw2QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQVZIO0FBY0M7RUFDQyxlQUFBO0FBWkY7QUFlQztFQUNDLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBYkY7QUFlRTs7OztFQUlDLFVBQUE7QUFiSDtBQWlCQztFQUNDLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7QUFmRjtBQWtCQztFQUNDLHlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0FBaEJGO0FBbUJDO0VBQ0MseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7QUFqQkY7QUFvQkM7RUFDQywrREFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhJQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4TEFBQTtFQUVBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFuQkY7QUFxQkU7RUFDQztJQUNDLGFBQUE7SUFDQSxVQUFBO0lBQ0EscUJBQUE7RUFuQkY7QUFDRjtBQXNCRTtFQUNDO0lBQ0MsYUFBQTtJQUNBLFVBQUE7SUFDQSxxQkFBQTtFQXBCRjtBQUNGO0FBNEJLOzs7O0VBRUMsY0FBQTtBQXhCTjtBQTRCSTtFQUNDLHlCQUFBO0FBMUJMO0FBb0NLOzs7O0VBRUMsY0FBQTtBQWhDTjtBQW9DSTtFQUNDLHlCQUFBO0FBbENMO0FBNENLOzs7O0VBRUMsY0FBQTtBQXhDTjtBQTRDSTtFQUNDLHlCQUFBO0FBMUNMO0FBb0RLOzs7O0VBRUMsY0FBQTtBQWhETjtBQW9ESTtFQUNDLHlCQUFBO0FBbERMO0FBNERLOzs7O0VBRUMsV0FBQTtBQXhETjtBQTRESTtFQUNDLHNCQUFBO0FBMURMO0FBK0RFO0VBQ0MsZ0VBQUE7QUE3REg7QUFpRUM7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQS9ERjtBQWtFQztFQUNDLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWhFRjtBQW1FRztFQUVDLDBCQUFBO0FBbEVKO0FBdUVDO0VBQ0MsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQXJFRjtBQXVFRTtFQUNDLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBckVIO0FBeUVDO0VBQ0MsbUJBQUE7QUF2RUY7QUF5RUU7O0VBRUMscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUF2RUg7QUF5RUc7OztFQUVDLDBCQUFBO0FBdEVKO0FBMkVDO0VBQ0MsMkNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQXpFRjtBQTJFRTtFQUNDLGFBQUE7QUF6RUg7QUE2RUM7RUFDQyxTQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9EQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUEzRUY7QUFnRkM7RUFDQyx1QkFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtBQTlFRjs7QUFrRkE7RUFDQztJQUNDLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQS9FQTtFQWdGQTtJQUNDLHdCQUFBO0VBOUVEO0VBZ0ZBO0lBQ0MsZUFBQTtFQTlFRDtFQWlGQTtJQUNDLFNBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBL0VEO0VBaUZDOzs7O0lBSUMsVUFBQTtFQS9FRjtFQW1GQTtJQUNDLFVBQUE7SUFDQSxtQ0FBQTtJQUNBLGFBQUE7RUFqRkQ7RUFvRkE7SUFDQyx5QkFBQTtJQUNBLHVDQUFBO0lBQ0Esd0JBQUE7SUFDQSxhQUFBO0VBbEZEO0VBcUZBO0lBQ0MseUJBQUE7SUFDQSxtQ0FBQTtJQUNBLHdCQUFBO0lBQ0EsYUFBQTtFQW5GRDtFQXdGRDtJQUNDLE9BQUE7SUFDQSxxQkFBQTtFQXRGQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw0MDBpLDcwMFxcXCIpO1xcclxcblxcclxcbi8qXFxyXFxuKiogQ29tcG9uZW50XFxyXFxuKi9cXHJcXG5cXHJcXG4kcm9vdDogXFxcIi5lbC10b2FzdFxcXCI7XFxyXFxuJHRyYW5zaXRpb24tZGVmYXVsdDogY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC4xLCAxKTtcXHJcXG4kdHJhbnNpdGlvbi1pbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpO1xcclxcbiR0cmFuc2l0aW9uLW91dDogY3ViaWMtYmV6aWVyKDAuMjUsIDAsIDEsIDEpO1xcclxcblxcclxcbiN7JHJvb3R9IHtcXHJcXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gYm90dG9tOiAwO1xcclxcbiBkaXNwbGF5OiBmbGV4O1xcclxcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiBsaXN0LXN0eWxlOiBub25lO1xcclxcbiBtYXJnaW46IDE2cHg7XFxyXFxuIG9wYWNpdHk6IDE7XFxyXFxuIHBhZGRpbmc6IDAgMCAxMHB4O1xcclxcbiBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuIHJpZ2h0OiAwO1xcclxcbiB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zICR0cmFuc2l0aW9uLWRlZmF1bHQ7XFxyXFxuIHdpZHRoOiAzNTBweDtcXHJcXG5cXHJcXG4gJi0tcGF1c2VkIHtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG4gfVxcclxcblxcclxcbiBidXR0b24ge1xcclxcbiAgJixcXHJcXG4gICY6Zm9jdXMsXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICBib3JkZXI6IDA7XFxyXFxuICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICB9XFxyXFxuIH1cXHJcXG5cXHJcXG4gJl9faXRlbTpub3QoOmZpcnN0LWNoaWxkKSB7XFxyXFxuICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxuIH1cXHJcXG5cXHJcXG4gJl9faXRlbTpudGgtY2hpbGQobiArIDQpIHtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIG1heC1oZWlnaHQ6IDQwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFxyXFxuICAjeyRyb290fV9faWNvbixcXHJcXG4gICN7JHJvb3R9X19wcm9ncmVzcyxcXHJcXG4gICN7JHJvb3R9X19kZXNjcmlwdGlvbixcXHJcXG4gICN7JHJvb3R9X19hY3Rpb24ge1xcclxcbiAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuIH1cXHJcXG5cXHJcXG4gJl9faXRlbTpudGgtY2hpbGQobiArIDYpIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC44NSk7XFxyXFxuICB6LWluZGV4OiAxOTcwO1xcclxcbiB9XFxyXFxuXFxyXFxuICZfX2l0ZW06bnRoLWNoaWxkKDQpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTU5NTk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMC45NSk7XFxyXFxuICB6LWluZGV4OiAxOTkwO1xcclxcbiB9XFxyXFxuXFxyXFxuICZfX2l0ZW06bnRoLWNoaWxkKDUpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3Njc2NzY7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45KTtcXHJcXG4gIHotaW5kZXg6IDE5ODA7XFxyXFxuIH1cXHJcXG5cXHJcXG4gJl9faXRlbSB7XFxyXFxuICBhbmltYXRpb246IGFwcGVuZC1pbiAzMDBtcyAkdHJhbnNpdGlvbi1pbiBmb3J3YXJkcztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiBbaGVhZGVyXSBcXFwiaWNvbiBkZXNjcmlwdGlvbiBjbG9zZVxcXCJhdXRvIFtib2R5XSBcXFwiaWNvbiBhY3Rpb24gY2xvc2VcXFwiYXV0byBbZm9vdGVyXSBcXFwicHJvZ3Jlc3MgcHJvZ3Jlc3MgcHJvZ3Jlc3NcXFwiYXV0byAvIDM4cHggMWZyIDM4cHg7XFxyXFxuICBtYXgtaGVpZ2h0OiA0MDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zICR0cmFuc2l0aW9uLWluLCBiYWNrZ3JvdW5kIDMwMG1zICR0cmFuc2l0aW9uLWluLFxcclxcbiAgIG9wYWNpdHkgMzAwbXMgJHRyYW5zaXRpb24taW4sIG1heC1oZWlnaHQgMzAwbXMgJHRyYW5zaXRpb24taW47XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogMjAwMDtcXHJcXG5cXHJcXG4gIEBrZXlmcmFtZXMgYXBwZW5kLWluIHtcXHJcXG4gICBmcm9tIHtcXHJcXG4gICAgbWF4LWhlaWdodDogMDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbiAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBrZXlmcmFtZXMgYXBwZW5kLW91dCB7XFxyXFxuICAgdG8ge1xcclxcbiAgICBtYXgtaGVpZ2h0OiAwO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxuICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJi0tZGFuZ2VyIHtcXHJcXG4gICAjeyRyb290fSB7XFxyXFxuICAgICZfX2FjdGlvbixcXHJcXG4gICAgJl9fZGVzY3JpcHRpb24sXFxyXFxuICAgICZfX2ljb24ge1xcclxcbiAgICAgYnV0dG9uLFxcclxcbiAgICAgYSwgaSB7XFxyXFxuICAgICAgY29sb3I6IFxcdCNERjY5NjI7XFxyXFxuICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYmFyIHtcXHJcXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNENjQwMzg7XFxyXFxuICAgIH1cXHJcXG4gICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLS1hbGVydCB7XFxyXFxuICAgI3skcm9vdH0ge1xcclxcbiAgICAmX19hY3Rpb24sXFxyXFxuICAgICZfX2Rlc2NyaXB0aW9uLFxcclxcbiAgICAmX19pY29uIHtcXHJcXG4gICAgIGJ1dHRvbixcXHJcXG4gICAgIGEsIGkge1xcclxcbiAgICAgIGNvbG9yOiAjRjNDQzZCO1xcclxcbiAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2JhciB7XFxyXFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZCQzNDO1xcclxcbiAgICB9XFxyXFxuICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJi0tc3VjY2VzcyB7XFxyXFxuICAgI3skcm9vdH0ge1xcclxcbiAgICAmX19hY3Rpb24sXFxyXFxuICAgICZfX2Rlc2NyaXB0aW9uLFxcclxcbiAgICAmX19pY29uIHtcXHJcXG4gICAgIGJ1dHRvbixcXHJcXG4gICAgIGEsIGkge1xcclxcbiAgICAgIGNvbG9yOiAjNTRBNjY4O1xcclxcbiAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2JhciB7XFxyXFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRBNjY4O1xcclxcbiAgICB9XFxyXFxuICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJi0taW5mbyB7XFxyXFxuICAgI3skcm9vdH0ge1xcclxcbiAgICAmX19hY3Rpb24sXFxyXFxuICAgICZfX2Rlc2NyaXB0aW9uLFxcclxcbiAgICAmX19pY29uIHtcXHJcXG4gICAgIGJ1dHRvbixcXHJcXG4gICAgIGEsIGkge1xcclxcbiAgICAgIGNvbG9yOiAjNzFDM0REO1xcclxcbiAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2JhciB7XFxyXFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhCMUQzO1xcclxcbiAgICB9XFxyXFxuICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJi0tbWVzc2FnZSB7XFxyXFxuICAgI3skcm9vdH0ge1xcclxcbiAgICAmX19hY3Rpb24sXFxyXFxuICAgICZfX2Rlc2NyaXB0aW9uLFxcclxcbiAgICAmX19pY29uIHtcXHJcXG4gICAgIGJ1dHRvbixcXHJcXG4gICAgIGEsIGkge1xcclxcbiAgICAgIGNvbG9yOiAjRkZGO1xcclxcbiAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2JhciB7XFxyXFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcclxcbiAgICB9XFxyXFxuICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJi0tcmVtb3Zpbmcge1xcclxcbiAgIGFuaW1hdGlvbjogYXBwZW5kLW91dCAzMDBtcyAkdHJhbnNpdGlvbi1vdXQgZm9yd2FyZHM7XFxyXFxuICB9XFxyXFxuIH1cXHJcXG5cXHJcXG4gJl9faWNvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gIGdyaWQtYXJlYTogaWNvbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTJweCA4cHggMTJweCAxMnB4O1xcclxcbiB9XFxyXFxuXFxyXFxuICZfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40ZW07XFxyXFxuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxyXFxuICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgcGFkZGluZzogMCA4cHg7XFxyXFxuXFxyXFxuICBidXR0b24ge1xcclxcbiAgICY6aG92ZXIsXFxyXFxuICAgJjpmb2N1cyB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgIH1cXHJcXG4gIH1cXHJcXG4gfVxcclxcblxcclxcbiAmX19jbG9zZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gIGdyaWQtYXJlYTogY2xvc2U7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgY29sb3I6ICNmZmY7XFxyXFxuICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgaGVpZ2h0OiAzOHB4O1xcclxcbiAgIHBhZGRpbmc6IDEwcHggOHB4IDhweDtcXHJcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuIH1cXHJcXG5cXHJcXG4gJl9fYWN0aW9uIHtcXHJcXG4gIGdyaWQtY29sdW1uOiBhY3Rpb247XFxyXFxuXFxyXFxuICBidXR0b24sXFxyXFxuICBhIHtcXHJcXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgZm9udC1zaXplOiAxLjRlbTtcXHJcXG4gICBwYWRkaW5nOiAwIDhweCAxMHB4O1xcclxcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFxyXFxuICAgJjpob3ZlcixcXHJcXG4gICAmOmZvY3VzIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgfVxcclxcbiAgfVxcclxcbiB9XFxyXFxuXFxyXFxuICZfX3Byb2dyZXNzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50aXplKCNFMUUzRTYsIDAuODUpO1xcclxcbiAgZ3JpZC1jb2x1bW46IHByb2dyZXNzO1xcclxcbiAgaGVpZ2h0OiA0cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDIwO1xcclxcblxcclxcbiAgJi0taGlkZSB7XFxyXFxuICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gfVxcclxcblxcclxcbiAmX19iYXIge1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDRweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zaXRpb246IHdpZHRoIDEwMG1zICR0cmFuc2l0aW9uLWRlZmF1bHQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiB9XFxyXFxuXFxyXFxuIC8vIElnbm9yZVxcclxcblxcclxcbiAmLS1leGFtcGxlIHtcXHJcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTc1cHgpO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0b3A6IGNhbGMoNTAlIC0gMzNweCk7XFxyXFxuIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xcclxcbiAjeyRyb290fSB7XFxyXFxuICBtYXJnaW46IDE2cHggMDtcXHJcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcclxcbiAgcGFkZGluZzogMTBweCAwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gICZfX2l0ZW0ge1xcclxcbiAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcXHJcXG4gIH1cXHJcXG4gICZfX2l0ZW06bm90KDpmaXJzdC1jaGlsZCkge1xcclxcbiAgIG1hcmdpbi10b3A6IDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2l0ZW06bnRoLWNoaWxkKG4gKyAyKSB7XFxyXFxuICAgYm90dG9tOiAwO1xcclxcbiAgIG1heC1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcclxcbiAgICN7JHJvb3R9X19pY29uLFxcclxcbiAgICN7JHJvb3R9X19wcm9ncmVzcyxcXHJcXG4gICAjeyRyb290fV9fZGVzY3JpcHRpb24sXFxyXFxuICAgI3skcm9vdH1fX2FjdGlvbiB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9faXRlbTpudGgtY2hpbGQobiArIDQpIHtcXHJcXG4gICBvcGFjaXR5OiAwO1xcclxcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwLjkpO1xcclxcbiAgIHotaW5kZXg6IDE5NzA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTk1OTtcXHJcXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMC45NSk7XFxyXFxuICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xcclxcbiAgIHotaW5kZXg6IDE5OTA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzc2NzY3NjtcXHJcXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45KTtcXHJcXG4gICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XFxyXFxuICAgei1pbmRleDogMTk4MDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gLy8gSWdub3JlXFxyXFxuXFxyXFxuICYtLWV4YW1wbGUge1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogY2FsYyg1MCUgLSAzM3B4KTtcXHJcXG4gIH1cXHJcXG4gfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBrZXlcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEByZXR1cm5zIHt7ZGF0YVR5cGU6IHN0cmluZywgdmFsdWU6IFt1bmtub3duLCB1bmtub3duXVtdfXwqfVxyXG4gKi9cclxuZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxPYmplY3QgPSB0aGlzW2tleV07XHJcbiAgICBpZihvcmlnaW5hbE9iamVjdCBpbnN0YW5jZW9mIE1hcCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnTWFwJyxcclxuICAgICAgICAgICAgdmFsdWU6IEFycmF5LmZyb20ob3JpZ2luYWxPYmplY3QuZW50cmllcygpKSwgLy8gb3Igd2l0aCBzcHJlYWQ6IHZhbHVlOiBbLi4ub3JpZ2luYWxPYmplY3RdXHJcbiAgICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGtleVxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICogQHJldHVybnMge01hcDx1bmtub3duLCB1bmtub3duPnwqfVxyXG4gKi9cclxuZnVuY3Rpb24gcmV2aXZlcihrZXksIHZhbHVlKSB7XHJcbiAgICBpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmRhdGFUeXBlID09PSAnTWFwJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hcCh2YWx1ZS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHJlcGxhY2VyLFxyXG4gICAgcmV2aXZlclxyXG59O1xyXG4iLCIvKipcclxuICogbm90aWZjYXRpb24gdHlwZXNcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXHJcbmNvbnN0IE5BTUVfSVRFTSA9IFwiZWwtdG9hc3RcIixcclxuICAgIElDT05TID0ge1xyXG5cdFx0U1VDQ0VTUzoge1xyXG5cdFx0XHRDTEFTU0VTOiBbXCJmYXNcIiwgXCJmYS1jaGVjay1jaXJjbGVcIl1cclxuXHRcdH0sXHJcblx0XHREQU5HRVI6IHtcclxuXHRcdFx0Q0xBU1NFUzogW1wiZmFzXCIsIFwiZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIl1cclxuXHRcdH0sXHJcblx0XHRJTkZPOiB7XHJcblx0XHRcdENMQVNTRVM6IFtcImZhc1wiLCBcImZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiXVxyXG5cdFx0fSxcclxuXHRcdEFMRVJUOiB7XHJcblx0XHRcdENMQVNTRVM6IFtcImZhc1wiLCBcImZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCJdXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0TU9CSUxFX1JFU09MVVRJT04gPSA3MjBcclxuO1xyXG5cclxuLy8gQ3JlYXRlIHRoZSB0ZW1wbGF0ZVxyXG5idWlsZFRlbXBsYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSk7XHJcblxyXG5cclxubGV0ICR0ZW1wbGF0ZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VsVG9hc3RJdGVtXCIpO1xyXG5cclxuLy8gQ2xvbmUgYW5kIGV4dHJhY3QgaXRzIGNvbnRlbnRcclxuJHRlbXBsYXRlSXRlbSA9ICR0ZW1wbGF0ZUl0ZW0uY2xvbmVOb2RlKHRydWUpLmNvbnRlbnQ7XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIG5vdGlmaWNhdGlvbiBUb2FzdFxyXG4gKi9cclxuY2xhc3MgVG9hc3RJdGVtIGV4dGVuZHMgSFRNTExJRWxlbWVudCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgVG9hc3RJdGVtIENsYXNzIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Ly8gUmVnaXN0ZXIgYSBuZXcgVE9BU1RfUkVNT1ZFRCBjdXN0b20gZXZlbnQgaWYgbm90IGV4aXN0LCBvdGhlcndpc2UgY3JlYXRlIGl0LlxyXG5cdFx0dGhpcy5fZXZlbnRPblJlbW92ZSA9IG5ldyBDdXN0b21FdmVudChcIlRPQVNUX1JFTU9WRURcIikgfHwgZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJUT0FTVF9SRU1PVkVEXCIpO1xyXG5cclxuXHRcdC8vIFNldCBpbml0aWFsIHZpc2libGUgdG8gZmFsc2VcclxuXHRcdHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XHJcblx0fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGNvbm5lY3RlZENhbGxiYWNrIG1ldGhvZFxyXG4gICAgICovXHJcblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcblxyXG5cdFx0Ly8gR2V0IHRoZSBUb2FzdGlmeSBvYmplY3QncyBhdHRyaWJ1dGVzXHJcblx0XHRsZXQgdHlwZSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwidHlwZVwiKS50b1VwcGVyQ2FzZSgpLFxyXG5cdFx0ZGVzY3JpcHRpb24gPSB0aGlzLmdldEF0dHJpYnV0ZShcImRlc2NyaXB0aW9uXCIpLFxyXG5cdFx0dGltZW91dCA9IE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZShcInRpbWVvdXRcIikpLFxyXG5cdFx0aGlkZUNsb3NlID0gQm9vbGVhbihKU09OLnBhcnNlKHRoaXMuZ2V0QXR0cmlidXRlKFwiaGlkZS1jbG9zZVwiKSkpO1xyXG5cclxuXHRcdC8vIENoZWNrIGlmIHRoZSB0eXBlIGlzIHZhbGlkXHJcblx0XHRpZiAoIUlDT05TLmhhc093blByb3BlcnR5KHR5cGUpKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgWyR7TkFNRV9JVEVNfV0gaW52YWxpZCB0eXBlYCk7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0ICRpdGVtID0gJHRlbXBsYXRlSXRlbS5jbG9uZU5vZGUodHJ1ZSksXHRcdFx0XHRcdFx0XHRcdC8vIENvcHkgdGhlIHRlbXBsYXRlIGl0ZW1cclxuXHRcdCRpdGVtRGVzY3JpcHRpb24gPSAkaXRlbS5xdWVyeVNlbGVjdG9yKGAuJHtOQU1FX0lURU19X19kZXNjcmlwdGlvbmApLCAgXHQvLyBHcmFiIGl0ZW0ncyBkZXNjcmlwdGlvbiBjb250YWluZXJcclxuXHRcdCRpdGVtSWNvbiA9ICRpdGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke05BTUVfSVRFTX1fX2ljb25gKSxcdFx0XHRcdFx0Ly8gR3JhYiBpdGVtJ3MgaWNvbiBjb250YWluZXJcclxuXHRcdCRpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIiksXHRcdFx0XHRcdFx0XHRcdFx0Ly8gQ3JlYXRlIG5vdGlmaWNhdGlvbiBpY29uXHJcblx0XHQkaXRlbVByb2dyZXNzID0gJGl0ZW0ucXVlcnlTZWxlY3RvcihgLiR7TkFNRV9JVEVNfV9fcHJvZ3Jlc3NgKSwgICAgXHRcdC8vIEdyYWIgcHJvZ3Jlc3MgYmFyIHdyYXBwZXJcclxuXHRcdCRpdGVtUHJvZ3Jlc3NCYXIgPSAkaXRlbS5xdWVyeVNlbGVjdG9yKGAuJHtOQU1FX0lURU19X19iYXJgKSxcdFx0XHQvLyBHcmFiIHByb2dyZXNzIGJhciBjb250YWluZXJcclxuXHRcdCRpdGVtQ2xvc2UgPSAkaXRlbS5xdWVyeVNlbGVjdG9yKGAuJHtOQU1FX0lURU19X19jbG9zZWApLFx0XHRcdFx0Ly8gR3JhYiBpdGVtIGNsb3NlIGJ1dHRvbiBjb250YWluZXJcclxuXHRcdCRpdGVtQ2xvc2VBY3Rpb24gPSAkaXRlbS5xdWVyeVNlbGVjdG9yKGAuJHtOQU1FX0lURU19X19jbG9zZSBidXR0b25gKSwgXHQvLyBHcmFiIGl0ZW0gY2xvc2UgYnV0dG9uXHJcblx0XHQkY29udGFpbmVyID0gdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG5cdFx0Ly8gTGlzdGVuIHRvIFRPQVNUX1JFTU9WRUQgZXZlbnRcclxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIlRPQVNUX1JFTU9WRURcIiwgdGhpcy5jaGVja1Zpc2libGUsIGZhbHNlKTtcclxuXHJcblx0XHQvLyBJZiB0aGUgb2JqZWN0IGlzIGhpZGRlbiBvciBjbG9zZWQsIHJlbW92ZSBpdFxyXG5cdFx0aWYgKGhpZGVDbG9zZSkge1xyXG5cdFx0XHQkaXRlbUNsb3NlLnJlbW92ZSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdC8vIElmIG5vdCB0aGVuIGxpc3RlbiB0byBjbGljayBldmVudCBvZiB0aGUgY2xvc2UgYnV0dG9uXHJcblx0XHRcdCRpdGVtQ2xvc2VBY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+XHJcblx0XHRcdFx0JGNvbnRhaW5lci5yZW1vdmUodGhpcy5pZClcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBBZGQgbm90aWZ5IGljb24gY2xhc3MgdG8gaWNvblxyXG5cdFx0JGljb24uY2xhc3NMaXN0LmFkZCguLi5JQ09OU1t0eXBlXS5DTEFTU0VTKTtcclxuXHJcblx0XHQvLyBBZGQgdGhlIGljb24gdG8gaWNvbiBjb250YWluZXJcclxuXHRcdCRpdGVtSWNvbi5hcHBlbmRDaGlsZCgkaWNvbik7XHJcblx0XHRcclxuXHRcdC8vIFNldCBpdGVtIGNsYXNzZXNcclxuXHRcdHRoaXMuY2xhc3NMaXN0LmFkZChgJHtOQU1FX0lURU19X19pdGVtYCk7XHJcblx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoYCR7TkFNRV9JVEVNfV9faXRlbS0tJHt0eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcblx0XHRcclxuXHRcdC8vIElmIHRoZSBkZXNjcmlwdGlvbiBpcyBvdmVyIDEwMCBjaGFyYWN0ZXJzXHJcblx0XHRpZiAoZGVzY3JpcHRpb24ubGVuZ3RoID4gMTAwKSB7XHJcblx0XHRcdHNldFNob3J0RGVzY3JpcHRpb24oKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldEZ1bGxEZXNjcmlwdGlvbigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU2V0cyBmdWxsIGRlc2NyaXB0aW9uIGZvciB0aGUgdG9hc3RcclxuXHRcdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBzZXRGdWxsRGVzY3JpcHRpb24oZXZlbnQpIHtcclxuXHRcdFx0JGl0ZW1EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbjtcclxuXHRcdFx0XHJcblx0XHRcdC8vIElmIHRoZSBjYWxsZXIgZG9lcyBub3QgcGFzcyBhbiBldmVudCxcclxuXHRcdFx0Ly8gZXhpdCB0aGUgZnVuY3Rpb24uXHJcblx0XHRcdGlmICghZXZlbnQpIHJldHVybjtcclxuXHJcblx0XHRcdC8vIENyZWF0ZSBhIFwidmlldyBsZXNzXCIgYnV0dG9uXHJcblx0XHRcdGxldCB2aWV3TGVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0XHRcdHZpZXdMZXNzLmlubmVyVGV4dCA9IFwiVmlldyBsZXNzXCI7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBMaXN0ZW4gdG8gY2xpY2sgZXZlbnQuIEV4ZWN1dGUgc2V0U2hvcnREZXNjcmlwdGlvbiBpZiBjbGlja2VkXHJcblx0XHRcdHZpZXdMZXNzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRTaG9ydERlc2NyaXB0aW9uKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIEFkZCB0aGUgYnV0dG9uIHRvIGl0ZW0ncyBkZXNjcmlwdGlvblxyXG5cdFx0XHQkaXRlbURlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHZpZXdMZXNzKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZXRzIHNob3J0IGRlc2NyaXB0aW9uIGZvciB0aGUgdG9hc3RcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gc2V0U2hvcnREZXNjcmlwdGlvbigpIHtcclxuXHJcblx0XHRcdC8vIENyZWF0ZSBhIFwidmlldyBtb3JlXCIgYnV0dG9uXHJcblx0XHRcdGxldCB2aWV3TW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0XHRcdHZpZXdNb3JlLmlubmVyVGV4dCA9IFwiVmlldyBtb3JlXCI7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBMaXN0ZW4gdG8gY2xpY2sgZXZlbnQuIEV4ZWN1dGUgc2V0RnVsbERlc2NyaXB0aW9uIGlmIGNsaWNrZWRcclxuXHRcdFx0dmlld01vcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNldEZ1bGxEZXNjcmlwdGlvbik7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBjdXQgdGhlIGRlc2NyaXB0aW9uIGRvd24gdG8gMTAwIGNoYXJhY3RlcnMgdGhlbiBhZGQgXCIuLi5cIlxyXG5cdFx0XHQkaXRlbURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uLnNsaWNlKDAsIDk5KSArIFwiLi4uXCI7XHJcblxyXG5cdFx0XHQvLyBBZGQgdGhlIGJ1dHRvbiB0byBpdGVtJ3MgZGVzY3JpcHRpb25cclxuXHRcdFx0JGl0ZW1EZXNjcmlwdGlvbi5hcHBlbmRDaGlsZCh2aWV3TW9yZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQWRkIHRoaXMgXHJcblx0XHR0aGlzLmFwcGVuZENoaWxkKCRpdGVtKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5jaGVja1Zpc2libGUoKTtcclxuXHJcblx0XHQvLyBJZiB0aGUgY291bnRlciByZWFjaGVzIDAsIGhpZGUgdGhlIHRvYXN0XHJcblx0XHRpZiAodGltZW91dCA9PT0gMCkge1xyXG5cdFx0XHQkaXRlbVByb2dyZXNzLmNsYXNzTGlzdC5hZGQoYCR7TkFNRV9JVEVNfV9fcHJvZ3Jlc3MtLWhpZGVgKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBjb3VudGRvd25WYWx1ZSA9IDEwMCxcclxuXHRcdHNpemUgPSB0aW1lb3V0IC0gY291bnRkb3duVmFsdWU7XHJcblxyXG5cdFx0bGV0IGNoZWNraW5nID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5pc1Zpc2libGUgJiYgISRjb250YWluZXIuaXNNb3VzZU92ZXIoKSkge1xyXG5cdFx0XHRcdCRpdGVtUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPVxyXG5cdFx0XHRcdHNpemUgKiAxMDAgLyAodGltZW91dCAtIGNvdW50ZG93blZhbHVlKSArIFwiJVwiO1xyXG5cclxuXHRcdFx0XHRzaXplIC09IGNvdW50ZG93blZhbHVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoc2l6ZSA8IC1jb3VudGRvd25WYWx1ZSkge1xyXG5cdFx0XHRcdCRjb250YWluZXIucmVtb3ZlKHRoaXMuaWQpO1xyXG5cclxuXHRcdFx0XHRjbGVhckludGVydmFsKGNoZWNraW5nKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgY291bnRkb3duVmFsdWUpO1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIGl0J3MgdGhlIHRvYXN0J3MgdHVybiB0byBzaG93IHVwXHJcbiAgICAgKi9cclxuXHRjaGVja1Zpc2libGUoKSB7XHJcblx0XHRpZiAodGhpcy5wYXJlbnROb2RlKSB7XHJcblx0XHRcdGxldCBudW1DYXJkcyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPiBNT0JJTEVfUkVTT0xVVElPTiA/IDMgOiAxO1xyXG5cdFx0XHR0aGlzLmlzVmlzaWJsZSA9IEFycmF5LmZyb20odGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuKS5pbmRleE9mKHRoaXMpIDwgbnVtQ2FyZHM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB0aGUgdG9hc3RcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcblx0cmVtb3ZlKCkge1xyXG5cdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudDtcclxuXHRcdHRoaXMuY2xhc3NMaXN0LmFkZChgJHtOQU1FX0lURU19X19pdGVtLS1yZW1vdmluZ2ApO1xyXG5cdFx0aWYgKCFwYXJlbnQgfHwgcGFyZW50Lm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fCAhdGhpcyB8fCB0aGlzLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSlcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRpZiAocGFyZW50Lmhhc0NoaWxkTm9kZXMoKSAmJiBwYXJlbnQuY29udGFpbnModGhpcykpIHtcclxuXHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XHJcblxyXG5cdFx0XHRcdHBhcmVudC5wYXJlbnRFbGVtZW50LmRpc3BhdGNoRXZlbnQodGhpcy5fZXZlbnRPblJlbW92ZSk7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0sIDMwMCk7XHJcblx0fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIG9uIGNsb3NlXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gVGhlIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIG9uIGNsb3NlXHJcbiAgICAgKi9cclxuXHRzZXRPbkNsb3NlKGFjdGlvbikge1xyXG5cdFx0bGV0ICRpdGVtQ2xvc2VBY3Rpb24gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoYC4ke05BTUVfSVRFTX1fX2Nsb3NlIGJ1dHRvbmApO1xyXG5cclxuXHRcdCRpdGVtQ2xvc2VBY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGlvbik7XHJcblx0fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGFjdGlvbnNcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0W119IGFjdGlvbnNcclxuICAgICAqL1xyXG5cdHNldEFjdGlvbnMoYWN0aW9ucykge1xyXG5cclxuXHRcdC8vIElmIG5vIGFjdGlvbiBpcyBzZXQsIGV4aXQgdGhlIG1ldGhvZFxyXG5cdFx0aWYgKCFhY3Rpb25zLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vIEdyYWIgYWN0aW9uIGNvbnRhaW5lclxyXG5cdFx0bGV0ICRpdGVtQWN0aW9ucyA9IHRoaXMucXVlcnlTZWxlY3RvcihgLiR7TkFNRV9JVEVNfV9fYWN0aW9uYCk7XHJcblx0XHRcclxuXHRcdC8vIEZvciBlYWNoIGFjdGlvbiBpbiBhY3Rpb25zXHJcblx0XHRhY3Rpb25zLm1hcChhY3Rpb24gPT4ge1xyXG5cdFx0XHRpZiAodHlwZW9mIGFjdGlvbiAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgWyR7TkFNRV9JVEVNfV0gSW52YWxpZCBhY3Rpb25gKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0ICRhY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuXHRcdFx0aWYgKHR5cGVvZiBhY3Rpb24udGl0bGUgIT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFske05BTUVfSVRFTX1dIEVudGVyIGEgdmFsaWQgdGl0bGUgZm9yIHRoZSBhY3Rpb25gKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JGFjdGlvbi5pbm5lclRleHQgPSBhY3Rpb24udGl0bGU7XHJcblxyXG5cdFx0XHRpZiAodHlwZW9mIGFjdGlvbi5vbkNsaWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFske05BTUVfSVRFTX1dIEVudGVyIGEgdmFsaWQgcm9sZSBmb3IgdGhlIGFjdGlvbmApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkYWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY3Rpb24ub25DbGljayk7XHJcblxyXG5cdFx0XHQkaXRlbUFjdGlvbnMuYXBwZW5kQ2hpbGQoJGFjdGlvbik7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBpdGVtIG5hbWVcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBpdGVtXHJcbiAgICAgKi9cclxuXHRzdGF0aWMgaXMoKSB7XHJcblx0XHRyZXR1cm4gYCR7TkFNRV9JVEVNfS1pdGVtYDtcclxuXHR9XHJcbn1cclxuXHJcbi8vIERlZmluZXMgYSBjdXN0b20gbGkgdGFnLlxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoVG9hc3RJdGVtLmlzKCksIFRvYXN0SXRlbSwgeyBleHRlbmRzOiBcImxpXCIgfSk7XHJcblxyXG4vLyBEZWZhdWx0IGNvbnN0YW50c1xyXG5jb25zdCBOQU1FID0gXCJlbC10b2FzdFwiLFxyXG5USU1FT1VUX1JFTU9WRSA9IDgwMDAsXHJcbkRPTV9MSU1JVCA9IDU7XHJcblxyXG4vLyBHcmFiIHRoZSB0ZW1wbGF0ZSB0YWdcclxubGV0ICR0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWxUb2FzdFwiKTtcclxuXHJcbi8vIGNsb25lIHRoZSB0ZW1wbGF0ZSBhbmQgZ3JhYiB0aGUgdW5vcmRlcmVkIGxpc3QgZnJvbSB0aGUgZG9jdW1lbnQgZnJhZ21lbnQgb2JqZWN0XHJcbiR0ZW1wbGF0ZSA9ICR0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSkuY29udGVudC5xdWVyeVNlbGVjdG9yKGAuJHtOQU1FfWApO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudCBhIFRvYXN0IG9iamVjdFxyXG4gKi9cclxuY2xhc3MgVG9hc3QgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRhbGl6ZXMgdGhlIFRvYXN0IG9iamVjdC5cclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Ly8gUmVnaXN0ZXIgYSBuZXcgVE9BU1RfUkVNT1ZFRCBjdXN0b20gZXZlbnQgaWYgbm90IGV4aXN0LCBvdGhlcndpc2UgY3JlYXRlIGl0LlxyXG5cdFx0dGhpcy5fZXZlbnRPblJlbW92ZSA9IG5ldyBDdXN0b21FdmVudChcIlRPQVNUX1JFTU9WRURcIikgfHwgZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJUT0FTVF9SRU1PVkVEXCIpO1xyXG5cclxuXHRcdC8vIEluaXRpYWxpemVzIHByaXZhdGUgdmFyaWFibGVzXHJcblx0XHR0aGlzLl9tb3VzZU92ZXIgPSBmYWxzZTtcclxuXHRcdHRoaXMuX2xpc3QgPSB7fTtcclxuXHRcdHRoaXMuX2xpc3RDYWNoZSA9IHt9O1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExpc3RlbnMgZm9yIG1vdXNlb3ZlciBldmVudFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgb3IgRmFsc2VcclxuICAgICAqL1xyXG5cdGlzTW91c2VPdmVyKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vdXNlT3ZlcjtcclxuXHR9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIG1vdXNlb3ZlciB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXHJcbiAgICAgKi9cclxuXHRzZXRNb3VzZU92ZXIodmFsdWUpIHtcclxuXHRcdHRoaXMuX21vdXNlT3ZlciA9IEJvb2xlYW4odmFsdWUpO1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJyaWRlcyB0aGUgZGVmYXVsdCBjb25uZWN0ZWRDYWxsYmFjayBtZXRob2RcclxuICAgICAqL1xyXG5cdGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG5cclxuXHRcdHRoaXMuYXBwZW5kQ2hpbGQoJHRlbXBsYXRlKTtcclxuXHRcdFxyXG5cdFx0Ly8gTGlzdGVudCB0byBldmVudHNcclxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIlRPQVNUX1JFTU9WRURcIiwgYnJvYWRjYXN0VG9hc3RSZW1vdmVkLCBmYWxzZSk7XHJcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGhhbmRsZU1vdXNlT3Zlcik7XHJcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZU1vdXNlT3Zlcik7XHJcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBoYW5kbGVNb3VzZU91dCk7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBoYW5kbGVNb3VzZU91dCk7XHJcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhhbmRsZU1vdXNlT3V0KTtcclxuXHJcblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZU92ZXIoKSB7XHJcblx0XHRcdCR0ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKGAke05BTUV9LS1wYXVzZWRgKTtcclxuXHRcdFx0dGhpcy5zZXRNb3VzZU92ZXIodHJ1ZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VPdXQoKSB7XHJcblx0XHRcdCR0ZW1wbGF0ZS5jbGFzc0xpc3QucmVtb3ZlKGAke05BTUV9LS1wYXVzZWRgKTtcclxuXHRcdFx0dGhpcy5zZXRNb3VzZU92ZXIoZmFsc2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGJyb2FkY2FzdFRvYXN0UmVtb3ZlZCgpIHtcclxuXHRcdFx0T2JqZWN0LnZhbHVlcyh0aGlzLl9saXN0KVxyXG5cdFx0XHQuc2xpY2UoMCwgNSlcclxuXHRcdFx0Lm1hcCh0b2FzdCA9PiB7XHJcblx0XHRcdHRvYXN0LmRpc3BhdGNoRXZlbnQodGhpcy5fZXZlbnRPblJlbW92ZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUHVibGlzaCB0b2FzdCB3aXRoIGEgc2V0IG9mIHNldHRpbmdzXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgc2V0dGluZ3MgZm9yIHRoZSB0b2FzdFxyXG5cdCAqL1xyXG5cdHB1Ymxpc2goY29uZmlnKSB7XHJcblx0XHRcclxuXHRcdC8vIEdldCBlbGVtZW50cyBmcm9tIGNvbmZpZyBvYmplY3QgaWYgZXhpc3RlZCwgb3RoZXJ3aXNlIHNldCBhcyBkZWZhdWx0XHJcblx0XHRsZXQgdHlwZSA9IFN0cmluZyhjb25maWcudHlwZSB8fCBcImluZm9cIiksXHJcblx0XHRkZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbiB8fCBcIlwiLFx0ICBcclxuXHJcblx0XHR0aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQgPCAwIHx8IHR5cGVvZiBjb25maWcudGltZW91dCAhPT0gXCJudW1iZXJcIiBcdD8gVElNRU9VVF9SRU1PVkUgOiBjb25maWcudGltZW91dCxcclxuXHJcblx0XHRvbkNsb3NlID0gdHlwZW9mIGNvbmZpZy5vbkNsb3NlID09PSBcImZ1bmN0aW9uXCIgPyBjb25maWcub25DbG9zZSA6IGZ1bmN0aW9uKCkge30sXHJcblxyXG5cdFx0aGlkZUNsb3NlID0gQm9vbGVhbihjb25maWcuaGlkZUNsb3NlKSxcclxuXHRcdGFjdGlvbnMgPSB0eXBlb2YgY29uZmlnLmFjdGlvbnMgPT09IFwib2JqZWN0XCIgPyBjb25maWcuYWN0aW9ucyA6IFtdLFxyXG5cdFx0JHRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgaXM6IGAke05BTUV9LWl0ZW1gIH0pLFxyXG5cclxuXHRcdGlkID0gXCJ0b2FzdF9cIiArIGdlbmVyYXRlSWQoKTtcclxuXHJcblx0XHRpZiAoIWRlc2NyaXB0aW9uKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgWyR7TkFNRX1dIEEgZGVzY3JpcHRpb24gaXMgcmVxdWlyZWRgKTtcclxuXHRcdH1cclxuXHJcblx0XHQkdG9hc3QuaWQgPSBpZDtcclxuXHRcdCR0b2FzdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG5cdFx0JHRvYXN0LnNldEF0dHJpYnV0ZShcImRlc2NyaXB0aW9uXCIsIGRlc2NyaXB0aW9uKTtcclxuXHRcdCR0b2FzdC5zZXRBdHRyaWJ1dGUoXCJ0aW1lb3V0XCIsIHRpbWVvdXQpO1xyXG5cdFx0JHRvYXN0LnNldEF0dHJpYnV0ZShcImhpZGUtY2xvc2VcIiwgU3RyaW5nKGhpZGVDbG9zZSkpO1xyXG5cclxuXHRcdCR0b2FzdCA9ICR0b2FzdC5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG5cdFx0aWYgKE9iamVjdC52YWx1ZXModGhpcy5fbGlzdCkubGVuZ3RoID4gRE9NX0xJTUlUKSB7XHJcblx0XHRcdHRoaXMuX2xpc3RDYWNoZVtpZF0gPSB7XHJcblx0XHRcdGVsOiAkdG9hc3QsXHJcblx0XHRcdGhpZGVDbG9zZTogaGlkZUNsb3NlLFxyXG5cdFx0XHRvbkNsb3NlOiBvbkNsb3NlLFxyXG5cdFx0XHRhY3Rpb25zOiBhY3Rpb25zXHJcblx0XHRcdH07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkdG9hc3QgPSAkdGVtcGxhdGUuYXBwZW5kQ2hpbGQoJHRvYXN0KTtcclxuXHJcblx0XHRcdGlmICghJHRvYXN0KSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghaGlkZUNsb3NlKSB7XHJcblx0XHRcdFx0JHRvYXN0LnNldE9uQ2xvc2Uob25DbG9zZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChhY3Rpb25zLmxlbmd0aCkge1xyXG5cdFx0XHRcdCR0b2FzdC5zZXRBY3Rpb25zKGFjdGlvbnMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9saXN0W2lkXSA9ICR0b2FzdDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBSYW5kb21seSBnZW5lcmF0ZSB0b2FzdCBpZFxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBnZW5lcmF0ZUlkKCkge1xyXG5cdFx0XHRyZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBpZDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbW92ZXMgdG9hc3RcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gaWQgXHJcblx0ICovXHJcblx0cmVtb3ZlKGlkKSB7XHJcblx0XHRpZiAodGhpcy5fbGlzdC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcclxuXHRcdFx0dGhpcy5fbGlzdFtpZF0ucmVtb3ZlKCk7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLl9saXN0W2lkXTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5fbGlzdENhY2hlLmhhc093blByb3BlcnR5KGlkKSkge1xyXG5cdFx0XHRkZWxldGUgdGhpcy5fbGlzdENhY2hlW2lkXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5fbGlzdENhY2hlKS5sZW5ndGgpIHtcclxuXHRcdFx0bGV0IGtleUNhY2hlZCA9IE9iamVjdC5rZXlzKHRoaXMuX2xpc3RDYWNoZSlbMF0sXHJcblx0XHRcdHZhbHVlQ2FjaGVkID0gT2JqZWN0LnZhbHVlcyh0aGlzLl9saXN0Q2FjaGUpWzBdO1xyXG5cclxuXHRcdFx0dmFsdWVDYWNoZWQuZWwgPSAkdGVtcGxhdGUuYXBwZW5kQ2hpbGQodmFsdWVDYWNoZWQuZWwpO1xyXG5cclxuXHRcdFx0aWYgKCF2YWx1ZUNhY2hlZC5oaWRlQ2xvc2UpIHtcclxuXHRcdFx0XHR2YWx1ZUNhY2hlZC5lbC5zZXRPbkNsb3NlKHZhbHVlQ2FjaGVkLm9uQ2xvc2UpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodmFsdWVDYWNoZWQuYWN0aW9ucy5sZW5ndGgpIHtcclxuXHRcdFx0XHR2YWx1ZUNhY2hlZC5lbC5zZXRBY3Rpb25zKHZhbHVlQ2FjaGVkLmFjdGlvbnMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9saXN0W2tleUNhY2hlZF0gPSB2YWx1ZUNhY2hlZC5lbDtcclxuXHJcblx0XHRcdGRlbGV0ZSB0aGlzLl9saXN0Q2FjaGVba2V5Q2FjaGVkXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHJldHVybnMgdGhlIG5hbWUgb2YgdGhlIHRlbXBsYXRlIGVsZW1lbnRcclxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgdGVtcGxhdGUgZWxlbWVudFxyXG5cdCAqL1xyXG5cdHN0YXRpYyBpcygpIHtcclxuXHRcdHJldHVybiBOQU1FO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgdGhlIGN1c3RvbSBlbGVtZW50XHJcbiAqL1xyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoVG9hc3QuaXMoKSwgVG9hc3QpO1xyXG5cclxuLyoqXHJcbiAqIEJ1aWxkIHRoZSB0ZW1wbGF0ZVxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgXHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZFRlbXBsYXRlKHRhcmdldCl7XHJcblx0bGV0IHRlbXBsYXRlX25hbWUgPSBcImVsLXRvYXN0XCI7XHJcblxyXG5cdC8vIENyZWF0ZSBlbGVtZW50c1xyXG5cdGxldCB0ZW1wbGF0ZV9jb250YWluZXIgXHQ9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdGl0ZW1fY29udGFpbmVyIFx0XHRcdD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0ZW1wbGF0ZV9uYW1lKSxcclxuXHRkb2N1bWVudF9mcmFnbWVudCBcdFx0PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpLFxyXG5cdGljb25fY29udGFpbmVyIFx0XHRcdD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0Y2xvc2VfYnV0dG9uX2NvbnRhaW5lciAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRjbG9zZV9idXR0b24gXHRcdFx0PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuXHRjbG9zZV9idXR0b25fdGV4dCBcdFx0PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyksXHJcblx0ZGVzY3JpcHRpb25fY29udGFpbmVyIFx0PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRhY3Rpb25fY29udGFpbmVyIFx0XHQ9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdHByb2dyZXNzX2Jhcl93cmFwcGVyICBcdD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0cHJvZ3Jlc3NfYmFyX2NvbnRhaW5lciBcdD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0ZG9jdW1lbnRfZnJhZ21lbnRfMiBcdD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSxcclxuXHRkb2N1bWVudF9mcmFnbWVudF8yX3VsICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG5cclxuXHQvLyBBc3NpZ24gSURzXHJcblx0dGVtcGxhdGVfY29udGFpbmVyLmlkICA9IFwidGVtcGxhdGVcIjtcclxuXHRkb2N1bWVudF9mcmFnbWVudC5pZCAgID0gXCJlbFRvYXN0SXRlbVwiO1xyXG5cdGRvY3VtZW50X2ZyYWdtZW50XzIuaWQgPSBcImVsVG9hc3RcIjtcclxuXHJcblx0Ly8gQXNzaWduIENsYXNzZXNcclxuXHRpY29uX2NvbnRhaW5lci5jbGFzc0xpc3QgXHRcdCA9IHRlbXBsYXRlX25hbWUgKyBcIl9faWNvblwiO1xyXG5cdGNsb3NlX2J1dHRvbl9jb250YWluZXIuY2xhc3NMaXN0ID0gdGVtcGxhdGVfbmFtZSArIFwiX19jbG9zZVwiO1xyXG5cdGRlc2NyaXB0aW9uX2NvbnRhaW5lci5jbGFzc0xpc3QgID0gdGVtcGxhdGVfbmFtZSArIFwiX19kZXNjcmlwdGlvblwiO1xyXG5cdGFjdGlvbl9jb250YWluZXIuY2xhc3NMaXN0IFx0XHQgPSB0ZW1wbGF0ZV9uYW1lICsgXCJfX2FjdGlvblwiO1xyXG5cdHByb2dyZXNzX2Jhcl93cmFwcGVyLmNsYXNzTGlzdCBcdCA9IHRlbXBsYXRlX25hbWUgKyBcIl9fcHJvZ3Jlc3NcIjtcclxuXHRwcm9ncmVzc19iYXJfY29udGFpbmVyLmNsYXNzTGlzdCA9IHRlbXBsYXRlX25hbWUgKyBcIl9fYmFyXCI7XHJcblx0Y2xvc2VfYnV0dG9uX3RleHQuY2xhc3NMaXN0IFx0ID0gXCJmYSBmYS1mdyBmYS10aW1lc1wiO1xyXG5cdGRvY3VtZW50X2ZyYWdtZW50XzJfdWwuY2xhc3NMaXN0ID0gdGVtcGxhdGVfbmFtZTtcclxuXHJcblx0Ly8gQWRkIHByZWRlZmluZWQgc3R5bGVkXHJcblx0dGVtcGxhdGVfY29udGFpbmVyLnN0eWxlLmZvbnRTaXplICA9IFwiMTBweFwiO1xyXG5cdHByb2dyZXNzX2Jhcl9jb250YWluZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuXHJcblx0Ly8gQXBwZW5kIGVsZW1lbnRzXHJcblx0Y2xvc2VfYnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlX2J1dHRvbl90ZXh0KTtcclxuXHRjbG9zZV9idXR0b25fY29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlX2J1dHRvbik7XHJcblx0cHJvZ3Jlc3NfYmFyX3dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NfYmFyX2NvbnRhaW5lcik7XHJcblx0XHJcblx0Ly8gQXBwZW5kIGVsZW1lbnQgdG8gZG9jdW1lbnQgZnJhZ21lbnRzXHJcblx0ZG9jdW1lbnRfZnJhZ21lbnQuY29udGVudC5hcHBlbmRDaGlsZChpY29uX2NvbnRhaW5lcik7XHJcblx0ZG9jdW1lbnRfZnJhZ21lbnQuY29udGVudC5hcHBlbmRDaGlsZChjbG9zZV9idXR0b25fY29udGFpbmVyKTtcclxuXHRkb2N1bWVudF9mcmFnbWVudC5jb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uX2NvbnRhaW5lcik7XHJcblx0ZG9jdW1lbnRfZnJhZ21lbnQuY29udGVudC5hcHBlbmRDaGlsZChhY3Rpb25fY29udGFpbmVyKTtcclxuXHRkb2N1bWVudF9mcmFnbWVudC5jb250ZW50LmFwcGVuZENoaWxkKHByb2dyZXNzX2Jhcl93cmFwcGVyKTtcclxuXHJcblx0ZG9jdW1lbnRfZnJhZ21lbnRfMi5jb250ZW50LmFwcGVuZENoaWxkKGRvY3VtZW50X2ZyYWdtZW50XzJfdWwpO1xyXG5cclxuXHQvLyBBcHBlbmQgZXZlcnl0aGluZyB0byB0aGUgdGVtcGxhdGUgY29udGFpbmVyXHJcblx0dGVtcGxhdGVfY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1fY29udGFpbmVyKTtcclxuXHR0ZW1wbGF0ZV9jb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnRfZnJhZ21lbnQpO1xyXG5cdHRlbXBsYXRlX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudF9mcmFnbWVudF8yKTtcclxuXHJcblx0Ly8gQWRkcGVuZCB0aGUgbm90aWZpY2F0aW9uIHRvIHRoZSBib2R5XHJcblx0dGFyZ2V0LmFwcGVuZENoaWxkKHRlbXBsYXRlX2NvbnRhaW5lcik7XHJcblxyXG5cdHJldHVybiB0ZW1wbGF0ZV9jb250YWluZXI7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyB0aGUgc3RhcnR1cCBmdW5jdGlvblxuLy8gSXQncyBlbXB0eSBhcyBzb21lIHJ1bnRpbWUgbW9kdWxlIGhhbmRsZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Jcbl9fd2VicGFja19yZXF1aXJlX18ueCA9IHggPT4ge31cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhZG1pbn51dGlsc19tXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vc3JjL2phdmFzY3JpcHRzL2FkbWluLW1haW4uanNcIixcImFkbWlufm5vZGVfbW9kdWxlc19iXCIsXCJhZG1pbn5ub2RlX21vZHVsZXNfZm9ydGF3ZXNvbWVfZm9udGF3ZXNvbWUtZnJlZV9qc19iXCIsXCJhZG1pbn5ub2RlX21vZHVsZXNfZm9ydGF3ZXNvbWVfZm9udGF3ZXNvbWUtZnJlZV9qc19yXCIsXCJhZG1pbn5ub2RlX21vZHVsZXNfanF1ZXJ5X2Rpc3RfanF1ZXJ5X2pzXzFcIixcImFkbWlufm5vZGVfbW9kdWxlc19wXCIsXCJhZG1pbn5zcmNfalwiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9IHggPT4ge307XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lLCBleGVjdXRlTW9kdWxlc10gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuXHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcblx0fVxuXG5cdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3Rcblx0aWYoZXhlY3V0ZU1vZHVsZXMpIGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuXG5cdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjaGF0c3VwcG9ydF80XzBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY2hhdHN1cHBvcnRfNF8wXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTtcblxuZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKCkge1xuXHR2YXIgcmVzdWx0O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcblx0XHR9XG5cdH1cblx0aWYoZGVmZXJyZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCA9IHggPT4ge307XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbnZhciBzdGFydHVwID0gX193ZWJwYWNrX3JlcXVpcmVfXy54O1xuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyByZXNldCBzdGFydHVwIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2hlbiBtb3JlIHN0YXJ0dXAgY29kZSBpcyBhZGRlZFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSBzdGFydHVwIHx8ICh4ID0+IHt9KTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=