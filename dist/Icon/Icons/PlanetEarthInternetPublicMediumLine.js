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

function SvgPlanetEarthInternetPublicMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm7.5 6h-3.17a11.11 11.11 0 00-1.66-4.06A8.52 8.52 0 0119.5 8zm1 4a8.27 8.27 0 01-.38 2.5h-3.53a20.07 20.07 0 00.16-2.5 20.07 20.07 0 00-.16-2.5h3.53a8.27 8.27 0 01.38 2.5zM12 20.5c-1.22 0-2.28-1.82-2.82-4.5h5.64c-.54 2.68-1.6 4.5-2.82 4.5zm-3.06-6a22.39 22.39 0 010-5h6.12a22.16 22.16 0 01.14 2.5 22.16 22.16 0 01-.14 2.5zM3.5 12a8.27 8.27 0 01.38-2.5h3.53a19.61 19.61 0 000 5H3.88A8.27 8.27 0 013.5 12zM12 3.5c1.22 0 2.28 1.82 2.82 4.5H9.18c.54-2.68 1.6-4.5 2.82-4.5zm-2.67.44A11.11 11.11 0 007.67 8H4.5a8.52 8.52 0 014.83-4.06zM4.5 16h3.17a11.11 11.11 0 001.66 4.06A8.52 8.52 0 014.5 16zm10.17 4.06A11.11 11.11 0 0016.33 16h3.17a8.52 8.52 0 01-4.83 4.06z"
  }));
}

var _default = SvgPlanetEarthInternetPublicMediumLine;
exports.default = _default;