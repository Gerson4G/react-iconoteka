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
function SvgEyeRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { children: jsx_runtime_1.jsx("path", { d: "M12 4.622A12.906 12.906 0 00.344 12a12.896 12.896 0 0023.312 0A12.906 12.906 0 0012 4.622zm0 13.756A11.979 11.979 0 011.462 12a11.894 11.894 0 0121.076 0A11.978 11.978 0 0112 18.378zm0-10.042a3.664 3.664 0 100 7.328 3.664 3.664 0 000-7.328zm0 6.328a2.664 2.664 0 110-5.329 2.664 2.664 0 010 5.33z", fill: "#000" }, void 0) }), void 0));
}
exports.default = SvgEyeRegularLine;
