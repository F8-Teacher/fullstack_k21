import { apiAuth } from "../lib/axios-auth"

export const getCurrentUser = async () => {
    const response = await apiAuth.get(`/auth/profile`);
    return response.data;
}