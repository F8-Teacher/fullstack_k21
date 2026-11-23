import { NextFunction, Request, Response } from "express";
import { UnauthorizeException } from "../exceptions/unauthorize.exception.js";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('authMiddleware');
    //Khi gọi next() -> Request được phép đi tiếp 
    //Không gọi -> Request sẽ bị dừng lại
    const token = req.headers['authorization']?.split(' ').at(-1);
    if (token !== '123') {
        throw new UnauthorizeException("Token invalid");
    }

    //Lấy token -> add vào req
    req.token = token;

    next();
}