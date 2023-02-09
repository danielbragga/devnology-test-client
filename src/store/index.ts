import {
  configureStore,
  combineReducers,
  createListenerMiddleware,
  Middleware,
  Action,
  addListener,
} from '@reduxjs/toolkit'
import loaderReducer from './loader'
import toastReducer from './toast'
import { useDispatch } from 'react-redux'
import { addToastAutoHideListeners } from '../store/toast'
import type { TypedStartListening, TypedAddListener } from '@reduxjs/toolkit'
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

const rootReducer = combineReducers({
  loader: loaderReducer,
  toast: toastReducer,
})

// Define the type for the `startListening` function
export type AppStartListening = TypedStartListening<RootState, AppDispatch>

// Create the listener middleware
export const listenerMiddleware = createListenerMiddleware()

// Extract the middleware from the listenerMiddleware object
export const listenerMiddle = listenerMiddleware.middleware as Middleware<
  (action: Action<'specialAction'>) => number,
  RootState
>

// Extract the `startListening` function from the listenerMiddleware object
export const startAppListening =
  listenerMiddleware.startListening as AppStartListening

// Extract the `addListener` function from the listenerMiddleware object
export const addAppListener = addListener as TypedAddListener<
  RootState,
  AppDispatch
>

// Add listeners for feature 1
addToastAutoHideListeners(startAppListening)

// Configure the store with the root reducer and the listener middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddle),
})

export default store
