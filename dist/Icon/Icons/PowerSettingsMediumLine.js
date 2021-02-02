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

function SvgPowerSettingsMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 20.5A8.49 8.49 0 017.75 4.65L7 3.35A10 10 0 1022 12h-1.5a8.51 8.51 0 01-8.5 8.5zM22.34 5.69l1.21-.8a4 4 0 00-.25-.56 4.54 4.54 0 00-.36-.5l-1.3.65-1.11-.63-.08-1.46a4.34 4.34 0 00-.62-.06 4.07 4.07 0 00-.61.06l-.08 1.46-1.14.63-1.3-.65a3.52 3.52 0 00-.36.5 3.1 3.1 0 00-.25.56l1.21.8V7l-1.21.8a3.1 3.1 0 00.25.56 3.52 3.52 0 00.36.5l1.3-.68 1.11.64.08 1.45a4.07 4.07 0 00.61.06 4.34 4.34 0 00.62-.06l.08-1.45 1.11-.64 1.3.65a4.54 4.54 0 00.36-.5 4 4 0 00.25-.56L22.34 7zm-2.51 1.86a1.22 1.22 0 111.22-1.22 1.22 1.22 0 01-1.22 1.22zM12.75 2h-1.5v10h1.5z"
  }));
}

var _default = SvgPowerSettingsMediumLine;
exports.default = _default;