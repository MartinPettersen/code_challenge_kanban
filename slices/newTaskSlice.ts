import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface newTaskState {
  newTask: boolean
}

const initialState: newTaskState = {
  newTask: false,
}

export const newTaskSlice = createSlice({
  name: 'newTask',
  initialState,
  reducers: {
    toggle: (state) => {
      state.newTask = !state.newTask
    },
  },
})

export const { toggle } = newTaskSlice.actions

export const selectNewTaskToggle = (state: RootState) => state.newTask.newTask;

export default newTaskSlice.reducer