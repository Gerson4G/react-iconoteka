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
function SvgMouseBoldLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M12 6a1 1 0 00-1 1v2a1 1 0 002 0V7a1 1 0 00-1-1zm2-4h-4a5 5 0 00-5 5v8a7 7 0 0014 0V7a5 5 0 00-5-5zm3 13a5 5 0 01-10 0V7a3 3 0 013-3h4a3 3 0 013 3z" }, void 0) }), void 0));
}
exports.default = SvgMouseBoldLine;
