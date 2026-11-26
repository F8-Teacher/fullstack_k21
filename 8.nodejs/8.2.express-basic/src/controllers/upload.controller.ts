import { Request, Response } from "express";
import { uploadService } from "../services/upload.service.js";

export const uploadController = {
    async upload(req: Request, res: Response) {
        const data = await uploadService.upload(req);
        return res.json({
            success: true,
            message: 'Upload file success',
            data
        })
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