import axios from "axios";

const API = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  const { data } = await axios.get(`${API}`)
  return data;
}

export const getProductsById = async (productId) => {
  const { data } = await axios.get(`${API}/${productId}`)
  return data;
}
