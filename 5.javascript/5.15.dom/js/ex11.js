const header = document.querySelector('header');
const inner = header.querySelector('.inner');
const nav = header.querySelector('nav');
const topBtn = document.querySelector('.top-btn');
const innerHeight = inner.clientHeight;
const navHeight = nav.clientHeight;
window.addEventListener('scroll', () => {
    const pos = window.scrollY;
    if (pos >= innerHeight) {
        header.classList.add('fixed');
        document.body.style.paddingTop = `${navHeight}px`
    } else {
        header.classList.remove('fixed');
        document.body.style.paddingTop = null;
    }

    if (pos >= 100) {
        topBtn.classList.add('show');
    } else {
        topBtn.classList.remove('show');
    }
})

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

//offsetLeft
//offsetTop
//Intersection Observer