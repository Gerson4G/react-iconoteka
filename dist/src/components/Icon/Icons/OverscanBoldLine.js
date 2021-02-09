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
function SvgOverscanBoldLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M2 4v16h20V4zm18 14H4V6h16zm-3-8.37v4.24l2.12-2.12zm-10 0l-2.12 2.12L7 13.87zm5-3L9.88 8.75h4.24zm2.12 8.12H9.88L12 16.87z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgOverscanBoldLine;
