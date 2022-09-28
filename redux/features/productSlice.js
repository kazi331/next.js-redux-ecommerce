import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    return await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`).then(res => res.json()).catch(err => console.log(err))
    // return await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/products`)
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: true
    },
    reducers: {
        filtered: (state, action) => {
            state.products = state.products.filter(product => product.title.toLowerCase().includes(action.payload.toLowerCase()))
            
        }
    },

    extraReducers: {
        [getProducts.pending]: (state) => {
            state.loading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.products = action.payload;        
            state.loading = false;
        },
        [getProducts.rejected]: (state) => {
            state.loading = false;
        }
    },

});

// console.log(productSlice);
export const { filtered } = productSlice.actions;
export default productSlice.reducer;