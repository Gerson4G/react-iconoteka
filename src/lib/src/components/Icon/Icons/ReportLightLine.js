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
function SvgReportLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M16.14 2H7.86L2 7.86v8.28L7.86 22h8.28L22 16.14V7.86zm5.36 13.93l-5.57 5.57H8.07L2.5 15.93V8.07L8.07 2.5h7.86l5.57 5.57zm-9.28-2.43l.13-6.5h-.7l.13 6.5zM12 15.88a.45.45 0 10.45.45.45.45 0 00-.45-.45z" }, void 0) }), void 0));
}
exports.default = SvgReportLightLine;
