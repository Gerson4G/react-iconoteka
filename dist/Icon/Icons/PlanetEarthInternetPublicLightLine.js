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

function SvgPlanetEarthInternetPublicLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 19.5c-1.67 0-3.14-2.29-3.83-5.5h7.66c-.69 3.21-2.16 5.5-3.83 5.5zm-3.94-6a19.91 19.91 0 010-7h7.88a19.48 19.48 0 01.31 3.5 19.48 19.48 0 01-.31 3.5zM12 2.5c1.67 0 3.14 2.29 3.83 5.5H8.17c.69-3.21 2.16-5.5 3.83-5.5zm4.44 6h4.38a9.35 9.35 0 010 7h-4.38a19.48 19.48 0 00.31-3.5 19.48 19.48 0 00-.31-3.5zM20.6 8h-4.25a9.32 9.32 0 00-2.67-5.34A9.5 9.5 0 0120.6 8zM10.32 2.66A9.32 9.32 0 007.65 8H3.4a9.5 9.5 0 016.92-5.34zM3.18 8.5h4.38a19.91 19.91 0 000 7H3.18a9.35 9.35 0 010-7zM3.4 16h4.25a9.32 9.32 0 002.67 5.34A9.5 9.5 0 013.4 16zm10.28 5.34A9.32 9.32 0 0016.35 16h4.25a9.5 9.5 0 01-6.92 5.34z"
  }));
}

var _default = SvgPlanetEarthInternetPublicLightLine;
exports.default = _default;