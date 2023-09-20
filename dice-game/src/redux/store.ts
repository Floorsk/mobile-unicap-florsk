import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import diceSlice from './diceSlice'

export const store = configureStore({

    reducer: {
        dice: diceSlice
    }

})

export const useAppDiscpatch: () => typeof store.dispatch=useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector