import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface darkmodeState {
  darkmode: boolean
}

const initialState: darkmodeState = {
  darkmode: true,
}

export const darkmodeSlice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    toggle: (state) => {
      state.darkmode = !state.darkmode
    },
  },
})

export const { toggle } = darkmodeSlice.actions

export const selectDarkmode = (state: RootState) => state.darkmode.darkmode;

export default darkmodeSlice.reducer