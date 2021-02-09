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
function SvgHammockRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M21 4v4.71c-2.56 1.61-5.66 1.88-9 1.88s-6.44-.26-9-1.86V4H2v16h1v-8.26a9.93 9.93 0 0018-.06V20h1V4zm-9 12.44a8.94 8.94 0 01-8.54-6.31c2.71 1.32 5.78 1.46 8.54 1.46s5.83-.14 8.54-1.46A9 9 0 0112 16.44z" }, void 0) }), void 0));
}
exports.default = SvgHammockRegularLine;
