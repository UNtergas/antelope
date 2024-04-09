"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_router_1 = __importDefault(require("./test.router"));
const antelope_router_1 = __importDefault(require("./antelope.router"));
const router = express_1.default.Router();
router.use(test_router_1.default);
router.use(antelope_router_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map