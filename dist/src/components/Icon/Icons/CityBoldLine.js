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
function SvgCityBoldLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M17 6V2H7v10l-1.6-1L2 13v8h20V6zM7 19.2H3.8V14l1.6-.92L7 14zm8.2 0H8.8V3.8h6.4zm5 0H17V7.8h3.2zM13 6h-2v2h2zm0 8h-2v2h2zm0-4h-2v2h2z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SvgCityBoldLine;
