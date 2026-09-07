import { router } from "../../libs/router";

export const init = () => {
    const app = document.querySelector('#app');
    app.innerHTML = '';

    const renderWelcome = () => {
        const div = document.createElement('div');
        div.className = `border p-5 border-[#ddd] rounded-xl max-w-300 mx-auto my-5`
        const h1 = document.createElement('h1');
        h1.innerText = `About F8`;
        h1.className = `text-3xl font-medium`;
        div.append(h1);

        const p = document.createElement('p');
        p.innerText = 'Trung tâm đào tạo lập trình F8';
        div.append(p);

        app.append(div);

        const button = document.createElement('button');
        button.innerText = 'Go Home';
        button.className = 'px-3 py-1 bg-green-600 text-white';

        button.addEventListener('click', () => {
            router.navigate('/');
        });

        div.append(button);
    }

    renderWelcome();
}