import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface resultTypes {
    date: String
    result: Boolean,
    firstDice: number,
    secondeDice: number,
}

interface DiceState {
    results: resultTypes[]
}

const initialState: DiceState = {
    results: [],
}

export const diceSlice = createSlice({
    name: 'dice',
    initialState,
    reducers: {
        
        addResult: (state, action: PayloadAction<{ result: resultTypes }>) => {
            state.results.push(action.payload.result)
        },

        clearResult: (state, action) => {
            state.results = []
        }
    }
})

export default diceSlice.reducer
export const { addResult, clearResult } = diceSlice.actions