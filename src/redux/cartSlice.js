import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, actions) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === actions.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...actions.payload,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, actions) => {
      if (state.cartItems.length === 0) return;
      const existingItem = state.cartItems.find(
        (item) => item.id === actions.payload.id
      );

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== actions.payload.id
        );
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
