import { configureStore } from '@reduxjs/toolkit'
import navigatorSlice from './features/navigator'

export const store = configureStore({
  reducer: {
    navigator: navigatorSlice,
  },
})
