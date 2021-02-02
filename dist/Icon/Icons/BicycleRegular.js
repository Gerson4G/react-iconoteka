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

function SvgBicycleRegular(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19 10a5.29 5.29 0 00-.8.08l-1.85-6.92h-3.21a.51.51 0 00-.5.5.5.5 0 00.5.5h2.44l.9 3.37H7.4L7 5.92l1.37-.49V5H4.72a.5.5 0 100 1H6l.47 1.76-.67 2.32A5.29 5.29 0 005 10a5 5 0 105 5.5h2l1.86-7h2.9l.48 1.81A5 5 0 1019 10zM5 19a4 4 0 010-8 4.93 4.93 0 01.54.05l-1 3.83a.49.49 0 00.46.62h4A4 4 0 015 19zm1.51-7.7A4 4 0 019 14.5H5.65zm4.71 3.2H10a5 5 0 00-3.18-4.16l.48-1.81h5.57zM19 19a4 4 0 01-1.51-7.7l1 3.83a.5.5 0 00.48.37h.13a.49.49 0 00.35-.61l-1-3.82A4.93 4.93 0 0119 11a4 4 0 010 8z"
  }));
}

var _default = SvgBicycleRegular;
exports.default = _default;