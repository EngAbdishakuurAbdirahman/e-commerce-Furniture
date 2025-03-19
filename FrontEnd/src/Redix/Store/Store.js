import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Reducer/Cart";

const store = configureStore({
  reducer: {
    Cart: CartReducer, // Magaca 'cart' wuxuu noqon doonaa meesha uu kaydsan yahay 'cartItem'
  },
});

export default store;
