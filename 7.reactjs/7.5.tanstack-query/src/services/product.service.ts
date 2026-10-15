import { api } from "../lib/axios";
import type { ProductData } from "../types/product.type";

export const getProducts = async (query?: { q: string, page: number }): Promise<{
    products: ProductData[],
    maxPage: number
}> => {
    const LIMIT = 12;
    const skip = (query!.page - 1) * LIMIT
    //q=abc&page=1
    const url = `/products/search?${new URLSearchParams({
        ...query,
        limit: LIMIT,
        skip
    } as unknown as URLSearchParams).toString()}`
    const response = await api.get(url);
    const { total, products } = response.data;
    const maxPage = Math.ceil(total / LIMIT);
    return {
        products,
        maxPage
    };
};

export const getProduct = async (id: string): Promise<ProductData> => {
    const response = await api.get(`/products/${id}`);
    return response.data;
}

export const createProduct = async (data: { title: string; thumbnail: string }) => {
    const response = await api.post(`/products/add`, data);
    return response.data;
}

//skip = (page - 1) * limit