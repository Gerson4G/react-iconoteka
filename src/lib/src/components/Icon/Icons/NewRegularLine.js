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
function SvgNewRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M13 14.21h-2.85v-1.85h2.58v-.74h-2.58V9.79H13V9H9.32v6H13zm3.1.79l1-5 1.06 5h1.06l1.38-6h-.84l-1.08 5-1-5h-1.09l-1 5-1.1-5h-.84L15 15zM4.35 10.55l3 4.45h.7V9h-.82v4.46L4.21 9h-.69v6h.83zM0 4v16h24V4zm22.8 15H1.2V5h21.6z" }, void 0) }), void 0));
}
exports.default = SvgNewRegularLine;
