
export const init = async ({ data }) => {
    const app = document.querySelector('#app');
    app.innerHTML = '';

    const renderWelcome = () => {

        const div = document.createElement('div');
        div.className = `border p-5 border-[#ddd] rounded-xl max-w-300 mx-auto my-5`
        const h1 = document.createElement('h1');
        h1.innerText = `Products: ${data.id}`;
        h1.className = `text-3xl font-medium`;
        div.append(h1);

        const p = document.createElement('p');
        p.innerText = 'Học JavaScript không khó';
        div.append(p);

        app.append(div);
    }
    renderWelcome();
}