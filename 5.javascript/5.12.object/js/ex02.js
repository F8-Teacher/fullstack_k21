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
function Calc() {

}

//const result = new Calc(10).add(5).minus(3).mul(5).divi(2).get() --> 10 + 5 - 3 * 5 / 2
//console.log(result)
//Lưu ý: Các phương thức add, minus, mul, divi có thể thay đổi thứ tự