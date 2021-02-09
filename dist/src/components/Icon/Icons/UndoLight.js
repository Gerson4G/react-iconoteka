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
function SvgUndoLight(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M21.89 14.19a10.63 10.63 0 00-2.25-3.34 10.51 10.51 0 00-14.85 0L1.5 14.14v-4.5H1V15h5.36v-.5H1.85l3.29-3.29a10 10 0 0116.29 3.18c.08.2.15.4.22.61h.54q-.13-.4-.3-.81z" }, void 0) }), void 0));
}
exports.default = SvgUndoLight;
