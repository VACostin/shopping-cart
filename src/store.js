import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import checkoutReducer from "./checkout-slice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer
  }
});
