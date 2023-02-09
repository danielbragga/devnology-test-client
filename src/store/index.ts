import {
  configureStore,
  combineReducers,
  createListenerMiddleware,
  ListenerEffectAPI,
  ThunkDispatch,
} from '@reduxjs/toolkit'
import loaderReducer from './loader'
import { LoaderState } from './loader'
import toastReducer, { ToastsState } from './toast'
import { showToast, hideToast } from '../store/toast'
import Toast from '~/components/Toast/Toast'

export interface RootState {
  loader: LoaderState
  toast: ToastsState
}

const listenerMiddleware = createListenerMiddleware()

function getCurrentToasts(
  listenerAPI: ListenerEffectAPI<any, ThunkDispatch<any, any, any>, any>,
): Toast[] {
  const state = listenerAPI.getState()
  return state.toast.toasts
}

function hideToastAfterTimeout(
  listenerAPI: ListenerEffectAPI<any, ThunkDispatch<any, any, any>, any>,
  toast: Toast,
) {
  const { dispatch } = listenerAPI
  const { id } = toast

  setTimeout(() => {
    dispatch(hideToast(id as string))
  }, 2500)
}

listenerMiddleware.startListening({
  actionCreator: showToast,
  effect: async (action, listenerApi) => {
    const toasts = getCurrentToasts(listenerApi)
    for (const toast of toasts) {
      hideToastAfterTimeout(listenerApi, toast)
    }
  },
})

const store = configureStore({
  reducer: combineReducers({
    loader: loaderReducer,
    toast: toastReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})

export default store
