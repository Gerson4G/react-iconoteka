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

function SvgEarthAmericaPlanetRegularFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 19a8.94 8.94 0 01-6.91-3.25 2.22 2.22 0 001.24-2 2.24 2.24 0 00-2.24-2.25 2.33 2.33 0 00-.92.2A8.7 8.7 0 013 12a9 9 0 0116-5.71l-.74 2A2 2 0 0020.09 11h.85a8.26 8.26 0 01.06 1 9 9 0 01-9 9zm2.57-9.19h-4.28a1 1 0 010-2h4a1 1 0 00.93-.66l.61-1.66a2 2 0 00-1.93-2.68h-7a.91.91 0 100 1.81H7a1 1 0 011 1v2.8a3 3 0 00.88 2.12l2.7 2.7v4.23h1.69a2 2 0 001.87-1.31l1.34-3.67a2 2 0 00-1.91-2.68z"
  }));
}

var _default = SvgEarthAmericaPlanetRegularFill;
exports.default = _default;