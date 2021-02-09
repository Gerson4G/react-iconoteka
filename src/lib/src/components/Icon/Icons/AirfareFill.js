"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
function SvgAirfareFill(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M1 5v14h22V5zm14.58 7.76h-2.11l-1.56 3h-1.13l.58-3H9.57l-.61 1h-.77V10.2H9l.61 1h1.79l-.58-3h1.13l1.56 3h2.11a.77.77 0 01.77.78.76.76 0 01-.81.78z" }, void 0) }), void 0));
}
exports.default = SvgAirfareFill;
