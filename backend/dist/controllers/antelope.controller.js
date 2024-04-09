"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("../service"));
const winstonLogger_1 = __importDefault(require("../tools/winstonLogger"));
const AntelopeService = service_1.default.AntelopeService;
class AntelopeController {
    constructor() { }
    static getInstance() {
        if (!AntelopeController.instance) {
            AntelopeController.instance = new AntelopeController();
        }
        return AntelopeController.instance;
    }
    async getAll(req, res, next) {
        try {
            const ret = await AntelopeService.getInstance().getAll();
            winstonLogger_1.default.getInstance().info("status<200> " + ret.length + " records send");
            res.status(200).send(ret);
        }
        catch (error) {
            winstonLogger_1.default.getInstance().error("Error Antelope.getAll>>" + error.message);
            next(error);
        }
    }
    async getOne(req, res, next) {
        try {
            const name = req.params.name;
            const ret = await AntelopeService.getInstance().getByName(name);
            winstonLogger_1.default.getInstance().info("status<200> " + ret + "send");
            res.status(200).send(ret);
        }
        catch (error) {
            winstonLogger_1.default.getInstance().error("Error Antelope.getAll>>" + error.message);
            next(error);
        }
    }
}
exports.default = AntelopeController;
//# sourceMappingURL=antelope.controller.js.map