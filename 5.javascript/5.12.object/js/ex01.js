//Đối tượng: Khái niệm trừu tượng để mô tả đặc điểm và hành động của 1 sự vật

//Đối tượng (Object)
// - Property: Thuộc tính (Đặc điểm)
// - Method: Phương thức (Hàm)

//Object Literal: Cấu tạo bởi các cặp key, value

//Khai báo
// let b = "id";
// const myObj = {
//     name: 'Hoàng An',
//     email: 'hoangan.web@gmail.com',
//     age: 34,
//     "shipping-address": 'Hải phòng',
//     [b]: 1
// }

// let a = "position"

//Thêm key vào object
// myObj["address"] = 'Hà Nội';
// myObj[a] = 'Teacher';
//Xóa
// delete myObj.age;

//Lấy value theo key
// console.log(myObj.email);
// console.log(myObj["shipping-address"]);

// console.log(myObj);

//Duyệt danh sách key của object
// for (const key in myObj) {
//     console.log(key, myObj[key]);
// }

//Bài tập:
// const myObj = {
//     name: "An",
//     email: "an@gmail.com",
//     age: null,
//     address: undefined,
//     status: false
// }
//Yêu cầu: Loại các key không có giá trị
// for (const key in myObj) {
//     const value = myObj[key];
//     if (!value && value !== 0) {
//         delete myObj[key]
//     }
// }
// console.log(myObj);

//Ví dụ: Gộp object
// const obj1 = {
//     name: 'An',
//     id: 1
// }
// const obj2 = {
//     email: 'an@gmail.com',
//     position: "Teacher"
// }
// const obj = {}
// for (const key in obj1) {
//     obj[key] = obj1[key]
// }

// for (const key in obj2) {
//     obj[key] = obj2[key]
// }

// console.log(obj);

//Object method
// console.dir(Object);

//1. Object.keys(): Trả về 1 mảng chứa danh sách các key của object
// const myObj = {
//     name: "An",
//     email: "an@gmail.com",
//     age: null,
//     address: undefined,
//     status: false
// }
// console.log(Object.keys(myObj));
// const errors = {}
// if (Object.keys(errors).length) {
//     console.log('Object có dữ liệu');
// } else {
//     console.log('Object rỗng');

// }

// Object.keys(myObj).forEach((key) => {
//     console.log(myObj[key]);

// })

//2. Object.values(): Trả về 1 mảng chứa danh sách các value
// const myObj = {
//     name: "An",
//     email: "an@gmail.com",
//     age: null,
//     address: undefined,
//     status: false
// }
// console.log(Object.values(myObj));

//3. Object.entries(): Trả về 1 mảng entries (2 chiều) chứa danh sách key và value
// const myObj = {
//     name: "An",
//     email: "an@gmail.com",
//     age: null,
//     address: undefined,
//     status: false
// }
// console.log(Object.entries(myObj));

//4. Object.fromEntries(): Chuyển mảng entries thành object
// const entries = [
//     [
//         'name',
//         'An'
//     ],
//     [
//         'email',
//         'an@gmail.com'
//     ]
// ];
// const myObj = Object.fromEntries(entries);
// console.log(myObj);

// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const entries = (formData.entries());
//     const data = Object.fromEntries(entries);
//     console.log(data);
// })

//5. Object.assign(target, ...source): Gộp các object source vào target
// const obj1 = {
//     x: 10,
//     y: 20
// }
// const obj2 = {
//     a: 'A',
//     b: 'B'
// }
// const obj3 = {
//     z: 5
// }
// const result = Object.assign({}, obj1, obj2, obj3);
// console.log(obj1);
// console.log(result);

//Bài toán: Gộp 3 object trên thành 1 object nhưng không làm thay đổi obj1

//Từ khóa this khi làm việc với method
// const user = {
//     id: 10,
//     fullname: 'Hoàng An',
//     email: 'an@gmail.com',
//     getFullname() {
//         console.log(this.fullname);
//     },
//     getInfo() {
//         // const _this = this;
//         return {
//             age: 30,
//             getEmail: () => {
//                 console.log(this.email);
//             }
//         }
//     }
// }
// user.getFullname();
// user.getInfo().getEmail()

//Thay đổi this
// const user = {
//     id: 10,
//     fullname: 'Hoàng An',
//     email: 'an@gmail.com',
//     getAddress(a, b) {
//         console.log(this.address);
//         console.log(a, b);
//     }
// }

// const info = {
//     address: 'Hà Nội'
// }

// const getAddress = user.getAddress.bind(info);
// getAddress();

// user.getAddress.bind(info)();

// user.getAddress.call(info, 10, 20);
// const values = [10, 20];
// user.getAddress.apply(info, values);
// user.getAddress.call(info, ...values);

//Bài tập: Chuyển query string thành object (Không được dùng object có sẵn URLSearchParams)
// const queryString = 'q=lập+trình&status=active&cat=1';
//Output:
/*
{
    q: "lập trình",
    status: "active",
    cat: "1"
}
*/
// const query = queryString.split('&').reduce((acc, cur) => {
//     const values = cur.split('=');
//     const key = values[0];
//     const value = values[1].replaceAll('+', ' ');
//     acc[key] = value;
//     return acc;
// }, {});
// console.log(query);

// const query = Object.fromEntries(queryString.split('&').map((item) => {
//     const values = item.split('=');
//     const key = values[0];
//     const value = values[1].replaceAll('+', ' ');
//     return [key, value];
// }));
// console.log(query);

//Bài tập mở rộng: 
const queryString = 'q=lập+trình&status=active&cat=1&cat=2&cat=3';
/*
{
    q: "lập trình",
    status: "active",
    cat: ["1", "2", "3"]
}
*/

// const queryString = 'q=lập+trình&cat=1&status=active&cat=3';

// const query = {}
// const array = queryString.split('&');
// array.forEach(item => {
//     const values = item.split('=');
//     const key = values[0];
//     const value = values[1];
//     const valueClean = value.replaceAll('+', ' ');
//     if (!query[key]) {
//         query[key] = valueClean;
//     } else {
//         if (!Array.isArray(query[key])) {
//             query[key] = [query[key]];
//         }
//         query[key].push(valueClean);
//     }
// })
// console.log(query);

const users = [
    {
        id: 1,
        name: "Hoang An",
        email: 'hoangan@gmail.com',
        age: 30
    },
    {
        id: 2,
        name: "Van Tuan",
        email: 'vantuan@gmail.com',
        age: 25
    },
    {
        id: 3,
        name: "Dang Ngoc Son",
        email: 'sondang@gmail.com',
        age: 28
    },
    {
        id: 4,
        name: "Pham Tuan Anh",
        email: 'phantuananh@gmail.com',
        age: 20
    }
];

// const search = 'TUAN';
// const result = users.filter(user => {
//     return user.name.toLowerCase().includes(search.toLowerCase())
// });
// console.log(result);

//Bài toán: Xóa email của user có tuổi lớn nhất
// - Tìm tuổi lớn nhất: reduce
// - Xóa email: map
const maxAge = users.reduce((acc, cur) => {
    return acc.age < cur.age ? cur : acc
}).age;

const newUsers = users.map((user) => {
    // const userClone = { ...user };
    const userClone = Object.assign({}, user);
    if (userClone.age === maxAge) {
        delete userClone.email;
    }
    return userClone;
});
console.log(users);

console.log(newUsers);

const myObj = {
    name: 'An',
    email: 'an@gmail.com',
    position: ['Dev', 'Teacher'],
    history: [
        {
            year: 2010,
            description: 'A'
        },
        {
            year: 2011,
            description: 'B'
        },
        {
            year: 2012,
            description: 'C'
        }
    ]
}

//Tìm hiểu trước
// - Prototype
// - Function Constructor
// - Class
