// product api

import axios from "axios";

const URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";
const CatURl = URL + `category/`;

export const addProduct = async (data: any) => {
  return await axios.post(URL + "product/addproduct", data);
};

export const getAllProduct = async () => {
  return await axios.get(URL + "product/getAllProduct");
};

export const deleteProduct = async (id: string) => {
  return await axios.delete(URL + `product/${id}`);
};

export const getProductById = async (id: any) => {
  return await axios.get(URL + `product/${id}`);
};

// category api

export const getAllCategory = async () => {
  return await axios.get(URL + "category/getAllCategory");
};

export const addCategory = async (data: any) => {
  return await axios.post(URL + "category/addCategory", data);
};

export const deleteCategory = async (id: string) => {
  return await axios.delete(URL + `category/${id}`);
};

export const editCategory = async (id: any, user: any) => {
  return await axios.put(URL + `category/${id}`, user);
};

export const getOneCategory = async (id: any) => {
  return await axios.get(URL + `category/${id}`);
};

//  get all users
