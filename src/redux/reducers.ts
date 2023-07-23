import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventProps } from "@/app/components/event";

type InitialState = {
    budget: number;
    spending: number;
    category: string;
    eventPerBudget: Array<[number, EventProps[]]>;
    selectedEvent: Array<EventProps>;
}

const initialState: InitialState = { budget: 0, spending: 0, eventPerBudget: [], selectedEvent: [], category: '' }
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
        },
        setSelectedEvent: (state, { payload: { event } }: PayloadAction<{ event: EventProps }>) => {

            state.selectedEvent.push(event)

        },
        deleteSelectedEvent: (state, action: PayloadAction<number>) => {

            state.selectedEvent = state.selectedEvent.filter(event => event.id !== action.payload)

        },
        resetSelected: (state, _) => {
            state.selectedEvent = []
            state.spending = 0
        }
    },



})


export const { updateBudget, setEventsPerBudget, updateSpending, setSelectedEvent, deleteSelectedEvent, resetSelected } = eventSlice.actions

export default eventSlice.reducer