import { createSlice } from "@reduxjs/toolkit"



const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addToCart : (state,action) => {
            const existingProduct = state.find(item => item.id == action.payload.id)
            if(existingProduct) {
                existingProduct.quantity++;
                existingProduct.totalPrice = existingProduct.price * existingProduct.quantity
                state = [existingProduct]
            }
            else{
               state.push({...action.payload, quantity : 1, totalPrice : action.payload.price})
            }
        },
        increment : (state,action) => {
            const existingProduct = state.find(item => item.id == action.payload)
            if (existingProduct){
                existingProduct.quantity++;
                existingProduct.totalPrice = existingProduct.price * existingProduct.quantity
            }
        }
    }
})

export const {addToCart, increment} = cartSlice.actions
export default cartSlice.reducer