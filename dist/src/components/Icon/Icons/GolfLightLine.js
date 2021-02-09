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
function SvgGolfLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M7.25 19v-8.24L16 6.5 6.75 2v17c-2.64.05-4.75.7-4.75 1.5S4.24 22 7 22s5-.67 5-1.5-2.11-1.45-4.75-1.5zm0-16.21l7.61 3.7-7.61 3.71zm-.5 18.69c-2.75 0-4.18-.73-4.25-1s1.5-1 4.25-1zm.5 0v-2c2.75 0 4.18.73 4.25 1s-1.5.97-4.25 1.01zM19 15a3 3 0 103 3 3 3 0 00-3-3zm0 5.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5z" }, void 0) }), void 0));
}
exports.default = SvgGolfLightLine;