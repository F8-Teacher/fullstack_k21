export class HttpException extends Error {
    public status: number;
    public errors: null | Record<string, unknown>
    constructor(message: string, status: number = 500, errors = null) {
        super(message);
        this.status = status;
        this.errors = errors
    }
}