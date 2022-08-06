import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cartSlice';
import productSlice from '../features/productSlice';
import searchFilter from '../features/searchFilter';
import { createWrapper } from 'next-redux-wrapper';

const store = configureStore({
    reducer: {
        products: productSlice,
        cartItems: cartSlice,
        search: searchFilter
    }

});

export const wrapper = createWrapper(() => store)