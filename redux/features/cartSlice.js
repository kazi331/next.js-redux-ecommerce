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
            state.amount = state.cartItems.reduce((preValue, item) => preValue + item.itemCount, 0);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            localStorage.setItem('amount', JSON.stringify(state.amount))
            localStorage.setItem('total', JSON.stringify(state.total))
        },
        increaseItem: (state, action) => {
            const itemId = action.payload;
            const productItem = state.cartItems.find(item => itemId === item._id);
            productItem.itemCount += 1;
            productItem.itemTotal = productItem.price * productItem.itemCount;
            state.total = state.cartItems.reduce((preValue, item) => preValue + item.itemTotal, 0)
            state.amount = state.cartItems.reduce((preValue, item) => preValue + item.itemCount, 0)
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            localStorage.setItem('amount', JSON.stringify(state.amount))
            localStorage.setItem('total', JSON.stringify(state.total))
        },
        decreaseItem: (state, action) => {
            const itemId = action.payload;
            const productItem = state.cartItems.find(item => itemId === item._id)
            productItem.itemCount -= 1;
            productItem.itemTotal = productItem.price * productItem.itemCount;
            state.total = state.cartItems.reduce((preValue, item) => preValue + item.itemTotal, 0)
            state.amount = state.cartItems.reduce((preValue, item) => preValue + item.itemCount, 0)
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            localStorage.setItem('amount', JSON.stringify(state.amount))
            localStorage.setItem('total', JSON.stringify(state.total))
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => itemId !== item._id);
            state.total = state.cartItems.reduce((preValue, item) => preValue + item.itemTotal, 0)
            state.amount = state.cartItems.reduce((preValue, item) => preValue + item.itemCount, 0)
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            localStorage.setItem('amount', JSON.stringify(state.amount))
            localStorage.setItem('total', JSON.stringify(state.total))
        },
        loadCartItems: state => {
            state.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            state.amount = JSON.parse(localStorage.getItem('amount')) || 0;
            state.total = JSON.parse(localStorage.getItem('total')) || 0;
        },
        openCart: (state) => {
            state.showCart = true;
        },
        closeCart: (state) => {
            state.showCart = false;
        }
    }
});

export const { addItem, increaseItem, decreaseItem, removeItem, openCart, closeCart, loadCartItems } = cartSlice.actions;
export default cartSlice.reducer;