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

function SvgPlanetEarthInternetPublicLightFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 12a24.22 24.22 0 01.25-3.5H2.64a9.89 9.89 0 000 7h5.11A24.22 24.22 0 017.5 12zm.84 4c.61 3.53 2 6 3.66 6s3.05-2.47 3.66-6zM8 12a22.84 22.84 0 00.26 3.5h7.48A22.84 22.84 0 0016 12a22.84 22.84 0 00-.26-3.5H8.26A22.84 22.84 0 008 12zm13.36-3.5h-5.11a24.22 24.22 0 01.25 3.5 24.22 24.22 0 01-.25 3.5h5.11a9.89 9.89 0 000-7zM16.17 8h5a10 10 0 00-7.61-5.87c1.19 1 2.14 3.13 2.61 5.87zm-.51 0c-.61-3.53-2-6-3.66-6S9 4.47 8.34 8zm-2.11 13.87A10 10 0 0021.16 16h-5c-.46 2.74-1.41 4.87-2.61 5.87zM7.83 16h-5a10 10 0 007.61 5.87c-1.19-1-2.14-3.13-2.61-5.87zm2.62-13.87A10 10 0 002.84 8h5c.46-2.74 1.41-4.87 2.61-5.87z"
  }));
}

var _default = SvgPlanetEarthInternetPublicLightFill;
exports.default = _default;