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

function SvgHinduismLight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.22 2.52l-.42-.42-.43.42.43.48zm3.57 2.7l-.35-.35c-2.34 2.33-5 2-7.92-.88l-.36.35c1.72 1.72 3.4 2.58 5 2.58a5.09 5.09 0 003.63-1.7zm-2.21 4.52A5.57 5.57 0 0014 11.29a6 6 0 01-5.54 1.43l-.46-.1c1.15-.52 2.56-1.46 2.65-3a2.79 2.79 0 00-.71-2.12 2.86 2.86 0 00-2.11-.87 5.56 5.56 0 00-3.72 1.78l.35.35a5.11 5.11 0 013.37-1.63 2.38 2.38 0 011.75.71 2.33 2.33 0 01.59 1.75c-.13 2.19-3.69 3.05-3.73 3.06l.1.49a3.87 3.87 0 013.28.86 4.06 4.06 0 011.45 3 4 4 0 01-3.85 3.76c-1.92 0-4.17-1.39-4.17-5.31h-.5c0 4 2.35 5.81 4.67 5.81A4.42 4.42 0 0011.77 17a4.6 4.6 0 00-1.62-3.4c-.13-.1-.27-.21-.42-.31a6.18 6.18 0 004.61-1.6 5.08 5.08 0 013.24-1.44 3.43 3.43 0 013.61 3.7c0 2.48-1.32 4.27-3.14 4.27a2.68 2.68 0 01-2.88-2.77h-.5a3.19 3.19 0 003.38 3.27c2.11 0 3.64-2 3.64-4.77a3.93 3.93 0 00-4.11-4.21z"
  }));
}

var _default = SvgHinduismLight;
exports.default = _default;