import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '~/app/store'
import { ToastProps } from '~/features/toast/toast.interface'
import { Toast, ToastContainer } from './Toast.styled'

const ToastComponent: React.FC<ToastProps> = ({ toasts }) => {
  return (
    <ToastContainer>
      {toasts.map((toast) => (
        <Toast key={toast.id} type={toast.type}>
          {toast.message}
        </Toast>
      ))}
    </ToastContainer>
  )
}

export const ToastWrapper: React.FC = () => {
  const toasts = useSelector((state: RootState) => state.toast.toasts)

  return <ToastComponent toasts={toasts} />
}
export default Toast
