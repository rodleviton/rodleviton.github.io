"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./theme/breakpoints.js
const breakpoints = ['480px', '768px', '992px', '1280px', '1440px'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];
/* harmony default export */ const theme_breakpoints = (breakpoints);
;// CONCATENATED MODULE: ./theme/colors.js
const palette = {
  primary: {
    css: 'hsl(247, 66%, 58%)',
    hex: '#5C4CDA'
  },
  neutrals: {
    white: {
      css: 'hsl(0, 0%, 100%)',
      hex: '#ffffff'
    },
    alabaster: {
      css: 'hsl(0, 0%, 98%)',
      hex: '#f9f9f9'
    },
    alto: {
      css: 'hsl(0, 0%, 88%)',
      hex: '#e0e0e0'
    },
    gray: {
      css: 'hsl(0, 0%, 50%)',
      hex: '#818181'
    },
    ink: {
      css: 'hsl(0, 0%, 13%)',
      hex: '#222222'
    }
  }
};
const colors = {
  dark: {
    palette,
    typography: {
      default: palette.neutrals.white.css,
      light: palette.neutrals.ink.css,
      dark: palette.neutrals.white.css,
      link: palette.primary.css
    },
    background: {
      alpha: {
        css: 'hsl(255, 19%, 21%)',
        hex: '#312C40'
      },
      beta: {
        css: 'hsl(258, 18%, 19%)',
        hex: '#2D2839'
      }
    }
  },
  light: {
    palette,
    typography: {
      default: palette.neutrals.ink.css,
      light: palette.neutrals.ink.css,
      dark: palette.neutrals.white.css,
      link: palette.primary.css
    },
    background: {
      alpha: {
        css: 'hsl(0, 0%, 100%)',
        hex: '#ffffff'
      },
      beta: {
        css: 'hsl(0, 0%, 98%)',
        hex: '#fafafa'
      }
    }
  }
};
/* harmony default export */ const theme_colors = (colors);
// EXTERNAL MODULE: ./theme/fontSizes.js
var fontSizes = __webpack_require__(535);
;// CONCATENATED MODULE: ./theme/fontWeights.js
const fontWeights = {
  regular: 400,
  semibold: 600,
  bold: 700
};
/* harmony default export */ const theme_fontWeights = (fontWeights);
;// CONCATENATED MODULE: ./theme/fonts.js
const fonts = {
  primary: '"Mulish", sans-serif',
  secondary: '"Montserrat", sans-serif'
};
/* harmony default export */ const theme_fonts = (fonts);
;// CONCATENATED MODULE: ./theme/radii.js
const radii = {
  sm: '2px',
  md: '8px',
  lg: '28px',
  xl: '56px'
};
/* harmony default export */ const theme_radii = (radii);
;// CONCATENATED MODULE: ./theme/shadows.js
const shadows = {
  sm: '0px 10px 30px rgba(0, 0, 0, 0.0168519), 0px 6.48148px 17.5694px rgba(0, 0, 0, 0.0274815), 0px 3.85185px 9.55556px rgba(0, 0, 0, 0.035), 0px 2px 4.875px rgba(0, 0, 0, 0.0425185), 0px 0.814815px 2.44444px rgba(0, 0, 0, 0.0531481), 0px 0.185185px 1.18056px rgba(0, 0, 0, 0.07)',
  md: '0px 100px 80px rgba(0, 0, 0, 0.005), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0075), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.01), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.0125), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.015), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.02)',
  lg: '0px 100px 80px rgba(0, 0, 0, 0.0393604), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.056545), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.07), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.083455), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.10064), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.14)',
  inverse: {
    md: '0px -100px 80px rgba(0, 0, 0, 0.005), 0px -41.7776px 33.4221px rgba(0, 0, 0, 0.0075), 0px -22.3363px 17.869px rgba(0, 0, 0, 0.01), 0px -12.5216px 10.0172px rgba(0, 0, 0, 0.0125), 0px -6.6501px 5.32008px rgba(0, 0, 0, 0.015), 0px -2.76726px 2.21381px rgba(0, 0, 0, 0.02)'
  }
};
/* harmony default export */ const theme_shadows = (shadows);
;// CONCATENATED MODULE: ./theme/space.js
const space = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '32px',
  xl: '64px',
  xxl: '128px'
};
/* harmony default export */ const theme_space = (space);
;// CONCATENATED MODULE: ./theme/sizes.js
const sizes = {
  xs: '540px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  icon: {
    sm: '12px',
    md: '16px',
    lg: '22px',
    xl: '32px'
  }
};
/* harmony default export */ const theme_sizes = (sizes);
;// CONCATENATED MODULE: ./theme/index.js









const theme = {
  light: {
    breakpoints: theme_breakpoints,
    colors: theme_colors.light,
    fonts: theme_fonts,
    fontSizes: fontSizes/* default */.Z,
    fontWeights: theme_fontWeights,
    radii: theme_radii,
    shadows: theme_shadows,
    space: theme_space,
    sizes: theme_sizes
  },
  dark: {
    breakpoints: theme_breakpoints,
    colors: theme_colors.dark,
    fonts: theme_fonts,
    fontSizes: fontSizes/* default */.Z,
    fontWeights: theme_fontWeights,
    radii: theme_radii,
    shadows: theme_shadows,
    space: theme_space,
    sizes: theme_sizes
  }
};
const light = theme.light;
const dark = theme.dark;
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(7381);
// EXTERNAL MODULE: ./hooks/useUISettingsContext.js
var useUISettingsContext = __webpack_require__(3681);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/primitives/Svg/index.js
var Svg = __webpack_require__(204);
;// CONCATENATED MODULE: ./components/elements/Logo/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Logo = /*#__PURE__*/(0,external_react_.forwardRef)((_ref, ref) => {
  let {
    width = 60,
    height = 68,
    mode = 'dark'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["width", "height", "mode"]);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Svg/* default */.Z, _objectSpread(_objectSpread({
    width: `${width}px`,
    height: `${height}px`,
    viewBox: `0 0 ${width} ${height}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M43.7564 60.3167L58.319 51.9249C59.2474 51.3899 60 50.0897 60 49.0225V32.3126L46.8652 24.8861L46.7914 42.447C46.7893 42.9595 46.4264 43.5831 45.9806 43.84L30.544 52.7355L43.7564 60.3167Z",
      fill: "#5C4CDA"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 49.1003C0 50.168 0.752818 51.4665 1.68262 52.0012L28.3174 67.3172C29.2467 67.8515 30.7513 67.8485 31.6786 67.3101L43.057 60.7035L13.9418 43.9177C13.4961 43.6607 13.1347 43.0372 13.1347 42.5238V9.02747L1.68941 15.4988C0.756374 16.0263 0 17.3195 0 18.3872V49.1003Z",
      fill: mode === 'dark' ? 'white' : '#E0E0E0'
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M28.2376 0.398855C29.168 -0.133542 30.6761 -0.132776 31.6052 0.400103L58.3171 15.7208C59.2465 16.2538 60 17.5519 60 18.6207V31.6164L30.7326 15.0558C30.2851 14.8026 29.5637 14.8094 29.1203 15.0716L13.8342 24.1125V8.64063L28.2376 0.398855Z",
      fill: mode === 'dark' ? 'white' : '#E0E0E0'
    })]
  }));
});
if (false) {}
/* harmony default export */ const elements_Logo = (Logo);
// EXTERNAL MODULE: ./components/elements/Stack/index.js
var Stack = __webpack_require__(9757);
;// CONCATENATED MODULE: ./hooks/useCustomValidity.js

/**
 * A React hook that sets a custom validation message on a HTML form control
 * element using the standard Constraint Validation API. Taken from
 * [Device Agnostic UI](https://github.com/jaydenseric/device-agnostic-ui).
 * @copyright Jayden Seric
 * @license MIT
 * @see [Device Agnostic UI docs](https://deviceagnosticui.com/hooks/useCustomValidity).
 * @see [Device Agnostic UI source](https://github.com/jaydenseric/device-agnostic-ui/blob/v5.1.1/src/hooks/useCustomValidity.mjs).
 * @param {object|null} ref React ref for the HTML form control element.
 * @param {string} [validationMessage=''] Validation message for the HTML form control element.
 */

function useCustomValidity(ref, validationMessage = '') {
  (0,external_react_.useEffect)(() => {
    if (ref.current) ref.current.setCustomValidity(validationMessage);
  }, [ref, validationMessage]);
}
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(6177);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(4229);
// EXTERNAL MODULE: ./components/primitives/Box/index.js
var Box = __webpack_require__(4100);
;// CONCATENATED MODULE: ./components/form/primitives/FieldGroup/index.js


function FieldGroup_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FieldGroup_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FieldGroup_ownKeys(Object(source), true).forEach(function (key) { FieldGroup_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FieldGroup_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FieldGroup_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function FieldGroup_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FieldGroup_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FieldGroup_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const FieldGroupPrimitive = styled_default()(Box/* default */.Z)({
  padding: 0,
  margin: 0,
  border: 'none'
});
/**
 * Field group component
 *
 * We use an inner wrapper as a workaround for a chrome issue where `fieldset` does not render `display: grid`.
 * https://bugs.chromium.org/p/chromium/issues/detail?id=262679
 */

const FieldGroup = /*#__PURE__*/(0,external_react_.forwardRef)((_ref, ref) => {
  let {
    id,
    children
  } = _ref,
      props = FieldGroup_objectWithoutProperties(_ref, ["id", "children"]);

  return /*#__PURE__*/jsx_runtime_.jsx(FieldGroupPrimitive, FieldGroup_objectSpread(FieldGroup_objectSpread({
    id: id,
    ref: ref
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Stack/* default */.Z, {
      spacing: "sm",
      children: children
    })
  }));
});

if (false) {}

/* harmony default export */ const primitives_FieldGroup = (FieldGroup);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(3699);
// EXTERNAL MODULE: ./components/elements/Type/index.js
var Type = __webpack_require__(7402);
;// CONCATENATED MODULE: ./components/form/primitives/FieldMessage/index.js


function FieldMessage_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FieldMessage_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FieldMessage_ownKeys(Object(source), true).forEach(function (key) { FieldMessage_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FieldMessage_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FieldMessage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function FieldMessage_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FieldMessage_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FieldMessage_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const FieldMessagePrimitive = styled_default()(Type/* default */.Z)((0,external_styled_system_.variant)({
  prop: 'type',
  variants: {
    error: {
      color: 'error'
    },
    info: {
      color: 'typography.light'
    }
  }
}));
/**
 * Field message component
 */

const FieldMessage = /*#__PURE__*/(0,external_react_.forwardRef)((_ref, ref) => {
  let {
    children,
    id
  } = _ref,
      props = FieldMessage_objectWithoutProperties(_ref, ["children", "id"]);

  return /*#__PURE__*/jsx_runtime_.jsx(FieldMessagePrimitive, FieldMessage_objectSpread(FieldMessage_objectSpread({
    size: "sm",
    id: id,
    ref: ref
  }, props), {}, {
    children: children
  }));
});

if (false) {}

/* harmony default export */ const primitives_FieldMessage = (FieldMessage);
;// CONCATENATED MODULE: ./components/form/primitives/Label/index.js


function Label_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Label_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Label_ownKeys(Object(source), true).forEach(function (key) { Label_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Label_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Label_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Label_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Label_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Label_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const LabelPrimitive = styled_default()(Type/* default */.Z)({
  display: 'block',
  padding: 0
}, (0,external_styled_system_.variant)({
  prop: 'disabled',
  variants: {
    true: {
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }
}));
/**
 * Accessible form label component
 */

const Label = /*#__PURE__*/(0,external_react_.forwardRef)((_ref, ref) => {
  let {
    id,
    bold,
    htmlFor,
    children
  } = _ref,
      props = Label_objectWithoutProperties(_ref, ["id", "bold", "htmlFor", "children"]);

  return /*#__PURE__*/jsx_runtime_.jsx(LabelPrimitive, Label_objectSpread(Label_objectSpread({
    as: "label",
    bold: bold,
    id: id,
    htmlFor: htmlFor,
    ref: ref
  }, props), {}, {
    children: children
  }));
});

if (false) {}

/* harmony default export */ const primitives_Label = (Label);
// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__(3445);
var css_default = /*#__PURE__*/__webpack_require__.n(css_);
// EXTERNAL MODULE: ./components/elements/Icon/index.js
var Icon = __webpack_require__(654);
;// CONCATENATED MODULE: ./components/icons/MoonIcon.js



function MoonIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MoonIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MoonIcon_ownKeys(Object(source), true).forEach(function (key) { MoonIcon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MoonIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MoonIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const MoonIcon = /*#__PURE__*/(0,external_react_.forwardRef)((_ref, ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Icon/* default */.Z, MoonIcon_objectSpread(MoonIcon_objectSpread({
    viewBox: "0 0 24 24",
    ref: ref
  }, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      clipPath: "url(#clip0)",
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M24.9452 16.0676C23.2754 19.7402 19.5749 22.2741 15.2903 22.2595C9.44279 22.2395 4.72972 17.4941 4.7497 11.6466C4.76434 7.36196 7.32347 3.67889 11.0074 2.03421C10.3966 3.36603 10.0547 4.8335 10.0494 6.38296C10.0295 12.217 14.7425 16.9759 20.59 16.9959C22.1395 17.0012 23.6093 16.6694 24.9452 16.0676Z",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
        cx: "2.88143",
        cy: "3.90131",
        r: "0.631579",
        transform: "rotate(0.195808 2.88143 3.90131)",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
        cx: "16.1423",
        cy: "4.57826",
        r: "1.26316",
        transform: "rotate(0.195808 16.1423 4.57826)",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
        cx: "21.8071",
        cy: "10.2819",
        r: "0.631579",
        transform: "rotate(0.195808 21.8071 10.2819)",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
        cx: "2.19588",
        cy: "19.6886",
        r: "1.26316",
        transform: "rotate(0.195808 2.19588 19.6886)",
        fill: "currentColor"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/jsx_runtime_.jsx("clipPath", {
        id: "clip0",
        children: /*#__PURE__*/jsx_runtime_.jsx("rect", {
          width: "24",
          height: "24",
          fill: "currentColor",
          transform: "translate(1) rotate(0.195808)"
        })
      })
    })]
  }));
});

if (false) {}

/* harmony default export */ const icons_MoonIcon = (MoonIcon);
;// CONCATENATED MODULE: ./components/icons/SunIcon.js



function SunIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SunIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SunIcon_ownKeys(Object(source), true).forEach(function (key) { SunIcon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SunIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SunIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const SunIcon = /*#__PURE__*/(0,external_react_.forwardRef)((_ref, ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Icon/* default */.Z, SunIcon_objectSpread(SunIcon_objectSpread({
    viewBox: "0 0 24 24",
    ref: ref
  }, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      clipPath: "url(#clip0)",
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M2.34783 12.8689H0.782625C0.350297 12.8689 0 12.5187 0 12.0863C0 11.654 0.350297 11.3037 0.782625 11.3037H2.34783C2.78016 11.3037 3.13045 11.654 3.13045 12.0863C3.13045 12.5187 2.78016 12.8689 2.34783 12.8689Z",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M23.2174 12.8689H21.6521C21.2198 12.8689 20.8695 12.5187 20.8695 12.0863C20.8695 11.654 21.2198 11.3037 21.6521 11.3037H23.2174C23.6494 11.3037 24 11.654 24 12.0863C24 12.5187 23.6494 12.8689 23.2174 12.8689Z",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M12.0001 24.0865C11.5678 24.0865 11.2175 23.7362 11.2175 23.3039V21.7387C11.2175 21.3064 11.5678 20.9561 12.0001 20.9561C12.4324 20.9561 12.7827 21.3064 12.7827 21.7387V23.3039C12.7827 23.7362 12.4324 24.0865 12.0001 24.0865Z",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M12.0001 3.21688C11.5678 3.21688 11.2175 2.86658 11.2175 2.43425V0.869051C11.2175 0.436723 11.5678 0.0864258 12.0001 0.0864258C12.4324 0.0864258 12.7827 0.436723 12.7827 0.869051V2.43425C12.7827 2.86658 12.4324 3.21688 12.0001 3.21688Z",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M17.6095 22.5842C17.339 22.5842 17.076 22.4439 16.9311 22.1927L16.1485 20.8371C15.9322 20.4629 16.0606 19.9842 16.4348 19.7682C16.8103 19.5517 17.288 19.6806 17.5037 20.0545L18.2864 21.4101C18.5027 21.7843 18.3742 22.263 18 22.479C17.8768 22.5504 17.7422 22.5842 17.6095 22.5842Z",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M7.17469 4.50985C6.90413 4.50985 6.64121 4.36951 6.49627 4.1183L5.71365 2.76277C5.49737 2.38852 5.62576 1.90983 6.00001 1.69383C6.37524 1.47778 6.85322 1.60594 7.06894 1.98014L7.85157 3.33568C8.06789 3.70993 7.93946 4.18861 7.56525 4.40461C7.44193 4.47601 7.30744 4.50985 7.17469 4.50985Z",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M21.7139 18.4781C21.5812 18.4781 21.4467 18.4443 21.3234 18.3729L19.9679 17.5902C19.5936 17.3742 19.4652 16.8955 19.6816 16.5213C19.8976 16.147 20.3763 16.0187 20.7505 16.235L22.106 17.0176C22.4803 17.2337 22.6087 17.7123 22.3924 18.0865C22.2473 18.3375 21.9845 18.4781 21.7139 18.4781Z",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M3.64027 8.04292C3.50752 8.04292 3.37303 8.00908 3.24975 7.93769L1.89422 7.15506C1.51997 6.93901 1.39158 6.46037 1.60791 6.08612C1.82423 5.71239 2.30241 5.58348 2.67684 5.79981L4.03238 6.58243C4.40663 6.79848 4.53502 7.27712 4.31869 7.65137C4.17371 7.90229 3.91078 8.04292 3.64027 8.04292Z",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M20.3598 8.04308C20.0892 8.04308 19.8263 7.90273 19.6814 7.65153C19.4651 7.27728 19.5935 6.79859 19.9677 6.58259L21.3232 5.79996C21.6983 5.58364 22.1764 5.71184 22.3922 6.08628C22.6085 6.46053 22.48 6.93922 22.1058 7.15522L20.7503 7.93784C20.6271 8.00914 20.4925 8.04308 20.3598 8.04308Z",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M2.2862 18.4781C2.01563 18.4781 1.75271 18.3377 1.60777 18.0865C1.39145 17.7123 1.51988 17.2336 1.89409 17.0176L3.24966 16.235C3.62443 16.0186 4.10288 16.1471 4.3186 16.5213C4.53493 16.8955 4.40649 17.3742 4.03229 17.5902L2.67676 18.3728C2.55343 18.4442 2.41895 18.4781 2.2862 18.4781Z",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M16.8252 4.51025C16.6925 4.51025 16.558 4.47641 16.4347 4.40502C16.0604 4.18897 15.932 3.71033 16.1484 3.33608L16.931 1.98055C17.1473 1.60682 17.6259 1.47814 17.9999 1.69424C18.3741 1.91028 18.5025 2.38892 18.2862 2.76317L17.5036 4.11871C17.3587 4.36963 17.0958 4.51025 16.8252 4.51025Z",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M6.39051 22.5842C6.25776 22.5842 6.12327 22.5504 5.99999 22.479C5.62574 22.263 5.49735 21.7843 5.71368 21.4101L6.49631 20.0546C6.71235 19.6806 7.19128 19.5516 7.56525 19.7682C7.9395 19.9843 8.06789 20.4629 7.85156 20.8372L7.06893 22.1927C6.92399 22.4437 6.66107 22.5842 6.39051 22.5842Z",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M12 19.3909C7.97233 19.3909 4.69568 16.1143 4.69568 12.0866C4.69568 8.05888 7.97233 4.78223 12 4.78223C16.0277 4.78223 19.3044 8.05888 19.3044 12.0866C19.3044 16.1143 16.0277 19.3909 12 19.3909Z",
        fill: "currentColor"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/jsx_runtime_.jsx("clipPath", {
        id: "clip0",
        children: /*#__PURE__*/jsx_runtime_.jsx("rect", {
          width: "24",
          height: "24.0001",
          fill: "currentColor",
          transform: "translate(0 0.0864258)"
        })
      })
    })]
  }));
});

if (false) {}

/* harmony default export */ const icons_SunIcon = (SunIcon);
// EXTERNAL MODULE: ./components/primitives/Flex/index.js
var Flex = __webpack_require__(1848);
// EXTERNAL MODULE: ./components/utils/clickableStyles.js
var clickableStyles = __webpack_require__(6538);
;// CONCATENATED MODULE: ./components/form/primitives/Toggle/index.js



function Toggle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Toggle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Toggle_ownKeys(Object(source), true).forEach(function (key) { Toggle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Toggle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Toggle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Toggle_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Toggle_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Toggle_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const checkboxSize = 24; // px

const CheckboxPrimitive = styled_default()(Flex/* default */.Z)({
  width: checkboxSize,
  height: checkboxSize,
  // Visually hide a native input but not prevent it from being keyboard focusable
  opacity: 0,
  position: 'absolute'
});
const ToggleTrack = styled_default()(Flex/* default */.Z)(css_default()({
  padding: '2px',
  alignItems: 'center',
  backgroundColor: 'palette.primary.css',
  borderRadius: '100em',
  transition: 'background 0.25s',
  position: 'relative',
  '&.checked': {
    backgroundColor: 'secondary'
  }
}));
const ToggleHandle = styled_default()(Flex/* default */.Z)(css_default()({
  marginRight: '2em',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  padding: 'sm',
  background: 'white',
  transition: 'transform 0.15s',
  boxShadow: 'sm',
  transform: 'translate3d(0, 0, 0)',
  height: '28px',
  width: '28px'
}), (0,external_styled_system_.variant)({
  prop: 'checked',
  variants: {
    true: {
      transform: 'translate3d(2em, 0, 0)'
    }
  }
}), (0,external_styled_system_.variant)({
  prop: 'error',
  variants: {
    true: {
      '&:not(:focus)': {
        borderColor: 'error',
        backgroundColor: 'white'
      }
    }
  }
}), (0,external_styled_system_.variant)({
  prop: 'disabled',
  variants: {
    true: {
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }
}), clickableStyles/* default */.Z);
/**
 * HTML toggle input
 */

const Toggle = /*#__PURE__*/(0,external_react_.forwardRef)((_ref, ref) => {
  let {
    id,
    checked,
    error,
    disabled,
    size = 'md'
  } = _ref,
      props = Toggle_objectWithoutProperties(_ref, ["id", "checked", "error", "disabled", "size"]);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ToggleTrack, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(CheckboxPrimitive, Toggle_objectSpread({
      as: "input",
      type: "checkbox",
      checked: checked,
      error: error,
      disabled: disabled,
      id: id,
      ref: ref
    }, props)), /*#__PURE__*/jsx_runtime_.jsx(Flex/* default */.Z, {
      color: "typography.dark",
      position: "absolute",
      left: checked ? 8 : 'auto',
      right: checked ? 'auto' : 8,
      children: checked ? /*#__PURE__*/jsx_runtime_.jsx(icons_MoonIcon, {
        role: "presentation"
      }) : /*#__PURE__*/jsx_runtime_.jsx(icons_SunIcon, {
        role: "presentation"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(ToggleHandle, {
      checked: checked,
      error: error,
      tabIndex: "0",
      disabled: disabled
    })]
  });
});

if (false) {}

/* harmony default export */ const primitives_Toggle = (Toggle);
;// CONCATENATED MODULE: ./components/form/ToggleField/index.js



function ToggleField_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ToggleField_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ToggleField_ownKeys(Object(source), true).forEach(function (key) { ToggleField_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ToggleField_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ToggleField_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ToggleField_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ToggleField_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ToggleField_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








/**
 * Accessible form  toggle switch field
 */

const ToggleField = /*#__PURE__*/(0,external_react_.forwardRef)((_ref, ref) => {
  var _fieldRef$current3;

  let {
    id,
    error,
    hideError,
    required,
    label,
    disabled,
    name,
    onChange,
    onBlur,
    onFocus,
    value,
    checked,
    size
  } = _ref,
      props = ToggleField_objectWithoutProperties(_ref, ["id", "error", "hideError", "required", "label", "disabled", "name", "onChange", "onBlur", "onFocus", "value", "checked", "size"]);

  const fieldRef = (0,external_react_.useRef)();
  const {
    0: validationMessage,
    1: setValidationMessage
  } = (0,external_react_.useState)(''); // Set custom validation message from user provided error

  useCustomValidity(fieldRef, error); // Determine if a user provided or native html validation message exists

  (0,external_react_.useEffect)(() => {
    var _fieldRef$current, _fieldRef$current2;

    if (fieldRef !== null && fieldRef !== void 0 && (_fieldRef$current = fieldRef.current) !== null && _fieldRef$current !== void 0 && _fieldRef$current.validationMessage) setValidationMessage(fieldRef === null || fieldRef === void 0 ? void 0 : (_fieldRef$current2 = fieldRef.current) === null || _fieldRef$current2 === void 0 ? void 0 : _fieldRef$current2.validationMessage);else setValidationMessage('');
  }, [fieldRef === null || fieldRef === void 0 ? void 0 : (_fieldRef$current3 = fieldRef.current) === null || _fieldRef$current3 === void 0 ? void 0 : _fieldRef$current3.validationMessage]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(primitives_FieldGroup, ToggleField_objectSpread(ToggleField_objectSpread({
    id: `${id}-field-group`,
    ref: ref
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(primitives_Label, {
      id: `${id}-field-label`,
      htmlFor: `${id}-field-input`,
      disabled: disabled,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Stack/* default */.Z, {
        alignItems: "center",
        direction: "column",
        spacing: "sm",
        gridTemplateColumns: "auto 1fr",
        children: [/*#__PURE__*/jsx_runtime_.jsx(primitives_Toggle, {
          id: `${id}-field-input`,
          disabled: disabled,
          name: name,
          error: !hideError && (!!error || !!validationMessage),
          onChange: onChange,
          onBlur: onBlur,
          onFocus: onFocus,
          value: value,
          checked: checked,
          required: required
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: label
        })]
      })
    }), !hideError && (error || validationMessage) && /*#__PURE__*/jsx_runtime_.jsx(primitives_FieldMessage, {
      id: `${id}-field-message`,
      type: "error",
      children: error || validationMessage
    })]
  }));
});

if (false) {}

/* harmony default export */ const form_ToggleField = (ToggleField);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/elements/Anchor/index.js
var Anchor = __webpack_require__(4842);
;// CONCATENATED MODULE: ./layouts/DefaultLayout.js










function DefaultLayout({
  children
}) {
  const {
    dispatch,
    state: {
      mode
    }
  } = (0,useUISettingsContext/* useUISettingsContext */.u)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Flex/* default */.Z, {
      as: "header",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Flex/* default */.Z, {
        width: {
          _: 'auto',
          lg: 540,
          xxl: 660
        },
        bg: {
          _: 'background.beta.css',
          lg: 'background.alpha.css'
        },
        px: {
          _: 'md',
          lg: 'xl'
        },
        py: {
          _: 'md',
          lg: 'lg'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(Anchor/* default */.Z, {
            children: /*#__PURE__*/jsx_runtime_.jsx(elements_Logo, {
              mode: mode
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Flex/* default */.Z, {
        bg: "background.beta.css",
        justifyContent: "flex-end",
        px: {
          _: 'md',
          lg: 'xl'
        },
        py: {
          _: 'md',
          lg: 'lg'
        },
        alignItems: "center",
        flex: "1",
        children: /*#__PURE__*/jsx_runtime_.jsx(form_ToggleField, {
          id: "dark-mode",
          checked: mode === 'dark',
          onChange: ({
            target: {
              checked
            }
          }) => dispatch({
            type: checked ? 'dark' : 'light'
          })
        })
      })]
    }), children]
  });
}

/* harmony default export */ const layouts_DefaultLayout = (DefaultLayout);
;// CONCATENATED MODULE: ./partials/_content.js


function _content_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _content_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _content_ownKeys(Object(source), true).forEach(function (key) { _content_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _content_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _content_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Content({
  Component,
  pageProps
}) {
  const {
    dispatch,
    state: {
      mode
    }
  } = (0,useUISettingsContext/* useUISettingsContext */.u)();
  (0,external_react_.useEffect)(() => {
    if (!mode) {
      const previouslySavedMode = window.localStorage.getItem('mode');
      const prefersColorScheme = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : null;
      !previouslySavedMode && prefersColorScheme ? dispatch({
        type: 'dark'
      }) : previouslySavedMode ? dispatch({
        type: previouslySavedMode
      }) : dispatch({
        type: 'light'
      });
    }
  }, [mode, dispatch]);
  return /*#__PURE__*/jsx_runtime_.jsx(react_.ThemeProvider, {
    theme: mode === 'dark' ? dark : light,
    children: /*#__PURE__*/jsx_runtime_.jsx(layouts_DefaultLayout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _content_objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ const _content = (Content);
;// CONCATENATED MODULE: ./pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function App(props) {
  return /*#__PURE__*/jsx_runtime_.jsx(useUISettingsContext/* UISettingsProvider */.Y, {
    children: /*#__PURE__*/jsx_runtime_.jsx(_content, _app_objectSpread({}, props))
  });
}

/* harmony default export */ const _app = (App);

/***/ }),

/***/ 7381:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 6177:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 3445:
/***/ ((module) => {

module.exports = require("@styled-system/css");

/***/ }),

/***/ 1499:
/***/ ((module) => {

module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 8695:
/***/ ((module) => {

module.exports = require("@styled-system/should-forward-prop");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 4229:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3699:
/***/ ((module) => {

module.exports = require("styled-system");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,309,681,842], () => (__webpack_exec__(6522)));
module.exports = __webpack_exports__;

})();