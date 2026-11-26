import Express from "express";
import { uploadController } from "../controllers/upload.controller.js";
import { memoryUploadMiddleware, uploadMiddleware } from "../middlewares/upload.middleware.js";
import { UPLOAD_FILE } from "../constants/upload.constant.js";
const router = Express.Router();
router.post('/images', uploadMiddleware({
    dir: UPLOAD_FILE.images.DIR,
    allowed: UPLOAD_FILE.images.FILE_TYPE,
    fileSize: UPLOAD_FILE.images.FILE_SIZE
}).single('file'), uploadController.uploadImage)

router.post('/pdf', uploadMiddleware({
    dir: UPLOAD_FILE.pdf.DIR,
    allowed: UPLOAD_FILE.pdf.FILE_TYPE,
    fileSize: UPLOAD_FILE.pdf.FILE_SIZE
}).single('file'), uploadController.uploadPdf);

router.post('/mimetype', memoryUploadMiddleware.single('file'), uploadController.uploadRealMimeType);

export default router;