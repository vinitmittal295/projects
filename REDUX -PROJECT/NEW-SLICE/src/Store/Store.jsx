import { configureStore } from '@reduxjs/toolkit'
import vinitReducer from "../Slice/NewSlice"
import abc from "../Slice/NewCounter"
import abcd from "../Slice/ToDoSlice"
export const store = configureStore({
  reducer: {
    counter: vinitReducer,
    other:abc,
    auth:abcd,
  },
})