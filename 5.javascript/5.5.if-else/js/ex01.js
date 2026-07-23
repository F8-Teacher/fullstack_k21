// let number = 3;
// if (number % 2 === 0) {
//     console.log('Số chẵn');
// } else {
//     console.log('Số lẻ')
// }

// let age = 0;
// if (age < 0) {
//     console.log('Tuổi không hợp lệ');
// } else if (age < 5) {
//     console.log('Trẻ sơ sinh');
// } else if (age < 18) {
//     console.log('Trẻ dưới vị thành niên');
// } else if (age < 30) {
//     console.log('Thanh niên');
// } else if (age < 40) {
//     console.log('Trung niên');
// } else {
//     console.log('Người cao tuổi');
// }

// let email = 'an@gmail.com';
// let password = '';
// if (!email || !password) {
//     if (!email) {
//         console.log('Vui lòng nhập email');
//     } else {
//         console.log('Vui lòng nhập mật khẩu');
//     }
// } else {
//     console.log('Thỏa mãn điều kiện');
// }

//Bài tập: Cho trước lương của 1 nhân viên, tính lương thực nhận sau khi đã trừ thuế
// - Lương <= 5tr -> Thuế 0%
// - 5tr < Lương <= 15tr -> Thuế 3%
// - 15tr < Lương <= 20tr -> Thuế 5%
// - Lương > 20tr -> Thuế 7%

// let salary = -6000000;
// let income; //Thu nhập
// let tax;

// //Logic viết ở đây
// const THRESHOLD_1 = 5000000;
// const THRESHOLD_2 = 15000000;
// const THRESHOLD_3 = 20000000;

// const TAX_RATE_1 = 0;
// const TAX_RATE_2 = 3;
// const TAX_RATE_3 = 5;
// const TAX_RATE_4 = 7;

// if (salary < 0) {
//     console.log('Lương không được phép âm');
// } else if (salary <= THRESHOLD_1) {
//     tax = salary * TAX_RATE_1 / 100;
// } else if (salary <= THRESHOLD_2) {
//     tax = salary * TAX_RATE_2 / 100;
// } else if (salary <= THRESHOLD_3) {
//     tax = salary * TAX_RATE_3 / 100;
// } else {
//     tax = salary * TAX_RATE_4 / 100;
// }

// if (tax) {
//     income = salary - tax;
//     console.log(income);
// }

/*
Bài tập: Tính tiền taxi

Viết chương trình tính tiền taxi từ số km biết trước

- Số km ≤ 1 giá 15000đ
- 1 < số km ≤ 5 giá 13500đ
- Số km > 5 giá 11000đ
- Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền

Ví dụ: 
- Đi 4km => Số tiền cước = 1 * 15000 + 3 * 13500 = 55.500
- Đi 6 km => Số tiền cước = 1 * 15000 + 4 * 13500 + 1 * 11000 = 80.000
- Đi 125km => Số tiền cước = (1 * 15000 + 4 * 13500 + 120 * 11000) - 10% = 1.250.100
*/

let km = 125;
let total;

const THRESHOLD_1 = 1;
const THRESHOLD_2 = 5;
const THRESHOLD_3 = 120;

const PRICE_1 = 15000;
const PRICE_2 = 13500;
const PRICE_3 = 11000;

const DISCOUNT = 10;

if (km < 0) {
    console.log('Số km phải >= 0');
} else if (km <= THRESHOLD_1) {
    total = km * PRICE_1;
} else if (km <= THRESHOLD_2) {
    total = THRESHOLD_1 * PRICE_1 + (km - THRESHOLD_1) * PRICE_2;
} else {
    total = THRESHOLD_1 * PRICE_1 + (THRESHOLD_2 - THRESHOLD_1) * PRICE_2 + (km - THRESHOLD_2) * PRICE_3;
    if (km > THRESHOLD_3) {
        total -= total * DISCOUNT / 100;
    }
}
if (total) {
    console.log(total);
}


