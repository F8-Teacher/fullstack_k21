import { NextFunction, Request, Response } from "express";

export const logging2Middleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('logging2Middleware');
    //Khi gọi next() -> Request được phép đi tiếp 
    //Không gọi -> Request sẽ bị dừng lại
    next();
}