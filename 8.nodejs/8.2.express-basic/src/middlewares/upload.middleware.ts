import multer from "multer";
import { storage } from "../libs/multer.js";

export const uploadMiddleware = multer({
    storage,
    limits: {
        fileSize: 2 * 1024 * 1024
    }
})