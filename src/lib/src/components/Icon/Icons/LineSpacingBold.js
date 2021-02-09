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
function SvgLineSpacingBold(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M13 15h6v-2h-6zm0 4h6v-2h-6zm0-8h6V9h-6zm0-6v2h6V5zm-2.58 2.35l-3-3-3 3h1.96v9.3h-2l3.05 3 3-3h-2v-9.3z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgLineSpacingBold;
