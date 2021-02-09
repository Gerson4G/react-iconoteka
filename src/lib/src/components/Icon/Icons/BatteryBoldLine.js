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
function SvgBatteryBoldLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M16 3h-2a2 2 0 00-4 0H8a3 3 0 00-3 3v14a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H8a1 1 0 01-1-1V6a1 1 0 011-1h8a1 1 0 011 1zM12.8 6.5h-1.6v1.7H9.5v1.6h1.7v1.7h1.6V9.8h1.7V8.2h-1.7zM9.5 17.8h5v-1.6h-5z" }, void 0) }), void 0));
}
exports.default = SvgBatteryBoldLine;
