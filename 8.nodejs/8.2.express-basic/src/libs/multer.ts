import multer from "multer";
import path from "node:path";
import { HttpException } from "../exceptions/http.exception.js";

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = process.cwd() + '/uploads';
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const fileName = crypto.randomUUID();

        const imageAllowed = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
        if (!imageAllowed.includes(file.mimetype)) {
            return cb(new HttpException('File type not support', 400), '');
        }
        const ext = path.extname(file.originalname);
        const newFile = `${fileName}${ext}`;
        cb(null, newFile);
    },
});

//Content-Type

//process