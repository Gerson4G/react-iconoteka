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

function SvgSatanismLight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm9.5 10a9.42 9.42 0 01-.39 2.67l-5.36-3.89 2-6.27A9.46 9.46 0 0121.5 12zm-11.29 3.19h3.58L12 20.71zm-.17-.5L8.83 11 12 8.67 15.17 11 14 14.69zm-.52 0H3.71l4.7-3.41zM6.88 5l4.69 3.41-2.9 2.11zm5.55 3.41L17.12 5l-1.79 5.52zm3.16 2.92l4.7 3.41h-5.81zm1.77-7.12L12 8.05 6.67 4.18a9.48 9.48 0 0110.73 0zM6.2 4.49l2.05 6.29-5.33 3.87A9.46 9.46 0 016.2 4.49zm-3.14 10.7h6.62l2 6.27a9.53 9.53 0 01-8.62-6.27zm9.21 6.3l2.05-6.3h6.62a9.51 9.51 0 01-8.67 6.3z"
  }));
}

var _default = SvgSatanismLight;
exports.default = _default;