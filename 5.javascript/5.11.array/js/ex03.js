//So sánh mảng
// const a = [];
// const b = [];
// console.log(a === b);

// const a1 = {}
// const a2 = {}
// console.log(a1 === a2);

// const doSomething1 = () => { }
// const doSomething2 = () => { }

// console.log(doSomething1 === doSomething2);

// const a = [];
// const b = a;
//a, b cùng địa chỉ
// console.log(a === b);

//Làm thế nào để so sánh 2 mảng khác địa chỉ => Duyệt qua từng phần tử, so sánh từng phần tử với nhau

// const compareArray = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     // for (const index in arr1) {
//     //     if (arr1[index] !== arr2[index]) {
//     //         return false;
//     //     }
//     // }
//     // return true;
//     return arr1.every((item, index) => {
//         if (Array.isArray(item) && Array.isArray(arr2[index])) {
//             return compareArray(item, arr2[index]);
//         }
//         return item === arr2[index];
//     })
// }
// const arr1 = ['Item 1', 'Item 2', 1, false, ['An', ['A']]];
// const arr2 = ['Item 1', 'Item 2', 1, false, ['An', ['A']]];
// console.log(compareArray(arr1, arr2));

//Bài tập: Cải tiến hàm compareArray để có thể so sánh cả mảng lồng nhau
//Dùng hàm Array.isArray() để kiểm tra 1 biến có phải là mảng hay không?

// console.log(_.isEqual(arr1, arr2));

//Copy array

// const deepCopy = (arr) => {
//     let result = [];
//     for (const index in arr) {
//         if (!Array.isArray(arr[index])) {
//             result.push(arr[index]);
//         } else {
//             result.push(deepCopy(arr[index]));
//         }
//     }
//     return result;
// }
// class User { }
// const a = ['An', [30, ['A']], 'an@gmail.com', () => { }, Symbol('id'), User];

//Cách 1: Shallow copy (Copy cấp ngoài cùng)
// - Toán tử spread (Dấu 3 chấm)
// - Sử dùng array method trả về mảng mới: slice, map, filter,...
// const b = [...a];
// const b = a.filter(value => true);

//Cách 2: Deep copy (Copy sâu tất cả các cấp)
// - Tự viết giải thuật (Hàm đệ quy)
// - Chuyển sang định dạng JSON => Sau đó chuyển ngược về mảng

// const b = deepCopy(a);
// const json = JSON.stringify(a);

// const b = JSON.parse(json);

// const b = _.cloneDeep(a);

// b[0] = 'Hoàng An';
// b[1][0] = 35;
// b[1][1][0] = 'B';
// console.log(a);
// console.log(b);

//Array-like
// const items = document.getElementsByTagName('li');

// const result = Array.from(items).map(value => {
//     return value.innerText;
// })
// console.log(result);

// function doSomething() {
//     Array.from(arguments).forEach(value => {
//         console.log(value);
//     })
// }
// doSomething(1, 2, 3, 4);

// Tại sao nên sử dụng các phương thức có sẵn của mảng
// - Ngắn gọn, phù hợp khi làm việc với Framework
// - Tốc độ xử lý nhanh hơn
// - Sử dụng phương thức đúng mục đích