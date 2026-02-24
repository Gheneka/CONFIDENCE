// import { createSlice } from "@reduxjs/toolkit";

// const favoritesSlice = createSlice({
//     name: "favorites",
//     initialState: {
//         favoriteItems: [],
//     },
//     reducers: {
//         addToFavorites: (state, action) => {
//             const newItem = action.payload;
//             const existingItem = state.favoriteItems.find(item => item.id === newItem.id);
            
//             if (!existingItem) {
//                 state.favoriteItems.push({
//                     ...newItem,
//                 });
//             }
            
//         },
//         removeFromFavorites: (state, action) => {
//             const id = action.payload;
//             state.favoriteItems = state.favoriteItems.filter(item => item.id !== id);
//         },
//         clearFavorites: (state) => {
//             state.favoriteItems = [];
//         },
//     }
// });

// export const { addToFavorites, removeFromFavorites, clearFavorites } = favoritesSlice.actions;
// export default favoritesSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

// ✅ ADDED: Load saved favorites from localStorage
const savedFavorites = localStorage.getItem("favoriteItems")
  ? JSON.parse(localStorage.getItem("favoriteItems"))
  : [];

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favoriteItems: savedFavorites, // ✅ CHANGED
    },
    reducers: {
        addToFavorites: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.favoriteItems.find(item => item.id === newItem.id);
            
            if (!existingItem) {
                state.favoriteItems.push({
                    ...newItem,
                });
            }

            // ✅ ADDED
            localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems));
        },

        removeFromFavorites: (state, action) => {
            const id = action.payload;
            state.favoriteItems = state.favoriteItems.filter(item => item.id !== id);

            // ✅ ADDED
            localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems));
        },

        clearFavorites: (state) => {
            state.favoriteItems = [];

            // ✅ ADDED
            localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems));
        },
    }
});

export const { addToFavorites, removeFromFavorites, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
