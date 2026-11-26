import Express from "express";
import userRouter from "./user.route.js"
import productRouter from "./product.route.js"
import uploadRouter from "./upload.route.js"
import { corsController } from "../controllers/cors.controller.js";
const router = Express.Router();
router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/uploads', uploadRouter);
// router.options('/demo', corsController.preflightFindAll);
router.get('/demo', corsController.findAll);
router.put('/demo', corsController.update);
export default router;