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
function SvgCompassExploreRegularFill(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm2.4 12.4l-7.2 2.4 2.4-7.2 7.2-2.4zM12 12.75a.75.75 0 10-.75-.75.76.76 0 00.75.75z" }, void 0) }), void 0));
}
exports.default = SvgCompassExploreRegularFill;
