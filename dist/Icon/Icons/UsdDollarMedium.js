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

function SvgUsdDollarMedium(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18.32 16c0-2.37-1.93-4.08-5.3-4.71l-.62-.11c-.43-.07-1-.16-1.06-.19-2.26-.45-3.56-1.62-3.56-3.21 0-2.78 3.26-3 4.26-3 .71 0 4.05.16 4.46 3.19H18c-.33-3.29-3.16-4.45-5.26-4.65V1h-1.5v2.3c-3 .25-5 1.93-5 4.45 0 2.34 1.78 4.09 4.76 4.69l1.1.19.61.11c1.22.22 4.07 1 4.07 3.23 0 2-1.92 3.26-4.77 3.28A5.87 5.87 0 018.1 18a3.16 3.16 0 01-.89-2.07h-1.5A4.76 4.76 0 007 19.05a6.67 6.67 0 004.21 1.67V23h1.5v-2.28c3.4-.24 5.61-2.09 5.61-4.72z"
  }));
}

var _default = SvgUsdDollarMedium;
exports.default = _default;