exports.ids = [16];
exports.modules = {

/***/ 508:
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

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonAlertController", function() { return AlertController; });
/* harmony import */ var _chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(508);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=undefined&&undefined.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function l(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(a,l)}c((n=n.apply(e,t||[])).next())})},__generator=undefined&&undefined.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};var AlertController=function(){function e(){}return e.prototype.create=function(e){return Object(_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this.doc.createElement("ion-alert"),e)},e.prototype.dismiss=function(e,t,r){return Object(_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this.doc,e,t,"ion-alert",r)},e.prototype.getTop=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,Object(_chunk_b48a0e4c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this.doc,"ion-alert")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-alert-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}();

/***/ })

};;