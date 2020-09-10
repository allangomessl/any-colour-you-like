webpackHotUpdate_N_E("pages/_app",{

/***/ "./hooks/useFlexProps.tsx":
/*!********************************!*\
  !*** ./hooks/useFlexProps.tsx ***!
  \********************************/
/*! exports provided: useFlexProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useFlexProps\", function() { return useFlexProps; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _universe_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @universe-ui/core */ \"../node_modules/@universe-ui/core/index.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _mdx_CodeBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mdx/CodeBlock */ \"./mdx/CodeBlock.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/ag/universe-ui/website/hooks/useFlexProps.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\n\n\n\nvar useFlexProps = function useFlexProps(elementName) {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"](\"flex-start\"),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      align = _React$useState2[0],\n      setAlign = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"](\"flex-start\"),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      justify = _React$useState4[0],\n      setJustify = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"](2),\n      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState5, 2),\n      gap = _React$useState6[0],\n      setGap = _React$useState6[1];\n\n  var FlexProps = react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"](function () {\n    return __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n      fill: true,\n      gap: \"16px\",\n      padding: \"8px\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 7\n      }\n    }, __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n      align: \"center\",\n      gap: 2,\n      justify: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }\n    }, __jsx(\"strong\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }\n    }, \"Flex Props\")), __jsx(\"strong\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }\n    }, \"align:\\xA0\"), __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"].Choice, {\n      inverted: true,\n      w: \"150px\",\n      selected: align,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }\n    }, __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      key: \"flex-start\",\n      onClick: function onClick(_) {\n        return setAlign(\"flex-start\");\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }\n    }, \"start\"), __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      key: \"center\",\n      onClick: function onClick(_) {\n        return setAlign(\"center\");\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }\n    }, \"center\"), __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      key: \"flex-end\",\n      onClick: function onClick(_) {\n        return setAlign(\"flex-end\");\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }\n    }, \"end\"), __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      key: \"strech\",\n      onClick: function onClick(_) {\n        return setAlign(\"strech\");\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 11\n      }\n    }, \"stretch\")), __jsx(\"strong\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }\n    }, \"justify:\\xA0\"), __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"].Choice, {\n      inverted: true,\n      w: \"150px\",\n      selected: justify,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }\n    }, __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      key: \"flex-start\",\n      onClick: function onClick(_) {\n        return setJustify(\"flex-start\");\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }\n    }, \"start\"), __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      key: \"center\",\n      onClick: function onClick(_) {\n        return setJustify(\"center\");\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }\n    }, \"center\"), __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      key: \"flex-end\",\n      onClick: function onClick(_) {\n        return setJustify(\"flex-end\");\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }\n    }, \"end\"), __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      key: \"space-between\",\n      onClick: function onClick(_) {\n        return setJustify(\"space-between\");\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }\n    }, \"space-between\"), __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      key: \"space-around\",\n      onClick: function onClick(_) {\n        return setJustify(\"space-around\");\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }\n    }, \"space-around\")), __jsx(\"strong\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }\n    }, \"gap:\\xA0\"), __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"].Choice, {\n      inverted: true,\n      w: \"150px\",\n      selected: gap,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }\n    }, __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      key: 0,\n      onClick: function onClick(_) {\n        return setGap(0);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 11\n      }\n    }, \"0\"), __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      key: 1,\n      onClick: function onClick(_) {\n        return setGap(1);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }\n    }, \"1\"), __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      key: 2,\n      onClick: function onClick(_) {\n        return setGap(2);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 11\n      }\n    }, \"2\"), __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      key: 3,\n      onClick: function onClick(_) {\n        return setGap(3);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 11\n      }\n    }, \"3\"), __jsx(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      key: 4,\n      onClick: function onClick(_) {\n        return setGap(4);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }\n    }, \"4...\")), __jsx(Code, {\n      h: \"120px\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }\n    }, __jsx(_mdx_CodeBlock__WEBPACK_IMPORTED_MODULE_4__[\"CodeBlock\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 11\n      }\n    }, \"<\".concat(elementName, \" align='\").concat(align, \"' justify='\").concat(justify, \"' gap={\").concat(gap, \"}>\\n  {boxes}\\n</\").concat(elementName, \">\"))));\n  }, [align, justify, gap]);\n  return {\n    FlexProps: FlexProps,\n    align: align,\n    justify: justify,\n    gap: gap\n  };\n};\n\n_s(useFlexProps, \"SwuFKC5TKikOYwrbYnXll1vXB80=\");\n\nvar Code = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_universe_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Col\"]).withConfig({\n  displayName: \"useFlexProps__Code\",\n  componentId: \"sc-1f7lura-0\"\n})([\"& > div{flex:1;}\"]);\n_c = Code;\n\nvar _c;\n\n$RefreshReg$(_c, \"Code\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlRmxleFByb3BzLnRzeD9iMGViIl0sIm5hbWVzIjpbInVzZUZsZXhQcm9wcyIsImVsZW1lbnROYW1lIiwiUmVhY3QiLCJhbGlnbiIsInNldEFsaWduIiwianVzdGlmeSIsInNldEp1c3RpZnkiLCJnYXAiLCJzZXRHYXAiLCJGbGV4UHJvcHMiLCJfIiwiQ29kZSIsInN0eWxlZCIsIkNvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxXQUFELEVBQXlCO0FBQUE7O0FBQUEsd0JBQ3pCQyw4Q0FBQSxDQUFlLFlBQWYsQ0FEeUI7QUFBQTtBQUFBLE1BQzVDQyxLQUQ0QztBQUFBLE1BQ3JDQyxRQURxQzs7QUFBQSx5QkFFckJGLDhDQUFBLENBQWUsWUFBZixDQUZxQjtBQUFBO0FBQUEsTUFFNUNHLE9BRjRDO0FBQUEsTUFFbkNDLFVBRm1DOztBQUFBLHlCQUc3QkosOENBQUEsQ0FBZSxDQUFmLENBSDZCO0FBQUE7QUFBQSxNQUc1Q0ssR0FINEM7QUFBQSxNQUd2Q0MsTUFIdUM7O0FBS25ELE1BQU1DLFNBQVMsR0FBR1AsaURBQUEsQ0FBa0IsWUFBTTtBQUN4QyxXQUNFLE1BQUMscURBQUQ7QUFBSyxVQUFJLE1BQVQ7QUFBVSxTQUFHLEVBQUMsTUFBZDtBQUFxQixhQUFPLEVBQUMsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMscURBQUQ7QUFBSyxXQUFLLEVBQUMsUUFBWDtBQUFvQixTQUFHLEVBQUUsQ0FBekI7QUFBNEIsYUFBTyxFQUFDLFFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QURwQyxvQkFDcURFLEdBRHJELDhCQUdOTixXQUhNLE9BREYsQ0F2REYsQ0FERjtBQWlFRCxHQWxFaUIsRUFrRWYsQ0FBQ0UsS0FBRCxFQUFRRSxPQUFSLEVBQWlCRSxHQUFqQixDQWxFZSxDQUFsQjtBQW9FQSxTQUFPO0FBQUVFLGFBQVMsRUFBVEEsU0FBRjtBQUFhTixTQUFLLEVBQUxBLEtBQWI7QUFBb0JFLFdBQU8sRUFBUEEsT0FBcEI7QUFBNkJFLE9BQUcsRUFBSEE7QUFBN0IsR0FBUDtBQUNELENBMUVNOztHQUFNUCxZOztBQTRFYixJQUFNVyxJQUFJLEdBQUdDLGlFQUFNLENBQUNDLHFEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsd0JBQVY7S0FBTUYsSSIsImZpbGUiOiIuL2hvb2tzL3VzZUZsZXhQcm9wcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgQ29sLCBSb3csIEJ1dHRvbiB9IGZyb20gXCJAdW5pdmVyc2UtdWkvY29yZVwiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQ29kZUJsb2NrIH0gZnJvbSAnLi4vbWR4L0NvZGVCbG9jaydcblxuZXhwb3J0IGNvbnN0IHVzZUZsZXhQcm9wcyA9IChlbGVtZW50TmFtZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IFthbGlnbiwgc2V0QWxpZ25dID0gUmVhY3QudXNlU3RhdGUoXCJmbGV4LXN0YXJ0XCIpO1xuICBjb25zdCBbanVzdGlmeSwgc2V0SnVzdGlmeV0gPSBSZWFjdC51c2VTdGF0ZShcImZsZXgtc3RhcnRcIik7XG4gIGNvbnN0IFtnYXAsIHNldEdhcF0gPSBSZWFjdC51c2VTdGF0ZSgyKTtcblxuICBjb25zdCBGbGV4UHJvcHMgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2wgZmlsbCBnYXA9JzE2cHgnIHBhZGRpbmc9JzhweCc+XG4gICAgICAgIDxSb3cgYWxpZ249XCJjZW50ZXJcIiBnYXA9ezJ9IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8c3Ryb25nPkZsZXggUHJvcHM8L3N0cm9uZz5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxzdHJvbmc+YWxpZ246Jm5ic3A7PC9zdHJvbmc+XG4gICAgICAgIDxCdXR0b24uQ2hvaWNlIGludmVydGVkIHc9JzE1MHB4JyBzZWxlY3RlZD17YWxpZ259PlxuICAgICAgICAgIDxCdXR0b24ga2V5PVwiZmxleC1zdGFydFwiIG9uQ2xpY2s9e18gPT4gc2V0QWxpZ24oXCJmbGV4LXN0YXJ0XCIpfT5cbiAgICAgICAgICAgIHN0YXJ0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBrZXk9XCJjZW50ZXJcIiBvbkNsaWNrPXtfID0+IHNldEFsaWduKFwiY2VudGVyXCIpfT5cbiAgICAgICAgICAgIGNlbnRlclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24ga2V5PVwiZmxleC1lbmRcIiBvbkNsaWNrPXtfID0+IHNldEFsaWduKFwiZmxleC1lbmRcIil9PlxuICAgICAgICAgICAgZW5kXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBrZXk9J3N0cmVjaCcgb25DbGljaz17XyA9PiBzZXRBbGlnbihcInN0cmVjaFwiKX0+XG4gICAgICAgICAgICBzdHJldGNoXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQnV0dG9uLkNob2ljZT5cbiAgICAgICAgPHN0cm9uZz5qdXN0aWZ5OiZuYnNwOzwvc3Ryb25nPlxuICAgICAgICA8QnV0dG9uLkNob2ljZSBpbnZlcnRlZCB3PScxNTBweCcgc2VsZWN0ZWQ9e2p1c3RpZnl9PlxuICAgICAgICAgIDxCdXR0b24ga2V5PSdmbGV4LXN0YXJ0JyBvbkNsaWNrPXtfID0+IHNldEp1c3RpZnkoXCJmbGV4LXN0YXJ0XCIpfT5cbiAgICAgICAgICAgIHN0YXJ0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBrZXk9J2NlbnRlcicgb25DbGljaz17XyA9PiBzZXRKdXN0aWZ5KFwiY2VudGVyXCIpfT5cbiAgICAgICAgICAgIGNlbnRlclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24ga2V5PSdmbGV4LWVuZCcgb25DbGljaz17XyA9PiBzZXRKdXN0aWZ5KFwiZmxleC1lbmRcIil9PlxuICAgICAgICAgICAgZW5kXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBrZXk9J3NwYWNlLWJldHdlZW4nIG9uQ2xpY2s9e18gPT4gc2V0SnVzdGlmeShcInNwYWNlLWJldHdlZW5cIil9PlxuICAgICAgICAgICAgc3BhY2UtYmV0d2VlblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24ga2V5PSdzcGFjZS1hcm91bmQnIG9uQ2xpY2s9e18gPT4gc2V0SnVzdGlmeShcInNwYWNlLWFyb3VuZFwiKX0+XG4gICAgICAgICAgICBzcGFjZS1hcm91bmRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9CdXR0b24uQ2hvaWNlPlxuICAgICAgICA8c3Ryb25nPmdhcDombmJzcDs8L3N0cm9uZz5cbiAgICAgICAgPEJ1dHRvbi5DaG9pY2UgaW52ZXJ0ZWQgdz0nMTUwcHgnIHNlbGVjdGVkPXtnYXB9PlxuICAgICAgICAgIDxCdXR0b24ga2V5PXswfSBvbkNsaWNrPXtfID0+IHNldEdhcCgwKX0gPlxuICAgICAgICAgICAgMFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24ga2V5PXsxfSBvbkNsaWNrPXtfID0+IHNldEdhcCgxKX0+XG4gICAgICAgICAgICAxXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBrZXk9ezJ9IG9uQ2xpY2s9e18gPT4gc2V0R2FwKDIpfT5cbiAgICAgICAgICAgIDJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIGtleT17M30gb25DbGljaz17XyA9PiBzZXRHYXAoMyl9PlxuICAgICAgICAgICAgM1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24ga2V5PXs0fSBvbkNsaWNrPXtfID0+IHNldEdhcCg0KX0+XG4gICAgICAgICAgICA0Li4uXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQnV0dG9uLkNob2ljZT5cbiAgICAgICAgPENvZGUgaD0nMTIwcHgnPlxuICAgICAgICAgIDxDb2RlQmxvY2s+XG57YDwke2VsZW1lbnROYW1lfSBhbGlnbj0nJHthbGlnbn0nIGp1c3RpZnk9JyR7anVzdGlmeX0nIGdhcD17JHtnYXB9fT5cbiAge2JveGVzfVxuPC8ke2VsZW1lbnROYW1lfT5gfVxuICAgICAgICAgIDwvQ29kZUJsb2NrPlxuICAgICAgICA8L0NvZGU+XG4gICAgICA8L0NvbD5cbiAgICApO1xuICB9LCBbYWxpZ24sIGp1c3RpZnksIGdhcF0pO1xuXG4gIHJldHVybiB7IEZsZXhQcm9wcywgYWxpZ24sIGp1c3RpZnksIGdhcCB9O1xufTtcblxuY29uc3QgQ29kZSA9IHN0eWxlZChDb2wpYFxuICAmID4gZGl2IHtcbiAgICBmbGV4OiAxO1xuICB9XG5gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useFlexProps.tsx\n");

/***/ })

})