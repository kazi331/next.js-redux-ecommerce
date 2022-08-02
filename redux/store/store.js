import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cartSlice';
import productSlice from '../features/productSlice';

const store = configureStore({
    reducer: {
        products: productSlice,
        cartItems: cartSlice
    }

});

export default store;