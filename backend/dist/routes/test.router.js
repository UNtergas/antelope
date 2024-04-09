"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.route('/test')
    .get((req, res) => {
    res.status(200).send('Hello from test route');
});
exports.default = router;
//# sourceMappingURL=test.router.js.map