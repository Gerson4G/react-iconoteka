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

function SvgNewReleasesRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.17 9.86A4 4 0 0120 7V4h-3a4 4 0 01-2.83-1.17L12 .69 9.86 2.83A4 4 0 017 4H4v3a4 4 0 01-1.17 2.86L.69 12l2.14 2.14A4 4 0 014 17v3h3a4 4 0 012.83 1.17L12 23.31l2.14-2.14A4 4 0 0117 20h3v-3a4 4 0 011.17-2.83L23.31 12zm-.71 3.57A5 5 0 0019 17v2h-2a5 5 0 00-3.54 1.46L12 21.9l-1.43-1.44A5 5 0 007 19H5v-2a5 5 0 00-1.46-3.54L2.1 12l1.44-1.43A5 5 0 005 7V5h2a5 5 0 003.54-1.46L12 2.1l1.43 1.44A5 5 0 0017 5h2v2a5 5 0 001.46 3.54L21.9 12zm-8-.93l.25-5h-1.38l.25 5zm-.42 2a.68.68 0 10.68.68.67.67 0 00-.72-.64z"
  }));
}

var _default = SvgNewReleasesRegularLine;
exports.default = _default;