export interface Toast {
  id?: string
  message: string
  type: 'error' | 'success' | 'info'
}
