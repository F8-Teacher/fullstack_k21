//arguments
// showMessage('F8', undefined);

//parameter

// function showMessage(msg, type = 'success') {
//     console.log('Hello anh em');
//     console.log(msg);
//     console.log(type);
// }


// function getData() {
//     console.log(data);
//     // let value = 'Hello';
//     // if (data) {
//     //     console.log(value);
//     // }
// }
// function setData(val) {
//     let data = val;
//     console.log(data);
// }
// setData('K21');
// let data = 'Học lập trình không khó';
// getData();

// function doSomething() {
//     console.log('doSomething');
// }

// function doSomething() {
//     console.log('doSomething2');
// }

// doSomething();

// const showMessage = function () {
//     console.log('Hello anh em');
// }

// showMessage();

// function showMessage() {
//     console.log('Hello anh em');
// }
// const showMsg = showMessage;
// const a = showMsg;
// showMessage();
// showMsg();
// a();

// const display = function (a, callback) {
//     console.log(a);
//     if (typeof callback === 'function') {
//         callback();
//     }

// }
// const handler = function (value) {
//     console.log('Chào anh em');
//     console.log(`value`, value);

// }
// const handlerWrap = function () {
//     handler('A')
// }
// const handler2 = function () {
//     console.log('Chào anh em 2');
// }
// display(10, handlerWrap);
// display(10, handler2);
// display(10, function () {
//     console.log('Học js không khó');
// });

// display(10, 20);

// const sum = function (a, b, c, ...args) {
//     console.log(a, b, c);
//     console.log(args);

// }
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)

// const values = [1, 2, 3];
// const sum = function (a, b, c) {
//     console.log(a, b, c);
// }
// sum(...values);

// const display = function (callback, ...args) {
//     if (typeof callback === 'function') {
//         callback(...args);
//         // callback.apply(null, args);
//     }
// }
// const handler = function (a, b, c, d) {
//     console.log(`a`, a);
//     console.log(`b`, b);
//     console.log(`c`, c);
//     console.log(`d`, d);
// }
// display(handler, 1, 2, 3, 4)

// display(function (a, b, c) {
//     console.log(a, b, c);
// }, 1, 2, 3)

//setTimeout: Delay việc thực thi 1 hàm sau 1 khoảng thời gian
// setTimeout(function (a, b, c) {
//     console.log('Hello anh em');
//     console.log(a, b, c);
// }, 2000, 1, 2, 3);

//setInterval: Chạy liên tục 1 hàm sau khoảng thời gian (Chạy theo chu kỳ)
// setInterval(function (a, b, c) {
//     console.log('Hello anh em');
//     console.log(a, b, c);
// }, 1000, 1, 2, 3);

//Bài tập: Viết hàm kiểm tra số nguyên tố, trả về true / false
//Tên hàm: isPrime(n) //Trả về true / false
// const isPrime = function (n, callback) {
//     let status = true;
//     if (n % 1 !== 0 || n <= 1) {
//         status = false;
//     }
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             status = false;
//             break;
//         }
//     }
//     if (typeof callback === 'function') {
//         callback(n, status);
//     }
//     return status;
//     // return typeof callback === 'function' && callback(n, status), status;
// }

// isPrime(5, function (value, status) {
//     if (status) {
//         console.log(`Số ${value} là số nguyên tố`);
//     } else {
//         console.log(`Số ${value} không là số nguyên tố`);
//     }
// });

// console.log(isPrime(5));

//return 1,2,3

// const displayPrime = function (n, callback) {
//     const status = isPrime(n);
//     if (typeof callback === 'function') {
//         const html = callback(n, status);
//         document.write(html);
//     }
// }

// displayPrime(5, function (value, status) {
//     let text = 'là số';
//     if (!status) {
//         text = 'không là số'
//     }
//     return `<h2>Số ${value} ${text} nguyên tố</h2>`;
// });

//Closure

// let a = 10;

// const display = function (val) {

//     let b = 20;
//     console.log('display');

//     return function () {
//         let c = 30;
//         console.log(`a`, a);
//         console.log(`b`, b);
//         console.log(`c`, c);
//         console.log(`value`, val);

//     }
//     // return showMessage;
// }

// const showMessage = display('An');
// showMessage();
// showMessage();
// showMessage();
// showMessage();
// showMessage();

// const counter = function () {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     }
// }

// const increment = counter();
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());

// const increment2 = counter();
// console.log(increment2());

// const showMessage = (a, b) => {
//     console.log('Học lập trình không khó');
//     console.log(a, b);

// }
// showMessage(10, 20);

// const getMsg = msg => {
//     console.log(msg);
// }
// getMsg('An')

// const sum = (a, b) => a + b;

// console.log(sum(10, 20));

// //{x: 10, y: 20}
// const getPoint = () => ({ x: 10, y: 20 }); //block code { }
// console.log(getPoint());

// setTimeout(() => {
//     console.log('Hello');
// }, 1000)

// const users = [
//     {
//         id: 1,
//         name: "User 1"
//     },
//     {
//         id: 2,
//         name: "User 2"
//     },
//     {
//         id: 3,
//         name: "User 3"
//     }
// ]

// const getUser = (userId) => users.find((user) => user.id === userId);
// console.log(getUser(2));

// const getUser = function (userId) {
//     return users.find(function (user) {
//         return user.id === userId;
//     })
// }
// console.log(getUser(2));

// const showNumber = (n) => {
//     console.log(n);
//     if (n > 1) {
//         showNumber(n - 1);
//     }

// }
// showNumber(10);

// const fibonacci = (n) => {
//     if (n === 1 || n === 2) {
//         return 1;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(5));

//fibonacci(5) = fibonacci(4) + fibonacci(3)
//             = fibonacci(3) + fibonacci(2) + fibonacci(2) + fibonacci(1)
//             = fibonacci(2) + fibonacci(1) + fibonacci(2) + fibonacci(2) + fibonacci(1)   

// const sum = (n) => {
//     if (n === 1) {
//         return 1;
//     }
//     const result = n + sum(n - 1);
//     console.log(n);
//     return result;
// }

// console.log(sum(10));
;

//10 + sum(9) 
//10 + 9 + sum(8)
//10 + 9 + 8 + sum(7)

//Bài tập: Tính tổng các số chẵn từ 1 đến n (Dùng đệ quy)
const sum = (n) => {
    //return
    // if (n < 2) {
    //     return 0;
    // }
    // if (n % 2 !== 0) {
    //     n--;
    // }
    // return n + sum(n - 2);
    let total = 0;
    const calc = () => {
        total += n;
        n -= 2;
        if (n > 1) {
            calc();
        }

    }
    calc();
    return total;
}
console.log(sum(10));
