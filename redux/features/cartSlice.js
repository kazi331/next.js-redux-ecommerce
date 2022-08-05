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
            state.cartItems = [...state.cartItems, action.payload]
            state.amount += 1;
        },
        increaseItem: (state, action) => {
            const itemId = action.payload;
            const productItem = state.cartItems.find(item => itemId === item._id)
            productItem.imtemCount += 1;
        },
        decreaseItem: (state, action) => {
            const itemId = action.payload;
            const productItem = state.cartItems.find(item => itemId === item._id)
            productItem.imtemCount -= 1;
        },
        removeItem: (state, action) => {
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

// console.log(cartSlice)
export const { addItem, increaseItem, decreaseItem, removeItem , openCart, closeCart} = cartSlice.actions;
export default cartSlice.reducer;