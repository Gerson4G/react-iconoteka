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

function SvgCamerasPhotoFearPartyModeLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 19.5H4A1.5 1.5 0 012.5 18v-7.67A1.5 1.5 0 014 8.83v-.5a2 2 0 00-2 2V18a2 2 0 002 2h12a2 2 0 002-2h-.5a1.5 1.5 0 01-1.5 1.5zm4-15.17h-1.89L16.73 2h-5.46L9.89 4.33H8a2 2 0 00-2 2V14a2 2 0 002 2h12a2 2 0 002-2V6.33a2 2 0 00-2-2zM21.5 14a1.5 1.5 0 01-1.5 1.5H8A1.5 1.5 0 016.5 14V6.33A1.5 1.5 0 018 4.83h2.17l.15-.24 1.24-2.09h4.88l1.24 2.09.15.24H20a1.5 1.5 0 011.5 1.5zM14 6.66a3 3 0 103 3 3 3 0 00-3-3zm0 5.5a2.5 2.5 0 112.5-2.5 2.51 2.51 0 01-2.5 2.5z"
  }));
}

var _default = SvgCamerasPhotoFearPartyModeLightLine;
exports.default = _default;