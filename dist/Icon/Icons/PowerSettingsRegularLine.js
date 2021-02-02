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

function SvgPowerSettingsRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 21A9 9 0 017.51 4.21L7 3.35A10 10 0 1022 12h-1a9 9 0 01-9 9zM22.49 6.33l1.23-.88a4.35 4.35 0 00-.42-1.12 4.24 4.24 0 00-.76-.92L21.17 4 21 2.53a3.84 3.84 0 00-1.18-.2 3.78 3.78 0 00-1.17.2L18.51 4l-1.37-.62a4.24 4.24 0 00-.76.92A4 4 0 0016 5.45l1.22.88-1.22.89a3.64 3.64 0 001.18 2l1.37-.62.15 1.5a4.09 4.09 0 001.17.19 4.16 4.16 0 001.13-.15l.15-1.5 1.37.62a3.81 3.81 0 00.76-.92 4.16 4.16 0 00.42-1.11l-1.23-.88zm.36 1.19a2.94 2.94 0 01-.2.44 3.16 3.16 0 01-.28.39L21.48 8l-.36-.15-.34.15-.33.19v.38l-.1 1a2.59 2.59 0 01-.48 0 2.74 2.74 0 01-.48 0l-.09-1-.05-.38-.38-.19-.33-.19-.35.19-.89.4A3.16 3.16 0 0117 8a2.19 2.19 0 01-.2-.44l.81-.56.31-.24v-.82l-.31-.22-.79-.57a2 2 0 01.2-.44 2.63 2.63 0 01.28-.4l.89.41.36.15.34-.19.33-.2V4.1l.09-1a2.8 2.8 0 01.48 0 2.61 2.61 0 01.48 0l.1 1 .05.39.34.19.33.19.35-.15.89-.41a2.63 2.63 0 01.28.4 2.55 2.55 0 01.2.44l-.8.57-.27.28v.77l.31.23zm-3-1.94a.75.75 0 000 1.5.75.75 0 000-1.5zM12.5 2h-1v10h1z"
  }));
}

var _default = SvgPowerSettingsRegularLine;
exports.default = _default;