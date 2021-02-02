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

function SvgAtheismBold(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M5.41 9.7a3.82 3.82 0 01-1.06-2c.33-.25 1.62-.33 3.57.19l.88-.54.37-.22.73-.4.56-.3c.53-2 1.24-3 1.62-3.2.66.28 2.3 3.27 2.3 8.79 0 .63 0 1.22-.07 1.78.61.25 1.16.45 1.66.6.07-.77.11-1.56.11-2.38 0-5.8-1.79-10.5-4-10.5-1.41 0-2.64 1.93-3.35 4.83-2.87-.83-5.16-.73-5.86.49-.56 1 0 2.42 1.27 4 .4-.4.86-.78 1.27-1.14zm15.64-3c-.55-1-2.08-1.23-4.1-.9.13.54.24 1.09.34 1.67a3.78 3.78 0 012.28.08c.05.42-.53 1.57-2 3v2.91c1.43 1.44 2 2.59 2 3-.57.43-4 .35-8.76-2.41-.54-.32-1-.63-1.51-.94A17.06 17.06 0 008 14.25c.63.44 1.3.87 2 1.28 5 2.9 10 3.7 11.09 1.79.7-1.22-.35-3.25-2.51-5.32 2.12-2.06 3.17-4.1 2.47-5.32zm-9 14.11c-.38-.16-1.09-1.24-1.62-3.19l-.9-.49-.38-.21-.71-.44-.54-.33c-2 .52-3.25.44-3.58.19-.06-.73 1.68-3.64 6.49-6.4.54-.31 1.07-.59 1.57-.83-.08-.66-.19-1.23-.3-1.74-.7.33-1.41.69-2.12 1.1-5 2.9-8.19 6.8-7.09 8.71.7 1.22 3 1.32 5.86.49.71 2.9 1.94 4.83 3.35 4.83 1.11 0 2.11-1.19 2.84-3.1q-.81-.24-1.62-.54a3.81 3.81 0 01-1.22 1.93z"
  }));
}

var _default = SvgAtheismBold;
exports.default = _default;