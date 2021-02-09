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
function SvgRouteDirectionsLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M12 0L0 12l12 12 12-12zM9.25 20.54V14A1.76 1.76 0 0111 12.25h5l-2.6 2.65.35.35L17 12l-3.25-3.25-.35.35 2.6 2.65h-5A2.25 2.25 0 008.75 14v6l-8-8L12 .71 23.29 12 12 23.29z" }, void 0) }), void 0));
}
exports.default = SvgRouteDirectionsLightLine;
