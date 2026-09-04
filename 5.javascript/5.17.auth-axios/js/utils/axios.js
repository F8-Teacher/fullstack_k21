import { CONFIG } from "../config.js";
import { getAccessToken, getNewToken, saveToken } from "./auth.js";
let refreshTokenPromise = null;
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
        if (error.status === 401) {

            if (!refreshTokenPromise) {
                refreshTokenPromise = getNewToken().then(token => {
                    saveToken(token);
                    refreshTokenPromise = null;
                    return token;
                })
            }
            const newToken = await refreshTokenPromise;
            if (newToken) {
                return api(error.config); //Retry request
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