import express, { Request, Response } from 'express';
const router = express.Router();

router.route('/test')
    .get((req: Request, res: Response) => {
        res.status(200).send('Hello from test route')
    })

export default router;