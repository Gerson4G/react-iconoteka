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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
function Icon(_a) {
    var name = _a.name, stroke = _a.stroke, type = _a.type, color = _a.color, fillColor = _a.fillColor, borderColor = _a.borderColor, props = __rest(_a, ["name", "stroke", "type", "color", "fillColor", "borderColor"]);
    var iconName = "Iconoteka" + name + type[0].toUpperCase() + type.slice(1);
    var Component = react_1.lazy(function () { return Promise.resolve().then(function () { return __importStar(require("./Icons")); }).then(function (module) { return ({ default: module[iconName] }); }); });
    var strokeWidth = {
        lighter: 0.5,
        light: 0.8,
        regular: 1.2,
        medium: 1.5,
        bold: 1.8,
        bolder: 2,
    };
    return (jsx_runtime_1.jsx(react_1.Suspense, __assign({ fallback: jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0) }, { children: jsx_runtime_1.jsx(Component, __assign({ width: 24, height: 24, fill: fillColor !== null && fillColor !== void 0 ? fillColor : color, stroke: borderColor !== null && borderColor !== void 0 ? borderColor : color, strokeWidth: strokeWidth[stroke] }, props), void 0) }), void 0));
}
Icon.defaultProps = {
    className: '',
    stroke: 'regular',
    type: 'line',
    color: 'black',
};
exports.default = Icon;
