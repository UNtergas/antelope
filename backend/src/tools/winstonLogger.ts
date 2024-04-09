import winston from "winston";
import DailyRotateFile from 'winston-daily-rotate-file'
const { combine, timestamp, printf, colorize, align } = winston.format;


import dotenv from 'dotenv'
dotenv.config();
class Logger {
    private static instance: Logger;
    private logger: winston.Logger;

    private constructor() {
        this.logger = winston.createLogger({
            level: 'info',
            format: combine(
                colorize({ all: true }),
                timestamp({
                    format: 'YYYY-MM-DD hh:mm:ss.SSS A',
                }),
                align(),
                printf((info) => `[${info.timestamp}]${info.level.toUpperCase()}: ${info.message}`)
            ),
            transports: [
                new DailyRotateFile({
                    filename: './log/combined.log',
                    datePattern: 'YYYY-MM-DD',
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles: '7d',
                }),
                new DailyRotateFile({
                    filename: './log/error.log', level: 'error',
                    datePattern: 'YYYY-MM-DD',
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles: '7d',
                }),
            ],
        });

        if (process.env.NODE_ENV !== 'production') {
            this.logger.add(new winston.transports.Console({
                format: winston.format.simple(),
            }));
        }
    }
    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    public log(message: string, level: string = 'info') {
        this.logger.log({ level, message });
    }

    public info(message: string) {
        this.logger.info(message);
    }

    public error(message: string) {
        this.logger.error(message);
    }
    public http(message: string) {
        this.logger.http(message);
    }
}

export default Logger;