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
function SvgBorderAllRegular(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M3 3v18h18V3zm1 1h7.5v7.5H4zm0 16v-7.5h7.5V20zm16 0h-7.5v-7.5H20zm-7.5-8.5V4H20v7.5z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgBorderAllRegular;
