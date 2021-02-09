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
function SvgCityRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M16 8V3H8v10.57l-2.5-1.45-3.5 2V22h20V8zM8 21H3v-6.28l2.5-1.44L8 14.72zm7 0H9V4h6zm6 0h-5V9h5zm-7.5-5h-3v3h3zm-.8 2.2h-1.4v-1.4h1.4zM20 16h-3v3h3zm-.8 2.2h-1.4v-1.4h1.4zM13.5 11h-3v3h3zm-.8 2.2h-1.4v-1.4h1.4zM20 11h-3v3h3zm-.8 2.2h-1.4v-1.4h1.4zM13.5 6h-3v3h3zm-.8 2.2h-1.4V6.8h1.4zM4 19h3v-3H4zm.8-2.2h1.4v1.4H4.8z" }, void 0) }), void 0));
}
exports.default = SvgCityRegularLine;
