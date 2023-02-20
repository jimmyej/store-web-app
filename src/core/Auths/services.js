import axios from "axios";

const baseURL = "http://localhost:9090";

export const login = (credentials) => axios.post(`${baseURL}/api/users/v1/signin`, credentials)

export const register = (data) => axios.post(`${baseURL}/api/users/v1/signup`, data)
