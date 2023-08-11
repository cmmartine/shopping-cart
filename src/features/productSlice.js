import { createSlice } from "@reduxjs/toolkit";
import { allProducts } from "../app/products";

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts,
  },
  reducers: {
    increment: (state, action) => {
      console.log(action.payload);
      state.allProducts.map(product => {
        if (product.id === action.payload) {
          product.numInCart += 1;
        }
      })
    },
    decrement: (state, action) => {
      console.log(action.payload);
      state.allProducts.map(product => {
        if (product.id === action.payload) {
          product.numInCart -= 1;
        }
      })
    },
  }
})

export const { increment, decrement } = productSlice.actions
export default productSlice.reducer