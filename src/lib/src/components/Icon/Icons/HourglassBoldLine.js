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
function SvgHourglassBoldLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M17 4v2a3 3 0 01-.68 1.9L14 10.73 12.91 12 14 13.27l2.36 2.87A3 3 0 0117 18v2H7v-2a3 3 0 01.68-1.9L10 13.27 11.09 12 10 10.73 7.68 7.86A3 3 0 017 6V4h10m2-2H5v4a5 5 0 001.14 3.13L8.5 12l-2.36 2.87A5 5 0 005 18v4h14v-4a5 5 0 00-1.14-3.17L15.5 12l2.36-2.87A5 5 0 0019 6V2z" }, void 0) }), void 0));
}
exports.default = SvgHourglassBoldLine;
