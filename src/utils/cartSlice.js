import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload); // state is the initial state. When we want to add a new item to cart, we need to push that
                                            //item. We do that using action.payload
        },
        removeItem: (state, action) => {
            state.items.splice(action.payload, 1);
        },
        clearCart: (state) => {
            state.items = [];
        }
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;