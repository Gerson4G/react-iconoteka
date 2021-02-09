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
function SvgZoomOutArrowsBold(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M15.34 3l2.12 2.12-4.17 4.17 1.42 1.42 4.17-4.17L21 8.66V3zM9.29 13.29l-4.17 4.17L3 15.34V21h5.66l-2.12-2.12 4.17-4.17z" }, void 0) }), void 0));
}
exports.default = SvgZoomOutArrowsBold;
