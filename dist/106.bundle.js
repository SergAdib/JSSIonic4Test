exports.ids = [106];
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

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonItem", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonItemDivider", function() { return ItemDivider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonListHeader", function() { return ListHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonNote", function() { return Note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonSkeletonText", function() { return SkeletonText; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(300);
/* harmony import */ var _chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(311);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var Item=function(){function e(){this.itemStyles=new Map,this.button=!1,this.detailIcon="ios-arrow-forward",this.disabled=!1,this.type="button"}return e.prototype.itemStyle=function(e){e.stopPropagation();for(var t=e.target.tagName,n=e.detail,r=Object.keys(e.detail),o={},i=this.itemStyles.get(t)||{},l=!1,a=0,c=r;a<c.length;a++){var s=c[a],u="item-"+s,d=n[s];d!==i[u]&&(l=!0),o[u]=d}l&&(this.itemStyles.set(t,o),this.el.forceUpdate())},e.prototype.componentDidLoad=function(){Array.from(this.el.querySelectorAll("ion-button")).forEach(function(e){e.size||(e.size="small")})},e.prototype.isClickable=function(){return!!(this.href||this.el.onclick||this.button)},e.prototype.hostData=function(){var e,t={};return this.itemStyles.forEach(function(e){Object.assign(t,e)}),{"ion-activable":this.isClickable(),class:Object.assign({},t,Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.color),(e={},e["item-lines-"+this.lines]=!!this.lines,e["item-disabled"]=this.disabled,e["in-list"]=Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_1__["d"])("ion-list",this.el),e.item=!0,e))}},e.prototype.render=function(){var e=this,t=e.href,n=e.detail,r=e.mode,o=e.win,i=e.state,l=e.detailIcon,a=e.routerDirection,c=e.type,s=this.isClickable(),u=s?t?"a":"button":"div",d="button"===u?{type:c}:{href:t},f=null!=n?n:"ios"===r&&s;return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])(u,Object.assign({},d,{class:"item-native",onClick:function(e){return Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_1__["c"])(o,t,e,a)}}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",{name:"start"}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"item-inner"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"input-wrapper"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null)),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",{name:"end"}),f&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon",{icon:l,lazy:!1,class:"item-detail-icon"})),i&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"item-state"}),s&&"md"===r&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect",null))},Object.defineProperty(e,"is",{get:function(){return"ion-item"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{button:{type:Boolean,attr:"button"},color:{type:String,attr:"color"},detail:{type:Boolean,attr:"detail"},detailIcon:{type:String,attr:"detail-icon"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},state:{type:String,attr:"state"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionStyle",method:"itemStyle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--min-height:44px;--background:var(--ion-color-base);--background-active:var(--ion-color-tint);--color:var(--ion-color-contrast);--detail-push-color:var(--ion-color-shade);--border-radius:0;--border-width:0;--border-style:solid;--border-color:var(--ion-color-shade);--inner-border-width:0;--padding-top:0;--padding-bottom:0;--padding-end:0;--padding-start:0;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--box-shadow:none;--inner-box-shadow:none;--highlight-color-focus:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #10dc60);--highlight-color-invalid:var(--ion-color-danger, #f04141);--highlight-height:2px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;color:var(--ion-color-contrast);font-family:var(--ion-font-family,inherit);text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.activated){--background:var(--background-active);--transition:none}:host(.item-disabled){cursor:default;opacity:.3;pointer-events:none}.item-native{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);border-radius:var(--border-radius);margin:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:0;background-color:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}a,button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-state{left:0;right:0;bottom:0;position:absolute;height:var(--highlight-height)}.item-inner{margin:0;padding:var(--inner-padding-top) calc(var(--ion-safe-area-right,0px) + var(--inner-padding-end)) var(--inner-padding-bottom) calc(var(--ion-safe-area-left,0px) + var(--inner-padding-start));display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.input-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-input),:host([vertical-align-top]){-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}:host(.item-label-floating) .input-wrapper,:host(.item-label-stacked) .input-wrapper{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-select){--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}:host{--ion-color-base:var(--ion-item-background-color, transparent);--ion-color-contrast:var(--ion-item-text-color, var(--ion-text-color, #000));--ion-color-tint:var(--ion-item-background-color-active, #d9d9d9);--ion-color-shade:var(--ion-item-border-color, #c8c7cc);--transition:background-color 200ms linear;--padding-start:16px;--inner-padding-end:8px;--inner-border-width:0 0 0.55px 0;font-size:17px}:host(.item-lines-full){--border-width:0 0 0.55px 0}:host(.item-lines-inset){--inner-border-width:0 0 0.55px 0}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0}::slotted(:not(.interactive)[slot=start]){margin:2px 16px 2px 0}::slotted(:not(.interactive)[slot=end]){margin-left:8px;margin-right:8px}::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:0;margin-top:7px;margin-bottom:7px}:host(.item-label-floating) ::slotted([slot=end]),:host(.item-label-stacked) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}::slotted(.button-small){--padding-top:0;--padding-bottom:0;--padding-start:.5em;--padding-end:.5em;--height:24px;font-size:13px}::slotted(ion-avatar){width:36px;height:36px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin:8px}.item-detail-icon{color:var(--detail-push-color);font-size:20px}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:0}:host(.item-label-floating) ::slotted(ion-input),:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-textarea),:host(.item-label-stacked) ::slotted(ion-input),:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-textarea){--padding-top:8px;--padding-bottom:8px;--padding-start:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),ItemDivider=function(){function e(){}return e.prototype.componentDidLoad=function(){Array.from(this.el.querySelectorAll("ion-button")).forEach(function(e){e.size||(e.size="small")})},e.prototype.hostData=function(){return{class:Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.color)}},e.prototype.render=function(){return[Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",{name:"start"}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"item-divider-inner"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"item-divider-wrapper"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null)),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",{name:"end"}))]},Object.defineProperty(e,"is",{get:function(){return"ion-item-divider"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},el:{elementRef:!0},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--padding-start:0px;--padding-end:0px;--padding-top:0px;--padding-bottom:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;padding:var(--padding-top) calc(var(--padding-end) + var(--ion-safe-area-right,0px)) var(--padding-bottom) calc(var(--padding-start) + var(--ion-safe-area-left,0px));display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:30px;background-color:var(--ion-color-base);color:var(--ion-color-contrast);font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:100;-webkit-box-sizing:border-box;box-sizing:border-box}:host([sticky]){position:-webkit-sticky;position:sticky;top:0}.item-divider-inner{margin:0;padding:0 8px 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border:0;overflow:hidden}.item-divider-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden}:host{--ion-color-base:var(--ion-background-color-step-50, #f2f2f2);--ion-color-contrast:var(--ion-text-color-step-150, #262626);--padding-start:16px;border-radius:0;position:relative;font-size:17px}\@media screen and (orientation:landscape){.item-divider-inner{padding-right:calc(env(safe-area-inset-right) + 8px)}}:host([slot=start]){margin:2px 16px 2px 0}:host([slot=end]){margin-left:8px;margin-right:8px}::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:0;margin-top:7px;margin-bottom:7px}::slotted(h1){margin:0 0 2px;font-size:24px;font-weight:400}::slotted(h2){margin:0 0 2px;font-size:17px;font-weight:400}::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6){margin:0 0 3px;font-size:14px;font-weight:400;line-height:normal}::slotted(p){margin:0 0 2px;color:var(--ion-text-color-step-600,#999);font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}::slotted(h2:last-child) ::slotted(h3:last-child),::slotted(h4:last-child),::slotted(h5:last-child),::slotted(h6:last-child),::slotted(p:last-child){margin-bottom:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),ListHeader=function(){function e(){}return e.prototype.hostData=function(){return{class:Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.color)}},e.prototype.render=function(){return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-list-header"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;padding:0 0 0 16px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;background:var(--ion-color-base);color:var(--ion-color-contrast);overflow:hidden;--ion-color-base:transparent;--ion-color-contrast:var(--ion-text-color-step-150, #262626);position:relative;font-size:12px;font-weight:500;letter-spacing:1px;text-transform:uppercase}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),Note=function(){function e(){}return e.prototype.hostData=function(){return{class:Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.color)}},e.prototype.render=function(){return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-note"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{color:var(--color);font-family:var(--ion-font-family,inherit);--color:var(--ion-text-color-step-650, #a6a6a6)}:host(.ion-color){color:var(--ion-color-base)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),SkeletonText=function(){function e(){this.width="100%"}return e.prototype.render=function(){return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span",{style:{width:this.width}}," ")},Object.defineProperty(e,"is",{get:function(){return"ion-skeleton-text"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{width:{type:String,attr:"width"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:inline-block;width:100%;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--background:var(--ion-text-color, #000)}span{display:inline-block;font-size:8px;background:var(--background);opacity:.1}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();

/***/ })

};;