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

function SvgFoodDiningRestaurantLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9.4 3v4h-.62V3H7.22v4H6.6V3H5.24l-.39 4.88a1.74 1.74 0 00.92 1.67l.87.46-.47 9.06a1.83 1.83 0 103.66 0L9.36 10l.87-.46a1.74 1.74 0 00.92-1.67L10.76 3zm.6 6.11l-.87.46-.28.15v.32l.47 9.06a1.3 1.3 0 01-.36 1 1.33 1.33 0 01-1.94 0 1.3 1.3 0 01-.36-1l.48-9.1v-.32l-.28-.15L6 9.11a1.22 1.22 0 01-.66-1.19L5.7 3.5h.4v4h1.62v-4h.56v4H9.9v-4h.4l.35 4.42A1.22 1.22 0 0110 9.11zM17.49 3A1.51 1.51 0 0016 4.08l-2 6.84a2 2 0 001.21 2.45l1.12.42-.6 5.37a1.65 1.65 0 103.29.19V4.51A1.52 1.52 0 0017.49 3zm1 16.35a1.15 1.15 0 01-2 .77 1.18 1.18 0 01-.29-.9l.6-5.37.05-.39-.37-.14-1.11-.41a1.51 1.51 0 01-.91-1.84l2.06-6.85a1 1 0 012 .29z"
  }));
}

var _default = SvgFoodDiningRestaurantLightLine;
exports.default = _default;