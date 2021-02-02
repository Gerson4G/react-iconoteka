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

function SvgTrafficlightMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 10.75A1.25 1.25 0 1013.25 12 1.25 1.25 0 0012 10.75zm0 5A1.25 1.25 0 1013.25 17 1.25 1.25 0 0012 15.75zm0-10A1.25 1.25 0 1013.25 7 1.25 1.25 0 0012 5.75zm6.84 6.64l.8-2.39H18V8a.89.89 0 00.84-.61l.8-2.39H18a3 3 0 00-3-3H9a3 3 0 00-3 3H4.36l.8 2.39A.89.89 0 006 8v2H4.36l.8 2.39A.89.89 0 006 13v2H4.36l.8 2.39A.89.89 0 006 18v1a3 3 0 003 3h6a3 3 0 003-3v-1a.89.89 0 00.84-.61l.8-2.39H18v-2a.89.89 0 00.84-.61zM16.5 19a1.5 1.5 0 01-1.5 1.5H9A1.5 1.5 0 017.5 19V5A1.5 1.5 0 019 3.5h6A1.5 1.5 0 0116.5 5z"
  }));
}

var _default = SvgTrafficlightMediumLine;
exports.default = _default;