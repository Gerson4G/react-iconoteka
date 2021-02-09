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
function SvgHourglassRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M18 3v2.32a3.33 3.33 0 01-1 2.35l-3.71 3.66-.61.67.61.67L17 16.33a3.33 3.33 0 011 2.35V21H6v-2.32a3.33 3.33 0 011-2.35l3.71-3.66.61-.67-.61-.67L7 7.67a3.33 3.33 0 01-1-2.35V3h12m1-1H5v3.32a4.32 4.32 0 001.23 3L9.94 12l-3.71 3.66a4.32 4.32 0 00-1.23 3V22h14v-3.32a4.32 4.32 0 00-1.23-3L14.06 12l3.71-3.66a4.32 4.32 0 001.23-3V2z" }, void 0) }), void 0));
}
exports.default = SvgHourglassRegularLine;
