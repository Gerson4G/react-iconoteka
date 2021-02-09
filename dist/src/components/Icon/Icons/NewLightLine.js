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
function SvgNewLightLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M13 14.5H9.82v-2.26h2.94v-.5H9.82V9.5H13V9H9.32v6H13zm2.86.5l1.25-5.5 1.3 5.5h.66l1.44-6H20l-1.25 5.5L17.5 9h-.7l-1.24 5.5L14.31 9h-.53l1.45 6zM4.08 9.94L7.58 15H8V9h-.5v5.07L4 9h-.42v6h.5zM0 4v16h24V4zm23.4 15.5H.6v-15h22.8z" }, void 0) }), void 0));
}
exports.default = SvgNewLightLine;
