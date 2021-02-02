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

function SvgPhoneMessageLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.5 2h-5A1.5 1.5 0 0014 3.5v7.31L16.81 8h3.69A1.5 1.5 0 0022 6.5v-3A1.5 1.5 0 0020.5 2zm1 4.5a1 1 0 01-1 1h-3.9l-2.1 2.1V3.5a1 1 0 011-1h5a1 1 0 011 1zm-7.81 10.27a14.55 14.55 0 01-3.76-2.7 14.55 14.55 0 01-2.7-3.76l2.83-2.84L7.21 2l-2 .65a4.46 4.46 0 00-3 5.14 18.48 18.48 0 0013.98 14.09 4.46 4.46 0 005.14-3.05l.65-2-5.45-2.85zm7.69.27l-.53 1.64a4 4 0 01-4.55 2.71 17.82 17.82 0 01-8.84-4.85A17.82 17.82 0 012.61 7.7a4 4 0 012.71-4.55L7 2.62l2.45 4.76-2.83 2.83.16.32a14.9 14.9 0 006.69 6.69l.32.16 2.83-2.83z"
  }));
}

var _default = SvgPhoneMessageLightLine;
exports.default = _default;