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
function SvgChartMultipleLightFill(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M6.75 12v4.72H2A4.49 4.49 0 106.75 12zM2 16.25h4.25V12A4.46 4.46 0 002 16.25zM20.5 12v9h.5v-9zM14 21h.5v-7H14zm3.25 0h.5v-4h-.5zM20.5 3.82l-5.94 5.47-6.12-5.63-6.28 5.78.34.37 5.94-5.47L14.56 10l6.28-5.78z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgChartMultipleLightFill;
