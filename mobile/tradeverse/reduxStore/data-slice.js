/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  assets: [],
}

const dataSlice = createSlice({
  initialState,
  name: 'data',
  reducers: {
    setAssets: (state, action) => {
      state.assets = action.payload
    },
  },
})

const { reducer, actions } = dataSlice
export const { setAssets } = actions
export default reducer
