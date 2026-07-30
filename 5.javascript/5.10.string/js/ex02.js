//Bài tập 1: Cho trước 1 email, viết logic trả về username của email
// let email = 'hoangan.webgmail.com';
// let index = email.indexOf('@');
// if (index === -1) {
//     console.log('Không phải email');
// } else {
//     let username = email.slice(0, index);
//     console.log(username);
// }

//Bài tập: Tên hợp lệ bắt buộc phải viết hoa. Yêu cầu: Viết hàm kiểm tra xem tên có hợp lệ không? (Trả về true/false)
// const isNameValid = (fullname) => {
//     // return fullname === fullname.toUpperCase();
//     return fullname.toUpperCase().includes(fullname)
// }
// // console.log(isNameValid('Tạ Hoàng An'));
// console.log(isNameValid('TẠ HOÀNG AN'));

//Bài tập: Chuyển đổi tên sau thành hợp lệ
//tạ hoàng an => Tạ Hoàng An
//nguyễn văn sơn => Nguyễn Văn Sơn
//nguyễn văn tuấn anh => Nguyễn Văn Tuấn Anh
let fullname = 'nguyễn văn tuấn anh';

//1. Chuyển ký tự đầu thành chữ hoa
fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);

//2. Lặp qua các ký tự
for (let i = 1; i < fullname.length; i++) {
    const char = fullname.charAt(i);
    const charNext = fullname.charAt(i + 1);
    if (char === ' ' && charNext !== ' ') {
        const index = i + 1;
        fullname = fullname.slice(0, index) + fullname.charAt(index).toUpperCase() + fullname.slice(index + 1);
    }
}
console.log(fullname);
