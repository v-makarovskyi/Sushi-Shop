import { configureStore, combineReducers } from '@reduxjs/toolkit'
import productsReducer from './productsRedux'
import sortReducer from './sortRedux'
import cartReducer from './cartRedux'
import authReducer from './authRedux'


const rootReducer = combineReducers({
    products: productsReducer, 
    sort: sortReducer, 
    cart: cartReducer,
    auth: authReducer
})


export const store = configureStore({
    reducer: rootReducer,
})