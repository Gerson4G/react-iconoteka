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

function SvgVpnMediumFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 8V2c-1.54 0-2.86 2.47-3.44 6zM8.37 9.5c-.07.8-.12 1.64-.12 2.5s.05 1.7.12 2.5h7.26c.07-.8.12-1.64.12-2.5H12V9.5zm.54-7A10.06 10.06 0 002.84 8H7a13.25 13.25 0 011.91-5.51zm8.34 9.5c0 .89 0 1.72-.1 2.5h4.52A9.85 9.85 0 0022 12zM2.84 16a10.06 10.06 0 006.07 5.51A13.25 13.25 0 017 16zm5.72 0c.58 3.53 1.9 6 3.44 6s2.86-2.47 3.44-6zm-1.81-4c0-.89 0-1.72.1-2.5H2.33a9.63 9.63 0 000 5h4.52c-.06-.78-.1-1.61-.1-2.5zm8.34 9.51A10.06 10.06 0 0021.16 16H17a13.25 13.25 0 01-1.91 5.51zM21 5h-1v-.9a2 2 0 10-4 0V5h-1v4h6zm-2.2 0h-1.6v-.9a.81.81 0 111.6 0z"
  }));
}

var _default = SvgVpnMediumFill;
exports.default = _default;