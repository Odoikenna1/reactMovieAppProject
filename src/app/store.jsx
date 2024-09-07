import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./feature/counter/createSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})
export default store;