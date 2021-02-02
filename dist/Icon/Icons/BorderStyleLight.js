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

function SvgBorderStyleLight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7.88 3h-.5v.5h.5zm2.18 0h-.5v.5h.5zm8.75 0h-.5v.5h.5zm-2.19 0h-.5v.5h.5zm-2.18 0h-.5v.5h.5zM5.69 3h-.5v.5h.5zM3.5 16.12H3v.5h.5zm0-2.18H3v.5h.5zm0-8.75H3v.5h.5zm0 2.19H3v.5h.5zm0 2.18H3v.5h.5zm0 8.75H3v.5h.5zM3.5 3H3v.5h.5zm0 8.75H3v.5h.5zM12.25 3h-.5v.5h.5zm8.25 0v17.5H3v.5h18V3zm-5.42 7.47a.76.76 0 000-1.05l-.5-.5a.73.73 0 00-.52-.21.77.77 0 00-.53.21L9 13.46V15h1.54zm-1.19-1.19a.24.24 0 01.17-.07.25.25 0 01.17.07l.49.49a.25.25 0 01.07.17.24.24 0 01-.07.17l-.65.65-.83-.83zM9.5 14.5v-.83l3.39-3.39.83.83-3.39 3.39z",
    "data-name": "Clear 3"
  }));
}

var _default = SvgBorderStyleLight;
exports.default = _default;