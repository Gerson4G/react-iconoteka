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
function SvgCityLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M15.5 7V2h-7v10.86l-3-1.74-3.5 2V21h20V7zm-7 13.5h-6v-7.07l3-1.73 3 1.73zm6.5 0H9v-18h6zm6.5 0h-6v-13h6zm-8-5.5h-3v3h3zm-.5 2.5h-2v-2h2zm7-2.5h-3v3h3zm-.5 2.5h-2v-2h2zm-6-7.5h-3v3h3zm-.5 2.5h-2v-2h2zm7-2.5h-3v3h3zm-.5 2.5h-2v-2h2zm-6-7.5h-3v3h3zM13 7.5h-2v-2h2zM4 18h3v-3H4zm.5-2.5h2v2h-2z" }, void 0) }), void 0));
}
exports.default = SvgCityLightLine;
