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

function SvgBuddhismLight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.88 11.75a8.87 8.87 0 00-2.43-5.85L20 4.4l-.4-.4-1.5 1.55a8.87 8.87 0 00-5.85-2.43V1h-.5v2.12A8.87 8.87 0 005.9 5.55L4.4 4l-.4.4 1.55 1.5a8.87 8.87 0 00-2.43 5.85H1v.5h2.12a8.87 8.87 0 002.43 5.85L4 19.6l.4.4 1.5-1.51a8.87 8.87 0 005.85 2.43V23h.5v-2.12a8.87 8.87 0 005.85-2.43L19.6 20l.4-.4-1.51-1.5a8.87 8.87 0 002.43-5.85H23v-.5zM17.74 5.9l-4.52 4.53a1.9 1.9 0 00-1-.4V3.62a8.38 8.38 0 015.52 2.28zM12 13.5a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5zm-.25-9.88V10a1.9 1.9 0 00-1 .4L6.26 5.9a8.38 8.38 0 015.49-2.28zM5.9 6.26l4.53 4.52a1.9 1.9 0 00-.4 1H3.62A8.38 8.38 0 015.9 6.26zm-2.28 6H10a1.9 1.9 0 00.4 1l-4.5 4.48a8.38 8.38 0 01-2.28-5.49zm2.64 5.84l4.52-4.53a1.9 1.9 0 001 .4v6.41a8.38 8.38 0 01-5.52-2.28zm6 2.28V14a1.9 1.9 0 001-.4l4.52 4.53a8.38 8.38 0 01-5.53 2.25zm5.85-2.64l-4.53-4.52a1.9 1.9 0 00.4-1h6.41a8.38 8.38 0 01-2.29 5.52zm-4.13-6a1.9 1.9 0 00-.4-1l4.52-4.48a8.38 8.38 0 012.28 5.49z"
  }));
}

var _default = SvgBuddhismLight;
exports.default = _default;