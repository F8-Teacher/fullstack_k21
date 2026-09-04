import { CONFIG } from "../config.js";
import { getAccessToken, getNewToken, getRefreshToken, saveToken } from "./auth.js";
let refreshTokenPromise = null;

const refreshAccessToken = (failedAccessToken) => {
    const currentAccessToken = getAccessToken();
    if (currentAccessToken && currentAccessToken !== failedAccessToken) {
        return Promise.resolve({
            access_token: currentAccessToken,
            refresh_token: getRefreshToken()
        });
    }

    if (!refreshTokenPromise) {
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

export const api = axios.create({
    baseURL: CONFIG.BASE_API,
    timeout: 10000,
    // withCredentials: true
})

api.interceptors.request.use(
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


api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        const isUnauthorized = error.response?.status === 401;

        if (isUnauthorized && originalRequest) {

            const newToken = await refreshAccessToken(originalRequest._accessToken);

            if (newToken) {
                return api(originalRequest);
            }
        }
        return Promise.reject(error);
    }
);

//Lưu ý:
// - Bắt buộc phải dùng try catch
// - Dùng qua các method có sẵn: get, post, put, patch, delete
// - Body không cần chuyển về JSON
// - Nếu có header dùng chung cho nhiều request -> setup ở instance
// - Nên có timeout

//Nếu web bị lỗ hổng XSS -> khai thác được token qua trình duyệt
//Cookie -> CSRF
//localStorage -> XSS

//npm (package manager)
//vite (build tool)