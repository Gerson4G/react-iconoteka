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
function SvgTextOverflowLight(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M23 6.5V6h-2V4h-.5v2H7v.5h13.5v5.25H7v.5h13.5V20h.5v-7.75h2v-.5h-2V6.5zM7 18h6v-.5H7zm-4 2h.5V4H3z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgTextOverflowLight;
