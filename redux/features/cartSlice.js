import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    showCart: false,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = state.cartItems.find(item => item._id === action.payload._id)

            if (item) {
                state.cartItems = state.cartItems.map(item => {
                    return item._id === action.payload._id ? { ...item, quantity: item.quantity + 1 } : item
                })
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 })
            }
        },
        removeItem: (state, action) => {
            const item = state.cartItems.find(item => item._id === action.payload._id)

            if (item) {
                if (item.quantity <= 1) {
                    state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
                } else {
                    state.cartItems = state.cartItems.map(item => {
                        return item._id === action.payload._id ? { ...item, quantity: item.quantity - 1 } : item
                    })
                }
            }
        },
        deleteItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => itemId !== item._id);
        },
        openCart: (state) => {
            state.showCart = true;
        },
        closeCart: (state) => {
            state.showCart = false;
        }
    }
});

export const { addItem, removeItem, deleteItem, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;