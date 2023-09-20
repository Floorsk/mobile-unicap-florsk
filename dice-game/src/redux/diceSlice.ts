import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface DiceState {
    dice: number
}

const initialState: DiceState = {
    dice: 0
}

export const diceSlice = createSlice({
    name: 'dice',
    initialState,
    reducers: {
        
        i: (action, payload) => {
            action.dice += action.dice + 1
        }

    }
})

export default diceSlice.reducer
export const { i } = diceSlice.actions