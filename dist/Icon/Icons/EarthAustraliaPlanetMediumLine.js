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

function SvgEarthAustraliaPlanetMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 1.5h.5V7A1.5 1.5 0 0111 8.5H8.31a2 2 0 00.2-.88 1.78 1.78 0 00-.35-1.12 2 2 0 00-1.64-1 8.46 8.46 0 015.48-2zM5.14 7h1.27a.53.53 0 01.49.32.38.38 0 01.1.28.6.6 0 01-.6.6h-2A8.18 8.18 0 015.14 7zM3.5 12a8.69 8.69 0 01.32-2.3h2.59a2.14 2.14 0 00.76-.14v3.19a1.34 1.34 0 01-1.34 1.34H3.77A8.49 8.49 0 013.5 12zm8.5 8.5a8.5 8.5 0 01-7.69-4.91h1.52a2.84 2.84 0 002.84-2.84V10H11a3 3 0 003-3V3.75a8.49 8.49 0 01-2 16.75zm3.34-9.5h-.05a3 3 0 00-2.17.94l-1.45 1.56V17h3.67a3 3 0 000-6zm0 4.61H13V14l1.08-1.14a1.7 1.7 0 011.23-.52 1.63 1.63 0 110 3.25z"
  }));
}

var _default = SvgEarthAustraliaPlanetMediumLine;
exports.default = _default;