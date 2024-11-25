/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './ui-slice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
})
