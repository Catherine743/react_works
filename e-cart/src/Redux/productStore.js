import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slice/productSlice'
import wishListSlice from './slice/wishListSlice'
import cartSlice from './slice/cartSlice'

const productStore = configureStore({
    reducer : {
        productReducer : productSlice,
        wishlistReducer  : wishListSlice,
        cartReducer : cartSlice
    }
})

export default productStore