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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var utils_1 = require("./utils");
var NoExisting = function () { return (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: "Icon does not exist" }, void 0)); };
function Icon(_a) {
    var name = _a.name, stroke = _a.stroke, type = _a.type, color = _a.color, props = __rest(_a, ["name", "stroke", "type", "color"]);
    var iconName = "Iconoteka" + name + type[0].toUpperCase() + type.slice(1);
    var Component = utils_1.getCachedLazy(iconName, './Icons', NoExisting);
    var strokeWidth = {
        regular: 0,
        medium: 1,
        bold: 1.3,
        bolder: 1.6,
    };
    return (jsx_runtime_1.jsx(react_1.Suspense, __assign({ fallback: jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0) }, { children: jsx_runtime_1.jsx(Component, __assign({ width: 24, height: 24, fill: color, strokeWidth: strokeWidth[stroke], stroke: stroke !== 'regular' ? color : undefined }, props), void 0) }), void 0));
}
Icon.defaultProps = {
    className: '',
    stroke: 'regular',
    type: 'line',
    color: 'black',
};
exports.default = Icon;
