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
function SvgTrackLight(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M22 12h-.5a9.51 9.51 0 11-3-6.89l-3 3A5.22 5.22 0 1017.25 12h-.5a4.76 4.76 0 11-1.59-3.52l-3.34 3.34a.25.25 0 00.36.36l7.07-7.07-.18-.18A10 10 0 1022 12z" }, void 0) }), void 0));
}
exports.default = SvgTrackLight;
