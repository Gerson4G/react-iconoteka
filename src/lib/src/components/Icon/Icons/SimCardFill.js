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
function SvgSimCardFill(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M8.59 2L4 6.59V22h16V2zM17 17.75A1.25 1.25 0 0115.75 19h-3.5A1.25 1.25 0 0111 17.75v-4.5A1.25 1.25 0 0112.25 12h3.5A1.25 1.25 0 0117 13.25z" }, void 0) }), void 0));
}
exports.default = SvgSimCardFill;
