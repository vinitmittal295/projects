import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,

}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state) => {
      state.value += 1
    },
    logout: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})
export const { login, logout, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer