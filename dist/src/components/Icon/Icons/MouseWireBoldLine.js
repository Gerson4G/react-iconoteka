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
function SvgMouseWireBoldLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M12 9a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm2-4h-1V3.75a.76.76 0 01.75-.75H17V1h-3.25A2.75 2.75 0 0011 3.75V5h-1a5 5 0 00-5 5v7a7 7 0 0014 0v-7a5 5 0 00-5-5zm3 12a5 5 0 01-10 0v-7a3 3 0 013-3h4a3 3 0 013 3z" }, void 0) }), void 0));
}
exports.default = SvgMouseWireBoldLine;