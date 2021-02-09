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
function SvgHammockLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M21.5 4v4.36c-2.65 1.92-5.94 2.23-9.51 2.23s-6.85-.31-9.49-2.21V4H2v16h.5v-9.59a9.92 9.92 0 0019-.08V20h.5V4zM12 16.94a9.45 9.45 0 01-9.3-7.8c2.83 1.78 6.3 1.95 9.3 1.95s6.46-.17 9.29-1.95a9.45 9.45 0 01-9.29 7.8z" }, void 0) }), void 0));
}
exports.default = SvgHammockLightLine;
