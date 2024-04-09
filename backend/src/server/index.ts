import dotenv from 'dotenv'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from '../configs';
import routes from '../routes';
import errorHandler from '../errors/errorHandler';
import morganHttpLogger from '../middleware/morganHttpLogger';

dotenv.config();
const PORT = process.env.PORT;


class Server {
    private app: express.Application;
    constructor() {
        //config
        this.app = express();
        this.app.use(cors(config.corsOptions));
        this.app.use(bodyParser.json());
        this.app.set("trust proxy", 1);

        //async inialization
        this.init();
        console.log('Server initialized');
    }
    async init() {

        //database initialization

        //middleware injection
        this.app.use(morganHttpLogger)
        //routes injection
        this.app.use("/api", routes);
        this.app.use((err, req, res, next) => errorHandler(err, res));
        this.app.use((req, res) => res.status(404).send('Not found'));

    }
    start() {
        this.app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        })

    }
}


export default Server;