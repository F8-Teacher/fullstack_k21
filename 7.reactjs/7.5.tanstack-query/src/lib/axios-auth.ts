import axios from "axios";
import { clearToken, getAccessToken, getNewToken, getRefreshToken, saveToken } from "../utils/auth";

export const apiAuth = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1',
    timeout: 10000,
})

let refreshTokenPromise: null | Promise<{ access_token: string; refresh_token: string }> = null;

const refreshAccessToken = (failedAccessToken: string) => {
    const currentAccessToken = getAccessToken();
    if (currentAccessToken && currentAccessToken !== failedAccessToken) {
        return Promise.resolve({
            access_token: currentAccessToken,
            refresh_token: getRefreshToken()
        });
    }

    if (!refreshTokenPromise && getRefreshToken()) {
        refreshTokenPromise = getNewToken()
            .then((newToken) => {
                if (newToken) {
                    saveToken(newToken);
                }
                return newToken;
            })
            .finally(() => {
                refreshTokenPromise = null;
            });
    }
    return refreshTokenPromise;
};

apiAuth.interceptors.request.use(
    (config) => {
        const accessToken = getAccessToken();
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        config._accessToken = accessToken;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


apiAuth.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        const isUnauthorized = error.response?.status === 401;

        if (isUnauthorized && originalRequest) {

            const newToken = await refreshAccessToken(originalRequest._accessToken);

            if (newToken) {
                return apiAuth(originalRequest);
            }
            clearToken();
        }

        return Promise.reject(error);
    }
);