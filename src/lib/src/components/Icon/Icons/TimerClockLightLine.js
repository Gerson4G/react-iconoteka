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
function SvgTimerClockLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M19.24 5.11l1.42-1.42-.35-.35-1.42 1.42A10 10 0 0012.25 2V0h-.5v2a10 10 0 107.49 3.1zM12 21.5a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5zM7.58 7.93L12 12.35l.35-.35-4.42-4.42z" }, void 0) }), void 0));
}
exports.default = SvgTimerClockLightLine;
