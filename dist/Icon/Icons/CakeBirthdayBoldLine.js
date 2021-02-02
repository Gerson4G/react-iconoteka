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

function SvgCakeBirthdayBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 4.59a1.38 1.38 0 001.39-1.38C13.39 2.1 12 0 12 0s-1.39 2.1-1.39 3.21A1.38 1.38 0 0012 4.59zM18 9h-5V6h-2v3H6a4 4 0 00-4 4v9h20v-9a4 4 0 00-4-4zm2.1 11.1H3.9v-3.65h.41a4 4 0 002.51-1 1.87 1.87 0 012.66 0 3.8 3.8 0 005 0 1.87 1.87 0 012.66 0 4 4 0 002.51 1h.41zm0-5.55h-.41a2.09 2.09 0 01-1.32-.55 3.8 3.8 0 00-5 0 1.87 1.87 0 01-2.66 0 3.79 3.79 0 00-5 0 2.14 2.14 0 01-1.33.55H3.9V13A2.1 2.1 0 016 10.9h12a2.1 2.1 0 012.1 2.1z"
  }));
}

var _default = SvgCakeBirthdayBoldLine;
exports.default = _default;