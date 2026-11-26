import { Request } from "express";
import fs from "fs/promises";

export const uploadService = {
    async upload(req: Request, dir: string) {
        const { replaceFile } = req.body;
        if (replaceFile) {
            //Delete file
            await this.deleteFile(replaceFile);
        }
        const origin = req.protocol + '://' + req.host;
        return {
            path: `/uploads/${dir}/${req.file?.filename}`,
            url: `${origin}/uploads/${dir}/${req.file?.filename}`
        }
    },

    async deleteFile(filePath: string) {
        const fullPath = process.cwd() + filePath;
        try {
            await fs.access(fullPath);
            await fs.unlink(fullPath);
            return true;
        } catch {
            return false;
        }
    }
}

//Bài toán: file video 5gb
//Cách làm: Chia nhỏ file gốc (chunk file)
//Client -> Chia nhỏ -> Upload từng phần -> Server nối lại