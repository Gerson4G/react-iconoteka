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
function SvgZoomInLight(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M15.83 15.47a8 8 0 10-.36.36l5.85 5.85.36-.36zM10 17.5a7.5 7.5 0 117.5-7.5 7.5 7.5 0 01-7.5 7.5zm.25-10.95h-.5v3.2h-3.2v.5h3.2v3.2h.5v-3.2h3.2v-.5h-3.2z" }, void 0) }), void 0));
}
exports.default = SvgZoomInLight;
