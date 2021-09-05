"use strict";
exports.id = 842;
exports.ids = [842];
exports.modules = {

/***/ 4842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6177);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3445);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3699);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _primitives_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6544);
/* harmony import */ var _utils_clickableStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6538);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const AnchorPrimitive = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(_primitives_Text__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(_styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()({
  color: 'typography.link',
  textAlign: 'left',
  border: 'none',
  background: 'none',
  display: 'inline',
  padding: 0
}), (0,styled_system__WEBPACK_IMPORTED_MODULE_4__.variant)({
  variants: {
    light: {
      color: 'typography.link'
    },
    dark: {
      color: 'white'
    }
  }
}), styled_system__WEBPACK_IMPORTED_MODULE_4__.layout, _utils_clickableStyles__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z);
/** Anchor element */

const Anchor = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)((_ref, ref) => {
  let {
    children,
    borderRadius,
    textDecoration = 'underline',
    variant = 'light'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "borderRadius", "textDecoration", "variant"]);

  // Determine element type based on passed in props
  const elementType = props.href ? 'a' : props.onClick ? 'button' : 'div';
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnchorPrimitive, _objectSpread(_objectSpread({
    as: elementType,
    borderRadius: borderRadius,
    textDecoration: textDecoration,
    variant: variant,
    passHref: true,
    ref: ref
  }, props), {}, {
    children: children
  }));
});

if (false) {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Anchor);

/***/ })

};
;