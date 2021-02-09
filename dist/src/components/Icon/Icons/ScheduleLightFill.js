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
function SvgScheduleLightFill(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M18 5V2.25a.25.25 0 00-.5 0V5h-11V2.25a.25.25 0 00-.5 0V5H2v16h20V5zM8.35 15.1a.35.35 0 11.35-.35.35.35 0 01-.35.35zm0-3.5a.35.35 0 11.35-.35.35.35 0 01-.35.35zM16 15h-5v-.5h5zm0-3.5h-5V11h5z" }, void 0) }), void 0));
}
exports.default = SvgScheduleLightFill;
