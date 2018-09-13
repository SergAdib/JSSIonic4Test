exports.ids = [80];
exports.modules = {

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createThemedClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return openURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getClassMap; });
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
function hostContext(e, t) { return !!t.closest(e); }
function createColorClasses(e) { var _a; return e ? (_a = { "ion-color": !0 }, _a["ion-color-" + e] = !0, _a) : null; }
function createThemedClasses(e, t) { var _a; return _a = {}, _a[t] = !0, _a[t + "-" + e] = !!e, _a; }
function getClassList(e) { return e ? (Array.isArray(e) ? e : e.split(" ")).filter(function (e) { return null != e; }).map(function (e) { return e.trim(); }).filter(function (e) { return "" !== e; }) : []; }
function getClassMap(e) { var t = {}; return getClassList(e).forEach(function (e) { return t[e] = !0; }), t; }
function openURL(e, t, r, s) {
    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(t && "#" !== t[0] && -1 === t.indexOf("://"))) return [3 /*break*/, 2];
                o = e.document.querySelector("ion-router");
                if (!o) return [3 /*break*/, 2];
                r && r.preventDefault();
                return [4 /*yield*/, o.componentOnReady()];
            case 1: return [2 /*return*/, (_a.sent(), o.push(t, s))];
            case 2: return [2 /*return*/, Promise.resolve()];
        }
    }); });
}



/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonCardContent", function() { return CardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonItemGroup", function() { return ItemGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonList", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonMenuController", function() { return MenuController; });
/* harmony import */ var _chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=undefined&&undefined.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function s(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(u,s)}a((r=r.apply(e,t||[])).next())})},__generator=undefined&&undefined.__generator||function(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};var CardContent=function(){function e(){}return e.prototype.hostData=function(){return{class:Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this.mode,"card-content")}},Object.defineProperty(e,"is",{get:function(){return"ion-card-content"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-card-content{display:block;position:relative}.card-content-md{padding:13px 16px;font-size:14px;line-height:1.5}.card-content-md h1{margin:0 0 2px;font-size:24px;font-weight:400}.card-content-md h2{margin:2px 0;font-size:16px;font-weight:400}.card-content-md h3,.card-content-md h4,.card-content-md h5,.card-content-md h6{margin:2px 0;font-size:14px;font-weight:400}.card-content-md p{margin:0 0 2px;font-size:14px;font-weight:400;line-height:1.5}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),ItemGroup=function(){function e(){}return e.prototype.hostData=function(){return{class:Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this.mode,"item-group")}},Object.defineProperty(e,"is",{get:function(){return"ion-item-group"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-item-group{display:block}.item-group-md ion-item-sliding:last-child ion-item,.item-group-md ion-item:last-child{--border-width:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),List=function(){function e(){this.inset=!1}return e.prototype.closeSlidingItems=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){return(e=this.el.querySelector("ion-item-sliding"))&&e.closeOpened?[2,e.closeOpened()]:[2,!1]})})},e.prototype.hostData=function(){var e;return{class:Object.assign({},Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this.mode,"list"),(e={},e["list-lines-"+this.lines]=!!this.lines,e["list-inset"]=this.inset,e["list-"+this.mode+"-lines-"+this.lines]=!!this.lines,e))}},Object.defineProperty(e,"is",{get:function(){return"ion-list"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{closeSlidingItems:{method:!0},el:{elementRef:!0},inset:{type:Boolean,attr:"inset"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-list{margin:0;padding:0;display:block;background:var(--ion-item-background-color,var(--ion-background-color,#fff));contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-md{margin:-1px 0 16px}.list-md>.input:last-child::after{left:0}.list-md.list-inset{margin:16px;border-radius:2px}.list-md.list-inset ion-item:first-child{--border-radius:2px 2px 0 0;--border-width:0}.list-md.list-inset ion-item:last-child{--border-radius:0 0 2px,2px;--border-width:0}.list-md.list-inset .item-interactive{--padding-start:0;--padding-end:0}.list-md.list-inset+ion-list.list-inset{margin-top:0}.list-md-lines-none .item{--border-width:0;--inner-border-width:0}.list-md .item-lines-full,.list-md-lines-full .item{--border-width:0 0 1px 0}.list-md .item-lines-inset,.list-md-lines-inset .item{--inner-border-width:0 0 1px 0}.list-md .item-lines-full{--inner-border-width:0}.list-md .item-lines-inset{--border-width:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function baseAnimation(e){return Promise.resolve((new e).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300))}var BOX_SHADOW_WIDTH=8;function menuOverlayAnimation(e,t,n){var r,i,o=n.width+BOX_SHADOW_WIDTH;n.isEndSide?(r=o+"px",i="0px"):(r=-o+"px",i="0px");var u=(new e).addElement(n.menuInnerEl).fromTo("translateX",r,i),s=(new e).addElement(n.backdropEl).fromTo("opacity",.01,.3);return baseAnimation(e).then(function(e){return e.add(u).add(s)})}function menuPushAnimation(e,t,n){var r,i,o=n.width;n.isEndSide?(r=-o+"px",i=o+"px"):(r=o+"px",i=-o+"px");var u=(new e).addElement(n.menuInnerEl).fromTo("translateX",i,"0px"),s=(new e).addElement(n.contentEl).fromTo("translateX","0px",r),a=(new e).addElement(n.backdropEl).fromTo("opacity",.01,.2);return baseAnimation(e).then(function(e){return e.add(u).add(a).add(s)})}function menuRevealAnimation(e,t,n){var r=n.width*(n.isEndSide?-1:1)+"px",i=(new e).addElement(n.contentEl).fromTo("translateX","0px",r);return baseAnimation(e).then(function(e){return e.add(i)})}var MenuController=function(){function e(){this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",menuRevealAnimation),this.registerAnimation("push",menuPushAnimation),this.registerAnimation("overlay",menuOverlayAnimation)}return e.prototype.open=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,this.get(e)];case 1:return(t=n.sent())?[2,t.open()]:[2,!1]}})})},e.prototype.close=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,e?this.get(e):this.getOpen()];case 1:return(t=n.sent())?[2,t.close()]:[2,!1]}})})},e.prototype.toggle=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,this.get(e)];case 1:return(t=n.sent())?[2,t.toggle()]:[2,!1]}})})},e.prototype.enable=function(e,t){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(r){switch(r.label){case 0:return[4,this.get(t)];case 1:return(n=r.sent())&&(n.disabled=!e),[2,n]}})})},e.prototype.swipeGesture=function(e,t){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(r){switch(r.label){case 0:return[4,this.get(t)];case 1:return(n=r.sent())&&(n.swipeGesture=e),[2,n]}})})},e.prototype.isOpen=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return e?[4,this.get(e)]:[3,2];case 1:return[2,(t=n.sent())&&t.isOpen()||!1];case 2:return[2,!!this.getOpen()]}})})},e.prototype.isEnabled=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,this.get(e)];case 1:return(t=n.sent())?[2,!t.disabled]:[2,!1]}})})},e.prototype.get=function(e){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){return"start"===e||"end"===e?(t=this.find(function(t){return t.side===e&&!t.disabled}))?[2,t]:[2,this.find(function(t){return t.side===e})||null]:e?[2,this.find(function(t){return t.menuId===e})||null]:(n=this.find(function(e){return!e.disabled}))?[2,n]:[2,this.menus.length>0?this.menus[0].el:null]})})},e.prototype.getOpen=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,this.find(function(e){return e._isOpen})]})})},e.prototype.getMenus=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,this.menus.map(function(e){return e.el})]})})},e.prototype.isAnimating=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,this.menus.some(function(e){return e.isAnimating})]})})},e.prototype._register=function(e){this.menus.indexOf(e)<0&&this.menus.push(e)},e.prototype._unregister=function(e){var t=this.menus.indexOf(e);t>-1&&this.menus.splice(t,1)},e.prototype._setActiveMenu=function(e){var t=e.side;this.menus.filter(function(n){return n.side===t&&n!==e}).forEach(function(e){return e.disabled=!0})},e.prototype._setOpen=function(e,t,n){return __awaiter(this,void 0,void 0,function(){var r;return __generator(this,function(i){switch(i.label){case 0:return[4,this.isAnimating()];case 1:return i.sent()?[2,!1]:t?[4,this.getOpen()]:[3,3];case 2:(r=i.sent())&&e.el!==r&&r.setOpen(!1,!1),i.label=3;case 3:return[2,e._setOpen(t,n)]}})})},e.prototype.createAnimation=function(e,t){var n=this.menuAnimations.get(e);return n?this.animationCtrl.create(n,null,t):Promise.reject("animation not registered")},e.prototype.registerAnimation=function(e,t){this.menuAnimations.set(e,t)},e.prototype.find=function(e){var t=this.menus.find(e);return t?t.el:null},Object.defineProperty(e,"is",{get:function(){return"ion-menu-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{_register:{method:!0},_setActiveMenu:{method:!0},_setOpen:{method:!0},_unregister:{method:!0},animationCtrl:{connect:"ion-animation-controller"},close:{method:!0},createAnimation:{method:!0},enable:{method:!0},get:{method:!0},getMenus:{method:!0},getOpen:{method:!0},isAnimating:{method:!0},isEnabled:{method:!0},isOpen:{method:!0},open:{method:!0},registerAnimation:{method:!0},swipeGesture:{method:!0},toggle:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}"},enumerable:!0,configurable:!0}),e}();

/***/ })

};;