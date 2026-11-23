import Express from "express";
import { productController } from "../controllers/product.controller.js";
import { createProductSchema } from "../validators/product.validator.js";
import { validate } from "../middlewares/validate.middleware.js";
const router = Express.Router();
router.get('/', productController.findAll);
router.post('/', validate(createProductSchema), productController.create);
export default router;