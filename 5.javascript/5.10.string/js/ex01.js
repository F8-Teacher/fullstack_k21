// let fullname = 'An';
// console.log(fullname, typeof fullname);

// let fullname = String(123);
// console.log(fullname, typeof fullname);

//String
// console.dir(String);

console.log(String.prototype);

// let str = 'Học lập trình không khó';

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }
// console.log(str.charAt(-1));
// console.log(str.at(-2));

// console.log(str.charCodeAt(0));

// let char = 'a';
// console.log(char.charCodeAt(0));

// console.log(str.slice(1, 5));
// console.log(str.slice(1));

// console.log(str.slice(0, -1));
// console.log(str.slice(-3));

// let str = 'Học lập trình JavaScript tại F8. Học lập trình JavaScript tại F8.'
// console.log(str.replaceAll('JavaScript', 'Java'));

// let str = 'Hello anh em, so dien thoai +84388865169 và 0123456789'
// console.log(str.replace(/(?:0|\+84)\d{9}/g, '***'));

// let str = '   Học lập trình JavaScript tại F8. Học lập trình JavaScript tại F8.    '
// console.log(str.includes('F81'));
// console.log(str.toUpperCase());

// console.log(str);
// console.log(str.trimEnd());

// let char = '*';
// console.log(char.repeat(10));

// let phone = '0123455356789';
// let start = 3;
// let end = 2;
// let newPhone = phone.slice(0, start) + '*'.repeat(phone.length - start - end) + phone.slice(0 - end);
// console.log(newPhone);

// let pathname = '/admin/users/123';
// let pathname = '/khoa-hoc';
// let pathname = '/khoa-hoc/fullstack';
// console.log(pathname.endsWith('.html'));

// let fullname = 'Tạ Hoàng An';
// console.log(fullname.split(''));

// let number = 4;
// number = number.toString().padStart(2, 0)
// console.log(number);

// let content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks 2026 to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.`;

// let pattern = /\d{4}/g
// let result = content.match(pattern);
// console.log(result);
