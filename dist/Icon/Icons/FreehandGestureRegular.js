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

function SvgFreehandGestureRegular(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12.67 21.49a7.37 7.37 0 01-5.28-2 6.39 6.39 0 01-1.8-5.29 6 6 0 01-.46-.42A6.57 6.57 0 013.32 8.4a11.23 11.23 0 013.56-6.75l.71.7a10.34 10.34 0 00-3.28 6.14A5.52 5.52 0 005.81 13a12.53 12.53 0 013.44-5.55 9.34 9.34 0 014.6-2.76 3.76 3.76 0 013.46.86c1.34 1.34 1.49 4.07-1.34 6.9-3.41 3.41-7 3.63-9.42 2.32a5.3 5.3 0 001.55 4c2.54 2.54 7.8 2.69 12.53-2l.71.7c-2.89 2.82-6 4.02-8.67 4.02zm-6-7.81c2.1 1.32 5.39 1.32 8.59-1.94 2.35-2.34 2.34-4.48 1.34-5.48a2.75 2.75 0 00-2.6-.59 8.19 8.19 0 00-4 2.48 11.13 11.13 0 00-3.32 5.53z"
  }));
}

var _default = SvgFreehandGestureRegular;
exports.default = _default;