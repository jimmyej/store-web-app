import axios from "axios";
import { getAccessToken, removeItem } from "./core/Storages/LocalStorageService";

const instance = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json"
    }
})

instance.interceptors.request.use(
    config => {
        const token = getAccessToken()
        if(token){
            config.headers.Authorization = "Bearer " + token;
        }
        return config
    }
)

instance.interceptors.response.use(
    response => {
        return response
    },
    function (error) {
        const token = getAccessToken()

        if (error.response.status === 401 || !token) {
            removeItem('userInfo')
            window.location.href = "/login";
            return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)

export default instance;