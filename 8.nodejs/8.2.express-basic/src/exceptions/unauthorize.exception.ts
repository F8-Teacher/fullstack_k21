import { HttpException } from "./http.exception.js";

export class UnauthorizeException extends HttpException {
    constructor(message: string) {
        super(message, 401);
    }
}