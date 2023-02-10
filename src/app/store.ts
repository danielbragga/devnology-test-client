import {
  configureStore,
  combineReducers,
  createListenerMiddleware,
  Middleware,
  Action,
  addListener,
} from '@reduxjs/toolkit'
import loaderReducer from './loader'
import toastReducer from '../features/toast/toastSlice'
import { useDispatch } from 'react-redux'
import { addToastAutoHideListeners } from '../features/toast/toastSlice'
import type { TypedStartListening, TypedAddListener } from '@reduxjs/toolkit'
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type AppStartListening = TypedStartListening<RootState, AppDispatch>
export const useAppDispatch: () => AppDispatch = useDispatch
export const listenerMiddleware = createListenerMiddleware()
export const listenerMiddle = listenerMiddleware.middleware as Middleware<
  (action: Action<'specialAction'>) => number,
  RootState
>
export const startAppListening =
  listenerMiddleware.startListening as AppStartListening
export const addAppListener = addListener as TypedAddListener<
  RootState,
  AppDispatch
>

const rootReducer = combineReducers({
  loader: loaderReducer,
  toast: toastReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddle),
})

addToastAutoHideListeners(startAppListening)

export default store
