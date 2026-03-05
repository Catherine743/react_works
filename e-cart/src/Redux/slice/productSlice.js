import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('products/fetchProducts',async() => {
    const result = await axios.get('https://dummyjson.com/products')
    console.log(result.data.products)
    return result.data.products
})

const productSlice = createSlice({
    name : "products",
    initialState : {
        allProducts : [],
        error : "",
        loading : false
    },
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload
            state.loading = false
        }),
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.allProducts = []
            state.loading = true
        }),
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.allProducts = []
            state.error = "api failed"
            state.loading = false
        })
    }
})

export default productSlice.reducer