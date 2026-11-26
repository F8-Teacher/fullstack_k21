import multer from "multer";
import { createStorage, StorageParams } from "../libs/multer.js";
interface UploadParams extends StorageParams {
    fileSize: number
}
export const uploadMiddleware = ({ dir, allowed, fileSize }: UploadParams) => multer({
    storage: createStorage({ dir, allowed }),
    limits: {
        fileSize: fileSize * 1024 * 1024
    }
})

export const memoryUploadMiddleware = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024
    }
})