import Express from "express";
import userRouter from "./user.route.js"
import productRouter from "./product.route.js"
import uploadRouter from "./upload.route.js"
const router = Express.Router();
router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/uploads', uploadRouter);
export default router;