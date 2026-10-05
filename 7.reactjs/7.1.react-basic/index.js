const root = document.querySelector('#root');

//DOM ảo -> Object giống DOM thật (Browser DOM)

//Khi cập nhật giao diện -> Cập nhật trên DOM ảo -> Dùng thuật toán diff tìm ra điểm thay đổi -> Cập nhật ngược lại vào DOM thật -> Trình duyệt thay đổi giao diện

//1. Khởi tạo React Element
// const h1 = React.createElement('h1', {
//     id: 'title'
// }, "Học React không khó");

// const h2 = React.createElement('h2', {
//     className: 'sub-title'
// }, "Hello anh em");

// const btn = React.createElement('button', {
//     onClick: () => {
//         console.log('Clicked');
//     },
//     onMouseOver: () => {
//         console.log('onMouseOver');
//     }
// }, "Click me");

// const input = React.createElement('input', {
//     placeholder: 'Nhập gì đó...',
//     onChange: (e) => {
//         console.log(e.target.value);
//     }
// });

// const div = React.createElement('div', null, h1, h2, input, btn);

// const handleClick = () => {
//     console.log('Clicked');
// }
// const title = 'Ok chưa?';
// const isAuth = false;
// const demoJsx = <div>
//     {/* {isAuth && <h2>Bạn đã đăng nhập</h2>} */}
//     {/* {isAuth} */}
//     <h1 className="title">Hello anh em</h1>
//     <h2 className="sub-title">Học React không khó</h2>
//     <h3>{title}</h3>
//     <button onClick={handleClick}>Click me</button>
//     <p>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo est unde, atque, magni exercitationem omnis tenetur dolores sequi qui ut, consequuntur modi. Nulla voluptatem magnam a! Quasi architecto laudantium distinctio?
//     </p>
//     <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//         <li>Item 4</li>
//         <li>Item 5</li>
//     </ul>
// </div> //jsx

// const list = [
//     <p key={1}>Item 1</p>,
//     <p key={2}>Item 2</p>,
//     <p key={3}>Item 3</p>
// ]

// const users = [
//     {
//         id: 1,
//         name: "User 1",
//         email: "user1@gmail.com"
//     },
//     {
//         id: 2,
//         name: "User 2",
//         email: "user2@gmail.com"
//     },
//     {
//         id: 3,
//         name: "User 3",
//         email: "user3@gmail.com"
//     }
// ]

/*
[
    <h3 key="1">User 1</h3>,
    <h3 key="2">User 2</h3>,
    <h3 key="3">User 3</h3>,
]
*/

// const demoJsx = <>
//     <h1>Học JSX</h1>
//     <h2>Học React</h2>
//     <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//     </ul>
//     <div>
//         <h2>Ok chưa?</h2>
//         {list}
//         {
//             users.map(user => <h3 key={user.id}>{user.name} - {user.email}</h3>)
//         }
//     </div>
// </>

// console.log(demoJsx);

//main -> Title -> SubTitle

// const Subtitle = ({ text, onClick }) => {
//     return <>
//         <p>{text}</p>
//         <button onClick={onClick}>Click me</button>
//     </>
// }

// const Title = ({ title, age }) => {
//     const handleClick = () => {
//         console.log('Click from SubTitle');
//     }
//     return <div>
//         <h1>{title}</h1>
//         <h2>{age}</h2>
//         <Subtitle text="Ok chưa?" onClick={handleClick} />
//     </div>
// }

/*
const a = () => {}
const b = a
const c = b
const d = c
d() -> a sẽ chạy
*/

//-> Component
// - Hàm
// - Viết hoa ký tự đầu
// - Trả về jsx
// - Cách gọi giống như thẻ html

// const demoJsx = <div>
//     <Title title="Hoàng An" age="34" />
//     <Title title="Tuấn Anh" age="20" />
// </div>



//Closure
// const TodoList = () => {
//     const [name, setName] = React.useState("");
//     const [todoList, setTodoList] = React.useState([]);
//     const [error, setError] = React.useState("");
//     const [id, setId] = React.useState(0);
//     const handleChangeInput = (e) => {
//         setName(e.target.value);
//     }

//     const handleAdd = () => {
//         setError("");
//         if (!name) {
//             setError("Name is required");
//             return;
//         }
//         if (!id) {
//             setTodoList([{
//                 // id: crypto.randomUUID(),
//                 id: todoList.length + 1,
//                 name,
//                 completed: false
//             }, ...todoList]);
//         } else {
//             setTodoList(todoList.map((todo) => {
//                 if (todo.id === id) {
//                     return {
//                         ...todo,
//                         name
//                     }
//                 }
//                 return todo;
//             }));
//             setId(0);
//         }

//         setName("");
//     }

//     const handleRemove = (id) => {
//         //id -> event object
//         setTodoList(todoList.filter((todo) => todo.id !== id));
//     }

//     const handleCompleted = (id) => {
//         setTodoList(todoList.map(todo => {
//             if (todo.id === id) {
//                 return {
//                     ...todo,
//                     completed: !todo.completed
//                 }
//             }
//             return todo;
//         }));
//     }

//     const handleSort = () => {
//         setTodoList([...todoList].reverse())
//     }

//     return <div>
//         <div className="heading">
//             <input placeholder="Name..." onChange={handleChangeInput} value={name} />
//             <button onClick={handleAdd}>{id ? 'Update' : 'Add'}</button>
//         </div>
//         {error && <span style={{ color: 'red' }}>{error}</span>}
//         <button onClick={handleSort}>Sort</button>
//         <div>
//             <h3 style={{
//                 padding: 10,
//                 backgroundColor: 'yellow'
//             }}>Todo List</h3>
//             <ul>
//                 {
//                     todoList.map((todo, index) => <li key={todo.id}>
//                         {/* <input type="text" /> */}
//                         <input type="checkbox" onChange={() => handleCompleted(todo.id)} />
//                         <span className={todo.completed ? 'completed' : ''}>{todo.name}</span>
//                         <button onClick={() => handleRemove(todo.id)}>&times;</button>
//                         <button onClick={() => {
//                             setId(todo.id);
//                             setName(todo.name);
//                         }}>Edit</button>
//                     </li>)
//                 }
//             </ul>
//         </div>
//     </div>
// }

// let a = 0;
// const Counter = () => {
//     //Render phase -> Tính toán tìm node cần cập nhật
//     //Commit phase -> Sau khi đã cập nhật xuống browser
//     const [count, setCount] = React.useState(0);
//     const handeIncrement = React.useCallback(() => {
//         // setCount(count + 1);
//         setCount((prev) => prev + 1);
//         // if (a < 5) {
//         //     a++;
//         // }
//     }, []);
//     const handleDecrement = () => {
//         setCount((prev) => prev - 1);
//     }

//     // console.log('re-render', count);

//     // React.useEffect(() => {
//     //     console.log('Effect', count);
//     //     return () => {
//     //         console.log(`Cleanup`, count);
//     //     }
//     // }, [count]);

//     React.useEffect(() => {
//         console.log('Effect');
//         const handleKeyup = (e) => {
//             if (e.key === 'Enter') {
//                 setCount(prev => {
//                     return prev + 1;
//                 })
//             }
//         }
//         document.addEventListener('keyup', handleKeyup);
//         return () => {
//             console.log('cleanup');
//             //cleanup
//             document.removeEventListener('keyup', handleKeyup);
//         }
//     }, []);
//     //snapshot

//     return <div>
//         <h1>Count: {count}</h1>
//         <button onClick={handleDecrement}>-</button>
//         <button onClick={handeIncrement}>+</button>
//         {/* {console.log('UI Update', count)} */}
//     </div>
// }

// const App = () => {
//     const [isShow, setShow] = React.useState(true);
//     return <>
//         {isShow && <Counter />}
//         <button onClick={() => setShow(!isShow)}>Toggle</button>
//     </>
// }

// const Products = () => {
//     const [products, setProducts] = React.useState([]);
//     const [isLoading, setLoading] = React.useState(true);
//     const [error, setError] = React.useState();
//     React.useEffect(() => {
//         const getProducts = async () => {
//             try {
//                 const response = await fetch(`https://dummyjson.com/products`);
//                 const { products } = await response.json();
//                 setProducts(products);
//             } catch (error) {
//                 setError(error.message)
//             } finally {
//                 setLoading(false);
//             }
//         }
//         getProducts();
//     }, []);

//     if (isLoading) {
//         return <h3>Loading...</h3>
//     }

//     if (error) {
//         return <h3>Error: {error}</h3>
//     }

//     return <div>
//         <h1>Products</h1>
//         {
//             products.map((product) => <h3 key={product.id}>{product.title}</h3>)
//         }
//     </div>
// }

//B1. Component render
//B2. Khởi tạo state là []
//B3. Cập nhật UI
//B4. Effect chạy -> call api -> State change
//B5. Component re-render
//B6. Cập nhật UI mới dữ liệu products mới

const Input = React.forwardRef((props, ref) => {
    return <input ref={ref} type="text" placeholder="Tìm kiếm..." />
})

const Counter = () => {
    const [count, setCount] = React.useState(0);
    const value = React.useRef(0);
    const inputRef = React.useRef();
    const handleClick = () => {
        setCount(count + 1);
        value.current++;
    }
    React.useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    }, []);
    return <div>
        <Input ref={inputRef} />
        <h1>Count: {count}</h1>
        <h2>{value.current}</h2>
        <button onClick={handleClick}>Click</button>
    </div>
}

const element = <>
    <Counter />
</>

//2. Render lên trình duyệt thông qua thư viện ReactDOM
const container = ReactDOM.createRoot(root);
container.render(element);

//JSX -> Babel -> React Element -> ReactDOM -> DOM Element -> HTML

//useState
//useEffect

//State: 
// - Dữ liệu của component
// - Tự động kích hoạt re-render khi state thay đổi
// - Không được cập nhật trực tiếp state, phải thông qua hàm set
// - Hàm set -> bất đồng bộ

/*
<ul>
    <li key="0">Item 5</li>
    <li key="1">Item 1</li>
    <li key="2">Item 2</li>
    <li key="3">Item 3</li>
    <li key="4">Item 4</li>
</ul>

Side effect: Những công việc bên lề (bên ngoài) không nằm trong luồng chính của React (State change -> Update UI)
- storage: localStore, sessionStorage, cookie
- addEventListener
- http request: fetch, axios,...
- timer: setTimeout, setInterval, clearTimeout, clearInterval

Flow: State change -> UI Update -> Side Effect

1. State change
2. Component re-render
3. UI Update
4. Cleanup
5. Effect

//Quá trình gắn component vào DOM -> Mouting
//Quá trình gỡ component khỏi DOM -> Unmouting

Ref:
- Object đặc biệt có key là current -> {current: undefined}
- Không bị thay đổi khi component re-render
- Có thể cập nhật trực tiếp
- Khi ref thay đổi -> Không kích hoạt re-render
- Tham chiếu để phần tử DOM -> Áp dụng khi cần can thiệp trực tiếp vào DOM
*/

//Buổi sau: 
// - Setup dự án React với Vite + TypeScript
// - Làm quen cú pháp TypeScript trong React