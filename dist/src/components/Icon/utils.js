"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCachedLazy = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var componentsMap = new Map();
var getCachedLazy = function (name, path, NotFound) {
    if (path === void 0) { path = './Icons'; }
    if (NotFound === void 0) { NotFound = function () { return jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0); }; }
    if (componentsMap.has(name))
        return componentsMap.get(name);
    var Component = react_1.lazy(function () { return Promise.resolve().then(function () { return __importStar(require("" + path)); }).then(function (module) { var _a; return ({ default: (_a = module[name]) !== null && _a !== void 0 ? _a : NotFound }); }); });
    componentsMap.set(name, Component);
    return Component;
};
exports.getCachedLazy = getCachedLazy;
