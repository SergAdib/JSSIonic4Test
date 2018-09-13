exports.ids = [88];
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

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonPopover", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonPopoverController", function() { return PopoverController; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(300);
/* harmony import */ var _chunk_d3dac993_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(318);
/* harmony import */ var _chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(310);
/* harmony import */ var _chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(311);
/* harmony import */ var _chunk_c9c4a2c9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(320);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=undefined&&undefined.__awaiter||function(e,t,o,n){return new(o||(o=Promise))(function(r,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){e.done?r(e.value):new o(function(t){t(e.value)}).then(a,s)}l((n=n.apply(e,t||[])).next())})},__generator=undefined&&undefined.__generator||function(e,t){var o,n,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{o=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};function iosEnterAnimation(e,t,o){var n="top",r="left",i=t.querySelector(".popover-content"),a=i.getBoundingClientRect(),s=a.width,l=a.height,p=window.innerWidth,c=window.innerHeight,d=o&&o.target&&o.target.getBoundingClientRect(),m=d&&"top"in d?d.top:c/2-l/2,u=d&&"left"in d?d.left:p/2,f=d&&d.width||0,h=d&&d.height||0,v=t.querySelector(".popover-arrow"),y=v.getBoundingClientRect(),b=y.width,P=y.height;d||(v.style.display="none");var D={top:m+h,left:u+f/2-b/2},g={top:m+h+(P-1),left:u+f/2-s/2},w=!1,O=!1;g.left<POPOVER_IOS_BODY_PADDING+25?(w=!0,g.left=POPOVER_IOS_BODY_PADDING):s+POPOVER_IOS_BODY_PADDING+g.left+25>p&&(O=!0,g.left=p-s-POPOVER_IOS_BODY_PADDING,r="right"),m+h+l>c&&m-l>0?(D.top=m-(P+1),console.log(D),console.log(m),console.log(l),g.top=m-l-(P-1),t.className=t.className+" popover-bottom",n="bottom"):m+h+l>c&&(i.style.bottom=POPOVER_IOS_BODY_PADDING+"%"),v.style.top=D.top+"px",v.style.left=D.left+"px",i.style.top=g.top+"px",i.style.left=g.left+"px",w&&(i.style.left="calc("+g.left+"px + var(--ion-safe-area-left, 0px)"),O&&(i.style.left="calc("+g.left+"px + var(--ion-safe-area-right, 0px)"),i.style.transformOrigin=n+" "+r;var _=new e,E=new e;E.addElement(t.querySelector("ion-backdrop")),E.fromTo("opacity",.01,.08);var A=new e;return A.addElement(t.querySelector(".popover-wrapper")),A.fromTo("opacity",.01,1),Promise.resolve(_.addElement(t).easing("ease").duration(100).add(E).add(A))}var POPOVER_IOS_BODY_PADDING=5;function iosLeaveAnimation(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(r))}function mdEnterAnimation(e,t,o){var n="top",r="left",i=t.querySelector(".popover-content"),a=i.getBoundingClientRect(),s=a.width,l=a.height,p=window.innerWidth,c=window.innerHeight,d=o&&o.target&&o.target.getBoundingClientRect(),m=d&&"top"in d?d.top:c/2-l/2,u=d&&"left"in d?d.left:p/2-s/2,f=d&&d.height||0,h={top:m,left:u};h.left<POPOVER_MD_BODY_PADDING?h.left=POPOVER_MD_BODY_PADDING:s+POPOVER_MD_BODY_PADDING+h.left>p&&(h.left=p-s-POPOVER_MD_BODY_PADDING,r="right"),m+f+l>c&&m-l>0?(h.top=m-l,t.className=t.className+" popover-bottom",n="bottom"):m+f+l>c&&(i.style.bottom=POPOVER_MD_BODY_PADDING+"px"),i.style.top=h.top+"px",i.style.left=h.left+"px",i.style.transformOrigin=n+" "+r;var v=new e,y=new e;y.addElement(t.querySelector("ion-backdrop")),y.fromTo("opacity",.01,.08);var b=new e;b.addElement(t.querySelector(".popover-wrapper")),b.fromTo("opacity",.01,1);var P=new e;P.addElement(t.querySelector(".popover-content")),P.fromTo("scale",.001,1);var D=new e;return D.addElement(t.querySelector(".popover-viewport")),D.fromTo("opacity",.01,1),Promise.resolve(v.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(y).add(b).add(P).add(D))}var POPOVER_MD_BODY_PADDING=12;function mdLeaveAnimation(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(r))}var Popover=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}return e.prototype.componentDidLoad=function(){this.ionPopoverDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionPopoverDidUnload.emit()},e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(null,_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__["d"])},e.prototype.lifecycle=function(e){var t=this.usersElement,o=LIFECYCLE_MAP[e.type];if(t&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(n)}},e.prototype.present=function(){return __awaiter(this,void 0,void 0,function(){var e,t,o;return __generator(this,function(n){switch(n.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return t=Object.assign({},this.componentProps,{popover:this.el}),o=this,[4,Object(_chunk_d3dac993_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.delegate,e,this.component,["popover-viewport"],t)];case 1:return o.usersElement=n.sent(),[4,Object(_chunk_c9c4a2c9_js__WEBPACK_IMPORTED_MODULE_4__["a"])(this.usersElement)];case 2:return n.sent(),[2,Object(_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this,"popoverEnter",iosEnterAnimation,mdEnterAnimation,this.event)]}})})},e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(o){switch(o.label){case 0:return[4,Object(_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this,e,t,"popoverLeave",iosLeaveAnimation,mdLeaveAnimation,this.event)];case 1:return o.sent(),[4,Object(_chunk_d3dac993_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.delegate,this.usersElement)];case 2:return o.sent(),[2]}})})},e.prototype.onDidDismiss=function(){return Object(_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.el,"ionPopoverWillDismiss")},e.prototype.hostData=function(){var e=this.translucent?Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_3__["a"])(this.mode,"popover-translucent"):{};return{style:{zIndex:2e4+this.overlayIndex},"no-router":!0,class:Object.assign({},Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_3__["a"])(this.mode,"popover"),Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this.cssClass),e)}},e.prototype.render=function(){var e=Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_3__["a"])(this.mode,"popover-wrapper");return[Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop",{tappable:this.backdropDismiss}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:e},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"popover-arrow"}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"popover-content"}))]},Object.defineProperty(e,"is",{get:function(){return"ion-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},event:{type:"Any",attr:"event"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionPopoverDidLoad",method:"ionPopoverDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidUnload",method:"ionPopoverDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionPopoverDidPresent",method:"lifecycle"},{name:"ionPopoverWillPresent",method:"lifecycle"},{name:"ionPopoverWillDismiss",method:"lifecycle"},{name:"ionPopoverDidDismiss",method:"lifecycle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-popover{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:1000}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;z-index:10}.popover-content ion-content{position:relative;contain:none}.popover-ios .popover-content{border-radius:10px;width:200px;min-width:0;min-height:0;max-height:90%;background-color:var(--ion-background-color,#fff);color:var(--ion-text-color,#000)}.popover-ios .popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-ios .popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background-color:var(--ion-background-color,#fff);content:\"\";z-index:10}.popover-ios.popover-bottom .popover-arrow{top:auto;bottom:-10px}.popover-ios.popover-bottom .popover-arrow::after{top:-6px}.popover-translucent-ios .popover-arrow::after,.popover-translucent-ios .popover-content{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),LIFECYCLE_MAP={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillDismiss",ionPopoverDidDismiss:"ionViewDidDismiss"},PopoverController=function(){function e(){}return e.prototype.create=function(e){return Object(_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.doc.createElement("ion-popover"),e)},e.prototype.dismiss=function(e,t,o){return Object(_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.doc,e,t,"ion-popover",o)},e.prototype.getTop=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,Object(_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.doc,"ion-popover")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-popover-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}();

/***/ })

};;