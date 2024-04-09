"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const { combine, timestamp, printf, colorize, align } = winston_1.default.format;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Logger {
    constructor() {
        this.logger = winston_1.default.createLogger({
            level: 'info',
            format: combine(colorize({ all: true }), timestamp({
                format: 'YYYY-MM-DD hh:mm:ss.SSS A',
            }), align(), printf((info) => `[${info.timestamp}]${info.level.toUpperCase()}: ${info.message}`)),
            transports: [
                new winston_daily_rotate_file_1.default({
                    filename: './log/combined.log',
                    datePattern: 'YYYY-MM-DD',
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles: '7d',
                }),
                new winston_daily_rotate_file_1.default({
                    filename: './log/error.log', level: 'error',
                    datePattern: 'YYYY-MM-DD',
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles: '7d',
                }),
            ],
        });
        if (process.env.NODE_ENV !== 'production') {
            this.logger.add(new winston_1.default.transports.Console({
                format: winston_1.default.format.simple(),
            }));
        }
    }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message, level = 'info') {
        this.logger.log({ level, message });
    }
    info(message) {
        this.logger.info(message);
    }
    error(message) {
        this.logger.error(message);
    }
    http(message) {
        this.logger.http(message);
    }
}
exports.default = Logger;
//# sourceMappingURL=winstonLogger.js.map