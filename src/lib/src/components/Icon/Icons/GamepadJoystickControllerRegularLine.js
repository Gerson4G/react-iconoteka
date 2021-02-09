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
function SvgGamepadJoystickControllerRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M7.42 7.58h-.84v2h-2v.84h2v2h.84v-2h2v-.84h-2zM17 7.5a2.49 2.49 0 101.77.73A2.5 2.5 0 0017 7.5zm1.15 3.65a1.62 1.62 0 11.48-1.15 1.59 1.59 0 01-.48 1.15zM18 4H6a5 5 0 00-5 5v8.9a3.1 3.1 0 006 1L8 16h8l1 2.89a3.1 3.1 0 006-1V9a5 5 0 00-5-5zm4 13.9a2.1 2.1 0 01-4.1.64l-1-2.88-.2-.66H7.3l-.24.66-1 2.88A2.1 2.1 0 012 17.9V9a4 4 0 014-4h12a4 4 0 014 4z" }, void 0) }), void 0));
}
exports.default = SvgGamepadJoystickControllerRegularLine;
