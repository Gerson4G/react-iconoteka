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

function SvgThunderstormWithSnowBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.89 18.77l-1.34.78V18h-1.1v1.55l-1.34-.78-.55 1 1.34.77-1.34.77.55 1 1.34-.78V23h1.1v-1.55l1.34.78.55-1-1.34-.73 1.34-.77zm-14 0l-1.34.78V18h-1.1v1.55l-1.34-.78-.55 1 1.34.77-1.34.77.55 1 1.34-.78V23h1.1v-1.55l1.34.78.55-1-1.34-.73 1.34-.77zM20.64 8.36v-.3a5 5 0 00-4.94-5 4.87 4.87 0 00-2.4.65 5.67 5.67 0 00-9.74 3.96v.6A4 4 0 005 16h5.82l-1 4h2l-.91 3.51 4-5.51H12.3l.52-2H19a4 4 0 001.64-7.64zM19 14H5a2 2 0 01-2-2 2 2 0 011.3-1.86l1.44-.55-.16-1.53v-.39A3.68 3.68 0 019.23 4a3.61 3.61 0 012.65 1.14L13 6.26l1.3-.76A2.91 2.91 0 0118.67 8a2.28 2.28 0 000 .26l-.09 1.37 1.26.57A2 2 0 0119 14z"
  }));
}

var _default = SvgThunderstormWithSnowBoldLine;
exports.default = _default;