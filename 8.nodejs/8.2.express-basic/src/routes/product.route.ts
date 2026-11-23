import Express from "express";
import { productController } from "../controllers/product.controller.js";
const router = Express.Router();
router.get('/', productController.findAll);
export default router;