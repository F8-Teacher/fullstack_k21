import { NextFunction, Request, Response } from "express";

export const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('loggingMiddleware');
    //Khi gọi next() -> Request được phép đi tiếp 
    //Không gọi -> Request sẽ bị dừng lại
    next();
}