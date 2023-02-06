import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LoaderState {
  loading: boolean
}

const initialState: LoaderState = {
  loading: false,
}

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { setLoading } = loaderSlice.actions
export default loaderSlice.reducer
