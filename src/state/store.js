import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../state/Counter/counterSlice";
import cartReducer from "../state/Cart/cartSlice";
import favoritesReducer from "../state/Favorites/favoritesSlice";

const store= configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        favorites: favoritesReducer,
    },
});

export default store;
