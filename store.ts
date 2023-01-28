import { configureStore } from '@reduxjs/toolkit';
import darkmodeReducer from './slices/darkmodeSlice';
import sidebarReducer from './slices/sidebarSlice';
import newTaskReducer from './slices/newTaskSlice';
import newBoardReducer from './slices/newBoardSlice';

export const store = configureStore({
  reducer: {
    darkmode: darkmodeReducer,
    sidebar: sidebarReducer,
    newTask: newTaskReducer,
    newBoard: newBoardReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch