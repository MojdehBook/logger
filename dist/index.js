"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const env_1 = __importDefault(require("./config/env"));
const logger_1 = __importDefault(require("./config/logger"));
const logger = (0, winston_1.createLogger)(logger_1.default.base);
logger.add(new winston_1.transports.File(logger_1.default.transports.errToFile));
logger.add(new winston_1.transports.Console(logger_1.default.transports.console));
if (env_1.default.NODE_ENV === 'production')
    logger.add(new winston_1.transports.File(logger_1.default.transports.allToFile));
exports.default = logger;
