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
function SvgOctagonLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M15.94 2.5l5.56 5.56v7.88l-5.56 5.56H8.06L2.5 15.94V8.06L8.06 2.5h7.88m.2-.5H7.86L2 7.86v8.28L7.86 22h8.28L22 16.14V7.86L16.14 2z" }, void 0) }), void 0));
}
exports.default = SvgOctagonLightLine;
