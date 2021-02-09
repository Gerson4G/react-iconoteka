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
function SvgTransformRegular(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M18.5 5.5v7.17l1 1V4.5h-9.17l1 1zm-1.12 9.88l-.7.71 2.41 2.41H5.5V4.91l2.41 2.41.71-.7L5 3 1.38 6.62l.71.7L4.5 4.91V19.5h14.59l-2.41 2.41.7.71L21 19z" }, void 0) }), void 0));
}
exports.default = SvgTransformRegular;
