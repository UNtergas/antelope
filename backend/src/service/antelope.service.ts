import AntelopeError from "../errors/antelopeError";

import DAO from "../repository";
import { AntelopeProp } from "../models/antelope";

const AntelopeDao = DAO.AntelopeDao;

export class AntelopeService {
    private static instance: AntelopeService;
    private constructor() { }

    static getInstance(): AntelopeService {
        if (!AntelopeService.instance) {
            AntelopeService.instance = new AntelopeService()
        }
        return AntelopeService.instance
    }

    async getAll(): Promise<AntelopeProp[]> {
        try {
            return await AntelopeDao.getInstance().getAll()
        } catch (error) {
            throw new AntelopeError("Error Antelope.getAll>>" + error.message)
        }
    }

    async getByName(name: string): Promise<AntelopeProp | undefined> {
        try {
            return await AntelopeDao.getInstance().getByName(name)
        } catch (error) {
            throw new AntelopeError("Error Antelope.getByName>>" + error.message)
        }
    }
}