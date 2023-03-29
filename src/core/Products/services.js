import axios from "../../axiosInstance"

export const getProducts = () => axios.get(`/products/v1`)
