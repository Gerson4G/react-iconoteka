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

function SvgFoodDiningRestaurantRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9.87 3v4H8.48V3h-1v4H6.13V3h-.89l-.39 4.88a1.74 1.74 0 00.92 1.67l.87.46-.47 9.06a1.83 1.83 0 103.66 0L9.36 10l.87-.46a1.74 1.74 0 00.92-1.67L10.76 3zm-.11 5.67l-.87.46-.56.3v.63l.47 9.06a.84.84 0 01-.23.62.82.82 0 01-1.2 0 .84.84 0 01-.23-.62l.47-9.06v-.63l-.56-.3-.87-.46A.72.72 0 015.85 8h4.3a.72.72 0 01-.39.67zM17.49 3A1.51 1.51 0 0016 4.08l-2 6.84a2 2 0 001.21 2.45l1.12.42-.6 5.37a1.65 1.65 0 103.29.19V4.51A1.52 1.52 0 0017.49 3zM18 19.35a.65.65 0 11-1.3-.08l.6-5.37.09-.77-.73-.28-1.12-.41a1 1 0 01-.61-1.23L17 4.37a.53.53 0 01.5-.37.51.51 0 01.51.51z"
  }));
}

var _default = SvgFoodDiningRestaurantRegularLine;
exports.default = _default;