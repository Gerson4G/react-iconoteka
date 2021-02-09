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
function SvgBookCoverLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M6.5 2A2.5 2.5 0 004 4.5v15A2.5 2.5 0 006.5 22H20V2zm13 19.5h-13a2 2 0 01-2-2V6a2.5 2.5 0 002 1h13zm0-15h-13a2 2 0 010-4h13zM15 10H9v.5h6z" }, void 0) }), void 0));
}
exports.default = SvgBookCoverLightLine;
