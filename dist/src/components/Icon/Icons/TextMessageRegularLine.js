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
function SvgTextMessageRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M8 12h5v-1H8zm0-3h8V8H8zm11-7H5a3 3 0 00-3 3v19l6-6h11a3 3 0 003-3V5a3 3 0 00-3-3zm2 13a2 2 0 01-2 2H7.59l-.3.29L3 21.59V5a2 2 0 012-2h14a2 2 0 012 2z" }, void 0) }), void 0));
}
exports.default = SvgTextMessageRegularLine;