export const renderHeader = () => {
    const headerWrapper = document.querySelector('#header');
    headerWrapper.outerHTML = `
    <header class="py-3">
        <div class="max-w-300 mx-auto flex justify-between">
            <div class="text-3xl font-medium">
                <a href="/" data-navigo>LOGO</a>
            </div>
            <nav class="flex gap-3 items-center">
            <ul class="flex gap-3 items-center">
                <li><a href="/" data-navigo>Home</a></li>
                <li><a href="/about" data-navigo>About</a></li>
            </ul>
            <ul class="user flex gap-3 items-center">
               
            </ul>
            </nav>
        </div>
    </header>`;

}