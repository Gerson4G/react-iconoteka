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
function SvgDecagonRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M15 2.88l4.8 3.48L21.59 12l-1.83 5.64L15 21.12H9l-4.8-3.48L2.41 12l1.83-5.64L9 2.88h6m.33-1H8.71L3.39 5.74 1.36 12l2 6.26 5.32 3.86h6.58l5.32-3.86 2-6.26-2-6.26-5.29-3.86z" }, void 0) }), void 0));
}
exports.default = SvgDecagonRegularLine;
