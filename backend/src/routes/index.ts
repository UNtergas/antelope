import express from 'express';
import testRouter from './test.router';
import AntelopeRouter from './antelope.router';

const router = express.Router();
router.use(testRouter);
router.use(AntelopeRouter)

export default router;