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

function SvgPowerSettingsLightFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22.34 5.85l1.23-.91a4.28 4.28 0 00-.67-1.15l-1.39.62-.85-.49-.16-1.52a3.19 3.19 0 00-1.33 0L19 3.92l-.84.49-1.39-.62a3.81 3.81 0 00-.67 1.15l1.23.91v1l-1.23.9a3.58 3.58 0 00.67 1.15l1.39-.61.84.48.17 1.53a4.91 4.91 0 00.66.06 4.91 4.91 0 00.67-.06l.16-1.53.85-.48 1.39.61a4 4 0 00.67-1.15l-1.23-.9zm-2.51 1.48a1 1 0 111-1 1 1 0 01-1 1zM12 21.5A9.49 9.49 0 017.26 3.78L7 3.35A10 10 0 1022 12h-.5a9.51 9.51 0 01-9.5 9.5zM12.25 2h-.5v10h.5z"
  }));
}

var _default = SvgPowerSettingsLightFill;
exports.default = _default;