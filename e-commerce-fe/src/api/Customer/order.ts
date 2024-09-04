import axios from "axios";

const URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";

const OrderURL = URL + `order/`;


export const sendOrder = async (data: any) => {
    return await axios.post(OrderURL + "addOrder", data);
  };