import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cartSlice';
import productSlice from '../features/productSlice';
import searchFilter from '../features/searchFilter';

const store = configureStore({
    reducer: {
        products: productSlice,
        cartItems: cartSlice,
        search: searchFilter
    }

});

export default store;