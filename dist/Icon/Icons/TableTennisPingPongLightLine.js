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

function SvgTableTennisPingPongLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8 5a3 3 0 10-3 3 3 3 0 003-3zM5 7.5A2.5 2.5 0 117.5 5 2.5 2.5 0 015 7.5zm15.07-.21A5.79 5.79 0 0015.9 5.5a8.14 8.14 0 00-5.6 2.62 6.32 6.32 0 00-1.88 6.38 4 4 0 01-1 4L5 20.88l1.45 1.46 2.41-2.4a4 4 0 012.82-1.17 4.17 4.17 0 011.16.17 5.87 5.87 0 001.67.25 6.66 6.66 0 004.71-2.12c2.96-2.93 3.71-6.92.85-9.78zM13 18.46a4.75 4.75 0 00-1.3-.19 4.5 4.5 0 00-3.18 1.31l-2 2.05-.75-.75 2.05-2.05a4.48 4.48 0 001.08-4.48 5.59 5.59 0 01-.2-1.28l5.6 5.6a5.19 5.19 0 01-1.3-.21zm5.89-1.75A6.29 6.29 0 0115 18.66l-6.29-6.28a6.38 6.38 0 011.94-3.91A7.64 7.64 0 0115.9 6a5.33 5.33 0 013.82 1.65c2.85 2.84 1.64 6.6-.82 9.06z"
  }));
}

var _default = SvgTableTennisPingPongLightLine;
exports.default = _default;