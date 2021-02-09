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
function SvgBatteryAlertLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M16.5 3H14a2 2 0 00-4 0H7.5A2.5 2.5 0 005 5.5v15A2.5 2.5 0 007.5 23h9a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0016.5 3zM12 1.5A1.5 1.5 0 0113.5 3h-3A1.5 1.5 0 0112 1.5zm6.5 19a2 2 0 01-2 2h-9a2 2 0 01-2-2v-15a2 2 0 012-2h9a2 2 0 012 2zm-6.41-5.75l.14-6.5h-.71l.14 6.5zm-.21 2.38a.45.45 0 10.44.45.45.45 0 00-.44-.45z" }, void 0) }), void 0));
}
exports.default = SvgBatteryAlertLightLine;
