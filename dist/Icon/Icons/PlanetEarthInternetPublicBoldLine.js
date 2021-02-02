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

function SvgPlanetEarthInternetPublicBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm7 6h-2.67a11.57 11.57 0 00-1.41-3.67A8 8 0 0119 8zm1 4a8.24 8.24 0 01-.25 2h-3.1c.06-.65.1-1.31.1-2s0-1.35-.1-2h3.1a8.24 8.24 0 01.25 2zm-8 8c-1 0-1.9-1.61-2.38-4h4.76C13.9 18.39 13 20 12 20zm-2.66-6c-.06-.64-.09-1.31-.09-2s0-1.36.09-2h5.32c.06.64.09 1.31.09 2s0 1.36-.09 2zM4 12a8.24 8.24 0 01.25-2h3.1c-.06.65-.1 1.31-.1 2s0 1.35.1 2h-3.1A8.24 8.24 0 014 12zm8-8c1 0 1.9 1.61 2.38 4H9.62C10.1 5.61 11 4 12 4zm-2.92.33A11.57 11.57 0 007.67 8H5a8 8 0 014.08-3.67zM5 16h2.67a11.57 11.57 0 001.41 3.67A8 8 0 015 16zm9.91 3.67A11.57 11.57 0 0016.33 16H19a8 8 0 01-4.08 3.67z"
  }));
}

var _default = SvgPlanetEarthInternetPublicBoldLine;
exports.default = _default;