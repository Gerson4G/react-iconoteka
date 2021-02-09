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
function SvgTimelineRegularFill(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M21 21v-3h-1v3h-7.5v-3h-1v3H4v-3H3v3H1v1h22v-1zm-9-6a6.5 6.5 0 10-6.5-6.5A6.5 6.5 0 0012 15zm-.58-10h.87v3.21h2.64v.87h-3.51z" }, void 0) }), void 0));
}
exports.default = SvgTimelineRegularFill;
