"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AntelopeService = void 0;
const antelopeError_1 = __importDefault(require("../errors/antelopeError"));
const repository_1 = __importDefault(require("../repository"));
const AntelopeDao = repository_1.default.AntelopeDao;
class AntelopeService {
    constructor() { }
    static getInstance() {
        if (!AntelopeService.instance) {
            AntelopeService.instance = new AntelopeService();
        }
        return AntelopeService.instance;
    }
    async getAll() {
        try {
            return await AntelopeDao.getInstance().getAll();
        }
        catch (error) {
            throw new antelopeError_1.default("Error Antelope.getAll>>" + error.message);
        }
    }
    async getByName(name) {
        try {
            return await AntelopeDao.getInstance().getByName(name);
        }
        catch (error) {
            throw new antelopeError_1.default("Error Antelope.getByName>>" + error.message);
        }
    }
}
exports.AntelopeService = AntelopeService;
//# sourceMappingURL=antelope.service.js.map