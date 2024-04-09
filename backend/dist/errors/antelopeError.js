"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AntelopeError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AntelopeError';
    }
}
exports.default = AntelopeError;
//# sourceMappingURL=antelopeError.js.map