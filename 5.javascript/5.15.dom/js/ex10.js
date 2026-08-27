const ul = document.querySelector('ul');
const deleteBtn = document.querySelector('.delete-btn');
let selectedList = [];
const highlight = (element) => {
    element.classList.add('highlight');
    setTimeout(() => {
        element.classList.remove('highlight');
    }, 300);
}
ul.addEventListener('click', (e) => {
    const { target } = e;
    const li = target.parentElement;
    //Down
    if (target.classList.contains('down')) {
        const nextElement = li.nextElementSibling;
        if (!nextElement) {
            return;
        }
        ul.insertBefore(nextElement, li);
        highlight(li);
    }

    //Up
    if (target.classList.contains('up')) {
        const prevElement = li.previousElementSibling;
        if (!prevElement) {
            return;
        }
        ul.insertBefore(li, prevElement);
        highlight(li);
    }

    if (target.nodeName === 'LI') {
        const itemSelected = ul.querySelector('.selected');
        target.classList.toggle('selected');
        if (!e.metaKey && !e.ctrlKey) {
            if (itemSelected) {
                itemSelected.classList.remove('selected');
            }
        } else {
            //Push item to array
            if (!selectedList.find((val) => val === target)) {
                selectedList.push(target);
            } else {
                selectedList = selectedList.filter((val) => val !== target)
            }
        }

        //Enable delete button
        deleteBtn.disabled = !target.classList.contains('selected');
    }
});

//Context menu
let currentContext;
const createItem = (parent, text, listener) => {
    const item = document.createElement('p');
    item.className = 'menu-item';
    item.innerText = text;
    parent.append(item);
    if (typeof listener === 'function') {
        item.addEventListener('click', listener);
    }
}
const createContextMenu = (element, style = {}) => {
    if (currentContext) {
        document.body.removeChild(currentContext);
    }
    const list = document.createElement('div');
    list.className = 'context-menu';
    Object.assign(list.style, style);
    createItem(list, 'Edit', () => {
        console.log('Edit');
        document.body.removeChild(currentContext);
        currentContext = null;
    });
    createItem(list, 'Delete', () => {
        element.remove();
        document.body.removeChild(currentContext);
        currentContext = null;
    });
    document.body.append(list);
    currentContext = list;
}
ul.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const { target } = e;
    if (target.nodeName === 'LI') {
        createContextMenu(target, {
            top: e.clientY + 'px',
            left: e.clientX + 'px'
        });
    }
});

document.addEventListener('click', (e) => {
    const itemSelected = ul.querySelector('.selected');

    //Remove single selected
    if (!selectedList.length) {
        if (itemSelected && !ul.contains(e.target)) {
            itemSelected.classList.remove('selected');
            deleteBtn.disabled = true;
        }
    } else if (!ul.contains(e.target)) {
        //Remove multiple selected
        selectedList.forEach((val) => {
            val.classList.remove('selected');
        });
        selectedList = [];
        deleteBtn.disabled = true;
    }

    if (currentContext && !currentContext.contains(e.target)) {
        document.body.removeChild(currentContext);
        currentContext = null;
    }
});

deleteBtn.addEventListener('click', () => {
    if (!selectedList.length) {
        const itemSelected = ul.querySelector('.selected');
        itemSelected.remove();
    } else {
        selectedList.forEach((val) => {
            val.remove();
        });
        selectedList = [];
    }

    deleteBtn.disabled = true;
})