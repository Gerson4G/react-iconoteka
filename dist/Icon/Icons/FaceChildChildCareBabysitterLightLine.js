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

function SvgFaceChildChildCareBabysitterLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 18.31A3.76 3.76 0 0015.5 16h-7a3.76 3.76 0 003.5 2.31zm2.64-1.81a3.32 3.32 0 01-5.28 0zm.61-4a.5.5 0 10.5.5.5.5 0 00-.5-.5zm-6 .5a.5.5 0 10-.5.5.5.5 0 00.5-.5zm10.69-3a8 8 0 00-15.88 0 3 3 0 00.2 6 8 8 0 0015.48 0 3 3 0 00.2-5.94zm-.24 5.44h-.35l-.09.34a7.49 7.49 0 01-14.52 0l-.09-.34H4.3a2.49 2.49 0 01-.16-4.94l.37-.06v-.38A7.5 7.5 0 0110 3.77 3 3 0 009 6a3 3 0 005.12 2.12l-.35-.35A2.5 2.5 0 1112 3.5a7.5 7.5 0 017.44 6.6v.38l.37.06a2.49 2.49 0 01-.16 4.94z"
  }));
}

var _default = SvgFaceChildChildCareBabysitterLightLine;
exports.default = _default;