import { configureStore, createSlice } from "@reduxjs/toolkit";
import Item from "antd/es/list/Item";
import { ICart } from "../types";
import { userSlice } from "./userSlice";

export interface CartState {
  items: ICart[];
}

const CartItems =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart") as any)
    : [];

const initialState: CartState = {
  items: CartItems,
};

const setLocalStorage = (item: any) => {
  localStorage.setItem("cart", JSON.stringify(item));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      state.items.push(itemToAdd);
      setLocalStorage(state.items.map((data) => data));
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      const updatedItems = state.items.filter((item) => item.id !== idToRemove);
      state.items = updatedItems;
      setLocalStorage(state.items.map((data) => data));
    },
    changeSizeItem: (state, action) => {
      const idToEdit = action.payload;
      const updatedItems = state.items.map((item) => {
        if (item.id == idToEdit.id) {
          return {
            ...item,
            size: idToEdit.size,
          };
        }
        return item;
      });
      state.items = updatedItems;
      setLocalStorage(state.items.map((data) => data));
    },
    changeQuantityItem: (state, action) => {
      const idToEdit = action.payload;
      const updatedItems = state.items.map((item) => {
        if (item.id == idToEdit.id) {
          return {
            ...item,
            quantity: idToEdit.quantity,
          };
        }
        return item;
      });
      state.items = updatedItems;
      setLocalStorage(state.items.map((data) => data));
    },
  },
});

export const { addToCart, changeQuantityItem, changeSizeItem, removeFromCart } =
  cartSlice.actions;