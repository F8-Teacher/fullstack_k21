import { CONFIG } from "../config.js";
let refreshTokenPromise = null;
export const saveToken = (token) => {
    localStorage.setItem('access_token', token.access_token);
    localStorage.setItem('refresh_token', token.refresh_token);
}

export const getAccessToken = () => {
    return localStorage.getItem('access_token');
}

export const getRefreshToken = () => {
    return localStorage.getItem('refresh_token');
}

export const clearToken = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
}

export const getNewToken = async () => {
    const refreshToken = getRefreshToken();
    const response = await fetch(`${CONFIG.BASE_API}/auth/refresh-token`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ refreshToken })
    });
    if (!response.ok) {
        return false;
    }
    return response.json();
}

export const fetchWrapper = async (url, options = {}) => {
    const accessToken = getAccessToken();
    if (accessToken) {
        //Thêm vào Authorization header
        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${accessToken}`
        }
    }
    const response = await fetch(url, options);
    if (response.status === 401) {
        if (!refreshTokenPromise) {
            refreshTokenPromise = getNewToken().then(data => {
                refreshTokenPromise = null;
                return data;
            });
        }
        const newToken = await refreshTokenPromise;
        if (newToken) {
            saveToken(newToken);
            return fetchWrapper(url, options);
        }
    }

    return response;
}

//fetch(url, options)