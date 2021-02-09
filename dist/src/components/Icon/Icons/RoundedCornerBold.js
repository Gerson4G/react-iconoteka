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
function SvgRoundedCornerBold(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M3 5h2V3H3zm0 4h2V7H3zm0 4h2v-2H3zm0 4h2v-2H3zm16 0h2v-2h-2zM7 5h2V3H7zm7-2h-3v2h3a5 5 0 015 5v3h2v-3a7 7 0 00-7-7zM7 21h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2zM3 21h2v-2H3zm16 0h2v-2h-2z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgRoundedCornerBold;
