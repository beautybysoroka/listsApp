// api.ts
import axios, { AxiosRequestConfig } from 'axios';

async function post<T, B = unknown>(
    url: string,
    body: B,
    config?: AxiosRequestConfig
): Promise<T> {
    const response = await axios.post<T>(url, body, config);
    return response.data;
}

export { post };