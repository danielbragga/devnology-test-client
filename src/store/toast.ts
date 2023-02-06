import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Toast {
  id: string
  message: string
  type: 'error' | 'success' | 'info'
}

export interface ToastsState {
  toasts: Toast[]
}

const initialState: ToastsState = {
  toasts: [],
}

const toastsSlice = createSlice({
  name: 'toasts',
  initialState,
  reducers: {
    showToast(state, action: PayloadAction<Toast>) {
      state.toasts.push(action.payload)
    },
    hideToast(state, action: PayloadAction<string>) {
      state.toasts = state.toasts.filter((toast) => toast.id !== action.payload)
    },
  },
})

export const { showToast, hideToast } = toastsSlice.actions

export default toastsSlice.reducer
