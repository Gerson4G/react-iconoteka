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
function SvgOpenWithLight(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M11.75 2v7h.5V2l2.65 2.6.35-.35L12 1 8.75 4.25l.35.35zm8 6.79l-.35.35 2.6 2.61h-7v.5h7l-2.6 2.65.35.35L23 12zM12.25 22v-7h-.5v7L9.1 19.4l-.35.35L12 23l3.25-3.25-.35-.35zM9 12.25v-.5H2L4.6 9.1l-.35-.35L1 12l3.25 3.25.35-.35L2 12.25z" }, void 0) }), void 0));
}
exports.default = SvgOpenWithLight;
