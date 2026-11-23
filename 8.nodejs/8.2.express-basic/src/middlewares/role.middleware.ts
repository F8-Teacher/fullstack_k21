import { NextFunction, Request, Response } from "express";

export const roleMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('roleMiddleware');
    console.log('Token in role', req.token);
    next();
}