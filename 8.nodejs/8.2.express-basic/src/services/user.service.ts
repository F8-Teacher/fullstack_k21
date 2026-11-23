export const userService = {
    async findAll() {
        //Xử lý logic
        //Gọi model để tương tác với database
        //Trả về dữ liệu
        //Lưu ý: Không được phép trả về response trong service
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
        return users.find(val => val.id === id);
    },

    async create(body: { name: string, email: string }) {
        return body;
    }
}

//raw data