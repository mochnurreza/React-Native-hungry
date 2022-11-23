import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket/Basketslice";
import restaurantReducer from "./restaurant/RestauranSlice";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        restaurant: restaurantReducer
    }
})