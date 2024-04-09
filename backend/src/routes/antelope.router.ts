import express from 'express';
import Controller from '../controllers';

const router = express.Router();
const AntelopeController = Controller.AntelopeController;


router.route("/antelope")
    .get(AntelopeController.getInstance().getAll)

router.route("/antelope/table")
    .get(AntelopeController.getInstance().getAll)

router.route('/antelope/graph')
    .get(AntelopeController.getInstance().getAll)

router.route('/antelope/:name')
    .get(AntelopeController.getInstance().getOne)
export default router;