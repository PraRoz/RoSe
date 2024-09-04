import { configureStore, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types";
import { RootState } from "./store";

export interface UInterface {
  user: IUser;
}

const initialState: UInterface = {
  user: {
    id:"",
    firstName: "",
    lastName: "",
    userName: "",
    phone: "",
    email: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = action.payload;
      state.user = newUser;
    },
  },
});

export const getUser = (state: RootState) => ({...state.userReducer.user,  isAuthenticated: !!state.userReducer.user.email}); 

export const { addUser } = userSlice.actions;
