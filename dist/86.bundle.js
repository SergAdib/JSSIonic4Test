exports.ids = [86];
exports.modules = {

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dismissOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BACKDROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return dismiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return eventMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return present; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var lastId = 0;
function createOverlay(e, n) { var t = e.ownerDocument; connectListeners(t), Object.assign(e, n), e.classList.add("ion-page-invisible"); var i = lastId++; return e.overlayIndex = i, e.hasAttribute("id") || (e.id = "ion-overlay-" + i), getAppRoot(t).appendChild(e), t.body.addEventListener("keyup", function (e) { if ("Escape" === e.key) {
    var e_1 = getOverlay(t);
    e_1 && e_1.backdropDismiss && e_1.dismiss(null, BACKDROP);
} }), e.componentOnReady(); }
function connectListeners(e) { 0 === lastId && (lastId = 1, e.body.addEventListener("keyup", function (n) { if ("Escape" === n.key) {
    var n_1 = getOverlay(e);
    n_1 && !0 === n_1.backdropDismiss && n_1.dismiss("backdrop");
} })); }
function dismissOverlay(e, n, t, i, o) { var a = getOverlay(e, i, o); return a ? a.dismiss(n, t) : Promise.reject("overlay does not exist"); }
function getOverlays(e, n) { var t = Array.from(getAppRoot(e).children); return null == n ? t : (n = n.toUpperCase(), t.filter(function (e) { return e.tagName === n; })); }
function getOverlay(e, n, t) { var i = getOverlays(e, n); return null != t ? i.find(function (e) { return e.id === t; }) : null == t ? i[i.length - 1] : i.find(function (e) { return e.overlayIndex === t; }); }
function present(e, n, t, i, o) {
    return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (e.presented)
                    return [2 /*return*/];
                e.presented = !0, e.willPresent.emit();
                a = e.enterAnimation ? e.enterAnimation : e.config.get(n, "ios" === e.mode ? t : i);
                return [4 /*yield*/, overlayAnimation(e, a, e.el, o)];
            case 1:
                _a.sent(), e.didPresent.emit();
                return [2 /*return*/];
        }
    }); });
}
function dismiss(e, n, t, i, o, a, s) {
    return __awaiter(this, void 0, void 0, function () { var r; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!e.presented)
                    return [2 /*return*/];
                e.presented = !1, e.willDismiss.emit({ data: n, role: t });
                r = e.leaveAnimation ? e.leaveAnimation : e.config.get(i, "ios" === e.mode ? o : a);
                return [4 /*yield*/, overlayAnimation(e, r, e.el, s)];
            case 1:
                _a.sent(), e.didDismiss.emit({ data: n, role: t }), e.el.remove();
                return [2 /*return*/];
        }
    }); });
}
function getAppRoot(e) { return e.querySelector("ion-app") || e.body; }
function overlayAnimation(e, n, t, i) {
    return __awaiter(this, void 0, void 0, function () { var o, a, _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                e.animation && (e.animation.destroy(), e.animation = void 0), t.classList.remove("ion-page-invisible");
                o = t.shadowRoot || e.el;
                _a = e;
                return [4 /*yield*/, e.animationCtrl.create(n, o, i)];
            case 1:
                a = _a.animation = _b.sent();
                e.animation = a, e.animated || a.duration(0), e.keyboardClose && a.beforeAddWrite(function () { var e = t.ownerDocument.activeElement; e && e.matches("input, ion-input, ion-textarea") && e.blur(); });
                return [4 /*yield*/, a.playAsync()];
            case 2:
                _b.sent(), a.destroy(), e.animation = void 0;
                return [2 /*return*/];
        }
    }); });
}
function eventMethod(e, n) { var t; var i = new Promise(function (e) { return t = e; }); return onceEvent(e, n, function (e) { t(e.detail); }), i; }
function onceEvent(e, n, t) { var i = function (o) { e.removeEventListener(n, i), t(o); }; e.addEventListener(n, i); }
function isCancel(e) { return "cancel" === e || e === BACKDROP; }
var BACKDROP = "backdrop";



/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonModal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonModalController", function() { return ModalController; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(300);
/* harmony import */ var _chunk_d3dac993_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(318);
/* harmony import */ var _chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(310);
/* harmony import */ var _chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(311);
/* harmony import */ var _chunk_c9c4a2c9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(320);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=undefined&&undefined.__awaiter||function(e,t,o,n){return new(o||(o=Promise))(function(i,r){function a(e){try{l(n.next(e))}catch(e){r(e)}}function s(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){e.done?i(e.value):new o(function(t){t(e.value)}).then(a,s)}l((n=n.apply(e,t||[])).next())})},__generator=undefined&&undefined.__generator||function(e,t){var o,n,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(e,a)}catch(e){r=[6,e],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};function iosEnterAnimation(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var i=new e;return i.addElement(t.querySelector(".modal-wrapper")),i.beforeStyles({opacity:1}).fromTo("translateY","100%","0%"),n.fromTo("opacity",.01,.4),Promise.resolve(o.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").add(n).add(i))}function iosLeaveAnimation(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var i=new e,r=t.querySelector(".modal-wrapper");i.addElement(r);var a=r.getBoundingClientRect();return i.beforeStyles({opacity:1}).fromTo("translateY","0%",window.innerHeight-a.top+"px"),n.fromTo("opacity",.4,0),Promise.resolve(o.addElement(t).easing("ease-out").duration(250).add(n).add(i))}function mdEnterAnimation(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var i=new e;return i.addElement(t.querySelector(".modal-wrapper")),i.fromTo("opacity",.01,1).fromTo("translateY","40px","0px"),n.fromTo("opacity",.01,.4),Promise.resolve(o.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").add(n).add(i))}function mdLeaveAnimation(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var i=new e,r=t.querySelector(".modal-wrapper");return i.addElement(r),i.fromTo("opacity",.99,0).fromTo("translateY","0px","40px"),n.fromTo("opacity",.4,0),Promise.resolve(o.addElement(t).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).add(n).add(i))}var Modal=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0}return e.prototype.componentDidLoad=function(){this.ionModalDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionModalDidUnload.emit()},e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(null,_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__["d"])},e.prototype.lifecycle=function(e){var t=this.usersElement,o=LIFECYCLE_MAP[e.type];if(t&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(n)}},e.prototype.present=function(){return __awaiter(this,void 0,void 0,function(){var e,t,o;return __generator(this,function(n){switch(n.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".modal-wrapper")))throw new Error("container is undefined");return t=Object.assign({},this.componentProps,{modal:this.el}),o=this,[4,Object(_chunk_d3dac993_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.delegate,e,this.component,["ion-page"],t)];case 1:return o.usersElement=n.sent(),[4,Object(_chunk_c9c4a2c9_js__WEBPACK_IMPORTED_MODULE_4__["a"])(this.usersElement)];case 2:return n.sent(),[2,Object(_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this,"modalEnter",iosEnterAnimation,mdEnterAnimation)]}})})},e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(o){switch(o.label){case 0:return[4,Object(_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this,e,t,"modalLeave",iosLeaveAnimation,mdLeaveAnimation)];case 1:return o.sent(),[4,Object(_chunk_d3dac993_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.delegate,this.usersElement)];case 2:return o.sent(),[2]}})})},e.prototype.onDidDismiss=function(){return Object(_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.el,"ionModalDidDismiss")},e.prototype.onWillDismiss=function(){return Object(_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.el,"ionModalWillDismiss")},e.prototype.hostData=function(){return{"no-router":!0,class:Object.assign({},Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_3__["a"])(this.mode,"modal"),Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this.cssClass)),style:{zIndex:2e4+this.overlayIndex}}},e.prototype.render=function(){var e=Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_3__["a"])(this.mode,"modal-wrapper");return[Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{role:"dialog",class:e})]},Object.defineProperty(e,"is",{get:function(){return"ion-modal"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionModalDidLoad",method:"ionModalDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalDidUnload",method:"ionModalDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionModalDidPresent",method:"lifecycle"},{name:"ionModalWillPresent",method:"lifecycle"},{name:"ionModalWillDismiss",method:"lifecycle"},{name:"ionModalDidDismiss",method:"lifecycle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-modal{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;contain:strict}ion-modal-controller{display:none}\@media not all and (min-width:768px) and (min-height:600px){ion-modal ion-backdrop{display:none}}.modal-wrapper{width:100%;height:100%;contain:strict;z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.modal-wrapper{width:600px;height:500px}.modal-wrapper-ios{border-radius:10px;overflow:hidden}}\@media only screen and (min-width:768px) and (min-height:768px){.modal-wrapper{width:600px;height:600px}}.modal-wrapper-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),LIFECYCLE_MAP={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillDismiss",ionModalDidDismiss:"ionViewDidDismiss"},ModalController=function(){function e(){}return e.prototype.create=function(e){return Object(_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.doc.createElement("ion-modal"),e)},e.prototype.dismiss=function(e,t,o){return Object(_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.doc,e,t,"ion-modal",o)},e.prototype.getTop=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,Object(_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.doc,"ion-modal")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-modal-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}();

/***/ })

};;