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

function SvgPawPetsAnimalsPetFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.83 8.22A2.82 2.82 0 0018 5.87a2.85 2.85 0 00-1.8-3.53A2.84 2.84 0 0013 4.69a2.83 2.83 0 001.83 3.53zm-5.66 0A2.83 2.83 0 0011 4.69a2.84 2.84 0 00-3.2-2.35A2.85 2.85 0 006 5.87a2.82 2.82 0 003.17 2.35zm12.34-.14a2.86 2.86 0 00-3.57 1.86 2.86 2.86 0 001.28 3.81 2.87 2.87 0 003.58-1.85 2.88 2.88 0 00-1.29-3.82zM6.06 9.94a2.86 2.86 0 00-3.57-1.86A2.88 2.88 0 001.2 11.9a2.87 2.87 0 003.58 1.85 2.86 2.86 0 001.28-3.81zm10.83 3.89a5.63 5.63 0 00-9.78 0l-1.48 2.6a3.61 3.61 0 005 4.89 2.68 2.68 0 012.76 0 3.61 3.61 0 005-4.89z"
  }));
}

var _default = SvgPawPetsAnimalsPetFill;
exports.default = _default;