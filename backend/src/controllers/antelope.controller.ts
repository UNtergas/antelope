import Service from "../service";
import { Request, Response, NextFunction } from "express";
import Logger from "../tools/winstonLogger";
const AntelopeService = Service.AntelopeService;

export default class AntelopeController {
    private static instance: AntelopeController;
    private constructor() { }
    static getInstance(): AntelopeController {
        if (!AntelopeController.instance) {
            AntelopeController.instance = new AntelopeController();
        }
        return AntelopeController.instance;
    }
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const ret = await AntelopeService.getInstance().getAll();
            Logger.getInstance().info("status<200> " + ret.length + " records send");
            res.status(200).send(ret);
        } catch (error) {
            Logger.getInstance().error("Error Antelope.getAll>>" + error.message)
            next(error)
        }
    }
    async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const name = req.params.name;
            const ret = await AntelopeService.getInstance().getByName(name);
            Logger.getInstance().info("status<200> " + ret + "send");
            res.status(200).send(ret);
        } catch (error) {
            Logger.getInstance().error("Error Antelope.getAll>>" + error.message)
            next(error);
        }
    }
}