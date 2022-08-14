import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cartSlice';
import productSlice from '../features/productSlice';
import searchFilter from '../features/searchFilter';
import { createWrapper } from 'next-redux-wrapper';
import blogSlice from '../features/blogSlice';

const store = configureStore({
    reducer: {
        products: productSlice,
        cartItems: cartSlice,
        search: searchFilter,
        blogs: blogSlice
    }

});

export const wrapper = createWrapper(() => store)