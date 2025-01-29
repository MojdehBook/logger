"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const env_1 = __importDefault(require("./env"));
const base = {
    level: (_a = env_1.default.LOG_LEVEL) !== null && _a !== void 0 ? _a : 'info',
    defaultMeta: { app: `MB_${env_1.default.NAME}` }, // Add application name to the logs
    exitOnError: false,
    format: winston_1.format.combine(winston_1.format.timestamp({ format: 'YY-MM-DD HH:mm:ss.SSS' }), winston_1.format.errors({ stack: true }), winston_1.format.json()),
};
const transports = {
    allToFile: {
        filename: 'logs/all.log',
    },
    errToFile: {
        level: 'error',
        filename: 'logs/error.log',
        handleExceptions: true,
        handleRejections: true,
    },
    console: {
        format: winston_1.format.combine(winston_1.format.colorize(), // Colorize the output in the console
        winston_1.format.timestamp({ format: 'YY-MM-DD HH:mm:ss.SSS' }), winston_1.format.printf(({ timestamp, level, message, stack }) => {
            var _a;
            return `${timestamp} [${level}]: ${(_a = JSON.stringify(stack)) !== null && _a !== void 0 ? _a : message}`;
        })),
        handleExceptions: true,
        handleRejections: true,
    },
};
exports.default = { base, transports };
