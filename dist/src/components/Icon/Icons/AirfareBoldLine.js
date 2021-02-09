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
function SvgAirfareBoldLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M1 5v14h22V5zm20 12H3V7h18zM9.86 13h1.44l-.58 3h1.39l1.56-3h1.7a1 1 0 000-2h-1.7l-1.56-3h-1.39l.58 3H9.86l-.67-1h-1v4h1z" }, void 0) }), void 0));
}
exports.default = SvgAirfareBoldLine;
