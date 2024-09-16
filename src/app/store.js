import { configureStore } from "@reduxjs/toolkit";
import petitionReducer from "../features/petitionSlice";

export const store = configureStore({
    reducer: petitionReducer,
});
