import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItem: [],
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  {
    addTocart: (state, action) => {
      const item = action.playload;
      const isItemExist = state.cartItem.find((i) => i.id === item.id);
      if (isItemExist) {
        state.cartItem.forEach((i) => {
          if (i.id === item.id) i.quantity += 1;
        });
      } else {
        state.cartItem.push(item);
      }
    },
    decrement: (state, action) => {
      const item = state.cartItem.find((i) => i.id === action.playload);
      if (item.quantity > 1) {
        state.cartItem.forEach((i) => {
          if (i.id === action.playload) i.quantity -= 1;
        });
      }
    },
    deleteFromCart: (state, action) => {
      const item = state.cartItem.find((i) => i.id === action.playload);
      state.cartItem = state.cartItem.filter((i) => i.id !== item.id);
    },
    calculatePrices: (state) => {
      let sum = 0;
      state.cartItem.forEach((i) => (sum += i.quantity * i.price));
      state.subtotal = sum;
      state.subtotal === 0
        ? (state.shipping = 0)
        : state.subtotal <= 1000
        ? (state.shipping = 200)
        : (state.shipping = 0);
      state.tax = +(sum * 0.18).toFixed();
      state.total = state.subtotal + state.shipping + state.tax;
    },
  }
);
