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

function SvgRockingChairLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22.14 17.7a15.56 15.56 0 01-5.09 2.93L15.27 14H19v-2.4a1.6 1.6 0 00-1.6-1.6H15V8a2 2 0 00-2-2H8.09l-1-3.81A1.59 1.59 0 005.53 1H3.44l1.78 10.11A3.51 3.51 0 008.67 14h.15L7 20.66a15.55 15.55 0 01-5.17-3l-.33.38a15.94 15.94 0 0020.94 0zM13 6.5A1.5 1.5 0 0114.48 8v2H9.17l-.94-3.5zm-7.45-5a1.11 1.11 0 011.06.82L7.58 6H4.83L4 1.5zm.17 9.5l-.8-4.5h2.79l1 3.63.1.37h8.59a1.1 1.1 0 011.1 1.1v1.9H8.67A3 3 0 015.72 11zm1.79 9.8L9.34 14h5.42l1.82 6.79a15.4 15.4 0 01-4.58.71 15.16 15.16 0 01-4.49-.68z"
  }));
}

var _default = SvgRockingChairLightLine;
exports.default = _default;