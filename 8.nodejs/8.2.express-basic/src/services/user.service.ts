// import { readFileSync } from "fs";

import { NotFoundException } from "../exceptions/not-found.exception.js";

export const userService = {
    async findAll() {
        //Xử lý logic
        //Gọi model để tương tác với database
        //Trả về dữ liệu
        //Lưu ý: Không được phép trả về response trong service
        // readFileSync('abc.txt');
        return [
            {
                id: 1,
                name: "User 1"
            },
            {
                id: 2,
                name: "User 2"
            },
            {
                id: 3,
                name: "User 3"
            }
        ]
    },

    async find(id: number) {
        const users = [
            {
                id: 1,
                name: "User 1"
            },
            {
                id: 2,
                name: "User 2"
            },
            {
                id: 3,
                name: "User 3"
            }
        ];
        const data = users.find(val => val.id === id);
        if (!data) {
            throw new NotFoundException("User not found");
        }
        //throw new Error()
        return data;
    },

    async create(body: { name: string, email: string }) {
        return body;
    }
}

//raw data