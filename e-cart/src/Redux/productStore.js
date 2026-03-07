import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slice/productSlice'
import wishListSlice from './slice/wishListSlice'

const productStore = configureStore({
    reducer : {
        productReducer : productSlice,
        wishlistReducer  : wishListSlice
    }
})

export default productStore