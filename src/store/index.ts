import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import profileReducer from './slices/profileSlice'
import courseDetailsReducer from './slices/courseDetails'

export const store = configureStore({
  reducer: {   
    users: userReducer,
    profile: profileReducer,
courseDetails:courseDetailsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch