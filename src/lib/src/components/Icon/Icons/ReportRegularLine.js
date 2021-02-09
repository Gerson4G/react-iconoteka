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
function SvgReportRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M16.14 2H7.86L2 7.86v8.28L7.86 22h8.28L22 16.14V7.86zM21 15.73L15.73 21H8.27L3 15.73V8.27L8.27 3h7.46L21 8.27zm-8.58-2.23l.25-6.5h-1.34l.25 6.5zm-.42 2a.68.68 0 10.68.68.67.67 0 00-.68-.64z" }, void 0) }), void 0));
}
exports.default = SvgReportRegularLine;
