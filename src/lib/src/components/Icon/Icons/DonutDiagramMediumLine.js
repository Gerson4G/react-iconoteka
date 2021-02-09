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
function SvgDonutDiagramMediumLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M11 2.05a10 10 0 00-6 2.79l1.17 1A8.45 8.45 0 0111 3.56zM4.9 7.34l-1.16-1A9.9 9.9 0 002 12a10 10 0 002.84 7l1-1.17A8.44 8.44 0 014.9 7.34zM13 2.05v1.51A8.5 8.5 0 117.34 19.1l-1 1.16A9.9 9.9 0 0012 22a10 10 0 001-19.95z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgDonutDiagramMediumLine;
