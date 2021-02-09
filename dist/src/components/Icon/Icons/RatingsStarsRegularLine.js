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
function SvgRatingsStarsRegularLine(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 19a9 9 0 119-9 9 9 0 01-9 9zm1.12-10.37L12 7.19l-1.12 3.44H7.27l2.92 2.12-1.12 3.44L12 14.07l2.93 2.12-1.12-3.44 2.92-2.12zM13.05 13l.35 1.1-.93-.68-.47-.34-.47.34-.93.68.4-1.1.18-.55-.47-.34-.93-.68h1.73l.18-.56.31-1.09.36 1.09.18.56h1.73l-.93.68-.47.34z" }, void 0) }), void 0));
}
exports.default = SvgRatingsStarsRegularLine;
