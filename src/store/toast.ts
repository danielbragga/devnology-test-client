import {
  createAction,
  createSlice,
  PayloadAction,
  current,
  createListenerMiddleware,
} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

interface Toast {
  id?: string
  message: string
  type: 'error' | 'success' | 'info'
}

export interface ToastsState {
  toasts: Toast[]
}

const initialState: ToastsState = {
  toasts: [],
}

export const toastsSlice = createSlice({
  name: 'toasts',
  initialState,
  reducers: {
    showToast(state, action: PayloadAction<Toast>) {
      const id = Date.now().toString()
      state.toasts.push({ ...action.payload, id })
    },
    hideToast(state, action: PayloadAction<string>) {
      state.toasts = state.toasts.filter((toast) => toast.id !== action.payload)
    },
  },
})

export const { showToast, hideToast } = toastsSlice.actions

export default toastsSlice.reducer
