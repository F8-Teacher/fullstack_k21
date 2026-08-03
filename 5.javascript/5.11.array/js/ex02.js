//Array method
console.log(Array.prototype);

// const myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
// myArr.length = 2;
// console.log(myArr.length);
// console.log(myArr);

// const arr1 = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
// const arr2 = [1, 2, 3];
// const arr3 = ['A', 'B', 'C'];
// const newArr = arr1.concat(arr2, arr3);
// console.log(newArr);
// console.log(arr1);

// const arr1 = ['Item 1', 'Item 2', 'Item 3', 'Item 3', 'Item 4'];
// console.log(arr1);

// console.log(arr1.lastIndexOf('Item 3'));

// console.log(arr1.includes('Item 2'));

// console.log(arr1.slice(-2));

// const myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
// const newArr = myArr.fill('F8', 0, 2);
// console.log(myArr);
// console.log(newArr);

// const myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
// const value = myArr.shift();
// console.log(myArr);
// console.log(value);

// const myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
// const result = myArr.splice(1, 0, 'An', 'Sơn', 'Tùng');
// console.log(myArr);
// console.log(result);

// const myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
// console.log(myArr.join(' '));

// const myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
// const newArr = myArr.reverse();
// console.log(myArr);
// console.log(newArr);
// console.log(myArr === newArr);

// const myArr = [1, 2, 3, ['A', 'B', 'C', [false]]];
// console.log(myArr);
// console.log(myArr[myArr.length - 1]);
// console.log(myArr.at(-1).at(-1).at(0));

// console.log(myArr[3][3][0]);

// const myArr = [
//     [
//         'An',
//         'an@gmail.com'
//     ],
//     [
//         'Sơn',
//         'son@gmail.com'
//     ]
// ];
// console.log(myArr);
// console.log(myArr[0][1]);

// const numbers = [1, 2, [3, 4, [5, [6, [7]]]]]; //[1,2,3,4,5,6,7] --> Làm phẳng mảng (Array flat)
// console.log(numbers);
// console.log(numbers.flat(Infinity));

//Bài tập 1: Đổi chỗ phần tử mảng đầu tiên và cuối cùng
// const myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
// // ['Item 5', 'Item 2', 'Item 3', 'Item 4', 'Item 1']
// if (myArr.length) {
//     const temp = myArr[0];
//     myArr[0] = myArr.at(-1);
//     myArr[myArr.length - 1] = temp;
// }

// console.log(myArr);

//Bài tập 2: Chèn value phần vị trí index của mảng myArr nhưng sẽ phải trả về mảng mới và không được làm thay đổi mảng myArr
// const myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
// let index = 10;
// const value = 'F8';
// const newArr = []; //Logic
// //['Item 1', 'Item 2', 'F8', 'Item 3', 'Item 4', 'Item 5'];
// if (index < 0) {
//     index = 0;
// }
// for (let i = 0; i < myArr.length; i++) {
//     if (i === index) {
//         newArr.push(value);
//     }
//     newArr.push(myArr[i]);
// }
// if (index > myArr.length) {
//     newArr.push(value);
// }

// console.log(newArr);

//Sắp xếp
// const names = ['Tung', 'An', 'Dat', 'Huong'];
// names.sort().reverse();
// console.log(names);

// const numbers = [4, 2, 9, 1, 8, 10, 5, 100]
// numbers.sort((a, b) => {
//     //Nếu return về số âm => Đẩy a lên trước b
//     //Nếu return về số dương => Đẩy b lên trước a
//     //Nếu return về số 0 => Giữ nguyên
//     // if (a < b) {
//     //     return -1
//     // }
//     // if (a > b) {
//     //     return 1;
//     // }
//     // return a - b;
//     // return b - a;
//     if (a > b) {
//         return -1;
//     }
//     if (a < b) {
//         return 1;
//     }

// });
// console.log(numbers);

//Ví dụ: Sắp xếp giảm dần theo độ dài của từng phần tử
// const names = ['Tung', 'An', 'Dat', 'Huong'];
// names.sort((a, b) => {
//     return b.length - a.length;
// });
// console.log(names);

//Bài tập: Sắp xếp mảng dưới đây theo thứ tự tăng dần của tên
// const users = [
//     'Nguyễn Văn Dũng',
//     'Phạm Thanh Tuyến',
//     'Trương Văn Hùng',
//     'Tạ Hoàng An'
// ];

/*
[
    'Tạ Hoàng An'
    'Nguyễn Văn Dũng',
    'Trương Văn Hùng',
    'Phạm Thanh Tuyến',
]
*/
// const getFirtName = (fullname) => fullname.split(' ').at(-1);
// users.sort((a, b) => {
//     const firstNameA = getFirtName(a)
//     const firstNameB = getFirtName(b);
//     if (firstNameA < firstNameB) {
//         return -1
//     }
//     if (firstNameA > firstNameB) {
//         return 1;
//     }
// });
// console.log(users);

// const numbers = [4, 2, 9, 1, 8, 10, 5, 100];
// for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//         if (numbers[i] > numbers[j]) {
//             let temp = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = temp;
//         }
//     }
// }
// console.log(numbers);

// const myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
// myArr.forEach((value, index) => {
//     console.log(value, index);
// })

// const myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
// const newArr = myArr.map((value, index) => {
//     console.log(value, index);
//     return `${index + 1} - ${value}`;
// });

// console.log(newArr);

// const numbers = [5, 2, 9, 1, 8, 3];
// const newArr = numbers.findLast((value, index) => {
//     // console.log(value, index);
//     return value % 2 === 0;
// });

// console.log(newArr);

// const numbers = [2, 4, 6];
// const result = numbers.every((value, index) => {
//     console.log(value);
//     return value % 2 === 0;
// });
// console.log(result);

//Bài tập: Lọc trùng mảng dưới đây
// const users = ['User 1', 'User 2', 'User 3', 'User 2', 'User 4'];
// //['User 1', 'User 2', 'User 3', 'User 4'];
// const newUsers = [];
// users.forEach((user) => {
//     if (!newUsers.includes(user)) {
//         newUsers.push(user);
//     }
// })
// console.log(newUsers);

//Bài tập: Lọc trùng mảng dưới đây. Dùng filter
// const users = ['User 1', 'User 2', 'User 3', 'User 2', 'User 4'];
// const newUsers = users.filter((user, index) => {
//     //Logic
//     return users.indexOf(user) === index;
// });
// console.log(newUsers);

// const numbers = [5, 10, 15, 20, 25, 30];
// console.log(numbers);
// const result = numbers.reduce((acc, value, index) => {
//     console.log(`acc: ${acc}`, `value: ${value}`, `index: ${index}`);
//     return value;
// });
// console.log(result);

// const total = numbers.reduce((acc, cur) => {
//     console.log(acc);
//     return acc + cur;
// }, 0);
// console.log(total);

//Ví dụ: Tìm giao giữa 2 mảng => [5,3]
// const arr1 = [5, 2, 9, 3, 8];
// const arr2 = [3, 5, 10, 11];
// // const results = [];
// // arr1.forEach((value) => {
// //     if (arr2.includes(value)) {
// //         results.push(value);
// //     }
// // });
// // console.log(results);

// const results = arr1.reduce((acc, cur) => {
//     if (arr2.includes(cur)) {
//         acc.push(cur);
//     }
//     return acc;
// }, []);
// console.log(results);

//Ví dụ: Tìm max của mảng sau
// const arr1 = [5, 2, 9, 3, 8];
// let max = arr1[0];
// arr1.forEach((value) => {
//     if (max < value) {
//         max = value;
//     }
// });
// console.log(max);
// const max = arr1.reduce((acc, cur) => {
//     return acc < cur ? cur : acc;
// });
// console.log(max);

//Bài tập: 
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const size = 2;
// //Yêu cầu: Chunk array thành mảng sau: [[1,2],[3,4],[5,6],[7,8],[9]]
// const results = numbers.reduce((acc, cur, index) => {
//     if (index % size === 0) {
//         const sub = numbers.slice(index, index + size);
//         acc.push(sub);
//     }
//     return acc;
// }, []);
// console.log(results);

// const fullname = 'tạ hoàng   an';
// const result = fullname.split(' ').map((value) => {
//     return value.charAt(0).toUpperCase() + value.slice(1);
// }).join(' ');
// const result = fullname.split(' ').filter(value => value).map((value) => {
//     return value.charAt(0).toUpperCase() + value.slice(1);
// }).join(' ');
// console.log(result);

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// console.log(arr1 === arr2);

// const arr1 = [1, 2, 3];
// const arr2 = [...arr2];
// arr2[0] = 'An';

// console.log(arr1);
// console.log(arr2);

