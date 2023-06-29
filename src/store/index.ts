import { configureStore } from '@reduxjs/toolkit'

// Reducers
import rootReducers from './reducers'

const store = configureStore({
  reducer: rootReducers
})

export type RootState = ReturnType<typeof store.getState>

export default store
