import { createSlice } from "@reduxjs/toolkit";


const wishListSlice = createSlice({
    name  : "wishlist",
    initialState : {
        wishlist : []
    },
    reducers : {
        addToWishlist : (state,action) => {
            state.wishlist.push(action.payload)
        }
    }
})

export const {addToWishlist} = wishListSlice.actions
export default wishListSlice.reducer

