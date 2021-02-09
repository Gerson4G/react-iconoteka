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
function SvgBorderAllMedium(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M3 3v18h18V3zm1.5 1.5h6.75v6.75H4.5zm0 15v-6.75h6.75v6.75zm15 0h-6.75v-6.75h6.75zm-6.75-8.25V4.5h6.75v6.75z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgBorderAllMedium;
