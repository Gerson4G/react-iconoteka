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
function SvgZoomOutArrowsLight(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M16.4 3v.5h3.75l-6.33 6.32.36.36 6.32-6.33V7.6h.5V3zM9.85 13.85l-6.37 6.27v-3.74H3V21h4.59v-.5H3.84l6.36-6.3z" }, void 0) }), void 0));
}
exports.default = SvgZoomOutArrowsLight;
