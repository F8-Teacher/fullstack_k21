const BASE_URL = `http://localhost:3000`; //base url của backend

//method: GET, POST, PUT, PATCH, DELETE

// const getUsers = async () => {
//     const response = await fetch(`${BASE_URL}/users`, {
//         method: "GET",
//         headers: {
//             "x-abc": "123",
//             "x-api-key": "f8123"
//         },
//     });
//     if (!response.ok) {
//         throw new Error("Có lỗi khi lấy users")
//     }
//     // const dataJson = await response.text();
//     // const data = JSON.parse(dataJson);
//     // console.log(data);
//     const data = await response.json(); //Tự động convert từ JSON của server -> array/object
//     console.log(data);
// }
// getUsers();

//CORS

// const getUser = async (id) => {
//     const response = await fetch(`${BASE_URL}/users/${id}`);
//     if (!response.ok) {
//         throw new Error("User not found");
//     }
//     const data = await response.json();
//     console.log(data);
// }
// getUser(11);

// const createUser = async (dataUser) => {
//     const response = await fetch(`${BASE_URL}/users`, {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(dataUser)
//     });
//     const data = await response.json();
//     console.log(data);
// }
// createUser({ name: 'An F8', email: 'àn8@gmail.com@gmail.com' });

//application/json
//application/x-www-form-urlencoded => name=An&email=an@gmail.com
//multipart/form-data => Gửi ảnh, file, video,... => FormData

// const updateUser = async (id, dataUpdate) => {
//     const response = await fetch(`${BASE_URL}/users/${id}`, {
//         method: 'PATCH',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(dataUpdate)
//     });
//     if (!response.ok) {
//         throw new Error("User not found");
//     }
//     const data = await response.json();
//     console.log(data);
// }

// updateUser(4, { name: "Hello 1" })

// const deleteUser = async (id) => {
//     const response = await fetch(`${BASE_URL}/users/${id}`, {
//         method: 'DELETE',
//     });
//     if (!response.ok) {
//         throw new Error("User not found");
//     }
//     const data = await response.json();
//     console.log(data);
// }
// deleteUser(5);

//Search
// const searchUsers = async (q = "", status) => {
//     // const response = await fetch(`${BASE_URL}/users?q=${q}`);
//     // const response = await fetch(`${BASE_URL}/users?name=${q}`);
//     const query = {};
//     if (q) {
//         query.name_like = q;
//     }
//     if (status === true || status === false) {
//         query.status = status;
//     }
//     const response = await fetch(`${BASE_URL}/users?${new URLSearchParams(query)}`);
//     const data = await response.json();
//     console.log(data);
// }
// searchUsers('an')

//Pagination
// const getUsersWithPagination = async ({ page = 1, limit = 3, q = "", sort = "id", order = "desc" }) => {
//     const response = await fetch(`${BASE_URL}/users?q=${q}&_limit=${limit}&_page=${page}&_sort=${sort}&_order=${order}`);
//     const data = await response.json();
//     console.log(data);
//     const totalRecords = response.headers.get('x-total-count');
//     const totalPages = Math.ceil(totalRecords / limit);
//     console.log(totalPages);
// }
// getUsersWithPagination({
//     page: 1,
// });

const createUser = async (userData) => {
    const response = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });
    if (!response.ok) {
        throw new Error("CREATE_USER_ERROR");
    }
    return response.json();
}

const createPhone = async (phoneData) => {
    const response = await fetch(`${BASE_URL}/phones`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(phoneData)
    });
    if (!response.ok) {
        throw new Error("CREATE_PHONE_ERROR");
    }
    return response.json();
}

const deleteUser = async (id) => {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("DELETE_USER_ERROR");
    }
    return response.json();
}

const createUserandPhone = async ({ phone, ...dataUser }) => {
    let userResult;
    let phoneResult;
    try {
        userResult = await createUser(dataUser);
        phoneResult = await createPhone({ phone, userId: userResult.id });
        const result = {
            ...userResult,
            phone: phoneResult.phone
        }
        console.log(result);

    } catch (error) {

        if (error.message === "CREATE_PHONE_ERROR") {
            const { id: userId } = userResult;
            deleteUser(userId);
        }

    }
}

// createUserandPhone({ name: 'Abc', email: 'abc@gmail.com', phone: '01111' })

const getUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    return response.json();
}

const getPhones = async (userId) => {
    const response = await fetch(`${BASE_URL}/phones?userId=${userId}`);
    return response.json();
}


const getUsersAndPhone = async () => {
    const users = await getUsers();
    const usersMap = await Promise.all(users.map(async (user) => {
        const [phoneResult] = await getPhones(user.id);
        return {
            ...user,
            ...(phoneResult ? { phone: phoneResult.phone } : {})
        }
    }));
    console.log(usersMap);

}
getUsersAndPhone();

//Tiền xử lý -> Fetch -> Hậu xử lý
//Promise, async await

//DOM, ôn lại html, css, tailwind