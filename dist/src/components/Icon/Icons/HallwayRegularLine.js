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
function SvgHallwayRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M3 14H2v7h1v-2h18v2h1v-7H3zm18 4H3v-3h18zM2 3v3h7v3a1 1 0 01-2 0V8H6v1a2 2 0 004 0V6h6v3a1 1 0 01-2 0V8h-1v1a2 2 0 004 0V6h5V3zm19 2H3V4h18z" }, void 0) }), void 0));
}
exports.default = SvgHallwayRegularLine;
