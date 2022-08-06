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
            state.cartItems = [...state.cartItems, action.payload];
            state.total = state.cartItems.reduce((preValue, item) => preValue + item.itemTotal, 0)
            state.amount = state.cartItems.reduce((preValue, item) => preValue + item.itemCount, 0)

        },
        increaseItem: (state, action) => {
            const itemId = action.payload;
            const productItem = state.cartItems.find(item => itemId === item._id);
            productItem.itemCount += 1;
            productItem.itemTotal = productItem.price * productItem.itemCount;
            state.total = state.cartItems.reduce((preValue, item) => preValue + item.itemTotal, 0)
            state.amount = state.cartItems.reduce((preValue, item) => preValue + item.itemCount, 0)

        },
        decreaseItem: (state, action) => {
            const itemId = action.payload;
            const productItem = state.cartItems.find(item => itemId === item._id)
            productItem.itemCount -= 1;
            productItem.itemTotal = productItem.price * productItem.itemCount;
            state.total = state.cartItems.reduce((preValue, item) => preValue + item.itemTotal, 0)
            state.amount = state.cartItems.reduce((preValue, item) => preValue + item.itemCount, 0)
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => itemId !== item._id);
            state.total = state.cartItems.reduce((preValue, item) => preValue + item.itemTotal, 0)
            state.amount = state.cartItems.reduce((preValue, item) => preValue + item.itemCount, 0)

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
export const { addItem, increaseItem, decreaseItem, removeItem, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;