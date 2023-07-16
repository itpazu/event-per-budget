import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { budget: 0, spending: 0 }
const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        updateBudget: (state, action: PayloadAction<number>) => {
            console.log(action.payload ?? "hello")
            state.budget = action.payload

        }
    },

})


export const { updateBudget } = eventSlice.actions

export default eventSlice.reducer