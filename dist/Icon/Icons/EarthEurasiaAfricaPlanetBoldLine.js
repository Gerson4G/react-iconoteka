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

function SvgEarthEurasiaAfricaPlanetBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm-8 8.41A8.19 8.19 0 0116.25 5h-5.94a2 2 0 00-1.88 1.32L7.82 8a1.5 1.5 0 001.41 2h1.38a.57.57 0 01.43.18.56.56 0 01.17.43.6.6 0 01-.6.59H8a2 2 0 00-2 2v1A1.81 1.81 0 007.8 16H8v1.5a.5.5 0 00.5.5H10a3 3 0 003-3v-2h2a3 3 0 003-3V6.43A8.16 8.16 0 0120.2 12v.4a2.59 2.59 0 00-.68-.09 2.94 2.94 0 00-2.14.92L16 14.67V18h1.57A8.19 8.19 0 014 10.41zm8.37-1.5a2.39 2.39 0 00-1.71-.71h-1l.46-1.27a.21.21 0 01.19-.13h5.89V10a1.2 1.2 0 01-1.2 1.2h-2.06a2.25 2.25 0 00.07-.58 2.39 2.39 0 00-.69-1.71zM7.8 14.2v-1A.2.2 0 018 13h3.2v2a1.2 1.2 0 01-1.2 1.2h-.2v-1.5a.5.5 0 00-.5-.5zm11.2 2h-1.2v-.82l.86-.91a1.15 1.15 0 01.83-.36.86.86 0 01.39.09 8.28 8.28 0 01-.88 2z"
  }));
}

var _default = SvgEarthEurasiaAfricaPlanetBoldLine;
exports.default = _default;