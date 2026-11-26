import multer from "multer";
import path from "node:path";
import fs from "fs/promises";
import { HttpException } from "../exceptions/http.exception.js";
import { pathExisting } from "../utils/file-system.js";
export interface StorageParams {
    dir: string;
    allowed: string[]
}

export const createStorage = ({
    dir,
    allowed
}: StorageParams) => multer.diskStorage({
    destination: async (req, file, cb) => {
        const uploadDir = process.cwd() + '/uploads/' + dir;
        if (!(await pathExisting(uploadDir))) {
            await fs.mkdir(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const fileName = crypto.randomUUID();

        if (!allowed.includes(file.mimetype)) {
            return cb(new HttpException('File type not support', 400), '');
        }
        const ext = path.extname(file.originalname);
        const newFile = `${fileName}${ext}`;
        cb(null, newFile);
    },
});


//Content-Type

//process