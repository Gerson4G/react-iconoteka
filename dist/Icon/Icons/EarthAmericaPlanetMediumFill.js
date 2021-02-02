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

function SvgEarthAmericaPlanetMediumFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18.4a8.38 8.38 0 01-6.27-2.83 2.22 2.22 0 00.94-1.81 2.25 2.25 0 00-2.25-2.25 2.4 2.4 0 00-.66.11A8.64 8.64 0 013.6 12a8.34 8.34 0 012.47-5.94.91.91 0 00.84.56H7a1 1 0 011 1v2.8a3 3 0 00.88 2.12l2.7 2.7v3.9h1.69a2 2 0 001.87-1.31l1.22-3.34a2 2 0 00-1.88-2.68h-3.66a1 1 0 010-2h3.42a1 1 0 00.93-.66l.61-1.66a2 2 0 00-1.88-2.68H7.68a8.36 8.36 0 0110.94 2l-.54 1.48A2 2 0 0020 11h.37a8.26 8.26 0 01.07 1A8.41 8.41 0 0112 20.4z"
  }));
}

var _default = SvgEarthAmericaPlanetMediumFill;
exports.default = _default;