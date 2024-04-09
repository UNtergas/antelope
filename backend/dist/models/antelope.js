"use strict";
//!important
// This is the schema for the antelope model
// Usually this is used to define the structure of the data that will be stored in the database(example here is MongoDB)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// !Currently NOT in Use in the current project
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const antelopeSchema = new Schema({
    name: { type: String, required: true },
    continent: { type: String, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    horn: { type: String, required: true },
    picture: { type: String, required: true },
});
const Antelope = mongoose_1.default.model('Antelope', antelopeSchema);
exports.default = Antelope;
//# sourceMappingURL=antelope.js.map