import express from "express";
import indexRouter from "./routes/index.route.js";
import { loggingMiddleware } from "./middlewares/logging.middleware.js";
const app = express();
const PORT = 3000;

app.use(express.json()); //parser body json
app.use(express.urlencoded()); //parser body urlendcoded

//Global middleware
app.use(loggingMiddleware);

app.use('/api', indexRouter);

app.listen(PORT, () => {
    console.log(`Server running: ${PORT}`);
})