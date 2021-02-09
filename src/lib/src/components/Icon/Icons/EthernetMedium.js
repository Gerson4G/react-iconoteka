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
function SvgEthernetMedium(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M7.16 7.06L6.1 6l-6 6 6 6 1.06-1.06L2.22 12zM17.9 6l-1.06 1.06L21.78 12l-4.94 4.94L17.9 18l6-6zm-6.7 6.8h1.6v-1.6h-1.6zm-4.2 0h1.6v-1.6H7zm10-1.6h-1.6v1.6H17z", "data-name": "Clear 3" }, void 0) }), void 0));
}
exports.default = SvgEthernetMedium;
