import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 100,

}

export const counterSlice = createSlice({
  name: 'other',
  initialState,
  reducers: {
    multiply: (state) => {
      state.value *= 5
    },
    divide: (state) => {
      state.value /= 5
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})
export const { multiply, divide, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer