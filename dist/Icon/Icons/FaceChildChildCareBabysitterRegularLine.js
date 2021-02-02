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

function SvgFaceChildChildCareBabysitterRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 18.31A3.76 3.76 0 0015.5 16h-7a3.76 3.76 0 003.5 2.31zm2-1.51a3 3 0 01-3.9 0zm1-4.55a.75.75 0 10.75.75.76.76 0 00-.75-.75zM9.75 13a.75.75 0 10-.75.75.76.76 0 00.75-.75zm10.19-3a8 8 0 00-15.88 0 3 3 0 00.2 6 8 8 0 0015.48 0 3 3 0 00.2-5.94zm-.28 5H19l-.18.69a7 7 0 01-13.54 0L5.05 15h-.71a2 2 0 01-.13-4l.79-.08.1-.76A7 7 0 019.42 4.5 2.94 2.94 0 009 6a3 3 0 005.12 2.12l-.71-.71A2 2 0 0112 8a2 2 0 010-4 7 7 0 016.94 6.16l.1.76.75.11a2 2 0 01-.13 4z"
  }));
}

var _default = SvgFaceChildChildCareBabysitterRegularLine;
exports.default = _default;