//Object quản lý mảng: Array
//Khai báo mảng
// const myArr = [];
const myArr = ['An', 'Dũng', 1, 2, 3]

//Kiểm tra biến xem có phải mảng hay không?
// console.log(Array.isArray('hello'));

//Lấy số lượng phần tử
// console.log(myArr.length);

//Thêm phần tử vào mảng
myArr[myArr.length] = 'Sơn';
myArr[myArr.length] = 'Đạt';

//Cập nhật
myArr[2] = 'Ahihi';

//Truy cập vào phần tử
// console.log(myArr[1]);

//Duyệt qua từng phần tử
// for (let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i]);
// }
// for (let index in myArr) {
//     console.log(myArr[index]);
// }
// for (let value of myArr) {
//     console.log(value);
// }

//Xóa phần tử
// let indexDel = 2;
// const newArr = [];
// for (let index in myArr) {
//     if (+index === indexDel) {
//         continue;
//     }
//     newArr[newArr.length] = myArr[index];
// }
// console.log(myArr);
// console.log(newArr);

// delete myArr[indexDel];
// console.log(myArr);
