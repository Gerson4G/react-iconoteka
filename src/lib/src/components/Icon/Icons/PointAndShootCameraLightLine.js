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
function SvgPointAndShootCameraLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M19.5 5h-15A2.5 2.5 0 002 7.5v9A2.5 2.5 0 004.5 19h15a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0019.5 5zm2 11.5a2 2 0 01-2 2h-15a2 2 0 01-2-2v-9a2 2 0 012-2h15a2 2 0 012 2zM8 3.75a.25.25 0 00-.25-.25h-2.5a.25.25 0 00-.25.25V4h3zm5.69 4.75a3.5 3.5 0 103.5 3.5 3.5 3.5 0 00-3.5-3.5zm0 6.5a3 3 0 113-3 3 3 0 01-3 3z" }, void 0) }), void 0));
}
exports.default = SvgPointAndShootCameraLightLine;
