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

function SvgFaceChildChildCareBabysitterMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 16h-5a2.72 2.72 0 005 0zm.75-4a1 1 0 101 1 1 1 0 00-1-1zm-6.5 0a1 1 0 101 1 1 1 0 00-1-1zM19.8 9.23a8 8 0 00-15.6 0 4 4 0 00.34 7.64 8 8 0 0014.92 0 4 4 0 00.34-7.64zm-.7 6.18l-.76.19-.28.73a6.49 6.49 0 01-12.12 0l-.28-.73-.76-.19a2.48 2.48 0 01-.21-4.76l.79-.27.19-.82a6.44 6.44 0 013-4.15A3.56 3.56 0 008.5 6.5a3.49 3.49 0 006.2 2.2l-1.06-1.06A2 2 0 1112 4.5a6.45 6.45 0 016.33 5.06l.19.82.79.27a2.48 2.48 0 01-.21 4.76z"
  }));
}

var _default = SvgFaceChildChildCareBabysitterMediumLine;
exports.default = _default;