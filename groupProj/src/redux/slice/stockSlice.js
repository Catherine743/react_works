import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  sales: [],
};

const stockSlice = createSlice({
    name : 'stock',
    initialState,
    reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    addSale: (state, action) => {
      const { productId, quantity } = action.payload;

      const product = state.products.find(p => p.id === productId);

      if (product && product.stock >= quantity) {
        product.stock -= quantity;

        state.sales.push({
          id: Date.now(),
          productId,
          quantity,
          totalAmount: quantity * product.price,
          date: new Date().toISOString(),
        });
      }
    }
  }
})

export const{addProduct, addSale} = stockSlice.actions
export default stockSlice.reducer

