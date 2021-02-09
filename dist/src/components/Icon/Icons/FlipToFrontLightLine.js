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
function SvgFlipToFrontLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M7 3v14h14V3zm13.5 13.5h-13v-13h13zM8.5 21h3v-.5h-3zm-5-8.5H3v3h.5zm0 5H3V21h3.5v-.5h-3zm10 3.5H17v-.5h-3.5zM3.5 7H3v3.5h.5z" }, void 0) }), void 0));
}
exports.default = SvgFlipToFrontLightLine;
