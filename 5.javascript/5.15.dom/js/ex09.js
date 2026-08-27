const root = document.querySelector('#root');
const h1 = document.createElement('h1');
h1.innerText = `Count: `;

// const span = document.createElement('span');
// span.innerText = 0;
// h1.append(span);
const textNode = document.createTextNode(0);
textNode.data = 0;
h1.append(textNode);

const button = document.createElement('button');
button.innerText = '+';
button.addEventListener('click', () => {
    textNode.data++;
})

root.append(h1);
root.append(button);

//textNode (Object)