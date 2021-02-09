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
function SvgViewModuleLightFill(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M2 20h6.33v-7.75H2zm6.83-8.25h6.34V4H8.83zm-6.83 0h6.33V4H2zM15.67 4v7.75H22V4zm0 16H22v-7.75h-6.33zm-6.84 0h6.34v-7.75H8.83z" }, void 0) }), void 0));
}
exports.default = SvgViewModuleLightFill;
