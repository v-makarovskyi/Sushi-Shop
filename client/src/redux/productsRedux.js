import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const productsSlice = createSlice({
    name: 'products', 
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.items = action.payload
        }
    }
})

export const { getProducts } = productsSlice.actions

export default productsSlice.reducer