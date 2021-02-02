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

function SvgCloudOffRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.79 11.86a5.26 5.26 0 00.33-1.78 5.38 5.38 0 00-5.37-5.37 5.32 5.32 0 00-2.42.6 7.38 7.38 0 00-1.26-.94 6.89 6.89 0 00-10.23 7.19A4.36 4.36 0 004.36 20h15.28a4.35 4.35 0 002.15-8.14zM19.64 19H4.36a3.35 3.35 0 01-1.17-6.5l.81-.29-.15-.83a5.89 5.89 0 018.75-6.14 5.68 5.68 0 011.08.8l.51.48.62-.32a4.34 4.34 0 016.34 3.88 4.3 4.3 0 01-.27 1.45l-.28.79.73.41A3.35 3.35 0 0119.64 19zm-5.56-9.79L12 11.29 9.92 9.21l-.71.71L11.29 12l-2.08 2.08.71.71L12 12.71l2.08 2.08.71-.71L12.71 12l2.08-2.08z"
  }));
}

var _default = SvgCloudOffRegularLine;
exports.default = _default;