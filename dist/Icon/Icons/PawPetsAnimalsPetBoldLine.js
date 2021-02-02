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

function SvgPawPetsAnimalsPetBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.77 8.47a2.08 2.08 0 00.55.07 3.2 3.2 0 002.93-2.62 3.07 3.07 0 00-2-3.83 2.64 2.64 0 00-.54-.09 3.19 3.19 0 00-2.93 2.61 3.07 3.07 0 001.99 3.86zm-.24-3.42a1.45 1.45 0 011.18-1.22h.14a.86.86 0 01.53.47 1.79 1.79 0 01.12 1.2 1.45 1.45 0 01-1.18 1.23h-.14a.85.85 0 01-.53-.46 1.83 1.83 0 01-.12-1.22zM8.68 8.54a2.08 2.08 0 00.55-.07 3.07 3.07 0 002-3.83A3.19 3.19 0 008.29 2a2.64 2.64 0 00-.55.06 3.07 3.07 0 00-2 3.83 3.2 3.2 0 002.94 2.65zM7.62 4.31a.86.86 0 01.53-.47h.15a1.45 1.45 0 011.17 1.21 1.83 1.83 0 01-.12 1.21.85.85 0 01-.53.46h-.14A1.45 1.45 0 017.5 5.51a1.79 1.79 0 01.12-1.2zm14 3.57a2.47 2.47 0 00-.92-.18 3.3 3.3 0 00-2.92 2.17A3.08 3.08 0 0019.14 14a2.46 2.46 0 00.92.17A3.27 3.27 0 0023 12a3.07 3.07 0 00-1.4-4.12zm-.3 3.42a1.5 1.5 0 01-1.24 1 .69.69 0 01-.25 0 1.35 1.35 0 01-.38-1.75 1.54 1.54 0 011.25-1 .69.69 0 01.24.05.82.82 0 01.45.54 1.76 1.76 0 01-.09 1.16zM6.24 9.87A3.3 3.3 0 003.32 7.7a2.47 2.47 0 00-.92.18A3.07 3.07 0 001 12a3.27 3.27 0 002.91 2.16 2.46 2.46 0 00.95-.16 3.08 3.08 0 001.38-4.13zm-2 2.42a.69.69 0 01-.25 0 1.5 1.5 0 01-1.24-1 1.76 1.76 0 01-.07-1.21.82.82 0 01.45-.54.69.69 0 01.24-.05 1.54 1.54 0 011.25 1 1.35 1.35 0 01-.43 1.8zm12.7 1.54a5.64 5.64 0 00-9.78 0l-1.48 2.6a3.6 3.6 0 005 4.89 2.64 2.64 0 012.76 0 3.72 3.72 0 001.87.53 3.63 3.63 0 003.12-5.42zM16.65 19a1.67 1.67 0 01-1.4.86 1.7 1.7 0 01-.84-.25 4.67 4.67 0 00-4.82 0 1.7 1.7 0 01-.84.25 1.67 1.67 0 01-1.4-.86 1.5 1.5 0 010-1.57l1.48-2.6a3.64 3.64 0 016.3 0l1.48 2.6a1.5 1.5 0 01.04 1.57z"
  }));
}

var _default = SvgPawPetsAnimalsPetBoldLine;
exports.default = _default;