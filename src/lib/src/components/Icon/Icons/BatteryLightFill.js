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
function SvgBatteryLightFill(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M16 3h-2a2 2 0 00-4 0H8a3 3 0 00-3 3v14a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3zm-1.5 14.25h-5v-.5h5zm0-8h-2.25v2.25h-.5V9.25H9.5v-.5h2.25V6.5h.5v2.25h2.25z" }, void 0) }), void 0));
}
exports.default = SvgBatteryLightFill;
