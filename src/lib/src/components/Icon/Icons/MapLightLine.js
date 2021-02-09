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
function SvgMapLightLine(props) {
    return (jsx_runtime_1.jsxs("svg", __assign({ "data-name": "Hot 2", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: [jsx_runtime_1.jsx("path", { d: "M3 3v18h18V3zm17.5 17.5h-17v-17h17zm-8.78-3.75L12 17l.28-.25c.14-.13 3.48-3.17 3.48-6a3.76 3.76 0 10-7.52 0c0 2.83 3.34 5.87 3.48 6zM12 7.5a3.26 3.26 0 013.26 3.26c0 2.42-2.83 5.16-3.26 5.57-.43-.41-3.26-3.15-3.26-5.57A3.26 3.26 0 0112 7.5z" }, void 0),
            jsx_runtime_1.jsx("circle", { cx: 12, cy: 11, r: 0.45 }, void 0)] }), void 0));
}
exports.default = SvgMapLightLine;
