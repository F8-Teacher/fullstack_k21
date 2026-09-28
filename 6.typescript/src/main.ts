//Cách khai báo kiểu dữ liệu

//let tenbien:tenkieu
//const tenham = (thamso1: kieu1, thamso2: kieu2): kieutrave => {}

// let a: string = 'Hoàng An';
// const sum = (a: number, b: number): number => a + b;

//Các kiểu dữ liệu cơ bản
// - string
// - number
// - boolean
// - undefined
// - null
// - BigInt
// - Symbol

//Kiểu any, unknown
// let a: any = "An";
// a = 10;

// let b: unknown = 'An';
// b = 10;

// let a: any = 'Hoàng An';
// let b: string = a;

// let a: unknown = 'Hoàng An';

// let b: string = a;

//unknown dùng khi nào?
// - Không biết trước các kiểu dữ liệu -> yêu cầu kiểm tra trước biến unknown trước khi sử dụng (gán vào biến khác, trả về)
// - Dùng để ép kiểu (TypeScript)
// let a: string = '10';
// let b: number = +a;
// console.log(b, typeof b);

//Array => Công thức: tenkieuphantu[]
// const numbers: number[] = [1, 2, 3, 4];
// const names: string[] = ['An', 'Dũng', 'Tùng'];

//Tuple: Áp dụng khi 1 mảng có nhiều kiểu dữ liệu, giới hạn số lượng phần tử
// const myArr: [number, string, boolean?] = [10, 'An'];

//Object
// const user: {
//     name: string;
//     age: number;
//     isVerified?: boolean;
//     details: {
//         address: string;
//         province: string;
//     }
// } = {
//     details: {
//         address: 'Tây Mỗ',
//         province: 'HN'
//     },
//     name: 'An',
//     age: 34,
//     isVerified: false
// }

//Mix array + object
// const arr: { id: number, name: string, age: number }[] = [
//     {
//         id: 1,
//         name: 'An',
//         age: 30
//     },
//     {
//         id: 2,
//         name: 'Tuấn',
//         age: 30
//     }
// ]

//Định nghĩa kiểu là 1 hàm
//name: string;
//getName: Hàm có 1 tham số trả về string
// const user: {
//     name: string;
//     getName: (val: string) => string;
//     showMessage: () => void;
// } = {
//     name: 'An',
//     getName(val: string) {
//         return 'Hoàng'
//     },
//     showMessage() {
//         console.log('Hello anh em');
//     }
// }

//Bài tập
// const debounce = (callback: (...args: unknown[]) => void, timeout = 500) => {
//     let id: number;
//     return (...args: unknown[]) => {
//         if (id) {
//             clearTimeout(id);
//         }
//         id = setTimeout(() => {
//             callback(...args);
//         }, timeout)
//     }
// }

// const func1 = debounce((a: unknown, b: unknown) => {
//     console.log(a, b);
// }, 500);

// func1(10, 20);

// const func2 = debounce((value: unknown) => {
//     console.log(value);
//     if (typeof value === 'string') {
//         const result: string = value;
//     }

// }, 1000)
// func2('An');

// const getTodos = async (): Promise<{id: number; title: string}[]> => {
//     const response = await fetch(`/api/todos`);
//     return response.json();
// }

// const main = async () => {
//    const todos =  await getTodos();
//    todos.forEach(todo => {

//    })
// }

//Các kiểu tự định nghĩa

//- type
// + Áp dụng với mọi kiểu dữ liệu
// + Không kế thừa được
// + Không được đặt type giống nhau

//- interface
// + Chỉ áp dụng với object
// + Kế thừa được
// + Được phép đặt Interface giống nhau -> tự động gộp

// type User = {
//     id: number;
//     name: string;
//     age: number;
//     status: boolean | number | undefined;
// }
// type Customer = User & {
//     address: string;
// }
// const user: User = {
//     id: 1,
//     name: 'An',
//     age: 34,
//     status: true
// }

// const customer: Customer = {
//     id: 10,
//     name: 'Tuấn',
//     age: 30,
//     address: 'HN',
//     status: 0
// }

// interface User {
//     id: number;
//     name: string;
//     age: number;
//     status: boolean | number | undefined;
// }

// interface Customer extends User {
//     address: string;
// }

// interface User {
//     email: string;
// }

// const user: User = {
//     id: 1,
//     name: 'An',
//     age: 34,
//     status: true,
//     email: 'an@gmail.com',
// }

// const customer: Customer = {
//     id: 10,
//     name: 'Tuấn',
//     age: 30,
//     address: 'HN',
//     status: 0,
//     email: 'an@gmail.com'
// }

// const myArr: User[] = [{
//     id: 1,
//     name: 'An',
//     age: 34,
//     status: true,
//     email: 'an@gmail.com'
// }]

// interface IUser {
//     name: string;
//     email: string;
//     getName: () => string;
// }

// class User implements IUser {
//     name: string = 'An';
//     email: string = 'an@gmail.com';
//     getName() {
//         return 'An'
//     }
//     getEmail() {
//         return 'email'
//     }
// }

//readonly
// interface User {
//     readonly name: string;
//     age: number;
// }
// const user: User = {
//     name: 'An',
//     age: 34
// }

// user.name = 'Hoàng An';

//Optional trong function
// const getMessage = (msg: string, status?: string) => {
//     console.log(msg);
//     console.log(status);
// }

// getMessage('Học Tyoescript không khó');

//Ví dụ:
// const getUser = (id: number) => {
//     console.log(id);
// }

// let id: string | undefined | null;
// let check = 5;
// if (check) {
//     id = '10';
// }
// getUser(+id!); //Khẳng định với TypeScript là dữ liệu ổn

//Bài tập
try {
    const error = new Error('Page not found');
    error.status = 404;
    throw error;
} catch (error) {
    console.log(error.message);
    console.log(error.status);

}