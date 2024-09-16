import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    petitions: [],
};

export const petitionSlice = createSlice({
    name: "petitions",
    initialState,
    reducers: {
        addPetitons: (state, action) => {
            state.petitions = action.payload;
        },
    },
});

export const { addPetitons } = petitionSlice.actions;

export default petitionSlice.reducer;
