export const saveToken = (token: { access_token: string; refresh_token: string }) => {
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
    const response = await fetch(`https://api.escuelajs.co/api/v1/auth/refresh-token`, {
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