
// REVIEW: Thoughts about this generic implementation

import { AxiosRequestConfig, AxiosResponse } from "axios";
import { apiClient } from "../lib/httpClient";

export default class NetworkingManager {
  
  static getAll<T>(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T, Error>> {
    return apiClient.get<T>(endpoint, config);
  }

  static get<T>(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T[], Error>> {
    return apiClient.get<T[]>(endpoint, config);
  }

  static post<T, K>(
    requestBody: K,
    endpoint: string
  ): Promise<AxiosResponse<T, Error>> {
    return apiClient.post<T>(endpoint, requestBody);
  }

  static patch<T, K>(
    requestBody: K,
    endpoint: string
  ): Promise<AxiosResponse<T, Error>> {
    return apiClient.patch<T>(endpoint, requestBody);
  }

  static delete<T>(endpoint: string): Promise<AxiosResponse<T, Error>> {
    return apiClient.delete<T>(endpoint);
  }
  
}
