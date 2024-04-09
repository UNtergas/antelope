"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Not Allowed by CORS"));
        }
    }
};
exports.default = corsOptions;
//# sourceMappingURL=cors.config.js.map