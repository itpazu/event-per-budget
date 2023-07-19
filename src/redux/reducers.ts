import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventProps } from "@/app/components/event";

type InitialState = {
    budget: number;
    spending: number;
    eventPerBudget: Array<[number, EventProps[]]>
}

const initialState: InitialState = { budget: 0, spending: 0, eventPerBudget: [] }
const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        updateBudget: (state, action: PayloadAction<number>) => {
            state.budget = action.payload

        },
        setEventsPerBudget: (state, action: { payload: Array<[number, EventProps[]]> }) => {
            state.eventPerBudget = action.payload
        },
        updateSpending: (state, action: PayloadAction<number>) => {
            state.spending = state.spending + action.payload
        }
    },

})


export const { updateBudget, setEventsPerBudget, updateSpending } = eventSlice.actions

export default eventSlice.reducer