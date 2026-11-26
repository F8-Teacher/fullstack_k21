import { Request, Response } from "express";
import { uploadService } from "../services/upload.service.js";
import { fileTypeFromBuffer } from 'file-type';
import fs from "fs/promises";
import { HttpException } from "../exceptions/http.exception.js";
import path from "path";
export const uploadController = {
    async uploadImage(req: Request, res: Response) {
        const data = await uploadService.upload(req, 'images');
        return res.json({
            success: true,
            message: 'Upload file success',
            data
        })
    },

    async uploadPdf(req: Request, res: Response) {
        const data = await uploadService.upload(req, 'pdf');
        return res.json({
            success: true,
            message: 'Upload file success',
            data
        })
    },

    async uploadRealMimeType(req: Request, res: Response) {
        const buffer = req.file?.buffer;
        const read = await fileTypeFromBuffer(buffer!);
        if (!read) {
            throw new HttpException("Không đọc được file", 400);
        }
        const { mime } = read;
        if (!['image/png', 'image/jpg', 'image/jpeg'].includes(mime)) {
            throw new HttpException("File type not support", 400);
        }

        const dir = `${process.cwd()}/uploads`;
        const filename = crypto.randomUUID() + path.extname(req.file!.originalname);
        await fs.writeFile(`${dir}/${filename}`, buffer!);

        return res.json({})
    }
}

//Bài toán cần làm:
//Tách ra 2 endpoint;
// uploads/image
// + filesize: 2mb
// + mimetype: image/jpg, image/png, image/jpeg, image/gif
// uploads/pdf
// + filesize: 10mb
// + mimetype: application/pdf

//Refactor code hiện tại