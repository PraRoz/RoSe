import axios from "axios";
const URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";

const UserUrl = (URL +`user/`)

export const getAllUser = async () => {
  return await axios.get(UserUrl + "getAllUser");
};
