import { createSlice } from "@reduxjs/toolkit";
import { toast} from "react-toastify"

const initialState = {
  cartitem: localStorage.getItem("CartItemInfo")
    ? JSON.parse(localStorage.getItem("CartItemInfo"))
    : [],
  state: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartitem.findIndex(
        (item) => item.id === action.payload.id

      );

      if (itemIndex >= 0) {
        state.cartitem[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartitem.push(tempProduct);
      }
      localStorage.setItem("CartItemInfo", JSON.stringify(state.cartitem));

      // for popup notification using toastify
      toast.success(`${action.payload.title} added successfully`,{
        position:"top-center"

      })
    },
    // clearcart(whole items)
    clearCart(state, action) {
      state.cartitem = [];
      localStorage.setItem("CartItemInfo", JSON.stringify(state.cartitem));
      toast.error("All items removed ",{
        position:"top-center"

      })
    },
    // delete individual items
    deleteItem(state, action) {
      const nextCartItem = state.cartitem.filter(
        (cartRemoveItem) => cartRemoveItem.id !== action.payload.id
      );
      state.cartitem = nextCartItem;
      localStorage.setItem("CartItemInfo", JSON.stringify(state.cartitem));
      toast.info(`${action.payload.title} removed successfully`,{
        position:"top-center"
      })

    },
    // increase individual items quantity
    increaseQuantity(state,action){
      const itemIndex = state.cartitem.findIndex(
        (cartitem)=>cartitem.id=== action.payload.id
      )
      if (state.cartitem[itemIndex].cartQuantity>=1){
        state.cartitem[itemIndex].cartQuantity += 1;
        
      }
      localStorage.setItem("CartItemInfo", JSON.stringify(state.cartitem));
    },

    // dercrease quantity
    decreaseQuantity(state,action){
      const itemIndex = state.cartitem.findIndex(
        (cartitem)=>cartitem.id=== action.payload.id
      )
      if (state.cartitem[itemIndex].cartQuantity>1){
        state.cartitem[itemIndex].cartQuantity -= 1;
        
      }
      localStorage.setItem("CartItemInfo", JSON.stringify(state.cartitem));
    },
  },
});

// Action creators are generated for each case reducer function
export const { clearCart, addToCart, deleteItem,decreaseQuantity,increaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
