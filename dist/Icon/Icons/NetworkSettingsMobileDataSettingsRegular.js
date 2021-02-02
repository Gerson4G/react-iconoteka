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

function SvgNetworkSettingsMobileDataSettingsRegular(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9 20h1v-7l-1 .9zm-5 0h1v-2.5l-1 .9zM20 4l-1 .89V20h1V4zm-6 16h1V8.49l-1 .9zM10.88 6.12A3.63 3.63 0 0010.46 5a4 4 0 00-.75-.92l-1.38.62-.15-1.5A3.89 3.89 0 007 3a3.89 3.89 0 00-1.18.2l-.14 1.49-1.39-.61a4 4 0 00-.75.92 3.63 3.63 0 00-.42 1.12L4.34 7l-1.22.87A3.63 3.63 0 003.54 9a4 4 0 00.75.92l1.38-.62.14 1.49A3.89 3.89 0 007 11a3.89 3.89 0 001.18-.2l.14-1.49 1.38.62a4 4 0 00.76-.93 3.63 3.63 0 00.42-1.12L9.66 7zm-1.66 1.5l.8.57a2.46 2.46 0 01-.21.43 2 2 0 01-.27.4l-.9-.4-.36-.16-.28.2-.33.19v.38l-.1 1a2.9 2.9 0 01-1 0l-.1-1v-.39L6 8.65l-.33-.19-.35.16-.9.4a2 2 0 01-.27-.4A2.46 2.46 0 014 8.19l.8-.57.31-.24v-.77l-.31-.23-.8-.57a2.46 2.46 0 01.21-.43A2 2 0 014.46 5l.9.4.36.16.33-.2.33-.19v-.38l.1-1a2.9 2.9 0 011 0l.1 1v.39l.42.17.33.19.35-.16.9-.4a2 2 0 01.27.4 2.46 2.46 0 01.21.43l-.8.57-.31.24v.77zM7 6.25a.75.75 0 10.75.75.76.76 0 00-.75-.75z"
  }));
}

var _default = SvgNetworkSettingsMobileDataSettingsRegular;
exports.default = _default;