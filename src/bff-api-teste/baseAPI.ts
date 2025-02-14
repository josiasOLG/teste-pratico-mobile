import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://10.102.37.150:3000";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export async function getRequest<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await axiosInstance.get<T>(url, config);
  return response.data;
}
