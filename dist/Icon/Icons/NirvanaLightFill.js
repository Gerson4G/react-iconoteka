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

function SvgNirvanaLightFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.39 15.94a4.87 4.87 0 01-1.08.78l1 1a.66.66 0 10.93-.93zM12 2a10 10 0 1010 10A10 10 0 0012 2zm-6 9.07l1.37-1.42L6 8.23l.35-.35L7.72 9.3l1.42-1.42.35.35-1.42 1.42 1.42 1.42-.35.35L7.72 10 6.3 11.42zm10.61 7a1.12 1.12 0 01-.81.34 1.14 1.14 0 01-.82-.34L13.83 17a4.92 4.92 0 01-6.58-3l.47-.17a4.47 4.47 0 008.44 0l.47.17a5.08 5.08 0 01-.91 1.56l.84.84a1.14 1.14 0 010 1.6zm1.49-7l-.35.35L16.28 10l-1.42 1.42-.35-.35 1.42-1.42-1.42-1.42.35-.35 1.42 1.42 1.42-1.42.35.35-1.42 1.42z"
  }));
}

var _default = SvgNirvanaLightFill;
exports.default = _default;