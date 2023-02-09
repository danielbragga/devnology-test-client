import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '~/store'

interface Toast {
  id: string
  message: string
  type: 'error' | 'success' | 'info'
}

interface ToastProps {
  toasts: Toast[]
}

const ToastContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-top: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
`

const Toast = styled.div<{ type: Toast['type'] }>`
  padding: 1rem;
  border-bottom: 1px solid #cccccc;
  background-color: ${(props) => {
    switch (props.type) {
      case 'success':
        return '#48ff00'
      case 'error':
        return '#ff0000'
      case 'info':
        return '#ffee00'
      default:
        return '#ffffff'
    }
  }};
`

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
