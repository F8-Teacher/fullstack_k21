import { CONFIG } from "./config.js";

const init = () => {
    const form = document.querySelector('form');
    const button = form.querySelector('button');
    const buttonTextInit = button.innerText;
    const msgEl = form.querySelector('.js-msg');
    const handleSubmit = async (e) => {
        e.preventDefault();

        const nameEl = form.querySelector('.js-name');
        const emailEl = form.querySelector('.js-email');
        const passwordEl = form.querySelector('.js-password');

        const name = nameEl.value;
        const email = emailEl.value;
        const password = passwordEl.value;

        button.disabled = true;
        button.innerText = 'Loading...';
        msgEl.innerText = '';

        const user = await sendRequestRegister({ name, email, password });

        if (!user) {
            msgEl.innerText = 'Regsiter failed. Please try again';
        } else {

            window.location.href = './lohin.html' //Chuyển hướng về đăng nhập
        }

        button.disabled = false;
        button.innerText = buttonTextInit;
    }

    const sendRequestRegister = async (registerData) => {
        const response = await fetch(`${CONFIG.BASE_API}/users/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...registerData,
                role: "customer",
                avatar: "https://picsum.photos/800"
            })
        });
        if (!response.ok) {
            return false;
        }
        return response.json();
    }

    form.addEventListener('submit', handleSubmit);
}

document.addEventListener('DOMContentLoaded', init);