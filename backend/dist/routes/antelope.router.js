"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("../controllers"));
const router = express_1.default.Router();
const AntelopeController = controllers_1.default.AntelopeController;
router.route("/antelope")
    .get(AntelopeController.getInstance().getAll);
router.route("/antelope/table")
    .get(AntelopeController.getInstance().getAll);
router.route('/antelope/graph')
    .get(AntelopeController.getInstance().getAll);
router.route('/antelope/:name')
    .get(AntelopeController.getInstance().getOne);
exports.default = router;
//# sourceMappingURL=antelope.router.js.map