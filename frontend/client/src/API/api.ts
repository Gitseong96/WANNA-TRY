import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const PORT = 5000

const instance = axios.create({
    baseURL: `https://localhost:${PORT}`,
    // headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`
    // }
})

const resBody = (res: AxiosRequestConfig) => res.data
const requestInstance = {
    get: (url: string) => instance.get<AxiosRequestConfig>(url).then(resBody)

}