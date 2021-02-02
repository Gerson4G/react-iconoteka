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

function SvgToysToyShopChildrensRoomMediumFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 16.9c-.39.32-.8.63-1.22.91s-.8.51-1.23.75l-1.07-2.44A6 6 0 0118 13.7V8h2.23a1.53 1.53 0 001.52-1.36A1.59 1.59 0 0020.58 5L18 4.22V2h-.5A3.5 3.5 0 0014 5.5V9H7.54a4.77 4.77 0 00-4.38 2.86l-.43 1 1.37.61.43-1A3.28 3.28 0 016 10.89v2.81a6 6 0 01-.51 2.42l-1.07 2.44c-.43-.24-.85-.49-1.23-.75s-.83-.59-1.19-.91l-1 1.16a16.38 16.38 0 001.33 1 15.36 15.36 0 001.42.87c.49.27 1 .51 1.51.73s1 .41 1.59.58a16 16 0 001.65.42 14.59 14.59 0 001.72.26 17.25 17.25 0 003.52 0 14.59 14.59 0 001.72-.26 16 16 0 001.65-.42c.54-.17 1.07-.36 1.59-.58s1-.46 1.51-.73a15.36 15.36 0 001.42-.87 16.38 16.38 0 001.33-1zm-5.34 2.89a14 14 0 01-1.51.39 14.19 14.19 0 01-1.57.24 15.75 15.75 0 01-3.22 0 14.19 14.19 0 01-1.57-.24 14 14 0 01-1.51-.39c-.42-.13-.83-.28-1.24-.45L7 17.19A2 2 0 018.84 16h6.32A2 2 0 0117 17.19l.94 2.15c-.42.17-.83.32-1.25.45z"
  }));
}

var _default = SvgToysToyShopChildrensRoomMediumFill;
exports.default = _default;