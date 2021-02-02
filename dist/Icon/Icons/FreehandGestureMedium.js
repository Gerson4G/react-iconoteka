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

function SvgFreehandGestureMedium(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12.67 21.74a7.65 7.65 0 01-5.46-2.11 6.64 6.64 0 01-1.88-5.39L5 13.89a6.86 6.86 0 01-1.93-5.51 11.47 11.47 0 013.64-6.91l1.06 1.06a10.09 10.09 0 00-3.21 6 5.34 5.34 0 001.14 4 13 13 0 013.37-5.26 9.65 9.65 0 014.73-2.83 4 4 0 013.68.93c1.43 1.43 1.62 4.31-1.33 7.26-3.22 3.21-6.77 3.68-9.34 2.53a5.06 5.06 0 001.46 3.41c2.46 2.45 7.56 2.56 12.19-2.06l1.06 1.06c-2.95 2.95-6.11 4.17-8.85 4.17zM7 13.56c2 1.19 5.1 1 8.13-2 2.12-2.13 2.28-4.19 1.33-5.14a2.53 2.53 0 00-2.33-.52 8.08 8.08 0 00-4 2.42A11 11 0 007 13.56z"
  }));
}

var _default = SvgFreehandGestureMedium;
exports.default = _default;