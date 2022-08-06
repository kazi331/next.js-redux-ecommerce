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
        setLocalItems: (state, action) => {
            state.cartItems = JSON.parse(localStorage.getItem('cart') || '[]')
        },
        addItem: (state, action) => {
            const item = state.cartItems.find(item => item._id === action.payload._id)

            if (item) {
                state.cartItems = state.cartItems.map(item => {
                    return item._id === action.payload._id ? { ...item, quantity: item.quantity + 1 } : item // increase item
                })
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 }) // add item to cart 
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
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
                localStorage.setItem('cart', JSON.stringify(state.cartItems))
            }
        },
        deleteItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => itemId !== item._id);
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
        },
        openCart: (state) => {
            state.showCart = true;
        },
        closeCart: (state) => {
            state.showCart = false;
        }
    }
});

export const { addItem, removeItem, deleteItem, openCart, closeCart, setLocalItems } = cartSlice.actions;
export default cartSlice.reducer;