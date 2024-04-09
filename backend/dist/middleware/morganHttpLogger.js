"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const winstonLogger_1 = __importDefault(require("../tools/winstonLogger"));
//intercept http requests and log them
const morganHttpLogger = (0, morgan_1.default)(':method :url :status :res[content-length] - :response-time ms', {
    stream: {
        // Configure Morgan to use our custom logger with the http severity
        write: (message) => winstonLogger_1.default.getInstance().http(message.trim()),
    },
});
exports.default = morganHttpLogger;
//# sourceMappingURL=morganHttpLogger.js.map