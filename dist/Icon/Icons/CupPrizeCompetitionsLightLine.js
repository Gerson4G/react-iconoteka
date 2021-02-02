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

function SvgCupPrizeCompetitionsLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 5h-3V3H5v2H2a1 1 0 00-1 1v2a5 5 0 004.67 5 7 7 0 004.83 3.87v.84a2 2 0 01-1.5 1.9l-2.49.62V22h11v-1.77L15 19.61a2 2 0 01-1.51-1.94v-.84A7 7 0 0018.33 13 5 5 0 0023 8V6a1 1 0 00-1-1zM1.5 8V6a.5.5 0 01.5-.5h3V10a7 7 0 00.44 2.43A4.48 4.48 0 011.5 8zm13.39 12.09l2.11.53v.88H7v-.88l2.11-.53A2.49 2.49 0 0011 17.67v-.75a6.29 6.29 0 002 0v.75a2.49 2.49 0 001.89 2.42zM12 16.5A6.51 6.51 0 015.5 10V3.5h13V10a6.51 6.51 0 01-6.5 6.5zM22.5 8a4.48 4.48 0 01-3.94 4.43A7 7 0 0019 10V5.5h3a.5.5 0 01.5.5z"
  }));
}

var _default = SvgCupPrizeCompetitionsLightLine;
exports.default = _default;