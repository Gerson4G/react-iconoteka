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

function SvgPlasticBottleRecyclingBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17.3 11l.15-.22A3 3 0 0018 9.05a5.5 5.5 0 00-1.88-4.13L15 3.94V2a2 2 0 00-2-2h-2a2 2 0 00-2 2v1.94l-1.12 1A5.5 5.5 0 006 9.05a3 3 0 00.55 1.73l.15.22-.15.22A3 3 0 006 13v2a3 3 0 00.55 1.73l.15.22-.15.22A3 3 0 006 18.88v1.69A2.43 2.43 0 008.43 23h1a2.39 2.39 0 001.08-.26l.4-.2a2.5 2.5 0 012.18 0l.4.2a2.39 2.39 0 001.08.26h1A2.43 2.43 0 0018 20.57v-1.69a3 3 0 00-.55-1.73l-.15-.22.15-.22A3 3 0 0018 15v-2a3 3 0 00-.55-1.73zm-6.4-9a.09.09 0 01.1-.1h2a.09.09 0 01.1.1v1.8h-2.2zm5.2 18.57a.53.53 0 01-.53.53h-1a.46.46 0 01-.23-.06l-.4-.2a4.41 4.41 0 00-3.88 0l-.4.2a.46.46 0 01-.23.06h-1a.53.53 0 01-.53-.53v-1.69a1.07 1.07 0 01.2-.63l.16-.25.13-.19h7.22l.13.19.16.23a1.07 1.07 0 01.2.63zm0-5.59a1.07 1.07 0 01-.2.63l-.16.23-.13.19H8.39l-.13-.19-.16-.23a1.07 1.07 0 01-.2-.61v-2a1.07 1.07 0 01.2-.63l.16-.23.11-.16h7.26l.11.16.16.23a1.07 1.07 0 01.2.63zm-.2-5.3l-.16.23-.16.22H8.42l-.16-.22-.16-.23a1.07 1.07 0 01-.2-.63 3.58 3.58 0 011.23-2.7L10 5.6h4l.85.75a3.58 3.58 0 011.23 2.7 1.07 1.07 0 01-.18.63z"
  }));
}

var _default = SvgPlasticBottleRecyclingBoldLine;
exports.default = _default;