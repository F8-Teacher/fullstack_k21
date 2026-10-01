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
// interface AppError extends Error {
//     status?: number;
// }
// try {
//     const error: AppError = new Error('Page not found');
//     error.status = 404;
//     throw error;
// } catch (error) {
//     //Kiểm tra error có phải là instance của AppError
//     if (error instanceof Error) {
//         const err: AppError = error;
//         console.log(err.message);
//         console.log(err.status);
//     }
// }
// class AppError extends Error {
//     status?: number
//     constructor(message: string, status: number) {
//         super(message);
//         this.status = status;
//     }
// }
// try {
//     throw new AppError("Page not found", 404);
// } catch (error) {
//     //Kiểm tra error có phải là instance của AppError
//     if (error instanceof AppError) {
//         console.log(error.message);
//         console.log(error.status);
//     }
// }
//Union Type
// const user = {
//     name: 'An',
//     email: 'an@gmail.com',
//     age: 30
// }
// const key: "name" | "email" | "age" = 'name';
// console.log(user[key]);
// const getValue = (key: "name" | "email" | "age") => {
//     // return user[key];
// }
// console.log(getValue("email"));
//keyof: Trích xuất các key của type -> Chuyển về Union
// interface User {
//     name: string;
//     email: string;
//     age: number;
// }
// const user = {
//     name: 'An',
//     email: 'an@gmail.com',
//     age: 30
// }
// const key: keyof User = "email";
// console.log(user[key]);
//typeof: Trích xuất các value của key trong object -> Chuyển thành type
// const user = {
//     name: 'An',
//     email: 'an@gmail.com',
//     age: 30,
//     status: false
// }
// type User = typeof user;
// const key: keyof User = "email";
// console.log(user[key]);
// const key: keyof typeof user = "status";
// console.log(user[key]);
//Generic
// - Vấn đề: Áp dụng khi mỗi lần gọi type lại khác nhau -> Tạo ra rất nhiều type
// interface User<T> {
//     name: string;
//     email: string;
//     details: T
// }
// type UserAddress = {
//     address: string;
//     province: string;
// }
// const user1: User<UserAddress> = {
//     name: 'An',
//     email: 'an@gmail.com',
//     details: {
//         address: 'HN',
//         province: 'HN'
//     }
// }
// type UserJob = {
//     job: string;
// }
// const user2: User<UserJob> = {
//     name: 'An',
//     email: 'an@gmail.com',
//     details: {
//         job: "Teacher"
//     }
// }
// const getUser = <T>(user: T, key: keyof T) => {
//     return user[key];
// }
// function getUser<T>(user: T, key: keyof T) {
//     return user[key]
// }
// type User = {
//     name: string;
//     email: string
// }
// getUser<User>({
//     name: 'An',
//     email: 'an@gmail.com'
// }, "name");
// const debounce = <T extends unknown[]>(callback: (...args: T) => void, timeout = 500) => {
//     let id: number;
//     return (...args: T) => {
//         if (id) {
//             clearTimeout(id);
//         }
//         id = setTimeout(() => {
//             callback(...args);
//         }, timeout)
//     }
// }
// const func1 = debounce((a: number, b: number) => {
//     console.log(a, b);
// }, 500);
// func1(10, 20);
// const func2 = debounce((a: number, b: string, c: boolean) => {
//     console.log(a, b);
// }, 500);
// func2(10, 'An', false);
//OOP
// - Class
// class User {
//     //Thuộc tính
//     public name: string;
//     public email: string;
//     protected messsage = 'Hello anh em';
//     //Phương thức khởi tạo
//     constructor(name: string, email: string) {
//         this.name = name;
//         this.email = email;
//     }
//     //Phương thức
//     public getName(): string {
//         return this.name;
//     }
//     public getEmail(): string {
//         return this.email;
//     }
// }
// class Auth extends User {
//     private status: boolean;
//     constructor(name: string, email: string, status: boolean) {
//         super(name, email);
//         this.status = status;
//     }
//     public getMessage() {
//         return this.messsage;
//     }
//     public getStatus() {
//         return this.status;
//     }
// }
// class App {
//     private auth: Auth;
//     constructor(auth: Auth) {
//         this.auth = auth;
//     }
//     public resolve() {
//         console.log(this.auth);
//     }
// }
// - Instance
// const user = new User('User 1', 'user1@gmail.com');
// console.log(user.name);
// const auth = new Auth('User 1', 'user1@gmail.com', true);
// new App(auth).resolve();
//Tính trừu tượng
//Ví dụ: Cần xây dựng chức năng thanh toán
//- Class Payment -> Xử lý các thao tác thanh toán chung
//+ Nhận thông tin xác thực từ cổng thanh toán trả về
//+ Lưu lịch sử giao dịch
//+ Cập nhật trạng thái đơn hàng
//- Xây dựng các class phục vụ chức năng của từng cổng
//+ Sepay: Generate QR Code
//+ VnPay: Gerate link redirect
//Lớp trừu tượng
// - Phương thức trừu tượng chỉ được phép khai báo trong class trừu trượng
// - Trong 1 class trừu tượng có thể không có phương trừu tượng
// - Có thể tồn tại các phương thức không trừu tượng
// - Không được phép khởi tạo instance trực tiếp từ class trừu tượng
// - Nếu có thuộc tính trong class trừu tượng chỉ được phép dùng public, protected
//Phương thức trừu tượng
// - Không được định nghĩa logic, chỉ được khai báo
// - Định nghĩa phương thức trừu tượng trong lớp kế thừa
// abstract class Payment {
//     saveTransaction() {
//         console.log('saveTransaction');
//     }
//     updateStatus() {
//         console.log('updateStatus');
//     }
//     resolveFromGateway() {
//         console.log('resolveFromGateway');
//     }
//     abstract processPayment(): void; //Phương thức trừu tượng
// }
// class VnPayPayment extends Payment {
//     processPayment(): void {
//         console.log('processPayment VnPay');
//     }
// }
// class SepayPayment extends Payment {
//     processPayment(): void {
//         console.log('processPayment Sepay');
//     }
// }
// console.log('VNPAY');
// const vnpay = new VnPayPayment();
// vnpay.processPayment();
// vnpay.resolveFromGateway();
// vnpay.updateStatus();
// vnpay.saveTransaction();
// console.log('Sepay');
// const sepay = new SepayPayment();
// sepay.processPayment();
// sepay.resolveFromGateway();
// sepay.updateStatus();
// sepay.saveTransaction();
//Tính đa hình
// class Calc {
//     //Overload (Nạp chồng)
//     public sum(a: number, b: number): void;
//     public sum(a: string, b: string): void
//     public sum(a: string): void;
//     public sum(...args: unknown[]) {
//         if (args.length === 2) {
//             const [a, b] = args as [number, number] | [string, string];
//             if (typeof a === 'string' && typeof b === 'string') {
//                 console.log(`(String) Nối và b = ${a + b}`);
//             } else {
//                 console.log(`(Number) Cộng a + b = ${+a + +b}`);
//             }
//         }
//         if (args.length === 1) {
//             console.log(args[0]);
//         }
//     }
// }
// const calc = new Calc();
// calc.sum(10, 20);
// calc.sum('Hoàng An')
// calc.sum('An', 'Tuấn')
//Utility Type
// - Partial: Biến các key trong type, interface thành optional
// type User = {
//     id: number;
//     name: string;
//     email: string;
// }
// const user: User = {
//     id: 1,
//     name: 'An',
//     email: 'an@gmal.com'
// }
// const customer: Partial<User> = {
//     id: 10,
//     email: 'abc@gmail.com'
// }
//Readonly
// type UserReadonly = Readonly<User>;
//Record: Tạo ra 1 type từ key là union và value là kiểu bất kỳ
// type Role = "admin" | "user" | "guest" | "superAdmin"; //Union
// type Permission = Record<Role, string[] | string>
// const permissions: Permission = {
//     admin: ['read', 'create', 'update', 'delete'],
//     user: ['read', 'create'],
//     // guest: ['read']
//     guest: "read",
//     superAdmin: ['all']
// }
//Pick
// type User = {
//     id: number;
//     name: string;
//     email: string;
// }
// type Customer = Pick<User, "name" | "email">
//Omit -> Ngược lại với Pick
// type User = {
//     id: number;
//     name: string;
//     email: string;
// }
// type Customer = Omit<User, "id">
//ReturnType
// const doSomething = () => {
//     return {
//         id: 10,
//         name: 'An',
//         age: 34
//     }
// }
// type User = ReturnType<typeof doSomething>;
// const config = {
//     name: 'An',
//     email: 'dat@gmail.com'
// }
// const config2 = {...config} as const;
// config2.name = 'An';
import { a } from "./modules/home.js";
console.log('Hello anh em');
console.log(a);
//# sourceMappingURL=main.js.map