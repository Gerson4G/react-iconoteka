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
function SvgRepeatBold(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M10 6h4v3l4-4-4-4v3h-4a8 8 0 00-6.13 13.13l1.42-1.42A6 6 0 0110 6zm10.13.87l-1.42 1.42A6 6 0 0114 18h-4v-3l-4 4 4 4v-3h4a8 8 0 006.13-13.13z" }, void 0) }), void 0));
}
exports.default = SvgRepeatBold;
