export const CACHE_KEYS = {
    PRODUCTS: {
        LISTS(query: { q: string, page: string }) {
            // console.log(['products', query]);
            return ['products', query]
        },
        DETAIL(id: string) {
            return ['products', id]
        }
    }
}