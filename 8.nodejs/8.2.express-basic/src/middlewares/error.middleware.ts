/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { HttpExceptionType } from "../types/exception.type.js";
import { HttpException } from "../exceptions/http.exception.js";

export const errorHandling = (err: HttpExceptionType, req: Request, res: Response, next: NextFunction) => {
    let status = 500;
    if (err.code === 'LIMIT_FILE_SIZE') {
        status = 400;
    }
    return res.status(err.status || status).json({
        message: err.message ?? 'Server Error',
        success: false,
        ...(err.errors ? { errors: err.errors } : {})
    })
}

export const notFoundHandling = (req: Request, res: Response, next: NextFunction) => {
    throw new HttpException(`Route: ${req.url} not found`, 404);
}