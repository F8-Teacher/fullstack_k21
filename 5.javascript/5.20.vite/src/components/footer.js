import style from "../styles/footer.module.css";
export const getFooterHtml = () => {
    return `<footer>
    <h1>F8 - Footer</h1>
    <button class="${style.btn}">Click me 2</button>
    </footer>`
}