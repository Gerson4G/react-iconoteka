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

function SvgVpnBoldFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 12c0-.67 0-1.34.07-2H2.2a10.1 10.1 0 000 4h4.37c-.05-.66-.07-1.33-.07-2zm-3.66 4a10 10 0 005.48 5.29A16 16 0 016.77 16zM12 2c-1.43 0-2.67 2.47-3.21 6H12zm0 8H8.57c-.05.65-.07 1.32-.07 2s0 1.35.07 2h6.86c.05-.65.07-1.32.07-2H12zm3.68 11.29A10 10 0 0021.16 16h-3.93a16 16 0 01-1.55 5.29zM2.84 8h3.93a16 16 0 011.55-5.29A10 10 0 002.84 8zm14.66 4c0 .67 0 1.34-.07 2h4.37a10.2 10.2 0 00.2-2zM12 22c1.43 0 2.67-2.47 3.21-6H8.79c.54 3.53 1.78 6 3.21 6zm9-17h-1V4a2 2 0 00-4 0v1h-1v4h6zm-2.3 0h-1.4V4a.7.7 0 111.4 0z"
  }));
}

var _default = SvgVpnBoldFill;
exports.default = _default;