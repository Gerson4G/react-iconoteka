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

function SvgCakeBirthdayMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 4.59a1 1 0 001.05-1A10.25 10.25 0 0012 .69a10.25 10.25 0 00-1 2.85 1 1 0 001 1.05zM18 9h-5.25V6h-1.5v3H6a4 4 0 00-4 4v9h20v-9a4 4 0 00-4-4zm2.5 11.5h-17v-4.25h.31a4.08 4.08 0 002.5-.91 2.4 2.4 0 013.19 0 3.9 3.9 0 005 0 2.4 2.4 0 013.19 0 4.08 4.08 0 002.5.91h.31zm0-5.75h-.31a2.66 2.66 0 01-1.6-.6 3.9 3.9 0 00-5 0 2.4 2.4 0 01-3.19 0 3.91 3.91 0 00-5 0 2.66 2.66 0 01-1.6.6h-.3V13A2.5 2.5 0 016 10.5h12a2.5 2.5 0 012.5 2.5z"
  }));
}

var _default = SvgCakeBirthdayMediumLine;
exports.default = _default;