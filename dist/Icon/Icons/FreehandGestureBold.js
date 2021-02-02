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

function SvgFreehandGestureBold(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12.67 22A7.86 7.86 0 017 19.8a6.88 6.88 0 01-2-5.46l-.29-.27a7.13 7.13 0 01-1.89-5.72 11.78 11.78 0 013.71-7.06l1.41 1.42a9.84 9.84 0 00-3.13 5.83 5.21 5.21 0 00.8 3.4 13.86 13.86 0 013.28-4.85c3.67-3.66 7.12-3.55 8.77-1.9s1.74 4.54-1.34 7.61-6.6 3.73-9.22 2.75a4.72 4.72 0 001.35 2.84c2.37 2.37 7.32 2.45 11.83-2.06l1.42 1.42c-3 2.99-6.23 4.25-9.03 4.25zm-5.42-8.56c1.93 1 4.82.79 7.66-2 2-2 2.19-3.93 1.34-4.78-1-1-3.37-.68-5.94 1.9a10.84 10.84 0 00-3.06 4.88z"
  }));
}

var _default = SvgFreehandGestureBold;
exports.default = _default;