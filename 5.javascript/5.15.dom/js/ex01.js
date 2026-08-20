//DOM = Document Object Model => Mô hình hóa HTML (String) => Object => Lập trình viên thao tác với object đó
//Công việc:
// - Thêm các event (Sự kiện, thao tác của user lên thẻ html)
// - Lắng nghe event: Viết logic cho các sự kiện có sẵn
// - Thêm, sửa, xóa thẻ html: attribute, text
// console.dir(document.body.children[0]);
// document.body.children[0].innerHTML = 'DOM';
// document.body.children[0].id = 'title';
// document.body.children[0].className = 'title';

//Làm thế nào để truy cập vào 1 phần tử html? => Có sẵn các method để truy cập
//1. Truy cập thông qua id -> Trả về 1 Element Node
// document.getElementById(id)
// const heading = document.getElementById('title');
// console.dir(heading);

//2. Truy cập thông qua class -> Trả về 1 danh sách chứa các element node
// document.getElementsByClassName(class)
// const headingList = document.getElementsByClassName('sub-title');
// console.log(headingList);

//3. Truy cập thông qua tagname -> Trả về 1 danh sách chứa các element node
// document.getElementsByTagName(tagname)
// const headingList = document.getElementsByTagName('h2');
// console.log(headingList);

//4. Truy cập phần tử thông qua css selector -> Trả về 1 element node
// const heading = document.querySelector('h2.sub-title');
// console.log(heading);

//5.  Truy cập tất cả phần tử thông qua css selector -> Trả về 1 danh sách chứa các element node
// const headingList = document.querySelectorAll('.sub-title');
// console.log(headingList);

// const box = document.querySelector('.box');
// const h2One = box.querySelector('h2');
// const btn = box.querySelector('button');
// const h2Two = document.querySelector('.content h2');
// console.log(h2One);
// console.log(h2Two);

//Lắng nghe sự kiện
//Các thẻ html có sẵn các sự kiện -> Gán logic cho sự kiện tương ứng với Element Node

// const btn1 = document.querySelector('.btn');
// const btn2 = document.querySelector('.btn2');

// let count = 0;
// const handleClick = () => {
//     count++;
//     console.log(`Count: ${count}`);

// }

// btn1.addEventListener("click", () => {
//     count++;
//     console.log(`Count: ${count}`);

// });

// btn2.addEventListener('click', () => {
//     btn1.removeEventListener('click', () => {
//         count++;
//         console.log(`Count: ${count}`);
//     })
// })

//Danh sách các event hay dùng
//1. click
//2. dblclick
//3. mouseup
//4. mousedown
//5. mousemove
//6. mouseover
//7. mouseout
//8. keyup
//9. keydown
//10. input
//11. change: Khi thay đổi 1 trường trong form
//12. blur
//13. focus
//14. submit
// const inputEl = document.querySelector('input');
// inputEl.addEventListener('input', () => {
//     //e = event object
//     console.log(`Value: ${inputEl.value}`);
// })

// inputEl.addEventListener('focus', (e) => {
//     console.log('focus');
// })
// inputEl.addEventListener('blur', (e) => {
//     console.log('blur');
// })

// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault(); //Ngăn hành động mặc định của thẻ html
//     console.log('submit');
// })
// const a = document.querySelector('a');
// a.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('clicked');
// })
// a.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// })

// document.addEventListener('keyup', (e) => {
//     if (e.key === "Enter") {
//         document.body.style.background = 'blueviolet';
//     }

//     if (e.key === "Escape") {
//         document.body.style.background = 'green';
//     }
// })

// const list = document.querySelectorAll('ul li');
// list.forEach((item) => {
//     item.addEventListener('click', () => {
//         console.log(item);
//     })
// })
// for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener('click', () => {
//         console.log(list[i]);
//     })
// }

//Truy cập và thay đổi các thông tin trong 1 thẻ html
//1. text
// - innerHTML
// - innerText
// - textContent
// - outerHTML
// const box = document.querySelector('.box');
// console.log(box.outerHTML);
// box.outerHTML = `<i>Hello</i>`


//2. attribute
// - cungtenthuoctinhhtml
// const a = document.querySelector('a');
// console.log(a.href);
// console.log(a.id);
// console.log(a.className);
// console.log(a.title);
// a.href = 'https://f8.edu.vn'

// const btn = document.querySelector('button');
// const textarea = document.querySelector('textarea');
// btn.addEventListener('click', () => {
//     console.log(textarea.innerHTML);
// })