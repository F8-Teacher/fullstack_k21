import style from "../styles/header.module.css";
export const getHeaderHtml = () => {
    return `<header>
    <h1 class="text-3xl font-medium">F8 - Header</h1>
    <button class="${style.btn}">Click me 1</button>
    </header>`
}