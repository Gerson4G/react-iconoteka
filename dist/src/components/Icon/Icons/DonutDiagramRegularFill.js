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
function SvgDonutDiagramRegularFill(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M11.5 6V2a9.94 9.94 0 00-6.82 3.2l3.06 2.58A6 6 0 0111.5 6zm1-4v4a6 6 0 11-4 10.87L6 20a9.9 9.9 0 006 2 10 10 0 00.5-20zM6 12a6 6 0 011.1-3.46L4 6a10 10 0 001.2 13.32l2.58-3.06A6 6 0 016 12z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgDonutDiagramRegularFill;
