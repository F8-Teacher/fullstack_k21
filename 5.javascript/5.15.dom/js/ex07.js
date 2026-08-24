
const getPosts = async (q = "") => {
    try {
        renderLoading();
        const response = await fetch(`https://dummyjson.com/posts/search?q=${q}`);
        if (!response.ok) {
            throw new Error("Có lỗi khi lấy bài viết")
        }
        const { posts } = await response.json();
        renderPosts(posts);
    } catch (error) {
        renderError(true, error.message);
    } finally {
        renderLoading(false);
    }
}
const renderLoading = (isShow = true) => {
    const loadingEl = document.querySelector('.js-post-loading');
    loadingEl.innerHTML = isShow ? `<span class="text-3xl font-medium">Loading...</span>` : ''
}
const renderError = (isShow = true, message) => {
    const errorEl = document.querySelector('.js-post-error');
    errorEl.innerHTML = isShow ? `<span class="text-3xl font-medium text-red-600">${message}</span>` : ''
}
const renderPosts = (posts) => {
    const postList = document.querySelector('.js-post-list');

    const html = posts.map(({ title, body }) => {
        return `<div class="my-3 p-3 border border-[#ddd]">
        <h2 class="text-xl mb-3">${title}</h2>
        <p>
          ${body}
        </p>
      </div>`
    }).join('');

    postList.innerHTML = html;
}

const addSearchEvent = () => {
    const searchEl = document.querySelector('.js-search');
    let timeoutId;
    searchEl.addEventListener('input', (e) => {
        const keyword = e.target.value;

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            getPosts(keyword);
        }, 500);

    })
}

getPosts();
addSearchEvent();

//setTimeout
//clearTimeout

//a -> setTimeout -> Lưu vào timeoutId
//ab -> clearTimeout(lan1) -> setTimeout
//abc -> clearTimeout(lan2) -> setTimeout
// -> Debounce