const init = () => {
    const openBtnList = document.querySelectorAll('[data-open-modal]');
    const modalList = [];
    const closeList = document.querySelectorAll('[data-close]');
    const openModal = (modal) => {
        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        modalList.push(modal);
    }

    const closeModal = (modal) => {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        modalList.splice(modalList.length - 1, 1); //Xóa modal cuối cùng sau khi đóng
    }

    if (openBtnList.length) {
        openBtnList.forEach((btn) => {
            btn.addEventListener('click', () => {
                const modalId = btn.dataset.openModal;
                const modal = document.querySelector(`[data-modal="${modalId}"]`);
                openModal(modal);
            })
        })
    }
    document.addEventListener('keyup', (e) => {
        if (e.key === "Escape" && modalList.at(-1)) {
            closeModal(modalList.at(-1));
        }
    });
    if (closeList.length) {
        closeList.forEach((closeEl) => {
            closeEl.addEventListener('click', () => {
                const modalId = closeEl.dataset.close;
                const modal = document.querySelector(`[data-modal="${modalId}"]`);
                closeModal(modal);
            });
        })
    }

    HTMLElement.prototype.css = function () {
        this.style.background = `yellow`;
    }
    const box = document.querySelector('.box');
    box.css();

}
document.addEventListener("DOMContentLoaded", init);
