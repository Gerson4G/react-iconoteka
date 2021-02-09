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
function SvgOverscanRegularFill(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M2 4v16h20V4zm4.83 9.41l-.71.71L4 12l2.12-2.12.71.71L5.41 12zM12 18.25l-2.12-2.12.71-.71L12 16.84l1.41-1.42.71.71zm1.41-9.67L12 7.16l-1.41 1.42-.71-.71L12 5.75l2.12 2.12zm4.47 5.54l-.71-.71L18.59 12l-1.42-1.41.71-.71L20 12z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgOverscanRegularFill;
