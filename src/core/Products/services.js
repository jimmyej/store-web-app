import axios from "axios";

const baseURL = "https://localhost:9090";

export const getProducts = () => axios.get(`${baseURL}/api/products/v1`)
