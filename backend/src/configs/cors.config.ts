import cors from 'cors';

const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];

const corsOptions: cors.CorsOptions = {
    origin: function (origin: string, callback: Function) {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true)
        } else {
            callback(new Error("Not Allowed by CORS"))
        }
    }
}

export default corsOptions