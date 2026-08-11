//a = {x: 1}
//b = {y: 1}

//Function Constructor: 
// - Hàm dùng để khởi tạo object, đóng vai trò giống như 1 bản thiết kế
//- Các object được tạo từ Constructor gọi Instance

//Đặt tên constructor
// - Dùng danh từ
// - Dùng quy tắc PascalCase
// function User(name, email) {
//     //Tạo thuộc tính (non-static)
//     this.name = name;
//     this.email = email;
//     this.age = 33;

//     //Tạo phương thức (non-static)
//     this.getName = function () {
//         console.log(`this in non-static`, this);
//         console.log(this.name);
//     }
//     this.getEmail = function () {
//         console.log(this.email);
//     }

//     this.showMessageNonStatic = function () {
//         this.constructor.showMessage();
//         console.log(this.constructor.message);
//     }
// }

// User.message = 'Hello anh em K21';
// User.showMessage = function () {
//     // console.log(`this in static`, this);
//     console.log('Học lập trình không khó');
// }
// User.showAge = function () {
//     //Tạo instance
//     const instance = new this();
//     console.log(instance.age);

// }

// User.showAge();

// const user = new User('An', 'an@gmail.com');
// user.showMessageNonStatic();
// console.log(user);
// user.getName();
// User.showMessage();
// console.log(User.message);

//Static method, static property
//- Không phụ thuộc vào instance
//- Truy cập trực tiếp từ Constructor

//Từ khóa this
// - this của non-static method là instance
// - this của static là Constructor

//Làm thế nào từ 1 method non-static có thể truy cập đến method static => Lấy được Constructor từ this (instance)

//Bài tập
// function Calc(initValue) {
//     this.result = initValue;

//     this.add = function (value) {
//         this.result += value;
//         return this;
//     }

//     this.minus = function (value) {
//         this.result -= value;
//         return this;
//     }

//     this.mul = function (value) {
//         this.result *= value;
//         return this;
//     }

//     this.divi = function (value) {
//         this.result /= value;
//         return this;
//     }

//     this.get = function (value) {
//         return this.result;
//     }
// }

// Calc.start = function (value) {
//     return new Calc(value);
// };

//const result = new Calc(10).add(5).minus(3).mul(5).divi(2).get() --> 10 + 5 - 3 * 5 / 2
//console.log(result)
//Lưu ý: Các phương thức add, minus, mul, divi có thể thay đổi thứ tự
// const result = new Calc(10).add(5).minus(3).mul(5).divi(2).get(); //Chaining
// console.log(result);

//Yêu cầu 2: 
// const result = Calc.start(10).add(5).minus(3).mul(5).divi(2).get()
// console.log(result);

//Prototype
// const a = { x: 10 }
// console.log(a);

// function User() {
//     this.name = 'An';
// }
// const user = new User();
// console.log(user);

//user (instance) -> User (constructor) -> Object (constructor)

//Bài toán: Cần bổ sung 1 method, property vào 1 constructor đã có sẵn => Dùng object prototype

// function User() {
//     this.name = 'An';
// }

// User.prototype.message = "Học lập trình không khó";
// User.prototype.getMessage = function () {
//     console.log('Chào anh em K21');
// }

// const user1 = new User();
// console.log(user1);
// console.log(user1.message);
// user1.getMessage();

//Thứ tự: 
// 1. Tìm trong constructor xem có method, property đó không?
// 2. Nếu không có, tìm trong Prototype

//Ngoại lệ: Nếu thêm protype vào Oject -> Bất kỳ kiểu dữ liệu nào cũng truy cập được (Trừ null, undefined)
// Object.prototype.message = 'Hello anh em';
// const a = { x: 10 } //Khởi tạo trực tiếp từ Object
// console.log(a.message);

// const fullname = 'Hoàng An'; //Khởi tạo từ String -> con của Object
// console.log(fullname.message);

// const age = 34; //Khởi tạo từ Number -> con của Object
// console.log(age.message);

// const isVerified = false; //Khởi tạo từ Boolean -> con của Object
// console.log(isVerified.message);

// const price = 123n; //Khởi tạo từ BigInt -> con của Object
// console.log(price.message);

// const id = Symbol('id'); //Khởi tạo từ Symbol -> con của Object
// console.log(id.message);


// const doSomething = () => {

// }
// //Khởi tạo từ Function -> Con của Object
// console.log(doSomething.message);

// const users = []; //Khởi tạo từ Array -> con của Object
// console.log(users.message);

// Array.prototype.doSomething = function () {
//     console.log(this);
// }
// Array.prototype.latest = function () {
//     return this[this.length - 1];
// }
// const users = [1, 2, 3];
// console.log(users.latest());

//Kiểm tra 1 biến được tạo từ instance nào?
// function User() {
//     this.name = 'An';
// }
// const user = new User();
// console.log(user instanceof User);
// console.log(user.constructor.name === "User");

// let a;
// console.log(a instanceof User);

//Kế thừa Constructor
// function User(name, email) {
//     this.name = name;
//     this.email = email;
// }

// function Authentication(name, email) {
//     User.call(this, name, email);
//     this.login = function () {
//         console.log(this.name);
//         console.log(this.email);

//     }
// }

// const auth = new Authentication('An', 'an@gmail.com')
// auth.login();

//Class
// class User {
//     //Non-static property
//     age = 34;
//     #income = 1000;

//     //Static property
//     static message = 'Ok chưa?';

//     //Hàm khởi tạo, chạy tự động ngay sau khi instance được khởi tạo
//     // - Gán giá trị khởi tạo cho các thuộc tính
//     // - Thêm thuộc tính mới
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     //Method
//     getName() {
//         console.log(this.name);
//     }

//     getEmail() {
//         console.log(this.email);
//     }

//     getIncome() {
//         console.log(this.#income);
//     }

//     //Static method
//     static showMessage() {
//         console.log(this.message);
//     }

// }


// const user = new User('An', 'an@gmail.com');
// console.log(user);
// user.getIncome();

//Getter, Setter
// class User {
//     #data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

//     //Getter
//     get latest() {
//         return this.#data.length ? this.#data[this.#data.length - 1] : -1;
//     }

//     //Setter
//     set latest(value) {
//         this.#data.push(value);
//     }
// }

// const user = new User();
// user.latest = 'Hoàng An';
// console.log(user.latest);

// const users = ['User 1', 'User 2', 'User 3', 'User 4'];
// users.length = 2; //Setter
// console.log(users.length); //Getter
// console.log(users);

// const btn = document.querySelector('button');
// const input = document.querySelector('input');
// btn.addEventListener('click', () => {
//     console.log(input.value); //Getter
//     input.value = 'F8 - K21' //Setter
// });

// const myObj = {
//     x: 10,
//     get value() {
//         return this.x;
//     },
//     set value(val) {
//         this.x = val;
//     }
// }
// myObj.value = 20
// console.log(myObj.value);

//Kế thừa class
// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//         console.log('User Constructor');
//     }

//     doSomething() {
//         console.log('User doSomething');
//     }
// }

// class Auth extends User {
//     constructor(name, email, age) {
//         super(name, email);
//         this.age = age;
//         console.log('Auth Constructor');
//     }
//     login() {
//         console.log(this.name);
//         console.log(this.email);
//         console.log(this.age);
//     }

//     doSomething() {
//         super.doSomething();
//         console.log('Auth doSomething');

//     }
// }
// const auth = new Auth('An', 'an@gmail.com', 34);
// // auth.login();
// auth.doSomething();

//Kế thừa + setter, getter
// class Animal {
//     constructor(name) {
//         this._speed = 0;
//         this.name = name;
//     }
//     get speed() {
//         return this._speed;
//     }
//     set speed(value) {
//         this._speed = value;
//     }
// }

// class Rabbit extends Animal {
//     get speed() {
//         return this._speed * 1.5;
//     }
//     // set speed(value) {
//     //     this._speed = value;
//     // }
// }

// const rabbit = new Rabbit('White Rabbit');
// rabbit.speed = 10;
// console.log(rabbit.speed);

//Cách hoạt động của setter, getter
// - Không hoạt động độc lập
// - Khi khai báo setter, getter -> Ghi đè vào vào object Property Descriptor
// console.log(Object.getOwnPropertyDescriptor(Animal.prototype, 'speed'));
