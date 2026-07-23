//block scope
// for (let i = 1; i <= 10; i++) {
//     console.log(`Lần lặp thứ: ${i}`);
// }

// for (let i = 10; i >= 1; i--) {
//     console.log(`Lần lặp thứ: ${i}`);
// }

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

//break
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
//     if (i === 3) {
//         // break;
//         i = 5;
//     }
// }

//continue
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
//     console.log(i);
//     console.log(i);
//     console.log(i);
//     console.log(i);
//     console.log(i);
// }

//Ví dụ: Tìm số chẵn nhỏ nhất trong khoảng từ begin đến end

// let begin = 5;
// let end = 20;
// let result;
// for (let i = begin; i <= end; i++) {
//     if (i % 2 === 0) {
//         result = i;
//         break;
//     }
// }
// console.log(result);

//Ví dụ: Tính tổng các số chẵn từ 1 đến n
// let n = 13;
// let total = 0;
// //Lưu trữ kết quả sau mỗi lần tính toán
// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//         total += i;
//     }
// }
// console.log(total);

//Bài tập
//Tính giá trị biểu thức: 1 + 1*2 + 1*2*3 + ... + 1*2*3*...*n
// let n = 5; // 1 + 1*2 + 1*2*3 + 1*2*3*4 + 1*2*3*4*5
// let temp = 1;
// let total = 0;
// for (let i = 1; i <= n; i++) {
//     temp *= i; //i!
//     total += temp;
// }
// console.log(total);

//Ví dụ: Kiểm tra số nguyên tố
// - Số nguyên
// - Lớn hơn 1
// - CHỈ chia hết cho 1 và chính nó

//Kỹ thuật cắm cờ (Đặt cờ hiệu)
// let isPrime = true; //Giả định nó là đúng
// let n = 6.5;
// if (n % 1 !== 0 || n <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
// if (isPrime) {
//     console.log(`${n} là số nguyên tố`);
// } else {
//     console.log(`${n} không phải số nguyên tố`);
// }

