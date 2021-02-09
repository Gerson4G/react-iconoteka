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
function SvgTetraPakLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M16.75 3.75V2h-9.5v1.75L4 7v15h16V7zm-9-1.25h8.5V4l.15.14L19.29 7H11L7.75 3.75zm-3.25 19V7.21l3-3 3 3V21.5zm15 0H11v-14h8.5z" }, void 0) }), void 0));
}
exports.default = SvgTetraPakLightLine;