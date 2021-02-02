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

function SvgApplicationsAppsMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18.75 4.5a.76.76 0 01.75.75v3.5a.76.76 0 01-.75.75h-3.5a.76.76 0 01-.75-.75v-3.5a.76.76 0 01.75-.75h3.5m-10 0a.76.76 0 01.75.75v3.5a.76.76 0 01-.75.75h-3.5a.76.76 0 01-.75-.75v-3.5a.76.76 0 01.75-.75h3.5m10 10a.76.76 0 01.75.75v3.5a.76.76 0 01-.75.75h-3.5a.76.76 0 01-.75-.75v-3.5a.76.76 0 01.75-.75h3.5m-10 0a.76.76 0 01.75.75v3.5a.76.76 0 01-.75.75h-3.5a.76.76 0 01-.75-.75v-3.5a.76.76 0 01.75-.75h3.5m10-11.5h-3.5A2.25 2.25 0 0013 5.25v3.5A2.25 2.25 0 0015.25 11h3.5A2.25 2.25 0 0021 8.75v-3.5A2.25 2.25 0 0018.75 3zm-10 0h-3.5A2.25 2.25 0 003 5.25v3.5A2.25 2.25 0 005.25 11h3.5A2.25 2.25 0 0011 8.75v-3.5A2.25 2.25 0 008.75 3zm10 10h-3.5A2.25 2.25 0 0013 15.25v3.5A2.25 2.25 0 0015.25 21h3.5A2.25 2.25 0 0021 18.75v-3.5A2.25 2.25 0 0018.75 13zm-10 0h-3.5A2.25 2.25 0 003 15.25v3.5A2.25 2.25 0 005.25 21h3.5A2.25 2.25 0 0011 18.75v-3.5A2.25 2.25 0 008.75 13z",
    "data-name": "Clear 3"
  }));
}

var _default = SvgApplicationsAppsMediumLine;
exports.default = _default;