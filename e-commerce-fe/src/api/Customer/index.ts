import axios from "axios";

const URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";
//  api to call register a new user
export const signUp = async (data: any) => {
  return await axios.post(URL + "user/addUser", data);
};
//  api to login user
export const signIn = async (data: any) => {
  return await axios.post(URL + "user/login", data);
};

export const getUserProfile = async (token: any) => {
  return await axios.get(URL + "user/getUserByID", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

