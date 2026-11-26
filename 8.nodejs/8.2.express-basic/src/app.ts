import express from "express";
import indexRouter from "./routes/index.route.js";
import { loggingMiddleware } from "./middlewares/logging.middleware.js";
import { errorHandling, notFoundHandling } from "./middlewares/error.middleware.js";
const app = express();
const PORT = 3000;

app.use('/uploads', express.static(process.cwd() + '/uploads'));
app.use(express.json()); //parser body json
app.use(express.urlencoded()); //parser body urlendcoded

//Global middleware
app.use(loggingMiddleware)

app.use('/api', indexRouter);

app.use(notFoundHandling);
app.use(errorHandling);

app.listen(PORT, () => {
    console.log(`Server running: ${PORT}`);
})