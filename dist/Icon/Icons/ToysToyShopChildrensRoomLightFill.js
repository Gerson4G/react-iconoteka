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

function SvgToysToyShopChildrensRoomLightFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22.34 17.79a14.57 14.57 0 01-1.25.94c-.4.27-.83.53-1.26.77l-1.32-3a6 6 0 01-.51-2.42V8h2.23a1.53 1.53 0 001.52-1.36A1.59 1.59 0 0020.58 5L18 4.22V2h-.5A3.5 3.5 0 0014 5.5V9H6.47a2.64 2.64 0 00-2.42 1.58l-.87 2 .46.21.87-2A2.12 2.12 0 016 9.57v4.51a6 6 0 01-.51 2.42l-1.32 3c-.43-.24-.86-.5-1.26-.77a14.57 14.57 0 01-1.25-.94l-.32.39a15.41 15.41 0 001.29 1A14.93 14.93 0 004 20c.48.26 1 .5 1.46.71s1 .4 1.55.56a15.73 15.73 0 001.6.42c.55.11 1.11.19 1.67.25a16.29 16.29 0 003.42 0c.56-.06 1.12-.14 1.67-.25a15.73 15.73 0 001.6-.42c.52-.16 1-.35 1.55-.56s1-.45 1.46-.71a14.93 14.93 0 001.38-.84 15.41 15.41 0 001.29-1zm-5.5 3c-.52.16-1.05.29-1.56.4a14.71 14.71 0 01-1.62.24 15.35 15.35 0 01-3.32 0 14.71 14.71 0 01-1.62-.24c-.51-.11-1-.24-1.56-.4s-1-.34-1.49-.55l-.13-.06 1.31-3A2 2 0 018.68 16h6.64a2 2 0 011.83 1.19l1.31 3-.13.06c-.49.19-.99.37-1.49.53z"
  }));
}

var _default = SvgToysToyShopChildrensRoomLightFill;
exports.default = _default;