// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         cartItems:  [],
//     },
//     reducers: {
//         addToCart: (state, action) => {
//             const newItem = action.payload;
//             const existingItem = state.cartItems.find(item => item.id === newItem.id);
            
//             if (existingItem) {
//                 existingItem.quantity += newItem.quantity || 1;
//             } else {
//                 state.cartItems.push({
//                     ...newItem,
//                     quantity: newItem.quantity || 1
//                 });
//             }
            
//         },
//         removeFromCart: (state, action) => {
//             const id = action.payload;
//             state.cartItems = state.cartItems.filter(item => item.id !== id);
//         },
//         clearCart: (state) => {
//             state.cartItems = [];
//         },
//     }
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems:  [],
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            
            if (existingItem) {
                existingItem.quantity += newItem.quantity || 1;
            } else {
                state.cartItems.push({
                    ...newItem,
                    quantity: newItem.quantity || 1
                });
            }
            
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== id);
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
