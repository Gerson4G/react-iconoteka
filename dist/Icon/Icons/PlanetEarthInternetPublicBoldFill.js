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

function SvgPlanetEarthInternetPublicBoldFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.16 8a10 10 0 00-5.48-5.29A16 16 0 0117.23 8zm.64 2h-4.37c.05.66.07 1.33.07 2s0 1.34-.07 2h4.37a10.1 10.1 0 000-4zM12 22c1.43 0 2.67-2.47 3.21-6H8.79c.54 3.53 1.78 6 3.21 6zM8.57 10c-.05.65-.07 1.32-.07 2s0 1.35.07 2h6.86c.05-.65.07-1.32.07-2s0-1.35-.07-2zm-5.73 6a10 10 0 005.48 5.29A16 16 0 016.77 16zm12.84 5.29A10 10 0 0021.16 16h-3.93a16 16 0 01-1.55 5.29zM2.84 8h3.93a16 16 0 011.55-5.29A10 10 0 002.84 8zm3.66 4c0-.67 0-1.34.07-2H2.2a10.1 10.1 0 000 4h4.37c-.05-.66-.07-1.33-.07-2zM12 2c-1.43 0-2.67 2.47-3.21 6h6.42c-.54-3.53-1.78-6-3.21-6z"
  }));
}

var _default = SvgPlanetEarthInternetPublicBoldFill;
exports.default = _default;