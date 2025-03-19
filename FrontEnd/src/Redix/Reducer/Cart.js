// import { createSlice } from "@reduxjs/toolkit";
// const Cart = createSlice({
//   name: "Cart",
//   initialState: {
//     cartItem: [],
//   },
//   reducers: {  // Saxid halkan: magaca saxda ah waa 'reducers'
//     addToCart: (state, action) => {
//       const newData = action.payload;
//       state.cartItem.push(newData);
//     },
//   },
// });

// export const { addToCart } = Cart.actions;
// export default Cart.reducer;

import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
  name: "Cart",
  initialState: {
    CartItem: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.CartItem.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.CartItem = state.CartItem.filter(item => item.id !== action.payload);
    }
  },
});

export const { addToCart, removeFromCart } = Cart.actions;
export default Cart.reducer;
