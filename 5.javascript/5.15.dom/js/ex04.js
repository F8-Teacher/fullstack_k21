// const box = document.querySelector('.box');
// const btn = document.querySelector('button');

// box.addEventListener('click', () => {
//     console.log('box');
// })

// btn.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('button');
// })

const chat = document.querySelector('.js-chat');
const chatTitle = chat.querySelector('.js-title');
const closeBtn = chat.querySelector('.js-close');
const chatBody = chat.querySelector('.js-body');
const chatHeading = chat.querySelector('.js-chat-heading');
let offsetX = 0;
let isDrag = false;
const onOpen = () => {
    chatBody.style.height = '300px';
    chatBody.classList.remove('py-0');
}

const onClose = () => {
    chatBody.style.height = '0';
    chatBody.classList.add('py-0');
}

chatTitle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isDrag) {
        return;
    }
    onOpen();
});
closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isDrag) {
        return;
    }
    onClose();
});
document.addEventListener('click', () => {
    if (isDrag) {
        return;
    }
    onClose();
});

//Kéo thả

chatHeading.addEventListener('mousedown', (e) => {
    e.preventDefault();

    const { paddingLeft } = window.getComputedStyle(chatHeading);
    const paddingLeftValue = paddingLeft.replace('px', '');
    offsetX = chatHeading.clientWidth - e.offsetX - paddingLeftValue;

    document.addEventListener('mousemove', handleDrag);
});

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', handleDrag);
    setTimeout(() => {
        isDrag = false;
    }, 500);
})

const handleDrag = (e) => {
    isDrag = true;
    const clientX = e.clientX;
    const bodyWidth = document.body.clientWidth;
    let value = bodyWidth - clientX - offsetX;

    if (value < 0) {
        value = 0;
    }

    if (value + chat.clientWidth > bodyWidth) {
        value = bodyWidth - chat.clientWidth;
    }

    chat.style.right = `${value}px`
}
