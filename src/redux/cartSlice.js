import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      let existItem = state.find((item) => item.id === action.payload.id);
      if (existItem) {
        // Using map with return - but we need to mutate state directly in Redux Toolkit
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.push(action.payload);
      }
    },
    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    IncrementQty: (state, action) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
    },
    DecrementQty: (state, action) => {
      return state.map((item) =>
        item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    },
    EmptyCart: (state) => {
      return [];
    }
  },
});

export const { AddItem, RemoveItem, IncrementQty, DecrementQty, EmptyCart } = cartSlice.actions;
export default cartSlice.reducer;
