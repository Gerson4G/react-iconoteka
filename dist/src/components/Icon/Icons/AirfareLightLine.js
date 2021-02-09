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
function SvgAirfareLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M1 5v14h22V5zm21.5 13.5h-21v-13h21zM9.86 13h1.44l-.58 3h1.39l1.56-3h1.83a1 1 0 100-2h-1.83l-1.56-3h-1.39l.58 3H9.86l-.67-1h-1v4h1zm-1.17.52v-3h.23l.52.79.15.22h2.32l-.12-.6-.47-2.4h.48l1.42 2.73.14.27h2.14a.49.49 0 110 1h-2.14l-.14.27-1.42 2.63h-.48l.47-2.38.12-.6H9.59l-.15.23-.52.79z" }, void 0) }), void 0));
}
exports.default = SvgAirfareLightLine;
