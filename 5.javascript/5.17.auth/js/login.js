import { CONFIG } from "./config.js";
import { saveToken } from "./utils/auth.js";

const init = () => {
    const form = document.querySelector('form');
    const button = form.querySelector('button');
    const buttonTextInit = button.innerText;
    const msgEl = form.querySelector('.js-msg');
    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailEl = form.querySelector('.js-email');
        const passwordEl = form.querySelector('.js-password');

        const email = emailEl.value;
        const password = passwordEl.value;

        button.disabled = true;
        button.innerText = 'Loading...';
        msgEl.innerText = '';

        const token = await sendRequestLogin({ email, password });

        if (!token) {
            msgEl.innerText = 'Email or password invalid';
        } else {
            //Xử lý lưu token
            saveToken(token);
            window.location.href = './index.html' //Chuyển hướng về trang chủ
        }

        button.disabled = false;
        button.innerText = buttonTextInit;
    }

    const sendRequestLogin = async (loginData) => {
        const response = await fetch(`${CONFIG.BASE_API}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        });
        if (!response.ok) {
            return false;
        }
        return response.json();
    }

    form.addEventListener('submit', handleSubmit);
}

document.addEventListener('DOMContentLoaded', init);