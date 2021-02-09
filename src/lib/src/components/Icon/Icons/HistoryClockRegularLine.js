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
function SvgHistoryClockRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 19a9 9 0 119-9 9 9 0 01-9 9zm0-13.65a4.62 4.62 0 00-3.29 1.36L8.39 9V7h-1v3.79h3.79v-1H9.05l.37-.36a3.73 3.73 0 015.16 0 3.65 3.65 0 010 5.16 3.73 3.73 0 01-5.16 0 3.58 3.58 0 01-1-1.89h-1A4.65 4.65 0 1012 7.35z" }, void 0) }), void 0));
}
exports.default = SvgHistoryClockRegularLine;
