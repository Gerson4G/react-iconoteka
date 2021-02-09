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
function SvgZoomInRegular(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M16 15.29a8 8 0 10-.7.7l5.86 5.86.7-.7zM10 17a7 7 0 117-7 7 7 0 01-7 7zm.5-10.45h-1v3H6.55v1h3v2.95h1v-3h2.95v-1h-3z" }, void 0) }), void 0));
}
exports.default = SvgZoomInRegular;