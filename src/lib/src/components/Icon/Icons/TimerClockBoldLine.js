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
function SvgTimerClockBoldLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M19.74 5.67l1.45-1.45-1.41-1.41-1.45 1.45A10 10 0 0013 2.05V0h-2v2.05a10 10 0 108.74 3.62zM12 20a8 8 0 118-8 8 8 0 01-8 8zM7.05 8.46l5 4.95L13.41 12 8.46 7.05z" }, void 0) }), void 0));
}
exports.default = SvgTimerClockBoldLine;
