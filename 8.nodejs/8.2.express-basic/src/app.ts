import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import indexRouter from "./routes/index.route.js";
import { loggingMiddleware } from "./middlewares/logging.middleware.js";
import { errorHandling, notFoundHandling } from "./middlewares/error.middleware.js";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(morgan('dev'))
app.use('/uploads', express.static(process.cwd() + '/uploads'));
app.use(express.json()); //parser body json
app.use(express.urlencoded()); //parser body urlendcoded

//Global middleware
const origins = process.env.FRONTEND_ORIGIN ? process.env.FRONTEND_ORIGIN?.split(',') : [];
const isProduction = process.env.NODE_ENV === 'production';
app.use(cors({
    origin: (origin, callback) => {
        if (isProduction) {

            if (origins.includes(origin!)) {
                return callback(null, origin)
            } else {
                return callback(null);
            }
        }

        if (origin) {
            callback(null, origin);
        } else {
            callback(null);
        }

    },
    credentials: true
}));
app.use(loggingMiddleware)

app.use('/api', indexRouter);

app.use(notFoundHandling);
app.use(errorHandling);

app.listen(PORT, () => {
    console.log(`Server running: ${PORT}`);
})

//Bắt các tín hiệu từ hệ điều hành -> Kích hoạt dừng server
//process.exit()