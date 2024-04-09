import morgan from 'morgan';
import Logger from '../tools/winstonLogger';

//intercept http requests and log them
const morganHttpLogger = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    {
        stream: {
            // Configure Morgan to use our custom logger with the http severity
            write: (message) => Logger.getInstance().http(message.trim()),
        },
    }
);

export default morganHttpLogger;