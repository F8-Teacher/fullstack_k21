import { CONFIG } from "./config.js";
import { saveToken } from "./utils/auth.js";
import { api } from "./utils/axios.js";

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
        try {
            const response = await api.post(`/auth/login`, loginData);
            return response.data;
        } catch {
            return false;
        }
    }

    form.addEventListener('submit', handleSubmit);
}

document.addEventListener('DOMContentLoaded', init);