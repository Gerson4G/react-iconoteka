"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgToysToyShopChildrensRoomBoldFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.87 16.46c-.38.31-.79.61-1.2.89s-.8.51-1.21.74l-.95-2.16a5.94 5.94 0 01-.51-2.42V8h2.23a1.53 1.53 0 001.52-1.36A1.59 1.59 0 0020.58 5L18 4.22V2h-.5A3.5 3.5 0 0014 5.5V9H6.86a4 4 0 00-3.66 2.39l-.86 2 1.83.8.86-2a2 2 0 011-1v2.29a5.94 5.94 0 01-.51 2.42l-1 2.16a16.14 16.14 0 01-2.41-1.63L.86 18c.43.36.88.69 1.35 1s1 .61 1.44.88 1 .51 1.53.73 1.07.42 1.61.59a15.35 15.35 0 001.68.43 17 17 0 001.74.27c.6.06 1.2.09 1.79.09s1.19 0 1.79-.09a17 17 0 001.74-.27 15.35 15.35 0 001.68-.43c.54-.17 1.08-.37 1.61-.59s1-.46 1.53-.73 1-.57 1.44-.88.92-.65 1.35-1zm-5.26 2.84a13.4 13.4 0 01-1.48.38 13.67 13.67 0 01-1.54.24 15.36 15.36 0 01-3.18 0 13.67 13.67 0 01-1.54-.24 13.4 13.4 0 01-1.48-.38 8.75 8.75 0 01-1-.38l.76-1.73A2 2 0 018.93 16h6.14a2 2 0 011.83 1.19l.76 1.73c-.34.13-.66.27-1.05.38z"
  }));
}

var _default = SvgToysToyShopChildrensRoomBoldFill;
exports.default = _default;