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
function SvgZoomInMedium(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M16.16 15.1a8 8 0 10-1.06 1.06L21 22l1-1zM10 16.5a6.5 6.5 0 116.5-6.5 6.51 6.51 0 01-6.5 6.5zm.7-9.95H9.3V9.3H6.55v1.4H9.3v2.75h1.4V10.7h2.75V9.3H10.7z" }, void 0) }), void 0));
}
exports.default = SvgZoomInMedium;
