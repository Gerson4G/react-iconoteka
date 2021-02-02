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

function SvgBorderBottomLight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3 21h18v-.5H3zm.5-13.62H3v.5h.5zm0 2.18H3v.5h.5zm0 8.75H3v.5h.5zm0-2.19H3v.5h.5zm0-2.18H3v.5h.5zm0-8.75H3v.5h.5zm17 2.69h.5v-.5h-.5zm0 2.18h.5v-.5h-.5zm0 8.75h.5v-.5h-.5zm0-2.19h.5v-.5h-.5zm0-2.18h.5v-.5h-.5zm0-8.75h.5v-.5h-.5zm-8.25 1.69h-.5v.5h.5zm0 2.18h-.5v.5h.5zm0 8.75h-.5v.5h.5zm0-2.19h-.5v.5h.5zm0-2.18h-.5v.5h.5zm0-8.75h-.5v.5h.5zM7.88 3h-.5v.5h.5zm2.18 0h-.5v.5h.5zm8.75 0h-.5v.5h.5zm-2.19 0h-.5v.5h.5zm-2.18 0h-.5v.5h.5zM5.69 3h-.5v.5h.5zM20.5 3v.5h.5V3zm-8.25 0h-.5v.5h.5zM3.5 3H3v.5h.5zm4.38 8.75h-.5v.5h.5zm2.18 0h-.5v.5h.5zm8.75 0h-.5v.5h.5zm-2.19 0h-.5v.5h.5zm-2.18 0h-.5v.5h.5zm-8.75 0h-.5v.5h.5zm14.81.5h.5v-.5h-.5zm-8.25-.5h-.5v.5h.5zm-8.75 0H3v.5h.5z",
    "data-name": "Clear 3"
  }));
}

var _default = SvgBorderBottomLight;
exports.default = _default;