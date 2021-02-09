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
function SvgViewGridLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M3 11h8V3H3zm.5-7.5h7v7h-7zM13 3v8h8V3zm7.5 7.5h-7v-7h7zM3 21h8v-8H3zm.5-7.5h7v7h-7zM13 21h8v-8h-8zm.5-7.5h7v7h-7z" }, void 0) }), void 0));
}
exports.default = SvgViewGridLightLine;
