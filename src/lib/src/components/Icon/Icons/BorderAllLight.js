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
function SvgBorderAllLight(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M3 3v18h18V3zm.5.5h8.25v8.25H3.5zm0 17v-8.25h8.25v8.25zm17 0h-8.25v-8.25h8.25zm-8.25-8.75V3.5h8.25v8.25z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgBorderAllLight;
