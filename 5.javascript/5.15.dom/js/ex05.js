// const btn = document.querySelector('button');
// btn.addEventListener('click', function (e) {
//     console.log(this);
//     console.log(e.target);
// })

//Dynamic html
// const items = document.querySelectorAll('ul li');
// const ul = document.querySelector('ul');
// items.forEach((item) => {
//     item.addEventListener('click', () => {
//         item.style.color = 'red';
//     })
// });
// btn.addEventListener('click', () => {
//     ul.innerHTML += `<li>New Item</li>`;
//     const items = document.querySelectorAll('ul li');
//     items.forEach((item) => {
//         item.addEventListener('click', () => {
//             item.style.color = 'red';
//         })
//     });
// })

// const ul = document.querySelector('ul');
// btn.addEventListener('click', () => {
//     ul.innerHTML += `<li>New Item</li>`;
// });

// ul.addEventListener('click', (e) => {
//     if (e.target.nodeName === "LI") {
//         e.target.style.color = 'red';
//     }
// })

const box = document.querySelector('.box');
box.addEventListener('click', (e) => {
    // console.log(`clientX: ${e.clientX}`);
    // console.log(`clientY: ${e.clientY}`);
    console.log(`offsetX: ${e.offsetX}`);
    console.log(`offsetY: ${e.offsetY}`);

});