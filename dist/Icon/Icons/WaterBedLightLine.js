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

function SvgWaterBedLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20 12.5V7a2 2 0 00-2-2H6a2 2 0 00-2 2v5.5H2V20h20v-7.5zM4.5 7A1.5 1.5 0 016 5.5h12A1.5 1.5 0 0119.5 7v5.5h-.77L18 10.94a1.7 1.7 0 00-1.57-.94h-1.7a1.7 1.7 0 00-1.52.94l-.78 1.56h-.86l-.78-1.56A1.7 1.7 0 009.27 10h-1.7a1.7 1.7 0 00-1.52.94l-.78 1.56H4.5zm13.67 5.5H13l.67-1.34a1.2 1.2 0 011.07-.66h1.7a1.18 1.18 0 011.07.66zm-7.17 0H5.83l.67-1.34a1.18 1.18 0 011.07-.66h1.7a1.2 1.2 0 011.07.66zm10.49 7H2.5V13h19zm-11.27-3a2.95 2.95 0 003.54 0 2.4 2.4 0 013 0 3.12 3.12 0 001.77.59v-.5A2.55 2.55 0 0117 16a2.95 2.95 0 00-3.54 0 2.4 2.4 0 01-3 0A3 3 0 007 16a2.55 2.55 0 01-1.48.51v.5a3.12 3.12 0 001.77-.59 2.4 2.4 0 012.94.04z"
  }));
}

var _default = SvgWaterBedLightLine;
exports.default = _default;