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
function SvgAlarmOnLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M11.26 14.54l-2.69-2.81-.36.35 3 3.18 4.5-4.7-.36-.35zM12 4a9 9 0 109 9 9 9 0 00-9-9zm0 17.5a8.5 8.5 0 118.5-8.5 8.51 8.51 0 01-8.5 8.5zM16.44.8l-.17.47a12.47 12.47 0 016.55 5.49l.43-.25A13 13 0 0016.44.8zm-8.71.47L7.56.8A13 13 0 00.75 6.51l.43.25a12.47 12.47 0 016.55-5.49z" }, void 0) }), void 0));
}
exports.default = SvgAlarmOnLightLine;