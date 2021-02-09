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
function SvgHourglassLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M18.5 2.5V5a3.5 3.5 0 01-1.12 2.56L13 11.63l-.4.37.4.37 4.37 4.06A3.5 3.5 0 0118.5 19v2.5h-13V19a3.5 3.5 0 011.12-2.56L11 12.37l.4-.37-.4-.37-4.38-4.06A3.5 3.5 0 015.5 5V2.5h13M19 2H5v3a4 4 0 001.28 2.94L10.65 12l-4.37 4.06A4 4 0 005 19v3h14v-3a4 4 0 00-1.28-2.93L13.35 12l4.37-4.06A4 4 0 0019 5V2z" }, void 0) }), void 0));
}
exports.default = SvgHourglassLightLine;
