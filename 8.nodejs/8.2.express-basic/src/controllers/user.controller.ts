import { Request, Response } from "express";
import { userService } from "../services/user.service.js";

export const userController = {
    async findAll(req: Request, res: Response) {
        const data = await userService.findAll();
        return res.json({
            message: "Get list user success",
            data
        })
    },
    async find(req: Request, res: Response) {
        const { id } = req.params;
        console.log('Token in controller', req.token);
        const data = await userService.find(+id!);
        return res.json({
            message: "Get user success",
            data
        })
    },
    async create(req: Request, res: Response) {
        const data = await userService.create(req.body);
        return res.status(201).json({
            message: "Create user success",
            data
        });
    }
}

//Object/Class -> Tên Feature (Danh từ)
// - Method 1 -> Action (Động từ)
// - Method 2
// - Method 3

//Ví dụ: 
// - Controller: User
// - Actions: findAll, find, create, update, delete, deleteAll,...

//Error Handling

// - HttpException -> Tất cả các loại lỗi
// - NotFoundException -> 404
// - UnauthorizeException -> 401
// - BadRequestException -> 400
// - InternalServerException -> 500
// - ForbiddenException -> 403
// - ConflictException
// - TooManyRequestException