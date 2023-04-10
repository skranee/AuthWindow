import axios from "axios";
import config from "tailwindcss/defaultConfig";

export const API_URL = "http://localhost:3000/api"

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = (localStorage.getItem('token'))
    return config
})

export  default $api