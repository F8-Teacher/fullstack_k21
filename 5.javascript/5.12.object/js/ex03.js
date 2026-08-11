//Toán tử optional chaining (?.)
// const user = null;
// console.log(user?.info?.name);

// const user = {
//     display() {
//         console.log('Hello');
//     }
// }
// user?.display?.();

// const users = ['Item 1', 'Item 2', 'Item 3'];
// if (users?.length) {
//     users.forEach?.((user) => {
//         console.log(user);
//     })
// }

// const users = null;
// console.log(users?.[1]);

//So sánh object
// const isObject = (variable) => {
//     return typeof variable === 'object' && !Array.isArray(variable) && variable !== null;
// }
// const compareObj = (obj1, obj2) => {
//     if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//         return false;
//     }
//     return Object.keys(obj1).every((key) => {
//         if (isObject(obj1[key]) && isObject(obj2[key])) {
//             return compareObj(obj1[key], obj2[key]);
//         }
//         return obj1[key] === obj2[key];
//     })
// }

// const obj1 = {
//     x: 10,
//     y: 20,
//     meta: {
//         z: 30
//     }
// }
// const obj2 = {
//     x: 10,
//     y: 20,
//     meta: {
//         z: 30
//     }
// }

// console.log(compareObj(obj1, obj2));

//Copy object
// const isObject = (variable) => {
//     return typeof variable === 'object' && !Array.isArray(variable) && variable !== null;
// }
// const cloneObj = (obj) => {
//     const result = {};
//     Object.keys(obj).forEach((key) => {
//         if (!isObject(obj[key])) {
//             result[key] = obj[key];
//         } else {
//             Object.assign(result, {
//                 [key]: cloneObj(obj[key])
//             })
//         }

//     });
//     return result;
// }
// const a = { x: 10, y: 20, meta: { z: 30 }, getName() { } }
// // const b = { ...a };
// // const b = Object.assign({}, a);
// // const b = cloneObj(a);
// // const json = JSON.stringify(a);
// // const b = JSON.parse(json);
// const b = cloneObj(a);
// b.x = 30;
// b.meta.z = 50;
// console.log(a);
// console.log(b);


//1. Shallow copy
// - Spread
// - Object.assign
// - Tự xây dựng hàm

//2. Deep copy
// - Tự xây dựng hàm
// - JSON

//Destructuring (Object, array)
// const user = {
//     fullname: 'An',
//     email: 'an@gmail.com',
//     age: 34,
//     address: 'Hà Nội',
//     job: undefined
// }
// const { fullname, email: myEmail, job = 'Teacher' } = user;
// fullname = 'Hoàng An';
// console.log(fullname, myEmail, job);

// const key = 'email';
// const { fullname, [key]: myEmail, ...data } = user;
// console.log(fullname);
// console.log(data);
// console.log(myEmail);

// const users = ['An', 'an@gmail.com', 30, 'Hà Nội', 'Fullstack Dev'];
// const [fullname, email, , address] = users;
// console.log(fullname, email, address);
// const [fullname, ...data] = users;
// console.log(fullname);
// console.log(data);

// const useState = () => {
//     return [
//         10,
//         () => {
//             console.log('Gì đó');
//         }
//     ]
// }

// const [count, setCount] = useState();
// console.log(count);
// setCount();

// const userData = {
//     displayName: "Hoàng An",
//     emails: [
//         {
//             email: 'an@gmail.com'
//         }
//     ]
// }
// const { displayName: fullname, emails: [{ email }] } = userData;
// console.log(fullname);
// console.log(email);

// const x = undefined;
// const y = 20;
// const doSomething = () => {
//     return 'F8'
// }
// const myObj = {
//     x,
//     y,
//     doSomething
// }
// console.log(myObj);

//key là tên biến
//value là giá trị của biến

//Xây dựng named arguments trong function
// const display = ({ a = 0, b = 0, c = 0 }) => {
//     console.log(`a`, a);
//     console.log(`b`, b);
//     console.log(`c`, c);
// }

// const c = 10;
// display({ c })

//Map, Set