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
function SvgBookCoverBoldLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M7 2a3 3 0 00-3 3v14a3 3 0 003 3h13V2zm11 18H7a1 1 0 01-1-1V7.82A3 3 0 007 8h11zm0-14H7a1 1 0 010-2h11zm-3 5H9v2h6z" }, void 0) }), void 0));
}
exports.default = SvgBookCoverBoldLine;
