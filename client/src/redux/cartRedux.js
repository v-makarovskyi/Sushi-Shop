import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
        const nextCartItems = state.cartItems.filter((cartItem) => cartItem._id !== action.payload._id)
        state.cartItems = nextCartItems

        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
      
    descreaseCart: (state, action) => {
        const itemIndex = state.cartItems.findIndex((cartItem) => cartItem._id === action.payload._id)
        if(state.cartItems[itemIndex].cartQuantity > 1) {
            state.cartItems[itemIndex].cartQuantity -= 1
        } else if (state.cartItems[itemIndex].cartQuantity === 1) {
            const nextCartItems = state.cartItems.filter((cartItem) => cartItem._id !== action.payload._id)
            state.cartItems = nextCartItems
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },

    clearCart: (state, action) => {
        state.cartItems = []
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },

    getTotals: (state, action) => {
        const {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) => {
            const {price, cartQuantity} = cartItem
            const totalItem = price * cartQuantity
            cartTotal.total += totalItem
            cartTotal.quantity += cartQuantity
            return cartTotal
            
        }, {
            total: 0,
            quantity: 0
        })
        state.cartTotalAmount = total
        state.cartTotalQuantity = quantity
    }   
  }
  })

export const { addToCart, removeFromCart, descreaseCart, clearCart, getTotals } = cartSlice.actions

export default cartSlice.reducer