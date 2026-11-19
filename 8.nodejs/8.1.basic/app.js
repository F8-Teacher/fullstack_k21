//Module
// - Mặc định commonjs (require)
// - Muốn đổi sang esmodule
// + Đặt phần mở rộng là .mjs
// + Trong package.json -> Đổi type => 'module'

//Module có sẵn
// - path

// import path from "path";
// import fs from "fs";
// import "./inc/utils.js";

//Tạo đường dẫn tới data/data.json

// const myPath = import.meta.dirname + '/data/data.json'
// const myPath = path.join(import.meta.dirname, 'data', 'data.json');
// console.log(myPath);

// const data = await fs.readFileSync(myPath);

// const myPath = path.resolve('data', 'data.json');
// console.log(myPath);

// const myPath = './folder-1/folder-2/ten-file.jpg';
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.basename(myPath));

// import url from "url";

// const myUrl = '/khoa-hoc/nodejs?s=abc#123';
// const parsed = url.parse(myUrl, true);
// console.log(parsed);;
// const parsed = new URL(myUrl, 'https://f8.edu.vn:7999')
// console.log(parsed);

//file system (fs): đọc, ghi, xóa...
// import fs from "fs";
// import path from "path";
// fs.readFile(path.join(import.meta.dirname, 'data', 'data.txt'), 'utf-8', (err, data) => {
//     console.log(err);
//     console.log(data);
// });
// import fs from "fs/promises";
// import path from "path";
// const data = await fs.readFile(path.join(import.meta.dirname, 'data', 'data.txt'), 'utf-8');
// console.log(data);

// import fs from "fs";
// import path from "path";
// const data = fs.readFileSync(path.join(import.meta.dirname, 'data', 'data.txt'), 'utf-8');
// console.log(data);

import fs from "fs/promises";
import path from "path";
// await fs.writeFile(path.join(import.meta.dirname, 'data', 'data.txt'), 'Chào anh em K21\n', {
//     flag: 'a+'
// });

// await fs.writeFile(path.join(import.meta.dirname, 'logs', 'access.log'), '2026-11-19 14:22:01.104 [INFO]  [AuthService] User \'jdoe\' successfully logged in from IP 192.168.1.45\n', {
//     flag: 'a+'
// })

// const existingFile = async (path) => {
//     try {
//         await fs.access(path);
//         return true;
//     } catch {
//         return false;
//     }
// }

// const existing = await existingFile(path.join(import.meta.dirname, 'data'));

// if (existing) {
//     await fs.unlink(path.join(import.meta.dirname, 'data'));
// }

// await fs.rmdir(path.join(import.meta.dirname, 'data'));

// const data = await fs.stat(path.join(import.meta.dirname, 'data'));
// console.log(data.isDirectory());
// console.log(data.isFile());

// const scans = await fs.readdir(path.join(import.meta.dirname, 'data'));
// console.log(scans);

const deleteFolder = async (path) => {
    //Viết hàm xóa folder bất kỳ
}

deleteFolder(path.join(import.meta.dirname, 'data'));