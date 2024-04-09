import { Request, Response, NextFunction } from 'express';
import AntelopeError from './antelopeError';

const handleAntelopeError = (err: AntelopeError, res: Response,) => {
    res.status(404).json({ message: err.message });
}

export default function errorHandler(err: Error, res: Response) {
    console.log(err)
    if (err instanceof AntelopeError) handleAntelopeError(err, res);
    else {
        res.status(500).send(`Something broke! Unexpected error: ${err}`);
    }

}