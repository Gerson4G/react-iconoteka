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

function SvgOpacityBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.68 7.32a7.5 7.5 0 10-9.36 9.36 7.5 7.5 0 109.36-9.36zM3.9 9.5A5.59 5.59 0 0114.5 7 7.5 7.5 0 007 14.5a5.6 5.6 0 01-3.1-5zm5 5a5.49 5.49 0 01.36-1.95l2.19 2.19a5.49 5.49 0 01-1.95.36h-.57a5.44 5.44 0 01-.03-.6zm4-.56l-2.84-2.84a5.69 5.69 0 011-1l2.84 2.84a5.69 5.69 0 01-1 1zm2.2-4.44a5.53 5.53 0 01-.36 1.95l-2.19-2.19a5.53 5.53 0 011.95-.36h.57a5.44 5.44 0 01.03.6zm-.6 10.6a5.6 5.6 0 01-5-3.1A7.5 7.5 0 0017 9.5a5.59 5.59 0 01-2.5 10.6z",
    "data-name": "Clear 3"
  }));
}

var _default = SvgOpacityBoldLine;
exports.default = _default;