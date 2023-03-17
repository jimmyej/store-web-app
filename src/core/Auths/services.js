import axios from "../../axiosInstance"

export const login = (credentials) => axios.post(`/users/v1/signin`, credentials)

export const register = (data) => axios.post(`/users/v1/signup`, data)
