import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterReducer from './counter'
import loaderReducer from './loader'
import { CounterState } from './counter'
import { LoaderState } from './loader'
import toastReducer, { ToastsState } from './toast'

export interface RootState {
  counter: CounterState
  loader: LoaderState
  toast: ToastsState
}

const store = configureStore({
  reducer: combineReducers({
    counter: counterReducer,
    loader: loaderReducer,
    toast: toastReducer,
  }),
})

export default store
