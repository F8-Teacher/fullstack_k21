import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser } from "../services/auth.service";
import { clearToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
export const useUser = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser,
        retry: false
    });
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const logout = (redirectTo?: string) => {
        clearToken();
        queryClient.invalidateQueries({
            queryKey: ['user']
        })
        if (redirectTo) {
            navigate(redirectTo);
        }
    }
    return {
        user: data,
        isLoading,
        isAuthenticated: error ? false : true,
        logout
    }
}