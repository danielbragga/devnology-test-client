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
      // const id = Date.now().toString()
      // state.toasts.push({ ...action.payload, id })
      state.toasts.push(action.payload)
    },
    hideToast(state, action: PayloadAction<string>) {
      state.toasts = state.toasts.filter((toast) => toast.id !== action.payload)
    },
  },
  /* A reducer that is called after the reducer for the action. */
  extraReducers: (builder) => {
    builder.addCase(toastsSlice.actions.showToast, (state, action) => {
      const { id } = action.payload
      setTimeout(() => {
        toastsSlice.actions.hideToast(id)
      }, 2500)
    })
  },
})

export const { showToast, hideToast } = toastsSlice.actions

export default toastsSlice.reducer
