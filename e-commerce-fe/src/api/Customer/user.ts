import axios from "axios";
const URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";

export const getUserApi = async (token: string) =>  await axios.get(URL + "user/getUserByID", {
    headers: { Authorization: `Bearer ${token}` },
  })
  