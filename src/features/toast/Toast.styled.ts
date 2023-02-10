import styled from 'styled-components'

import { Toast as ToastType } from '~/features/toast/toast.interface'

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-top: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
`

export const Toast = styled.div<{ type: ToastType['type'] }>`
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
