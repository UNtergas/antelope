"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_json_1 = __importDefault(require("../models/data.json"));
const LRUcache_1 = __importDefault(require("../tools/LRUcache"));
class AntelopeDao {
    constructor() {
        this.cacheSize = 10;
        this.cacheTTL = 3600000;
        this.cache = new LRUcache_1.default(this.cacheSize, this.cacheTTL);
        this.data = data_json_1.default;
    }
    static getInstance() {
        if (!AntelopeDao.instance) {
            AntelopeDao.instance = new AntelopeDao();
        }
        return AntelopeDao.instance;
    }
    async getAll() {
        const cacheKey = 'antelopes_all';
        const cachedData = this.cache.get(cacheKey);
        if (cachedData) {
            return cachedData;
        }
        const ret = this.data;
        this.cache.set(cacheKey, ret);
        return ret;
    }
    async getByName(name) {
        const cacheKey = `antelope_${name}`;
        const cachedData = this.cache.get(cacheKey);
        if (cachedData) {
            return cachedData;
        }
        const ret = this.data.find((antelope) => antelope.name === name);
        this.cache.set(cacheKey, ret);
        return ret;
    }
}
exports.default = AntelopeDao;
//# sourceMappingURL=antelope.dao.js.map