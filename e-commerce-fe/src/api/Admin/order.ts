import axios from "axios";
const URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";

const orderURL = (URL +`order/`)

export const getAllOrder = async () => {
  return await axios.get(orderURL + "getAllOrder");
};

export const getOrderById = async (id:any) =>{
  return await axios.get(orderURL + `${id}`)
}