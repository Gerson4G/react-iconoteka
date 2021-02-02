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

function SvgSatanismMedium(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm8.6 10a9.2 9.2 0 01-.12 1.39l-3.94-2.87L18 5.89A8.56 8.56 0 0120.6 12zm-9.93 3.86h2.66L12 20zm-.46-1.4l-1.1-3.4L12 9l2.89 2.1-1.1 3.4zm-1.56-4.8l-1.33-4.1 3.49 2.53zm.09 4.8H4.43l3.49-2.54zm4.45-6.37l3.49-2.53-1.33 4.1zm2.89 3.83l3.49 2.54h-4.31zm-.14-7.56L12 7.23 8.06 4.36a8.57 8.57 0 017.88 0zM6 5.89l1.5 4.63-3.98 2.87A9.2 9.2 0 013.4 12 8.56 8.56 0 016 5.89zm-1.64 10H9.2l1.5 4.63a8.62 8.62 0 01-6.38-4.66zm9 4.63l1.5-4.63h4.88a8.64 8.64 0 01-6.44 4.6z"
  }));
}

var _default = SvgSatanismMedium;
exports.default = _default;