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
function SvgTimerClockRegularFill(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M19.41 5.3l1.43-1.43-.71-.71-1.43 1.43A9.91 9.91 0 0012.5 2V0h-1v2a10 10 0 107.91 3.3zM12 12.71l-4.6-4.6.71-.71 4.6 4.6z" }, void 0) }), void 0));
}
exports.default = SvgTimerClockRegularFill;
