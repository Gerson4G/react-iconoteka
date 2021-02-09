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
function SvgTimelineBoldLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M21 20v-3h-2v3h-6v-3h-2v3H5v-3H3v3H1v2h22v-2zm-9-5a6.5 6.5 0 10-6.5-6.5A6.5 6.5 0 0012 15zm0-11.2a4.7 4.7 0 11-4.7 4.7A4.71 4.71 0 0112 3.8zm2.6 4.05h-1.95V5.4h-1.6v4h3.55z" }, void 0) }), void 0));
}
exports.default = SvgTimelineBoldLine;
