//async/await
//- function1
//- function2
//-...

//async function
// - Luôn trả về Promise (Bọc promise)
// - Sử dụng được từ khóa await

//await keyword
// - Lấy dữ liệu của Promise (thay thế cho then)
// - Câu lệnh bên dưới await sẽ phải chờ promise trả về dữ liệu

// const myPromise1 = () => new Promise(resolve => setTimeout(() => resolve('Hello anh em 1'), 2000));
// const myPromise2 = () => new Promise(resolve => setTimeout(() => resolve('Hello anh em 2'), 4000));
// const myPromise3 = () => new Promise(resolve => setTimeout(() => resolve('Hello anh em 3'), 2000));

// const doSomething = async () => {
//     const start = Date.now();
//     // const data1 = await myPromise1();
//     // const data2 = await myPromise2();
//     // const data3 = await myPromise3();
//     const [data1, data2, data3] = await Promise.all([myPromise1(), myPromise2(), myPromise3()]);
//     console.log(data2);
//     console.log(data1);
//     console.log(data3);
//     const end = Date.now();
//     const time = (end - start) / 1000;
//     console.log(`Time: ${time}s`);
// }
// doSomething()

//Bắt lỗi
// try {
//     // abc(); //Phát hiện ra lỗi -> Thoát try -> Chuyển xuống catch
//     // a();
//     // const a = 20;
//     // console.log(a);
//     const age = 18;
//     if (age < 18) {
//         throw new Error("age phải từ 18")
//     }

// } catch (error) {
//     console.log(error.message);
// } finally {
//     console.log('Hoàn thành');
// }
// document.body.innerHTML = `<h1>Hello anh em</h1>`

// const myPromise1 = () => new Promise((resolve, reject) => setTimeout(() => reject(new Error('Lỗi không xác định 1')), 2000));
// const myPromise2 = () => new Promise(resolve => setTimeout(() => resolve('Hello anh em 2'), 4000));
// const doSomething = async () => {
//     try {
//         const data1 = await myPromise1();
//         console.log(data1);

//     } catch (error) {
//         console.log(error.message);
//     }

//     try {
//         const data2 = await myPromise2();
//         console.log(data2);
//     } catch (error) {
//         console.log(error.message);
//     }

//     document.body.innerHTML = `Hello anh em`;
// }
// doSomething();

const getUser = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = [
                {
                    id: 1,
                    name: "User 1",
                    salary: 1000
                },
                {
                    id: 2,
                    name: "User 2",
                    salary: 1000
                },
                {
                    id: 3,
                    name: "User 3",
                    salary: 3000
                }
            ];
            resolve(users.find(user => user.id === userId));
        }, Math.random() * 2000);
    })
}

// const ids = [1, 2, 3];

//Tính tổng salary (Dùng async await)
// const getTotal = async () => {
//     let total = 0;
//     const start = Date.now();
//     for (const id of ids) {
//         const user = await getUser(id);
//         total += user.salary;
//     }
//     console.log(total);
//     const end = Date.now();
//     console.log(`${(end - start) / 1000}`);

// }
// getTotal();

// const getTotal = async () => {
//     const start = Date.now();
//     const total = (await Promise.all(ids.map(id => getUser(id)))).reduce((acc, cur) => acc + cur.salary, 0);
//     console.log(total);
//     const end = Date.now();
//     console.log(`${(end - start) / 1000}`);
// }
// getTotal();

//return promise, return await promise
// const myPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const status = false;
//         if (status) {
//             resolve('My Data');
//         } else {
//             reject(new Error('My Error'))
//         }

//     }, 2000);
// })
// const display = async () => {
//     // try {
//     //     return await myPromise();
//     // } catch (error) {
//     //     // return {
//     //     //     error: "Customer error"
//     //     // }
//     //     throw new Error("Custom Error");
//     // }
//     return await myPromise();
// }
// display().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// })

//display -> async promise -> myPromise -> data

// const display2 = async () => {
//     throw new Error("My Error");
// }
// display2().then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

//IIFE
// (async (id) => {
//     const data = await getUser(id);
//     console.log(data);
// })(2)