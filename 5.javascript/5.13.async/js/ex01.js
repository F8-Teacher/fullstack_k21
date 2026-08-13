//Đồng bộ: Chạy tuần tự
// - Step 1 -> 1s
// - Step 2 -> 1s
// - Step 3 -> 1s
// - Step 4 -> 1s

//Bất đồng bộ: Không chờ đợi
// - Step 1 -> 1s
// - Step 2 -> 1s
// - Step 3 -> 1s
// - Step 4 -> 1s

// setTimeout(() => {
//     console.log(1);
// }, 0);
// console.log(2);

//Xử lý bất đồng bộ là làm gì? => Chuyển về cho nó hoạt động giống đồng bộ
//1. Callback
//2. Promise
//3. Async Await
// const getUsers = (callback) => {
//     setTimeout(() => {
//         const users = ['User 1', 'User 2', 'User 3'];
//         if (typeof callback === 'function') {
//             callback(users);
//         }
//     }, 1000);
// }
// const getProducts = (callback) => {
//     setTimeout(() => {
//         const products = ['Products 1', 'Products 2', 'Products 3'];
//         if (typeof callback === 'function') {
//             callback(products);
//         }
//     }, 1000);
// }
// const getPosts = (callback) => {
//     setTimeout(() => {
//         const posts = ['Post 1', 'Post 2', 'Post 3'];
//         if (typeof callback === 'function') {
//             callback(posts);
//         }
//     }, 1000);
// }
// getUsers((data) => {
//     console.log(data);
//     getProducts((data) => {
//         console.log(data);
//         getPosts(data => {
//             console.log(data);
//         })
//     })
// });
// --> Callback Hell

// const getPosts = (callback) => {
//     const xhttp = new XMLHttpRequest();
//     xhttp.open("GET", "https://dummyjson.com/posts", true);
//     xhttp.onload = () => {
//         const data = JSON.parse(xhttp.responseText);
//         if (typeof callback === 'function') {
//             callback(data);
//         }
//     }
//     xhttp.send();

// }

// getPosts((data) => {
//     console.log(data);
//     console.log('Đã xong');
// });

//Promise: Áp dụng kỹ thuật chain để giải quyết bài toán lồng nhau của callback
//Ví dụ: a().b().c()
//Trạng thái:
// - pending --> Trạng khi mới bắt đầu và tác vụ bất đồng bộ chưa trả về kết quả
// - fulfilled --> Tác vụ bất đồng bộ trả về kết quả thành công
// - rejected --> Tác vụ bất đồng bộ trả về kết quả bất thại

//Lưu ý: Khi Promise chuyển trạng thái pending về fulfilled hoặc rejected thì sẽ không chuyển được nữa

//1. Đưa dữ liệu vào Promise
// const myPromise = new Promise((resolve, reject) => {
//     //resolve: Hàm dùng để đánh dấu thành công
//     //reject: Hàm để đánh dấu thất bại
//     setTimeout(() => {
//         const users = ['User 1', 'User 2', 'User 3'];
//         //Gửi dữ liệu của tác vụ bất động vào promise
//         resolve(users);
//         reject("Có lỗi khi lấy users");
//     }, 1000);
// });

//2. Lấy dữ liệu từ Promise
// myPromise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });

//Ví dụ:
// const getPosts = () => {
//     return new Promise((resolve, reject) => {
//         const xhttp = new XMLHttpRequest();
//         xhttp.open("GET", "https://dummyjson.com1/posts", true);
//         xhttp.onload = () => {
//             const data = JSON.parse(xhttp.responseText);
//             resolve(data);
//         }
//         xhttp.onerror = () => {
//             reject("Có lỗi khi lấy dữ liệu từ API");
//         }
//         xhttp.send();
//     })
// }
// getPosts().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// }).finally(() => {
//     console.log('Hoàn thành');
// })

//Unwrap
// const myPromise = new Promise((resolve) => {
//     const promise1 = new Promise((resolve) => {
//         const promise2 = new Promise((resolve) => resolve('Hello anh em F8'));
//         resolve(promise2);
//     });
//     resolve(promise1)
// });

// myPromise.then(data => {
//     console.log(data);
// })

// const myPromise = new Promise((resolve) => {
//     resolve("Hello anh em");
// });
// myPromise.then(data => {
//     console.log(data);
//     return 'F8';
// }).then(data => {
//     console.log(data);
//     return 'An';
// }).then(data => {
//     console.log(data);
// })

//--> Promise chain

// const getPosts = () => {
//     return new Promise((resolve, reject) => {
//         const xhttp = new XMLHttpRequest();
//         xhttp.open("GET", "https://dummyjson.com/posts", true);
//         xhttp.onload = () => {
//             const data = JSON.parse(xhttp.responseText);
//             resolve(data);
//         };
//         xhttp.onerror = () => {
//             reject("Có lỗi khi lấy dữ liệu bài viết từ API");
//         };
//         xhttp.send();
//     });
// };
// const getProducts = () => {
//     return new Promise((resolve, reject) => {
//         const xhttp = new XMLHttpRequest();
//         xhttp.open("GET", "https://dummyjson.com1/products", true);
//         xhttp.onload = () => {
//             const data = JSON.parse(xhttp.responseText);
//             resolve(data);
//         };
//         xhttp.onerror = () => {
//             reject("Có lỗi khi lấy dữ liệu sản phẩm từ API");
//         };
//         xhttp.send();
//     });
// };
// const getTodos = () => {
//     return new Promise((resolve, reject) => {
//         const xhttp = new XMLHttpRequest();
//         xhttp.open("GET", "https://dummyjson.com/todos", true);
//         xhttp.onload = () => {
//             const data = JSON.parse(xhttp.responseText);
//             resolve(data);
//         };
//         xhttp.onerror = () => {
//             reject("Có lỗi khi lấy dữ liệu công việc từ API");
//         };
//         xhttp.send();
//     });
// };

// getPosts()
//     .then((posts) => {
//         console.log(posts);
//         return getProducts();
//     })
//     .catch(error => {
//         console.log(error);
//         return getProducts();
//     })
//     .then((products) => {
//         console.log(products);
//         return getTodos();
//     })
//     .catch(error => {
//         console.log(error);
//         return getTodos();
//     })
//     .then((todos) => {
//         console.log(todos);
//     })
//     .catch(error => {
//         console.log(error);
//     });

//Bài tập
// const getUser = (userId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const users = [
//                 {
//                     id: 1,
//                     name: "User 1",
//                     salary: 1000
//                 },
//                 {
//                     id: 2,
//                     name: "User 2",
//                     salary: 1000
//                 },
//                 {
//                     id: 3,
//                     name: "User 3",
//                     salary: 3000
//                 }
//             ];
//             resolve(users.find(user => user.id === userId));
//         }, Math.random() * 2000);
//     })
// }

// const ids = [1, 2, 3];
// const salaryPromise = new Promise((resolve) => {
//     let total = 0;
//     let count = 0;
//     for (let i = 0; i < ids.length; i++) {
//         const id = ids[i];
//         getUser(id).then(data => {
//             total += data.salary;
//             //Lấy total cuối cùng -> đưa vào resolve
//             if (count === ids.length - 1) {
//                 resolve(total);
//             }
//             count++;
//         })
//     };
// })

// salaryPromise.then(data => {
//     console.log(data);
// })

//Tính tổng và log ra được giá trị ngoài vòng lặp (Không được dùng: Promise.all, async/await)
//Gợi ý: total là 1 dữ liệu trong tương lai -> Tạo promise mới -> Đưa giá trị total của lần tính cuối cùng vào promise đó

//Promise.all(): Giải quyết đồng thời các Promise và trả về kết quả 1 lần
// const promise1 = Promise.resolve("Data 1");
// const promise2 = Promise.reject("Error 2");
// const promise3 = Promise.resolve("Data 3");
// const promiseArr = [promise1, promise2, promise3];
// Promise.all(promiseArr).then(data => {
//     console.log(data);
// });

// Promise.allSettled(promiseArr).then(data => {
//     console.log(data);
// })

// const salaryPromise = Promise.all(ids.map(id => getUser(id))).then(users => {
//     const total = users.reduce((acc, cur) => acc + cur.salary, 0);
//     return total;
// })

// //Cần sử dụng
// salaryPromise.then(data => {
//     console.log(data);
// })

const getPosts = () => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://dummyjson.com/posts", true);
        xhttp.onload = () => {
            const data = JSON.parse(xhttp.responseText);
            resolve(data);
        };
        xhttp.onerror = () => {
            reject("Có lỗi khi lấy dữ liệu bài viết từ API");
        };
        xhttp.send();
    });
};
const getProducts = () => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://dummyjson.com/products", true);
        xhttp.onload = () => {
            const data = JSON.parse(xhttp.responseText);
            resolve(data);
        };
        xhttp.onerror = () => {
            reject("Có lỗi khi lấy dữ liệu sản phẩm từ API");
        };
        xhttp.send();
    });
};
const getTodos = () => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://dummyjson.com/todos", true);
        xhttp.onload = () => {
            const data = JSON.parse(xhttp.responseText);
            resolve(data);
        };
        xhttp.onerror = () => {
            reject("Có lỗi khi lấy dữ liệu công việc từ API");
        };
        xhttp.send();
    });
};
Promise.all([getPosts(), getProducts(), getTodos()]).then(([posts, products, todos]) => {
    console.log(posts);
    console.log(products);
    console.log(todos);
});

//Async/Await