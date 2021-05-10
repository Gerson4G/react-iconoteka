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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var storybook_addon_designs_1 = require("storybook-addon-designs");
var index_1 = __importDefault(require("./index"));
exports.default = {
    title: 'Icon',
    component: index_1.default,
    decorators: [storybook_addon_designs_1.withDesign],
    argTypes: {
        color: { control: 'color' },
    },
};
var Icon = function (args) { return jsx_runtime_1.jsx(index_1.default, __assign({}, args), void 0); };
exports.Icon = Icon;
exports.Icon.args = {
    name: 'AlarmSnooze',
    className: '',
    stroke: 'regular',
    type: 'line',
    height: 40,
    width: 40,
};
