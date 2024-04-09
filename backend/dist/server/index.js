"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const configs_1 = require("../configs");
const routes_1 = __importDefault(require("../routes"));
const errorHandler_1 = __importDefault(require("../errors/errorHandler"));
const morganHttpLogger_1 = __importDefault(require("../middleware/morganHttpLogger"));
dotenv_1.default.config();
const PORT = process.env.PORT || 8080;
class Server {
    constructor() {
        //config
        this.app = (0, express_1.default)();
        this.app.use((0, cors_1.default)(configs_1.config.corsOptions));
        this.app.use(body_parser_1.default.json());
        this.app.set("trust proxy", 1);
        //async inialization
        this.init();
        console.log('Server initialized');
    }
    async init() {
        //database initialization
        //middleware injection
        this.app.use(morganHttpLogger_1.default);
        //routes injection
        this.app.use("/api", routes_1.default);
        this.app.use((err, req, res, next) => (0, errorHandler_1.default)(err, res));
        this.app.use((req, res) => res.status(404).send('Not found'));
    }
    start() {
        this.app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=index.js.map