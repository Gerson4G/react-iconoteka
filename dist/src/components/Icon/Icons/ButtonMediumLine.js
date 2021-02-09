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
function SvgButtonMediumLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M18 8.5a3.5 3.5 0 010 7H6a3.5 3.5 0 010-7h12M18 7H6a5 5 0 00-5 5 5 5 0 005 5h12a5 5 0 005-5 5 5 0 00-5-5z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgButtonMediumLine;
