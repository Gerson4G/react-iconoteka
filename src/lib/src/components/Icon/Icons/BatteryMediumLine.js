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
function SvgBatteryMediumLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M16 3h-2.42a1.58 1.58 0 00-3.16 0H8a3 3 0 00-3 3v14a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3zm1.5 17a1.5 1.5 0 01-1.5 1.5H8A1.5 1.5 0 016.5 20V6A1.5 1.5 0 018 4.5h8A1.5 1.5 0 0117.5 6zM12.7 6.5h-1.4v1.8H9.5v1.4h1.8v1.8h1.4V9.7h1.8V8.3h-1.8zM9.5 17.7h5v-1.4h-5z" }, void 0) }), void 0));
}
exports.default = SvgBatteryMediumLine;
