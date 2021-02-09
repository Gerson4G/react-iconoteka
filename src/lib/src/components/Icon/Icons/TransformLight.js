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
function SvgTransformLight(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M18.75 5.25v7.67l.5.5V4.75h-8.67l.5.5zm-1 10.5l-.35.35 2.6 2.65H5.25V4L7.9 6.6l.35-.35L5 3 1.75 6.25l.35.35L4.75 4v15.25H20l-2.6 2.65.35.35L21 19z" }, void 0) }), void 0));
}
exports.default = SvgTransformLight;
