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
function SvgChartBubbleFill(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M13 7.5A5.5 5.5 0 107.5 13 5.51 5.51 0 0013 7.5zM19 6a3 3 0 103 3 3 3 0 00-3-3zm-5 8a4 4 0 104 4 4 4 0 00-4-4z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgChartBubbleFill;
