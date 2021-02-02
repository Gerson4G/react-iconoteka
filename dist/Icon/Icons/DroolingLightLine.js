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

function SvgDroolingLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 19.5a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5zm3.54-12.59A2.1 2.1 0 0013.45 11H14a1.6 1.6 0 013.19 0h.5a2.1 2.1 0 00-2.15-2.09zm-7.08.5A1.59 1.59 0 0110.05 11h.5a2.1 2.1 0 00-4.19 0h.5a1.6 1.6 0 011.6-1.59zm7.26 6.16a5.08 5.08 0 00.91-1.57l-.47-.17a4.47 4.47 0 01-8.44 0l-.47.17a4.92 4.92 0 006.58 3l1.1 1a1.14 1.14 0 00.82.34 1.12 1.12 0 00.81-.34 1.15 1.15 0 000-1.63zm.49 2.12a.65.65 0 01-.93 0l-1-1a4.87 4.87 0 001.08-.78l.82.82a.65.65 0 01.03.96z"
  }));
}

var _default = SvgDroolingLightLine;
exports.default = _default;