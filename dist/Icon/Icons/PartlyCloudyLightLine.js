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

function SvgPartlyCloudyLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9.25 2h-.5v3h.5zM2.46 4.81l2.12 2.12.35-.35-2.12-2.12zM3 10.75H0v.5h3zm-.54 6.44l.35.35 2.12-2.12-.35-.35zm12.86-12.6L15 4.25l-2.09 2.19.36.34zm5.62 7.53a4.66 4.66 0 00-8.2-2.45 4 4 0 10-5.47 4.92A3.89 3.89 0 007 16a4 4 0 004 4h9a4 4 0 00.94-7.88zM5.5 11a3.48 3.48 0 016.87-.82 4.84 4.84 0 00-.69 1.82H11a4 4 0 00-3.52 2.14A3.5 3.5 0 015.5 11zM20 19.5h-9a3.5 3.5 0 010-7h1.11l.07-.43a4.17 4.17 0 018.27.11v.35l.33.08A3.49 3.49 0 0120 19.5z"
  }));
}

var _default = SvgPartlyCloudyLightLine;
exports.default = _default;