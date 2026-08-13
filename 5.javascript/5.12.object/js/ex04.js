//Set: Tập hợp các dữ liệu không trùng nhau
// const myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 2', 'Item 4'];
// const mySet = [...new Set(myArr)];
// console.log(mySet);

//Nhận đối số là 1 object có khả năng lặp bằng for...of (iterable)
// const mySet = new Set();
// const myArr = [1, 2, 3];
// const myObj = { x: 10 }
// mySet.add('Item 1');
// mySet.add('Item 2');
// mySet.add(myArr);
// mySet.add(myObj);

// mySet.delete('Item 2');
// mySet.clear();

// mySet.forEach((value) => {
//     console.log(value);
// })
// console.log(mySet.has(myArr));

// for (const value of mySet) {
//     console.log(value);
// }

//Map
// - Thêm dạng key value
// - Tuân thủ thứ tự
// const myMap = new Map();
// const key = { x: 10 };
// myMap.set('name', 'Hoàng An')
// myMap.set('email', 'hoangan.web@gmail.com');
// myMap.set('age', 30);
// myMap.set('age', 35);
// myMap.set(key, 'K21');

// console.log(myMap.has('age'));
// console.log(myMap.get('email'));
// myMap.delete(key);

// console.log(myMap);
// myMap.forEach((value, key) => {
//     console.log(value, key);
// })

// [...myMap.keys()].reduce((acc, cur) => {
//     console.log(myMap.get(cur));
// }, 0);

//Symbol
// const key1 = 'id';
// const user = {
//     [key1]: 10
// }
// const key2 = 'id';
// user[key2] = 20;
// console.log(user);

// const key1 = Symbol('id');
// const user = {
//     [key1]: 10
// }

// const key2 = Symbol('id');
// user[key2] = 20;
// console.log(user);
// console.log(user[key1]);
// console.log(user[key2]);

//Ẩn thuộc tính
// const password = Symbol('password');
// const user = {
//     name: "An",
//     [password]: "123"
// }
// for (const key in user) {
//     console.log(key);
// }

// const myObj = {
//     value: 500,
//     [Symbol.toPrimitive](hint) {
//         return hint === "string" ? "Hello anh em" : this.value
//     }
// }

// console.log(`${myObj}`);
// console.log(myObj * 20);

//Bất biến
// const myObj = Object.freeze({
//     id: 1,
//     name: 'An'
// });
// console.log(myObj);
// const newObj = { ...myObj, id: 20 };
// console.log(newObj);

// const state = Object.freeze({
//     count: 10,
//     message: "Hello anh em",
//     products: ["Product 1", "Product 2", "Product 3"]
// });

// const newState = {
//     ...state,
//     products: [...state.products, 'Product 4']
// }
// console.log(newState);
