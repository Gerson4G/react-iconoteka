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
function SvgOvalVerticalRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M12 2c4.41 0 8 4.49 8 10s-3.59 10-8 10-8-4.49-8-10S7.59 2 12 2m0-1C7 1 3 5.93 3 12s4 11 9 11 9-4.93 9-11-4-11-9-11z" }, void 0) }), void 0));
}
exports.default = SvgOvalVerticalRegularLine;
