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
function SvgSavingsRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M3 3v10h18V3zm17 9H4V4h16zm-8-1.75A2.25 2.25 0 109.75 8 2.25 2.25 0 0012 10.25zm0-3.5A1.25 1.25 0 1110.75 8 1.25 1.25 0 0112 6.75zM3 17h18v-1H3zm0 4h18v-1H3z" }, void 0) }), void 0));
}
exports.default = SvgSavingsRegularLine;
