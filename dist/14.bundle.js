exports.ids = [14];
exports.modules = {

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonBackdrop", function() { return Backdrop; });
/* harmony import */ var _chunk_42163827_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(319);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var Backdrop=function(){function e(){this.lastClick=-1e4,this.visible=!0,this.tappable=!0,this.stopPropagation=!0}return e.prototype.componentDidLoad=function(){registerBackdrop(this.doc,this)},e.prototype.componentDidUnload=function(){unregisterBackdrop(this.doc,this)},e.prototype.onTouchStart=function(e){this.lastClick=Object(_chunk_42163827_js__WEBPACK_IMPORTED_MODULE_0__["a"])(e),this.emitTap(e)},e.prototype.onMouseDown=function(e){this.lastClick<Object(_chunk_42163827_js__WEBPACK_IMPORTED_MODULE_0__["a"])(e)-2500&&this.emitTap(e)},e.prototype.emitTap=function(e){this.stopPropagation&&(e.preventDefault(),e.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},e.prototype.hostData=function(){return{tabindex:"-1",class:{"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}}},Object.defineProperty(e,"is",{get:function(){return"ion-backdrop"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{doc:{context:"document"},stopPropagation:{type:Boolean,attr:"stop-propagation"},tappable:{type:Boolean,attr:"tappable"},visible:{type:Boolean,attr:"visible"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionBackdropTap",method:"ionBackdropTap",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"touchstart",method:"onTouchStart",capture:!0},{name:"mousedown",method:"onMouseDown",capture:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2;background-color:var(--ion-backdrop-color,#000)}:host.backdrop-hide{background:0 0}:host.backdrop-no-tappable{cursor:auto}body.backdrop-no-scroll{overflow:hidden}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),BACKDROP_NO_SCROLL="backdrop-no-scroll",activeBackdrops=new Set;function registerBackdrop(e,t){activeBackdrops.add(t),e.body.classList.add(BACKDROP_NO_SCROLL)}function unregisterBackdrop(e,t){activeBackdrops.delete(t),0===activeBackdrops.size&&e.body.classList.remove(BACKDROP_NO_SCROLL)}

/***/ })

};;