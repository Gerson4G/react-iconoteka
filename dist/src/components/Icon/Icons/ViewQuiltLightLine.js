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
function SvgViewQuiltLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M2 4v16h20V4zm.5.5h6v7.25h-6zm0 15v-7.25h6v7.25zm6.5 0v-7.25h6v7.25zm12.5 0h-6v-7.25h6zM9 11.75V4.5h12.5v7.25z" }, void 0) }), void 0));
}
exports.default = SvgViewQuiltLightLine;
