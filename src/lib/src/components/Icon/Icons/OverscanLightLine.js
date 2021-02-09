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
function SvgOverscanLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M2 4v16h20V4zm19.5 15.5h-19v-15h19zM12 6.46l1.77 1.76.35-.35L12 5.75 9.88 7.87l.35.35zm2.12 9.67l-.35-.35L12 17.54l-1.77-1.76-.35.35L12 18.25zm3.76-2L20 12l-2.12-2.12-.35.35L19.29 12l-1.76 1.77zm-11.41-.36L4.71 12l1.76-1.77-.35-.35L4 12l2.12 2.12z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgOverscanLightLine;
