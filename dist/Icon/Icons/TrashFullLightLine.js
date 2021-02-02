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

function SvgTrashFullLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9.85 19.25a1.46 1.46 0 10-1.46-1.46 1.46 1.46 0 001.46 1.46zm0-2.42a1 1 0 11-1 1 1 1 0 011-1zm4.3 2.42a1.46 1.46 0 10-1.46-1.46 1.46 1.46 0 001.46 1.46zm0-2.42a1 1 0 11-1 1 1 1 0 011-1zm-4.3-2a1.46 1.46 0 10-1.46-1.43 1.47 1.47 0 001.46 1.46zm0-2.42a1 1 0 11-1 1 1 1 0 011-.97zm4.3 2.42a1.46 1.46 0 10-1.46-1.46 1.46 1.46 0 001.46 1.49zm0-2.42a1 1 0 11-1 1 1 1 0 011-.97zm-4.3-2A1.46 1.46 0 108.39 9a1.46 1.46 0 001.46 1.46zm0-2.41a1 1 0 11-1 1 1 1 0 011-1zm4.3 2.42A1.46 1.46 0 1012.69 9a1.46 1.46 0 001.46 1.46zm0-2.42a1 1 0 11-1 1 1 1 0 011-1zM15 5V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v1H3v.5h1.77L6.26 22h11.48l1.49-16.5H21V5zM9.5 4A1.5 1.5 0 0111 2.5h2A1.5 1.5 0 0114.5 4v1h-5zm7.78 17.5H6.72l-1.44-16h13.44z"
  }));
}

var _default = SvgTrashFullLightLine;
exports.default = _default;