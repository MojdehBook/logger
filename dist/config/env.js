"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const env = process.env;
const vars = {
    NODE_ENV: env.NODE_ENV,
    LOG_LEVEL: env.LOG_LEVEL,
    NAME: env.NAME,
};
const emptyKeys = Object.entries(vars)
    .filter(([_, value]) => !value)
    .map(([key, _]) => `"${key}"`)
    .join(', ');
if (emptyKeys.length)
    throw Error(`Logger: Following Env is required: ${emptyKeys}`);
exports.default = vars;
