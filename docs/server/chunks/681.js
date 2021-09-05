"use strict";
exports.id = 681;
exports.ids = [681];
exports.modules = {

/***/ 3681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ UISettingsProvider),
/* harmony export */   "u": () => (/* binding */ useUISettingsContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const UISettingsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();

function uiSettingsReducer(state, action) {
  switch (action.type) {
    case 'dark':
      {
        var _window;

        if ((_window = window) !== null && _window !== void 0 && _window.localStorage) window.localStorage.setItem('mode', 'dark');
        return _objectSpread(_objectSpread({}, state), {}, {
          mode: 'dark'
        });
      }

    case 'light':
      {
        var _window2;

        if ((_window2 = window) !== null && _window2 !== void 0 && _window2.localStorage) window.localStorage.setItem('mode', 'light');
        return _objectSpread(_objectSpread({}, state), {}, {
          mode: 'light'
        });
      }

    default:
      {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
  }
} // Provides access to UI preferences/settings


function UISettingsProvider({
  children
}) {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default().useReducer(uiSettingsReducer, {
    mode: null
  });
  const value = {
    state,
    dispatch
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UISettingsContext.Provider, {
    value: value,
    children: children
  });
}

function useUISettingsContext() {
  const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(UISettingsContext);
  if (context === undefined) throw new Error('useUISettingsContext must be used within a UISettingsProvider');
  return context;
}



/***/ })

};
;