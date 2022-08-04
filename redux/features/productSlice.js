import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    return fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`).then(res => res.json()).catch(err => console.log(err))
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: true
    },
    reducers: {},
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
    }
});

// console.log(productSlice);
export default productSlice.reducer;