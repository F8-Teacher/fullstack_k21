import 'axios';
declare module 'axios' {
    export interface AxiosRequestConfig {
        _accessToken?: string | null;
    }
}