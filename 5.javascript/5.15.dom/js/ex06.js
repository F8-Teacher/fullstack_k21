//DOM Navigation
// - children
// - parentElement
// - nextElementSibling
// - previousElementSibling

// const btn = document.querySelector('button');
// console.log(btn.parentElement);
// console.log(btn.nextElementSibling);
// console.log(btn.previousElementSibling);

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const ul = document.querySelector('ul');
nextBtn.addEventListener('click', () => {
    let activeItem = document.querySelector('.active');
    let nextItem = activeItem.nextElementSibling;
    if (!nextItem) {
        nextItem = ul.firstElementChild;
    }
    nextItem.classList.add('active');
    activeItem.classList.remove('active');
});

prevBtn.addEventListener('click', () => {
    let activeItem = document.querySelector('.active');
    let prevItem = activeItem.previousElementSibling;
    if (!prevItem) {
        prevItem = ul.lastElementChild;
    }
    prevItem.classList.add('active');
    activeItem.classList.remove('active');
});

ul.addEventListener('click', (e) => {
    if (e.target.nodeName === 'SPAN') {
        const li = e.target.closest('li');
        if (!li.classList.contains('active')) {
            li.remove();
        }

    }
})