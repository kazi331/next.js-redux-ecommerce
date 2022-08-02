import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        amount: 0,
        total: 0
    },
    reducers: {
        addItem: (state, action) => {
            state.cartItems = [...state.cartItems, action.payload]
            state.amount += 1;
        },
        increaseItem: (state, action) => {
            const itemId = action.payload;
            const productItem = state.cartItems.find(item => itemId === item.id)
            productItem.itemAmount += 1;
        },
        decreaseItem: (state, action) => {
            const itemId = action.payload;
            const productItem = state.cartItems.find(item => itemId === item.id)
            productItem.itemAmount -= 1;
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
          state.cartItems =  state.cartItems.filter(item => itemId !== item.id);
        },
    }
});

// console.log(cartSlice)
export const { addItem, increaseItem, decreaseItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;