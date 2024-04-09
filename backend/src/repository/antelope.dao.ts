import jsonData from '../models/data.json'
import { AntelopeProp } from '../models/antelope';
import LRU from '../tools/LRUcache';

export default class AntelopeDao {
    private static instance: AntelopeDao;
    private data: any;
    private cacheSize = 10;
    private cacheTTL = 3600000;
    private cache = new LRU<string, AntelopeProp | AntelopeProp[]>(this.cacheSize, this.cacheTTL);
    private constructor() {
        this.data = jsonData;
    }
    static getInstance(): AntelopeDao {
        if (!AntelopeDao.instance) {
            AntelopeDao.instance = new AntelopeDao();
        }
        return AntelopeDao.instance;
    }
    async getAll(): Promise<AntelopeProp[]> {
        const cacheKey = 'antelopes_all';
        const cachedData = this.cache.get(cacheKey) as AntelopeProp[] | undefined;
        if (cachedData) {
            return cachedData;
        }
        const ret = this.data
        this.cache.set(cacheKey, ret);
        return ret;
    }
    async getByName(name: string): Promise<AntelopeProp | undefined> {
        const cacheKey = `antelope_${name}`;
        const cachedData = this.cache.get(cacheKey) as AntelopeProp | undefined;
        if (cachedData) {
            return cachedData;
        }
        const ret = this.data.find((antelope: AntelopeProp) => antelope.name === name);
        this.cache.set(cacheKey, ret)
        return ret;
    }
}