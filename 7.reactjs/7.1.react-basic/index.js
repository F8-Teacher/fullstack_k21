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

const Subtitle = ({ text, onClick }) => {
    return <>
        <p>{text}</p>
        <button onClick={onClick}>Click me</button>
    </>
}

const Title = ({ title, age }) => {
    const handleClick = () => {
        console.log('Click from SubTitle');
    }
    return <div>
        <h1>{title}</h1>
        <h2>{age}</h2>
        <Subtitle text="Ok chưa?" onClick={handleClick} />
    </div>
}

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

const demoJsx = <div>
    <Title title="Hoàng An" age="34" />
    <Title title="Tuấn Anh" age="20" />
</div>

//2. Render lên trình duyệt thông qua thư viện ReactDOM
const container = ReactDOM.createRoot(root);
container.render(demoJsx);

//JSX -> Babel -> React Element -> ReactDOM -> DOM Element -> HTML

//useState
//useEffect