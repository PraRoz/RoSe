import axios from "axios";

const URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";

const ProductURL = URL + `product/`;

export const getAllProducts = async () => {
  return await axios.get(ProductURL + "getAllProduct");
};

export const getProductById = async (id: any) => {
  return await axios.get(ProductURL + `/${id}`);
};

export const getProductByCategory = async (id: any) => {
  return await axios.get(ProductURL + `category/${id}`);
};
