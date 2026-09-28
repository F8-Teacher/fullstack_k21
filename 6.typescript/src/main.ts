//Cách khai báo kiểu dữ liệu

//let tenbien:tenkieu
//const tenham = (thamso1: kieu1, thamso2: kieu2): kieutrave => {}

// let a: string = 'Hoàng An';
// const sum = (a: number, b: number): number => a + b;

//Các kiểu dữ liệu cơ bản
// - string
// - number
// - boolean
// - undefined
// - null
// - BigInt
// - Symbol

//Kiểu any, unknown
// let a: any = "An";
// a = 10;

// let b: unknown = 'An';
// b = 10;

// let a: any = 'Hoàng An';
// let b: string = a;

// let a: unknown = 'Hoàng An';

// let b: string = a;

//unknown dùng khi nào?
// - Không biết trước các kiểu dữ liệu -> yêu cầu kiểm tra trước biến unknown trước khi sử dụng (gán vào biến khác, trả về)
// - Dùng để ép kiểu (TypeScript)
// let a: string = '10';
// let b: number = +a;
// console.log(b, typeof b);

//Array => Công thức: tenkieuphantu[]
// const numbers: number[] = [1, 2, 3, 4];
// const names: string[] = ['An', 'Dũng', 'Tùng'];

//Tuple: Áp dụng khi 1 mảng có nhiều kiểu dữ liệu, giới hạn số lượng phần tử
// const myArr: [number, string, boolean?] = [10, 'An'];

//Object
// const user: {
//     name: string;
//     age: number;
//     isVerified?: boolean;
//     details: {
//         address: string;
//         province: string;
//     }
// } = {
//     details: {
//         address: 'Tây Mỗ',
//         province: 'HN'
//     },
//     name: 'An',
//     age: 34,
//     isVerified: false
// }

//Mix array + object
// const arr: { id: number, name: string, age: number }[] = [
//     {
//         id: 1,
//         name: 'An',
//         age: 30
//     },
//     {
//         id: 2,
//         name: 'Tuấn',
//         age: 30
//     }
// ]

//Định nghĩa kiểu là 1 hàm
//name: string;
//getName: Hàm có 1 tham số trả về string
// const user: {
//     name: string;
//     getName: (val: string) => string;
//     showMessage: () => void;
// } = {
//     name: 'An',
//     getName(val: string) {
//         return 'Hoàng'
//     },
//     showMessage() {
//         console.log('Hello anh em');
//     }
// }

//Bài tập
const debounce = (callback, timeout = 500) => {
    let id;
    return (...args) => {
        if (id) {
            clearTimeout(id);
        }
        id = setTimeout(() => {
            callback(...args);
        }, timeout)
    }
}

const func1 = debounce((a: number, b: number) => {
    console.log(a, b);
}, 500);

func1(10, 20);

const func2 = debounce((value: string) => {
    console.log(value);
}, 1000)
func2('An');