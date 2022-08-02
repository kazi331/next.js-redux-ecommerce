import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: true
    },
    reducers: {
    }
});

// console.log(productSlice);
export default productSlice.reducer;