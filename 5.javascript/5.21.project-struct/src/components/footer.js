export const renderFooter = () => {
    const footerWrapper = document.querySelector('#footer');
    footerWrapper.outerHTML = `
    <footer class="py-3">
        <div class="max-w-300 mx-auto">
           <p class="text-center">Copyright &copy; 2026 by F8</p>
        </div>
    </footer>
    `;

}