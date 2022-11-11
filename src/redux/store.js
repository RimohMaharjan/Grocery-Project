import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../redux/Cart"

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
})