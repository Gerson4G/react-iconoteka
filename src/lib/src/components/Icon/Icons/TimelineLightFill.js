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
function SvgTimelineLightFill(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M21 21.5V18h-.5v3.5h-8.25V18h-.5v3.5H3.5V18H3v3.5H1v.5h22v-.5zM12 15a6.5 6.5 0 10-6.5-6.5A6.5 6.5 0 0012 15zm-.4-10h.5v3.4h2.83v.5H11.6z" }, void 0) }), void 0));
}
exports.default = SvgTimelineLightFill;
