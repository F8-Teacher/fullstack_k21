import { Request, Response } from "express";

export const productController = {
    findAll(req: Request, res: Response) {
        return res.json({
            message: "Get product list success"
        })
    },
    create(req: Request, res: Response) {
        console.log(req.body);
        return res.status(201).json({
            message: "Create product success"
        })
    }
}

//Mass Assignment
//Phổ biến
// - Đăng ký 1 tài khoản: Name, Email, Password, Status = 'ACTIVE'
// - Đăng ký tài khoản: Name, Email, Password, Status = 'ACTIVE', Role = 'ADMIN'