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
function SvgFreehandGestureLight(props) {
    return (jsx_runtime_1.jsx("svg", __assign({ "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props, { children: jsx_runtime_1.jsx("path", { d: "M12.66 21.24a7.08 7.08 0 01-5.09-2 6.1 6.1 0 01-1.73-5.09v-.16a6.44 6.44 0 01-.56-.48 6.27 6.27 0 01-1.71-5.09 11 11 0 013.49-6.6l.35.36a10.49 10.49 0 00-3.34 6.29 5.75 5.75 0 001.59 4.71 2.68 2.68 0 00.3.28 12 12 0 013.46-5.84 9.25 9.25 0 014.48-2.69 3.53 3.53 0 013.23.8c1.25 1.27 1.37 3.84-1.34 6.54-3.48 3.49-7.1 3.55-9.46 2.08a5.61 5.61 0 001.59 4.57c2.63 2.62 8 2.8 12.89-2.06l.36.36c-2.85 2.84-5.89 4.02-8.51 4.02zM6.4 13.8c2.17 1.49 5.66 1.5 9-1.88 2.47-2.46 2.42-4.76 1.34-5.84A3 3 0 0014 5.42 8.64 8.64 0 009.78 8a11.17 11.17 0 00-3.38 5.8z" }, void 0) }), void 0));
}
exports.default = SvgFreehandGestureLight;
