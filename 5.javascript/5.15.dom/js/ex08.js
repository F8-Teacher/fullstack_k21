//HTML -> DOM -> Access -> Update

//Tạo Node -> Update -> Render (Browser)

const root = document.querySelector('#root');
//document.createElement('tag')
const h1 = document.createElement('h1');
h1.innerText = 'Học JS không khó';
h1.id = 'title';

const h1Clone = h1.cloneNode(true);
h1Clone.innerText = 'Học DOM';

const btn = document.createElement('button');
btn.innerText = 'Click me';

const ul = document.createElement('ul');
for (let i = 0; i < 5; i++) {
    const li = document.createElement('li');
    li.innerText = 'Item ' + (i + 1);
    ul.append(li);
}

const h2 = document.createElement('h2');
h2.innerText = `This is h2`;

btn.addEventListener('click', () => {
    // h1.innerText = 'Hello anh em';
    // const li = document.createElement('li');
    // li.innerText = `New Item`;
    // ul.append(li);
    // root.insertBefore(h2, ul);
    // root.insertBefore(h2, h1.nextElementSibling);
    // root.replaceChild(h2, h1);
    // root.append(h1);
    root.removeChild(h1);
})


//parent.append(node) -> Đẩy xuống cuối cùng
//parent.prepend(node) -> Đẩy lên đầu tiên
root.append(h1);
root.append(h1Clone);
root.prepend(btn);
root.append(ul);

//JSX -> Compiler -> DOM Node