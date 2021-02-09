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
function SvgAirfareRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M1 5v14h22V5zm21 13H2V6h20zM9.28 12.57h2.14l-.59 3h.88l1.56-3h2.52a.57.57 0 000-1.13h-2.52l-1.56-3h-.88l.59 3H9.28l-.55-1h-.54v3.16h.54z" }, void 0) }), void 0));
}
exports.default = SvgAirfareRegularLine;
