exports.ids = [53];
exports.modules = {

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosTransitionAnimation", function() { return iosTransitionAnimation; });
var DURATION = 500, EASING = "cubic-bezier(0.36,0.66,0.04,1)", OPACITY = "opacity", TRANSFORM = "transform", TRANSLATEX = "translateX", CENTER = "0%", OFF_OPACITY = .8;
function shadow(e) { return e.shadowRoot || e; }
function iosTransitionAnimation(e, o, t) { var n = "rtl" === document.dir, r = n ? "-99.5%" : "99.5%", a = n ? "33%" : "-33%", d = t.enteringEl, l = t.leavingEl, T = new e; if (T.addElement(d).duration(t.duration || DURATION).easing(t.easing || EASING).beforeRemoveClass("ion-page-invisible"), l && o) {
    var t_1 = new e;
    t_1.addElement(o).beforeAddClass("show-decor").afterRemoveClass("show-decor"), T.add(t_1);
} var s = "back" === t.direction; if (d) {
    var o_1 = d.querySelector(":scope > ion-content"), t_2 = d.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"), l_1 = d.querySelector(":scope > ion-header > ion-toolbar"), c = new e;
    if (o_1 || l_1 || 0 !== t_2.length ? (c.addElement(o_1), c.addElement(t_2)) : c.addElement(d.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")), T.add(c), s ? c.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX, a, CENTER, !0).fromTo(OPACITY, OFF_OPACITY, 1, !0) : c.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX, r, CENTER, !0), l_1) {
        var o_2 = new e;
        o_2.addElement(l_1), T.add(o_2);
        var t_3 = new e;
        t_3.addElement(l_1.querySelector("ion-title"));
        var d_1 = new e;
        d_1.addElement(l_1.querySelectorAll("ion-buttons,[menuToggle]"));
        var c_1 = new e;
        c_1.addElement(shadow(l_1).querySelector(".toolbar-background"));
        var i = new e, A = l_1.querySelector("ion-back-button");
        if (i.addElement(A), o_2.add(t_3).add(d_1).add(c_1).add(i), t_3.fromTo(OPACITY, .01, 1, !0), d_1.fromTo(OPACITY, .01, 1, !0), s)
            t_3.fromTo(TRANSLATEX, a, CENTER, !0), i.fromTo(OPACITY, .01, 1, !0);
        else if (t_3.fromTo(TRANSLATEX, r, CENTER, !0), c_1.beforeClearStyles([OPACITY]).fromTo(OPACITY, .01, 1, !0), i.fromTo(OPACITY, .01, 1, !0), A) {
            var t_4 = new e;
            t_4.addElement(shadow(A).querySelector(".button-text")).fromTo(TRANSLATEX, n ? "-100px" : "100px", "0px"), o_2.add(t_4);
        }
    }
} if (l) {
    var o_3 = new e;
    o_3.addElement(l.querySelector(":scope > ion-content")), o_3.addElement(l.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")), T.add(o_3), s ? o_3.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX, CENTER, n ? "-100%" : "100%") : o_3.fromTo(TRANSLATEX, CENTER, a, !0).fromTo(OPACITY, 1, OFF_OPACITY, !0);
    var t_5 = l.querySelector(":scope > ion-header > ion-toolbar");
    if (t_5) {
        var o_4 = new e;
        o_4.addElement(t_5);
        var r_1 = new e;
        r_1.addElement(t_5.querySelector("ion-title"));
        var d_2 = new e;
        d_2.addElement(t_5.querySelectorAll("ion-buttons,[menuToggle]"));
        var l_2 = new e;
        l_2.addElement(shadow(t_5).querySelector(".toolbar-background"));
        var c = new e, i = t_5.querySelector("ion-back-button");
        if (c.addElement(i), o_4.add(r_1).add(d_2).add(c).add(l_2), T.add(o_4), c.fromTo(OPACITY, .99, 0, !0), r_1.fromTo(OPACITY, .99, 0, !0), d_2.fromTo(OPACITY, .99, 0, !0), s) {
            if (r_1.fromTo(TRANSLATEX, CENTER, n ? "-100%" : "100%"), l_2.beforeClearStyles([OPACITY]).fromTo(OPACITY, 1, .01, !0), i) {
                var t_6 = new e;
                t_6.addElement(shadow(i).querySelector(".button-text")), t_6.fromTo(TRANSLATEX, CENTER, (n ? -124 : 124) + "px"), o_4.add(t_6);
            }
        }
        else
            r_1.fromTo(TRANSLATEX, CENTER, a).afterClearStyles([TRANSFORM]), c.afterClearStyles([OPACITY]), r_1.afterClearStyles([OPACITY]), d_2.afterClearStyles([OPACITY]);
    }
} return Promise.resolve(T); }



/***/ })

};;