import { Request, Response } from "express";

export const productController = {
    findAll(req: Request, res: Response) {
        return res.json({
            message: "Get product list success"
        })
    }
}