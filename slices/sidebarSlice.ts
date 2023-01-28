import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface sidebarState {
  sidebar: boolean
}

const initialState: sidebarState = {
  sidebar: true,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggle: (state) => {
      state.sidebar = !state.sidebar
    },
  },
})

export const { toggle } = sidebarSlice.actions

export const selectSidebar = (state: RootState) => state.sidebar.sidebar;

export default sidebarSlice.reducer