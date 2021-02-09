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
function SvgHttpRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M3.51 12.36h2.83V15h.84V9h-.84v2.62H3.51V9h-.83v6h.83zM9.79 15h.83V9.79h2.94V15h.84V9.79h1.73V9H8v.79h1.79zm8.07-2.24h1.83a1.64 1.64 0 001.63-1.64v-.49A1.63 1.63 0 0019.69 9H17v6h.84zm0-2.93h1.83a.8.8 0 01.8.8v.49a.8.8 0 01-.8.8h-1.83zM0 4v16h24V4zm23 15H1V5h22z" }, void 0) }), void 0));
}
exports.default = SvgHttpRegularLine;
