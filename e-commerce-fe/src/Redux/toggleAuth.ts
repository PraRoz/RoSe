import { configureStore, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ToggleState {
  value: boolean;
}

const initialState: ToggleState = {
  value: sessionStorage?.getItem("AdminAuth") ? true : false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleValue: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleValue } = toggleSlice.actions;

export const selectToggleValue = (state: { toggle: ToggleState }) =>
  state.toggle.value;
