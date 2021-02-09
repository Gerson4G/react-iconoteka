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
function SvgDonutDiagramBoldLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M11 4.07v-2a10 10 0 00-6 2.77l1.55 1.3A8 8 0 0111 4.07zm2-2v2A8 8 0 0112 20a7.92 7.92 0 01-4.33-1.28l-1.3 1.54A9.9 9.9 0 0012 22a10 10 0 001-19.95zm-7.72 5.6l-1.54-1.3A9.9 9.9 0 002 12a10 10 0 002.84 7l1.3-1.55a8 8 0 01-.86-9.76z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgDonutDiagramBoldLine;
