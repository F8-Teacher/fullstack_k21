import { api } from "../libs/axios";

export const getCategoryList = async () => {
    try {
        const response = await api.get(`/categories`);
        const { items } = response.data;
        return items;
    } catch (error) {
        console.log(error);
        return false;
    }
}