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

function SvgOldTvLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19 5h-6.42l2.35-3h-.64L12 4.93 9.71 2h-.64l2.35 3H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V8a3 3 0 00-3-3zm2.5 13a2.5 2.5 0 01-2.5 2.5H5A2.5 2.5 0 012.5 18V8A2.5 2.5 0 015 5.5h14A2.5 2.5 0 0121.5 8zM5 18h11V8H5zm.5-9.5h10v9h-10zM18.75 8a1.3 1.3 0 101.3 1.3 1.3 1.3 0 00-1.3-1.3zm0 2.1a.8.8 0 11.8-.8.8.8 0 01-.8.8zm0 1.9a1.3 1.3 0 101.3 1.3 1.3 1.3 0 00-1.3-1.3zm0 2.1a.8.8 0 11.8-.8.8.8 0 01-.8.8z"
  }));
}

var _default = SvgOldTvLightLine;
exports.default = _default;