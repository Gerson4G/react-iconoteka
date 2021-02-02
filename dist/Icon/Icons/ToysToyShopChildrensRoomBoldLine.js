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

function SvgToysToyShopChildrensRoomBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.87 16.46c-.38.31-.78.61-1.2.89s-.71.45-1.08.66l-1.08-2.46a5.89 5.89 0 01-.51-2.41v-2.52h.44a3.07 3.07 0 003.07-2.94 3.16 3.16 0 00-2.62-3.15L18 4.35V2h-2a3.48 3.48 0 00-3.44 3L12 9H6.86a4 4 0 00-3.66 2.39l-.86 2 1.83.81.86-2a2 2 0 011-1v1.92a5.89 5.89 0 01-.51 2.41L4.41 18c-.37-.21-.74-.42-1.08-.66s-.82-.58-1.2-.89L.86 18c.42.35.88.69 1.35 1s1 .61 1.44.88 1 .51 1.53.73a16.41 16.41 0 001.61.59 16.55 16.55 0 001.68.43 17.44 17.44 0 001.74.27 17.85 17.85 0 003.58 0 17.44 17.44 0 001.74-.27 16.55 16.55 0 001.68-.43 16.41 16.41 0 001.61-.59c.52-.22 1-.47 1.53-.73s1-.57 1.44-.88.93-.66 1.35-1zM13.73 11L14 9.28l.57-4A1.5 1.5 0 0116 4v2l1.62.32.88.17a1.17 1.17 0 011 1.11 1.07 1.07 0 01-1.07 1H16v4.52a7.46 7.46 0 00.06.95 4 4 0 00-.85-.09H8.79a4 4 0 00-.85.09 7.46 7.46 0 00.06-.93V11zm2.88 8.3a14.58 14.58 0 01-1.48.38 13.67 13.67 0 01-1.54.24 15.36 15.36 0 01-3.18 0c-.51-.05-1-.13-1.54-.23s-1-.24-1.48-.39a11.66 11.66 0 01-1.17-.43L7 17.19A2 2 0 018.79 16h6.42A2 2 0 0117 17.19l.74 1.68a11.66 11.66 0 01-1.13.43z"
  }));
}

var _default = SvgToysToyShopChildrensRoomBoldLine;
exports.default = _default;