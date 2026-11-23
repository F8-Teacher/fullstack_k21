import { NextFunction, Request, Response } from "express"
import { ZodError, ZodType } from "zod";
import { HttpException } from "../exceptions/http.exception.js";

export const validate = (schema: ZodType) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await schema.parseAsync(req.body ?? {});
            req.body = data;
            next();
        } catch (error) {

            //Lỗi
            if (error instanceof ZodError) {

                const errors = error.issues.reduce((acc, cur) => {
                    const { path } = cur;
                    const fieldName = path[0] as string;
                    const indexValue = path[1] as string;
                    let message = cur.message;
                    if (path?.[1]) {
                        message = message.replaceAll('{index}', indexValue);
                    }

                    if (!acc[fieldName]) {
                        acc[fieldName] = [message];
                    } else {
                        acc[fieldName]?.push(message);
                    }

                    return acc;
                }, {} as Record<string, string[]>)

                console.log(errors);


                return res.status(400).json({
                    message: 'Validate failed',
                    errors
                })
            }

            //Fallback
            if (error instanceof Error) {
                throw new HttpException(error.message);
            }

        }

    }
}