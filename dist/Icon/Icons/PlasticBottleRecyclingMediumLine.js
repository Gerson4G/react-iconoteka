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

function SvgPlasticBottleRecyclingMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17.3 11l.15-.22A3 3 0 0018 9.05a5.52 5.52 0 00-1.84-4.11l-1.53-1.36V1.5a1.5 1.5 0 00-1.5-1.5h-2.26a1.5 1.5 0 00-1.5 1.5v2.08L7.84 4.94A5.52 5.52 0 006 9.05a3 3 0 00.55 1.73l.15.22-.15.22A3 3 0 006 13v2a3 3 0 00.55 1.73l.15.22-.15.22A3 3 0 006 18.88v1.69A2.43 2.43 0 008.43 23h1a2.39 2.39 0 001.08-.26 3.35 3.35 0 013 0 2.39 2.39 0 001.08.26h1A2.43 2.43 0 0018 20.57v-1.69a3 3 0 00-.55-1.73l-.15-.22.15-.22A3 3 0 0018 15v-2a3 3 0 00-.55-1.73zm-6.43-9.5h2.26v2h-2.26zm5.63 19.07a.93.93 0 01-.93.93h-1a.86.86 0 01-.41-.1 4.83 4.83 0 00-4.32 0 .86.86 0 01-.41.1h-1a.93.93 0 01-.93-.93v-1.69a1.46 1.46 0 01.27-.88l.16-.23h8.14l.16.23a1.46 1.46 0 01.27.86zm0-5.59a1.46 1.46 0 01-.27.86l-.16.23-.15.21H8.08l-.15-.21-.16-.23A1.46 1.46 0 017.5 15v-2a1.46 1.46 0 01.27-.86l.16-.23.07-.13h8l.06.08.16.23a1.46 1.46 0 01.27.86zm-.27-5.07l-.16.23-.1.14H8l-.1-.14-.16-.23a1.46 1.46 0 01-.27-.86 4 4 0 011.34-3L10 5h4l1.19 1.06a4 4 0 011.34 3 1.46 1.46 0 01-.3.85z"
  }));
}

var _default = SvgPlasticBottleRecyclingMediumLine;
exports.default = _default;