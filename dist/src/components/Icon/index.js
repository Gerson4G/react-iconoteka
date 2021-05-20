"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCachedLazy = exports.names = exports.default = void 0;
var Icon_1 = require("./Icon");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(Icon_1).default; } });
var IconName_1 = require("./IconName");
Object.defineProperty(exports, "names", { enumerable: true, get: function () { return IconName_1.names; } });
var utils_1 = require("./utils");
Object.defineProperty(exports, "getCachedLazy", { enumerable: true, get: function () { return utils_1.getCachedLazy; } });
