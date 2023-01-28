import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface newBoardState {
  newBoard: boolean
}

const initialState: newBoardState = {
  newBoard: false,
}

export const newBoardSlice = createSlice({
  name: 'newBoard',
  initialState,
  reducers: {
    toggle: (state) => {
      state.newBoard = !state.newBoard
    },
  },
})

export const { toggle } = newBoardSlice.actions

export const selectNewBoardToggle = (state: RootState) => state.newBoard.newBoard;

export default newBoardSlice.reducer