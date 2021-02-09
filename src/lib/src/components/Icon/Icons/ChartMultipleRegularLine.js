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
function SvgChartMultipleRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M6.5 12a4.5 4.5 0 104.5 4.5A4.49 4.49 0 006.5 12zM6 13.05V16H3.05A3.48 3.48 0 016 13.05zm.5 7a3.5 3.5 0 01-3.45-3H7v-4a3.49 3.49 0 01-.5 7zM20 21h1v-9h-1zm-6 0h1v-7h-1zm3 0h1v-4h-1zM8.44 4.68l6.12 5.62L21 4.37l-.68-.74L14.56 9 8.44 3.32 2 9.26l.68.73z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgChartMultipleRegularLine;
