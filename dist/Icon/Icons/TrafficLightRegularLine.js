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

function SvgTrafficlightRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 10a2 2 0 102 2 2 2 0 00-2-2zm0 3.1a1.1 1.1 0 111.1-1.1 1.1 1.1 0 01-1.1 1.1zm5.47.9a1.33 1.33 0 001.26-.91l1-3.09H17V9h.47a1.33 1.33 0 001.26-.91l1-3.09H17v-.5A2.5 2.5 0 0014.5 2h-5A2.5 2.5 0 007 4.5V5H4.24l1 3.09A1.33 1.33 0 006.53 9H7v1H4.24l1 3.09a1.33 1.33 0 001.29.91H7v1H4.24l1 3.09a1.33 1.33 0 001.29.91H7v.5A2.5 2.5 0 009.5 22h5a2.5 2.5 0 002.5-2.5V19h.47a1.33 1.33 0 001.26-.91l1-3.09H17v-1zM17 6h1.37l-.59 1.77a.32.32 0 01-.31.23H17zm0 5h1.37l-.59 1.77a.32.32 0 01-.31.23H17zM7 18h-.47a.32.32 0 01-.31-.23L5.63 16H7zm0-5h-.47a.32.32 0 01-.31-.23L5.63 11H7zm0-5h-.47a.32.32 0 01-.31-.23L5.63 6H7zm9 11.5a1.5 1.5 0 01-1.5 1.5h-5A1.5 1.5 0 018 19.5v-15A1.5 1.5 0 019.5 3h5A1.5 1.5 0 0116 4.5zm2.37-3.5l-.59 1.77a.32.32 0 01-.31.23H17v-2zM12 5a2 2 0 102 2 2 2 0 00-2-2zm0 3.1A1.1 1.1 0 1113.1 7 1.1 1.1 0 0112 8.1zm0 6.9a2 2 0 102 2 2 2 0 00-2-2zm0 3.1a1.1 1.1 0 111.1-1.1 1.1 1.1 0 01-1.1 1.1z"
  }));
}

var _default = SvgTrafficlightRegularLine;
exports.default = _default;