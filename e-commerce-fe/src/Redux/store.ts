import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { userSlice } from "./userSlice";
import { toggleSlice } from "./toggleAuth";
const store = configureStore({
  reducer: {
    cartReducer: cartSlice.reducer,
    userReducer: userSlice.reducer,
    toggle: toggleSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
