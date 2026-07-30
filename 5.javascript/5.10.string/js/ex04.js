//Viết hàm kiểm tra độ mạnh yếu mật khẩu
// - Lớn hơn hoặc bằng 8 ký tự
// - Có ít nhất 1 chữ hoa
// - Có ít nhất 1 chữ thường
// - Có ít nhất 1 chữ số
// - Có ít nhất 1 ký tự đặc biệt sau: !@#$%^&*()

const isStrengthPassword = (password) => {
    let isUpperCase = false;
    let isLowerCase = false;
    let isNumber = false;
    let isSymbol = false;
    if (password.length < 8) {
        return {
            length: false,
            isUpperCase, isLowerCase, isNumber, isSymbol
        };
    }
    const number = '0123456789';
    const symbol = '!@#$%^&*()';

    for (let i = 0; i < password.length; i++) {
        const char = password.charAt(i);
        if (char >= 'A' && char <= 'Z') {
            isUpperCase = true;
        }
        if (char >= 'a' && char <= 'z') {
            isLowerCase = true;
        }
        if (number.includes(char)) {
            isNumber = true;
        }
        if (symbol.includes(char)) {
            isSymbol = true;
        }
    }

    // return isUpperCase && isLowerCase && isNumber && isSymbol;
    return {
        isUpperCase, isLowerCase, isNumber, isSymbol, isLength: true
    }
}
console.log(isStrengthPassword('123'));
;