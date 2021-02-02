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

function SvgAmericanFootballHelmetRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10 12.81a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5zM10 15a.65.65 0 11.65-.65.65.65 0 01-.65.65zm4.93.36a5.29 5.29 0 00.07-1.1v-.94a1 1 0 011-1h4v-1.93a9 9 0 00-9-9h-.07a9 9 0 00-8.93 9v.47a9.32 9.32 0 00.86 3.91l.87.25a2.6 2.6 0 011.63 1.41A5.07 5.07 0 0010 19.32a5 5 0 003.78-1.74l2.69 4.66 5.58.08v-7zm-.93-1.1A4.05 4.05 0 016.27 16 3.62 3.62 0 004 14l-.42-.12A8.32 8.32 0 013 10.81v-.46a8 8 0 017.94-8H11a8 8 0 018 8v.93h-3a2 2 0 00-2 2zm7.05 7.09L17 21.3l-1.16-2h5.24zm0-3h-5.79l-.93-1.61a5.2 5.2 0 00.25-.46h6.47z"
  }));
}

var _default = SvgAmericanFootballHelmetRegularLine;
exports.default = _default;