import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterReducer from './counter'
import { CounterState } from './counter'

export interface RootState {
  counter: CounterState
}

const store = configureStore({
  reducer: combineReducers({
    counter: counterReducer,
  }),
})

export default store
