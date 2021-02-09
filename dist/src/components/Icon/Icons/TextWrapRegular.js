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
function SvgTextWrapRegular(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M7 7h10V6H7zm0 5.5h10v-1H7zM7 18h10v-1H7zM20 4v16h1V4zM3 20h1V4H3z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgTextWrapRegular;
