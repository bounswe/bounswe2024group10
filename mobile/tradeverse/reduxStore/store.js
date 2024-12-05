/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './data-slice'
import uiReducer from './ui-slice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    data: dataReducer,
  },
})
