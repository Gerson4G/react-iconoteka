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

function SvgAtheismRegular(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18.67 12c2.11-2 3.12-4 2.42-5.25a2.83 2.83 0 00-2.6-1 11.65 11.65 0 00-3.15.52C14.62 3.38 13.4 1.5 12 1.5S9.38 3.38 8.66 6.22a12 12 0 00-3.15-.51 2.84 2.84 0 00-2.6 1C2.21 8 3.22 10 5.33 12c-2.11 2-3.12 4-2.42 5.25a2.83 2.83 0 002.6 1 12 12 0 003.15-.51c.72 2.88 1.94 4.76 3.34 4.76s2.62-1.88 3.34-4.72a12 12 0 003.15.51 2.84 2.84 0 002.6-1c.7-1.29-.31-3.29-2.42-5.29zm-.18-5.29c.89 0 1.54.2 1.73.54s.06 1.37-1.15 2.86a13.89 13.89 0 01-1.13 1.21 23 23 0 00-2-1.57c-.08-.9-.2-1.75-.35-2.55a11.17 11.17 0 012.9-.49zm-5 7.89c-.5.28-1 .54-1.5.79-.5-.25-1-.51-1.5-.79s-1-.59-1.44-.9C9 13.15 9 12.59 9 12s0-1.15.06-1.7q.69-.46 1.44-.9c.5-.28 1-.54 1.5-.79.5.25 1 .51 1.5.79s1 .59 1.44.9c0 .55.06 1.11.06 1.7s0 1.15-.06 1.7q-.69.47-1.44.9zm1.33.36c-.06.54-.14 1.05-.23 1.53a15.35 15.35 0 01-1.44-.57c.28-.14.56-.29.84-.46zm-4 1a15.35 15.35 0 01-1.44.57c-.09-.48-.17-1-.23-1.53l.83.5c.3.13.58.28.86.42zM8 13c-.43-.32-.83-.64-1.21-1 .38-.33.78-.65 1.21-1v2zm1.17-4c.06-.54.14-1 .23-1.53a15.35 15.35 0 011.44.57c-.28.14-.56.29-.84.46zm4-1a15.35 15.35 0 011.44-.57c.09.48.17 1 .23 1.53L14 8.54c-.28-.17-.56-.32-.84-.46zM16 11c.43.32.83.64 1.21 1-.38.33-.78.65-1.21 1v-1-1zm-4-8.5c.77 0 1.76 1.48 2.39 4a22 22 0 00-2.39 1 22 22 0 00-2.39-1c.63-2.5 1.62-4 2.39-4zm-7.07 7.61C3.72 8.62 3.55 7.64 3.78 7.25s.84-.54 1.73-.54a11.17 11.17 0 012.93.49c-.15.8-.27 1.65-.35 2.55a23 23 0 00-2 1.57 13.89 13.89 0 01-1.16-1.21zm.58 7.18c-.89 0-1.54-.2-1.73-.54s-.06-1.37 1.15-2.86a13.89 13.89 0 011.13-1.21 23 23 0 002 1.57c.08.9.2 1.75.35 2.55a11.17 11.17 0 01-2.9.49zM12 21.5c-.77 0-1.76-1.48-2.39-4a22 22 0 002.39-1 22 22 0 002.39 1c-.63 2.5-1.62 4-2.39 4zm8.22-4.75c-.19.34-.84.54-1.73.54a11.17 11.17 0 01-2.93-.49c.15-.8.27-1.65.35-2.55a23 23 0 002-1.57 13.89 13.89 0 011.13 1.21c1.24 1.49 1.41 2.47 1.18 2.86z"
  }));
}

var _default = SvgAtheismRegular;
exports.default = _default;