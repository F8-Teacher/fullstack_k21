import Express from "express";
import { uploadController } from "../controllers/upload.controller.js";
import { uploadMiddleware } from "../middlewares/upload.middleware.js";
const router = Express.Router();
router.post('/', uploadMiddleware.single('file'), uploadController.upload)
export default router;