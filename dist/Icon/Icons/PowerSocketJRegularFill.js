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

function SvgPowerSocketJRegularFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 7.75a1.42 1.42 0 101.42 1.42A1.43 1.43 0 0012 7.75zM19 5H5L.57 12 5 19h14l4.47-7zM6.56 13.7a1.7 1.7 0 111.7-1.7 1.7 1.7 0 01-1.7 1.7zM12 17.18a1.7 1.7 0 111.7-1.7 1.7 1.7 0 01-1.7 1.7zm0-5.8a2.22 2.22 0 112.22-2.21A2.22 2.22 0 0112 11.38zm5.44 2.32a1.7 1.7 0 111.7-1.7 1.7 1.7 0 01-1.7 1.7zM6.56 11.2a.8.8 0 10.8.8.8.8 0 00-.8-.8zM12 14.68a.8.8 0 10.8.8.8.8 0 00-.8-.8zm5.44-3.48a.8.8 0 10.8.8.8.8 0 00-.8-.8z"
  }));
}

var _default = SvgPowerSocketJRegularFill;
exports.default = _default;