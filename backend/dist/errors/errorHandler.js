"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const antelopeError_1 = __importDefault(require("./antelopeError"));
const handleAntelopeError = (err, res) => {
    res.status(404).json({ message: err.message });
};
function errorHandler(err, res) {
    console.log(err);
    if (err instanceof antelopeError_1.default)
        handleAntelopeError(err, res);
    else {
        res.status(500).send(`Something broke! Unexpected error: ${err}`);
    }
}
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map