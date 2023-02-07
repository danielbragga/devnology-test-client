import { configureStore, combineReducers } from '@reduxjs/toolkit'
import loaderReducer from './loader'
import { LoaderState } from './loader'
import toastReducer, { ToastsState } from './toast'

export interface RootState {
  loader: LoaderState
  toast: ToastsState
}

const store = configureStore({
  reducer: combineReducers({
    loader: loaderReducer,
    toast: toastReducer,
  }),
})

export default store
