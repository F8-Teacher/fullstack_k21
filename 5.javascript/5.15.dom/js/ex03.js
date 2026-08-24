// const box = document.querySelector('.box');
// console.log(box.style);
// box.style.color = 'red';
// box.style.backgroundColor = 'yellow';

// const css = {
//     color: 'red',
//     backgroundColor: 'yellow',

// }
// Object.assign(box.style, css);
// box.style = {
//     ...box.style,
//     ...css
// }

// document.body.style.backgroundImage = `url('https://fastly.picsum.photos/id/432/536/354.jpg?hmac=L6dLXhZTK1hB0U3VBUtF6TlrtQid5V8XHDvNBPyxnN4')`;
// document.body.style.backgroundRepeat = 'no-repeat';

const carousel = document.querySelector('.js-carousel');
const tracks = carousel.querySelector('.js-carousel-tracks');
const nextBtn = carousel.querySelector('.js-next');
const prevBtn = carousel.querySelector('.js-prev');
const itemsLength = tracks.children.length;

let position = 1;
const changeSlide = (value) => {
    tracks.style.transform = `translateX(${value}px)`;
}

const handleNextSlide = () => {
    if (position === itemsLength) {
        return;
    }
    tracks.classList.add('transition');
    const itemWidth = tracks.clientWidth;
    position++;
    const value = 0 - itemWidth * (position - 1);
    changeSlide(value);
}

const handlePrevSlide = () => {
    if (position === 1) {
        return;
    }
    tracks.classList.add('transition');
    const itemWidth = tracks.clientWidth;
    position--;
    const value = 0 - itemWidth * (position - 1);
    changeSlide(value);
}

const calcWidthResize = () => {
    const itemWidth = tracks.clientWidth;
    const value = 0 - itemWidth * (position - 1);
    tracks.classList.remove('transition');
    changeSlide(value);
}

nextBtn.addEventListener('click', handleNextSlide);
prevBtn.addEventListener('click', handlePrevSlide);
window.addEventListener('resize', calcWidthResize);