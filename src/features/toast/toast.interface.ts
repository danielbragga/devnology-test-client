export interface Toast {
  id?: string
  message: string
  type: 'error' | 'success' | 'info'
}

export interface ToastProps {
  toasts: Toast[]
}
