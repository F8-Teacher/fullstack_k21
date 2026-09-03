import { clearToken, fetchWrapper } from "./utils/auth.js";
import { CONFIG } from "./config.js";
const init = () => {
    let user = null;
    let isAuthenticated = false;
    const getProfile = async () => {
        const response = await fetchWrapper(`${CONFIG.BASE_API}/auth/profile`);

        if (!response.ok) {
            isAuthenticated = false;
            user = null;
        } else {
            user = await response.json();
            isAuthenticated = true;
        }

        renderProfile();

    }

    const renderProfile = () => {
        const profileEl = document.querySelector('.js-profile');

        if (isAuthenticated) {
            profileEl.innerHTML = `<li>Chào bạn: ${user.name}</li>
            <li><a href="#" class="logout"> Đăng xuất </a></li>`
        } else {
            profileEl.innerHTML = `<li><a href="./login.html"> Đăng nhập </a>
            </li>
            <li><a href="./register.html"> Đăng ký </a></li>`;
        }

    }

    const handleLogout = (e) => {
        e.preventDefault();
        //Gọi api logout 
        //Xóa token ở browser
        clearToken();
        window.location.reload();
    }

    const addEvent = () => {
        const profileEl = document.querySelector('.js-profile');
        profileEl.addEventListener('click', (e) => {
            if (e.target.classList.contains('logout')) {
                handleLogout(e);
            }
        })
    }

    getProfile();
    getProfile();
    getProfile();
    getProfile();
    getProfile();
    addEvent();

}

document.addEventListener('DOMContentLoaded', init);

//Giả sử: có 10 request -> Chủ động thêm access token, xử lý refresh của từng request
//Giải pháp:
// - Axios (Interceptor)
// - Build Wrapper Function

// if (response.status === 401) {
//     const newToken = await getNewToken();
//     if (!newToken) {
//         isAuthenticated = false;
//         user = null;
//     } else {
//         saveToken(newToken);
//         getProfile();
//         return;
//     }
// }
