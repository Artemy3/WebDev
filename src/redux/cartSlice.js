import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   items: JSON.parse(localStorage.getItem('cartProducts')) || [],
   totalPrice: JSON.parse(localStorage.getItem('totalPrice')) || 0,
};


export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItem: (state, action) => {
         state.items.push(action.payload);
         state.totalPrice = state.items.reduce((sum, el) => {
            return el.price + sum;
         }, 0);
      },
      deliteItem: (state, action) => {
         state.items = state.items.filter(el => el.id !== action.payload.id)
         state.totalPrice = state.items.reduce((sum, el) => {
            return el.price + sum;
         }, 0);
      },
      clearItems: (state) => {
         state.items = [];
         state.totalPrice = 0;
      },
   },
});

export const { addItem, deliteItem, clearItems } = cartSlice.actions

export default cartSlice.reducer