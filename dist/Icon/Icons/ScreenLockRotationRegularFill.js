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

function SvgScreenLockRotationRegularFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 8.9a1.1 1.1 0 00-1.1 1.1v1h2.2v-1A1.1 1.1 0 0012 8.9zM15.5 3h-7A2.5 2.5 0 006 5.5v13A2.5 2.5 0 008.5 21h7a2.5 2.5 0 002.5-2.5v-13A2.5 2.5 0 0015.5 3zM15 15H9v-4h1v-1a2 2 0 014 0v1h1zm-13.47-.53L2 15H0v1h3.83v-3.8h-1v2.16l-.6-.59a2.57 2.57 0 010-3.54A2.49 2.49 0 014 9.5v-1a3.42 3.42 0 00-2.47 1 3.56 3.56 0 000 4.97zM24 8h-3.83v3.8h1V9.64l.6.59a2.57 2.57 0 010 3.54 2.49 2.49 0 01-1.77.73v1a3.42 3.42 0 002.47-1 3.56 3.56 0 000-4.94L22 9h2z"
  }));
}

var _default = SvgScreenLockRotationRegularFill;
exports.default = _default;