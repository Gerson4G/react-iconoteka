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
function SvgVolumeDownRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M3 8v8h5.09L14 21.91V2.09L8.09 8zm5.79.71L13 4.5v15L8.5 15H4V9h4.5zm9.32-2l-.71.7a6.51 6.51 0 010 9.2l.71.7a7.51 7.51 0 000-10.61z" }, void 0) }), void 0));
}
exports.default = SvgVolumeDownRegularLine;
