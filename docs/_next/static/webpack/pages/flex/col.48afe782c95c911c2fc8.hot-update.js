webpackHotUpdate_N_E("pages/flex/col",{

/***/ "./pages/flex/col.mdx":
/*!****************************!*\
  !*** ./pages/flex/col.mdx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"../node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ \"../node_modules/@mdx-js/react/dist/esm.js\");\n\n\nvar _jsxFileName = \"/ag/universe-ui/website/pages/flex/col.mdx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n/* @jsx mdx */\n\nvar layoutProps = {};\nvar MDXLayout = \"wrapper\";\nfunction MDXContent(_ref) {\n  var components = _ref.components,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, \"Col\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"pre\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"code\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    parentName: \"pre\"\n  }, {\n    \"className\": \"language-tsx\",\n    \"metastring\": \"render dir='col'\",\n    \"render\": true,\n    \"dir\": \"'col'\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 10\n    }\n  }), \"() => {\\n  const { FlexProps, align, gap, justify } = hooks.useFlexProps()\\n  return (\\n    <>\\n      <Col minW=\\\"150px\\\" justify={justify} gap={gap} align={align} bg='black'>\\n        <Box minH=\\\"50px\\\" minW=\\\"50px\\\" border='2' bg=\\\"red\\\" />\\n        <Box minH=\\\"50px\\\" minW=\\\"50px\\\" border='2' bg=\\\"orange\\\" />\\n        <Box minH=\\\"50px\\\" minW=\\\"50px\\\" border='2' bg=\\\"yellow\\\" />\\n        <Box minH=\\\"50px\\\" minW=\\\"50px\\\" border='2' bg=\\\"green\\\" />\\n        <Box minH=\\\"50px\\\" minW=\\\"50px\\\" border='2' bg=\\\"blue\\\" />\\n        <Box minH=\\\"50px\\\" minW=\\\"50px\\\" border='2' bg=\\\"purple\\\" />\\n      </Col>\\n      <FlexProps />\\n    </>\\n  )\\n}\\n\")));\n}\n_c = MDXContent;\n;\nMDXContent.isMDXComponent = true;\n\nvar _c;\n\n$RefreshReg$(_c, \"MDXContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmxleC9jb2wubWR4PzU0NTMiXSwibmFtZXMiOlsibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUlBLElBQU1BLFdBQVcsR0FBRyxFQUFwQjtBQUdBLElBQU1DLFNBQVMsR0FBRyxTQUFsQjtBQUNlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELHlGQUFlSixXQUFmLEVBQWdDSSxLQUFoQztBQUF1QyxjQUFVLEVBQUVELFVBQW5EO0FBQStELFdBQU8sRUFBQyxXQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURLLEVBRUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTJCO0FBQzVCLGlCQUFhLGNBRGU7QUFFNUIsa0JBQWMsa0JBRmM7QUFHNUIsY0FBVSxJQUhrQjtBQUk1QixXQUFPO0FBSnFCLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNG9CQUFMLENBRkssQ0FBUDtBQXlCRDtLQTdCdUJELFU7QUErQnhCO0FBQ0FBLFVBQVUsQ0FBQ0csY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiIuL3BhZ2VzL2ZsZXgvY29sLm1keC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cblxuXG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBcIndyYXBwZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG4gICAgPGgxPntgQ29sYH08L2gxPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtdHN4XCIsXG4gICAgICAgIFwibWV0YXN0cmluZ1wiOiBcInJlbmRlciBkaXI9J2NvbCdcIixcbiAgICAgICAgXCJyZW5kZXJcIjogdHJ1ZSxcbiAgICAgICAgXCJkaXJcIjogXCInY29sJ1wiXG4gICAgICB9fT57YCgpID0+IHtcbiAgY29uc3QgeyBGbGV4UHJvcHMsIGFsaWduLCBnYXAsIGp1c3RpZnkgfSA9IGhvb2tzLnVzZUZsZXhQcm9wcygpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb2wgbWluVz1cIjE1MHB4XCIganVzdGlmeT17anVzdGlmeX0gZ2FwPXtnYXB9IGFsaWduPXthbGlnbn0gYmc9J2JsYWNrJz5cbiAgICAgICAgPEJveCBtaW5IPVwiNTBweFwiIG1pblc9XCI1MHB4XCIgYm9yZGVyPScyJyBiZz1cInJlZFwiIC8+XG4gICAgICAgIDxCb3ggbWluSD1cIjUwcHhcIiBtaW5XPVwiNTBweFwiIGJvcmRlcj0nMicgYmc9XCJvcmFuZ2VcIiAvPlxuICAgICAgICA8Qm94IG1pbkg9XCI1MHB4XCIgbWluVz1cIjUwcHhcIiBib3JkZXI9JzInIGJnPVwieWVsbG93XCIgLz5cbiAgICAgICAgPEJveCBtaW5IPVwiNTBweFwiIG1pblc9XCI1MHB4XCIgYm9yZGVyPScyJyBiZz1cImdyZWVuXCIgLz5cbiAgICAgICAgPEJveCBtaW5IPVwiNTBweFwiIG1pblc9XCI1MHB4XCIgYm9yZGVyPScyJyBiZz1cImJsdWVcIiAvPlxuICAgICAgICA8Qm94IG1pbkg9XCI1MHB4XCIgbWluVz1cIjUwcHhcIiBib3JkZXI9JzInIGJnPVwicHVycGxlXCIgLz5cbiAgICAgIDwvQ29sPlxuICAgICAgPEZsZXhQcm9wcyAvPlxuICAgIDwvPlxuICApXG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/flex/col.mdx\n");

/***/ })

})