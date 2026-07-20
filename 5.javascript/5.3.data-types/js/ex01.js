//Kiểu dữ liệu

//1. string
// let fullName = 'Tạ Hoàng An'; //backtick (``)
// console.log(fullName);
// console.log(typeof fullName);

//2. number
// let age = 34;
// console.log(age);
// console.log(typeof age);

//3. null
// let age = null;
// console.log(age);
// console.log(age === null);

//4. boolean
// let isVerified = true;
// console.log(isVerified);
// console.log(typeof isVerified);

//5. undefined
// let a;
// console.log(a);
// // console.log(typeof a);
// console.log(a === undefined);

//6. bigint
// let a = 1000 ** 1000; //1000 ^ 1000
// let b = 2000 ** 2000; //2000 ^ 20000
// console.log(a);
// console.log(b);
// console.log(a === b);

//tenham()
// let price = 1000n;
// console.log(price);
// console.log(typeof price);

// let price = BigInt(1000);
// console.log(price);
// console.log(typeof price);

//7. symbol
// let id = Symbol('id');
// console.log(id);
// console.log(typeof id);

//8. object
// - literal
// const user = {
//     id: 10,
//     name: 'An',
//     email: 'an@gmail.com'
// }
// console.log(user);
// console.log(typeof user);

// - array
// const users = ['User 1', 'User 2', 'User 3'];
// console.log(users);
// console.log(typeof users);

// - function
// function doSomething() {
//     console.log('doSomething');
// }
// doSomething();
// console.log(typeof doSomething);
// console.dir(doSomething);

//Chuyển các kiểu về Number
// let a = '10a';
// console.log(typeof a);
// // a = Number(a);
// a = +a;
// console.log(a);
// console.log(typeof a);

// let isVerified = true;
// let a = +isVerified;
// console.log(a);

// let a = "10";
// let b = 5;
// let c = a - b;
// console.log(c);

//Chuyển các kiểu về Boolean
// let a = "0";
// console.log(Boolean(a));

//Chuyển các kiểu về string
let price = 52000;
// price = price + "";
// price = String(price);
// price = price.toString();

price = price + "";
price = price.slice(1);
price = +price;

console.log(price);