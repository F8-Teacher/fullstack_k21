/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { HttpExceptionType } from "../types/exception.type.js";
import { HttpException } from "../exceptions/http.exception.js";

export const errorHandling = (err: HttpExceptionType, req: Request, res: Response, next: NextFunction) => {
    return res.status(err.status).json({
        message: err.message ?? 'Server Error'
    })
}

export const notFoundHandling = (req: Request, res: Response, next: NextFunction) => {
    throw new HttpException(`Route: ${req.url} not found`, 404);
}