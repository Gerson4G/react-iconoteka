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

function SvgFreehandGestureLight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12.66 21.24a7.08 7.08 0 01-5.09-2 6.1 6.1 0 01-1.73-5.09v-.16a6.44 6.44 0 01-.56-.48 6.27 6.27 0 01-1.71-5.09 11 11 0 013.49-6.6l.35.36a10.49 10.49 0 00-3.34 6.29 5.75 5.75 0 001.59 4.71 2.68 2.68 0 00.3.28 12 12 0 013.46-5.84 9.25 9.25 0 014.48-2.69 3.53 3.53 0 013.23.8c1.25 1.27 1.37 3.84-1.34 6.54-3.48 3.49-7.1 3.55-9.46 2.08a5.61 5.61 0 001.59 4.57c2.63 2.62 8 2.8 12.89-2.06l.36.36c-2.85 2.84-5.89 4.02-8.51 4.02zM6.4 13.8c2.17 1.49 5.66 1.5 9-1.88 2.47-2.46 2.42-4.76 1.34-5.84A3 3 0 0014 5.42 8.64 8.64 0 009.78 8a11.17 11.17 0 00-3.38 5.8z"
  }));
}

var _default = SvgFreehandGestureLight;
exports.default = _default;