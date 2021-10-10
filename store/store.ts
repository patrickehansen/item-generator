import { createStore, combineReducers } from '@reduxjs/toolkit'
import materialReducer from './reducers/materialReducer'
import templateReducer from './reducers/templateReducer'
import itemReducer from './reducers/itemReducer'
import { RootState } from '../types/store';

const store = createStore<RootState, any, any, any>(
  combineReducers({
    materials: materialReducer,
    templates: templateReducer,
    items: itemReducer,
  })
)

// Infer the `RootState` and `AppDispatch` types from the store itself
//export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;