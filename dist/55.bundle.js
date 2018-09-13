exports.ids = [55];
exports.modules = {

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
function startStatusTap(t, n) { t.addEventListener("statusTap", function () { n.read(function () { var e = t.innerWidth, o = t.innerHeight, r = t.document.elementFromPoint(e / 2, o / 2); if (!r)
    return; var i = r.closest("ion-content"); i && i.componentOnReady().then(function () { n.write(function () { i.scrollToTop(300); }); }); }); }); }



/***/ })

};;